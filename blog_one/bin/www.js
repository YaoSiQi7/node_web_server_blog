/*
 * @Author: 147
 * @Date: 2020-07-15 09:39:00
 * @LastEditTime: 2020-07-15 09:44:48
 * @LastEditors: Please set LastEditors
 * @Description: server setting
 * @FilePath: \node_web_server_blog\blog_one\bin\www.js
 */ 
const http = require("http")
const PORT = 8000
const serverHandle = require("../app")
const server = http.createServer(serverHandle)
server.listen(PORT)
