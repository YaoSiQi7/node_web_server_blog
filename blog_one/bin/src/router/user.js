/*
 * @Author: 147
 * @Date: 2020-07-16 01:42:53
 * @LastEditTime: 2020-07-28 18:06:49
 * @LastEditors: Please set LastEditors
 * @Description: router of user
 * @FilePath: \blog_one\bin\src\router\blog.js
 */
const { register, login } = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")

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
  if (method === "POST" && url === "/api/user/login") {
    const result = login(req.body.username, req.body.password)
    return result.then(loginData => {
      console.log(loginData)
      if (loginData.username) {
        return new SuccessModel(loginData)
      }
      return new ErrorModel()
    })
  }
}
module.exports = HandleUserRouter