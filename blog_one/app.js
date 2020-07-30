/*
 * @Author: 147
 * @Date: 2020-07-15 09:38:43
 * @LastEditTime: 2020-07-30 13:40:57
 * @LastEditors: Please set LastEditors
 * @Description: server business
 * @FilePath: \node_web_server_blog\blog_one\app.js
 */
const querystring = require("querystring")
const HandleUserRouter = require("./bin/src/router/user")
const HandleBlogRouter = require("./bin/src/router/blog")
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}
//session数据
const SESSION_DATA = {}
//处理post请求
const getPostData = function (req) {
  const promise = new Promise((resolve, reject) => {
    //get请求 
    if (req.method !== "POST") {
      resolve({})
      return
    }
    //发送的数据不是json格式
    if (req.headers["content-type"] !== "application/json") {
      resolve({})
      return
    }

    let reqData = "";
    req.on("data", trunk => {
      reqData += trunk.toString()
    })                                                                                                                                   
    req.on("end", () => {
      if (!reqData) {
        resolve({})
        return
      }
      resolve(JSON.parse(reqData))
    })
  })
  return promise
}
const serverHandle = (req, res) => {
  //设置返回数据的格式 为 JSON
  res.setHeader('Content-type', 'application/json')
  //解析路径
  const url = req.url;
  req.url = url.split("?")[0]
  //处理post data
  getPostData(req).then(postData => {
    req.body = postData
    //解析query
    req.query = querystring.parse(url.split('?')[1])
    //解析cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie || ""
    cookieStr.split(";").forEach(item => {
      if (!item) {
        return
      }
      const arr = item.split("=")
      let key = arr[0].trim()
      let value = arr[1].trim()
      req.cookie[key] = value
    });
    //解析session
    let needSetCookie = false
    let userId = req.cookie.userid
    if (userId) {
      if (!SESSION_DATA[userId]) {
        SESSION_DATA[userId] = {}
      } 
    }else {
      needSetCookie = true
      userId = `${Date.now()}_${Math.random()}`
      SESSION_DATA[userId] = {}
    }
    req.session = SESSION_DATA[userId]
    //处理blog路由
    const blogResult = HandleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        if (needSetCookie) {
          res.setHeader('Set-Cookie', `userid=${userId};path=/;expires=${getCookieExpires()}`)
        }
        res.end(JSON.stringify(blogData))
      })
      return
    }
    //处理user路由
    const userResult = HandleUserRouter(req, res)
    if (userResult) {
      userResult.then(userData => {
        if (needSetCookie) {
          res.setHeader('Set-Cookie', `userid=${userId};path=/;expires=${getCookieExpires()}`)
        }
        res.end(JSON.stringify(userData))
      })
      return
    }
    //404
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.write("404,Not Found\n")
    res.end()
  })

}
module.exports = serverHandle



//env:process.env.NODE_ENV
