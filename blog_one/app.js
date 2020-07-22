/*
 * @Author: 147
 * @Date: 2020-07-15 09:38:43
 * @LastEditTime: 2020-07-16 03:26:30
 * @LastEditors: Please set LastEditors
 * @Description: server business
 * @FilePath: \node_web_server_blog\blog_one\app.js
 */
const querystring = require("querystring")
const HandleUserRouter = require("./bin/src/router/user")
const HandleBlogRouter = require("./bin/src/router/blog")
//处理post请求
const getPostData = function (req) {
  const promise = new Promise((resolve, reject) => {
    //get请求 
    if (req.method !== "POST") {
      resolve({})
      return
    }
    //发送的数据不是json格式
    if (req.heardes["Content-type"] !== "application/json") {
      resolve({})
      return
    }
    let reqData = "";
    req.on("data", chunk => {
      reqData += chunk.toString()
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
    //处理blog路由
    const blogData = HandleBlogRouter(req, res)
    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }
    //处理user路由
    const userData = HandleUserRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
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
