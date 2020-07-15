/*
 * @Author: 147
 * @Date: 2020-07-15 09:38:43
 * @LastEditTime: 2020-07-15 10:14:45
 * @LastEditors: Please set LastEditors
 * @Description: server business
 * @FilePath: \node_web_server_blog\blog_one\app.js
 */ 
const serverHandle = (req,res)=>{
 //设置返回数据的格式 为 JSON
 res.setHeader('Content-type','application/json')
}
module.exports = serverHandle



//env:process.env.NODE_ENV
