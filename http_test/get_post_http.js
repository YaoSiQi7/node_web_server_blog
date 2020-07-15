/*
 * @Author: your name
 * @Date: 2020-07-15 01:50:30
 * @LastEditTime: 2020-07-15 02:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_web_server_blog\http_test\get_post_http.js
 */ 
const http = require("http")
const querystring = require("querystring")
const server = http.createServer((req,res)=>{
 let method=req.method;
 let url = req.url;
 let resData={
   method,
   url,
 }
 if(method==="GET"){
   let query = querystring.parse(url.split('?')[1]);
   resData.query = query
   res.end(JSON.stringify(resData))
 }else if(method==="POST"){
   let reqData='';
   req.on("data",chunk=>{
     reqData += chunk.toString()
     console.log(reqData,120)
   })
   //resData.data=reqData 注意 如果放在这个位置，data值为空，因为data事件是异步的

   req.on("end",()=>{
     resData.data=reqData
     res.end(JSON.stringify(resData))
   })
 }
})
server.listen(8000)
console.log("server is running")