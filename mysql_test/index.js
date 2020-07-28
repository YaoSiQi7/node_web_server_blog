/*
 * @Author: your name
 * @Date: 2020-07-28 09:57:45
 * @LastEditTime: 2020-07-28 10:30:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_web_server_blog\mysql_test\index.js
 */ 
const mysql = require('mysql')
const con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"123456",
  port:"3306",
  database:"myblog"
})
//连接
con.connect();
//执行sql语句
const sql = "select * from  users;"
con.query(sql,(err,rusult)=>{
 if(err){
   console.log(err)
   return
 }
 console.log(rusult)
})
con.end()