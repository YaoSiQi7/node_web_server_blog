/*
 * @Author: your name
 * @Date: 2020-07-28 11:18:58
 * @LastEditTime: 2020-07-28 17:17:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_web_server_blog\blog_one\bin\src\db\mysql.js
 */ 
const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')
//创建连接对象
const con = mysql.createConnection(MYSQL_CONF)
//开始连接
con.connect()
//统一执行 sql 函数
function exec(sql) {
  //数据库执行sql的过程是异步的  创建promise对象
  const promise = new Promise((resolve,reject)=>{
    con.query(sql,(err,result)=>{
      if(err){
        reject(err)
        return
      }
      resolve(result)
    })
  })
  //返回promise对象
  return promise
}
module.exports={
  exec
}