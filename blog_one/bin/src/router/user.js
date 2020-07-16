/*
 * @Author: 147
 * @Date: 2020-07-16 01:42:53
 * @LastEditTime: 2020-07-16 02:52:10
 * @LastEditors: Please set LastEditors
 * @Description: router of user
 * @FilePath: \blog_one\bin\src\router\blog.js
 */ 
const HandleUserRouter = (req,res)=>{
  const method = req.method;
  const url = req.url.split('?')[0]
  //注册
  if(method==="POST" && url==="/api/user/register"){
    return {
      mag:"注册"
    }
  }
  //登录
  if(method==="POST" && url==="/api/user/login"){
    return {
      mag:"登录"
    }
  }
}
module.exports=HandleUserRouter