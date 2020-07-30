/*
 * @Author: 147
 * @Date: 2020-07-16 01:42:53
 * @LastEditTime: 2020-07-29 17:34:59
 * @LastEditors: Please set LastEditors
 * @Description: router of user
 * @FilePath: \blog_one\bin\src\router\blog.js
 */
const { register, login } = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")
const getCookieExpires=()=>{
  const d = new Date()
  d.setTime(d.getTime()+(24*60*60*1000))
  return d.toGMTString()
}
const HandleUserRouter = (req, res) => {
  const method = req.method;
  const url = req.url.split('?')[0]
  //注册
  if(method==="POST" && url==="/api/user/register"){
    const result = register(req.body)
    return result.then(registerData=>{
     return new SuccessModel(registerData)
    })
  }
  //登录
  if (method === "GET" && url === "/api/user/login") {
    const result = login(req.query.username, req.query.password)
    // const result = login(req.body.username, req.body.password)
    return result.then(loginData => {
      console.log(loginData)
      if (loginData.username) {
        //设置cookie
        // res.setHeader('Set-Cookie',`userid=${loginData.id};path=/;expires=${getCookieExpires()}`)
        //设置session
        req.session.username = loginData.username
        req.session.realname = loginData.realname
        return new SuccessModel(loginData)
      }
      return new ErrorModel()
    })
  }
  //cookie测试接口
  if (method === "GET" && url === "/api/user/test") {
    console.log(req.session)
    if(req.session.username){
      return Promise.resolve(new SuccessModel({
        username:req.session.username
      }))
    }
    return Promise.resolve(new ErrorModel('未登录'))

  }
}
module.exports = HandleUserRouter