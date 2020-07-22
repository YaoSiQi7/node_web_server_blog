/*
 * @Author: 147
 * @Date: 2020-07-16 01:42:53
 * @LastEditTime: 2020-07-16 02:52:10
 * @LastEditors: Please set LastEditors
 * @Description: router of user
 * @FilePath: \blog_one\bin\src\router\blog.js
 */ 
const {register,login} = require("../controller/user")
const {SuccessModel,ErrorModel} = require("../model/resModel")

const HandleUserRouter = (req,res)=>{
  const method = req.method;
  const url = req.url.split('?')[0]
  //注册
  if(method==="POST" && url==="/api/user/register"){
    const data = register(req.body)
    const data = login(req.body.userName,req.body.password)
    if(data){
      return new SuccessModel("注册成功")
    }else{
      return new ErrorModel("注册失败")
    }
  }
  //登录
  if(method==="POST" && url==="/api/user/login"){
    const data = login(req.body.userName,req.body.password)
    if(data){
      return new SuccessModel("登录成功")
    }else{
      return new ErrorModel("登录失败")
    }

  }
}
module.exports=HandleUserRouter