/*
 * @Author: your name
 * @Date: 2020-07-28 09:38:12
 * @LastEditTime: 2020-07-28 18:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_web_server_blog\blog_one\bin\src\controller\user.js
 */
const { exec } = require('../db/mysql')
//登录
const login = (username, password) => {
    const sql = `select username,realname,id from users where username='${username}' and password='${password}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}
//注册
const register = (postData = {}) => {
    let username = postData.username
    let realname = postData.realname
    let password = postData.password
    const sql = `insert into users (username,realname,password) values ('${username}','${realname}','${password}');`
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}
module.exports = {
    login,
    register
}