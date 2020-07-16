/*
 * @Author: 147
 * @Date: 2020-07-15 09:38:43
 * @LastEditTime: 2020-07-16 03:26:30
 * @LastEditors: Please set LastEditors
 * @Description: server business
 * @FilePath: \node_web_server_blog\blog_one\app.js
 */ 
const HandleUserRouter = require("./bin/src/router/user")
const HandleBlogRouter = require("./bin/src/router/blog")
const serverHandle = (req,res)=>{
 //设置返回数据的格式 为 JSON
 res.setHeader('Content-type','application/json')
//  let resData = HandleBlogRouter(req,res) || HandleUserRouter(req,res) ;
 const blogData=HandleBlogRouter(req,res) 
 const userData= HandleUserRouter(req,res) 
 if(blogData){
   res.end(JSON.stringify(blogData))
   return
 }
 if(userData){
  res.end(JSON.stringify(userData))
  return
}
   res.writeHead(404,{"Content-Type":"text/plain"})
   res.write("404,Not Found\n")
   res.end()
}
module.exports = serverHandle



//env:process.env.NODE_ENV
