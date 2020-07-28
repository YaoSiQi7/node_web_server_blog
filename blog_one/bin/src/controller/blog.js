/*
 * @Author: your name
 * @Date: 2020-07-28 09:38:12
 * @LastEditTime: 2020-07-28 17:25:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_web_server_blog\blog_one\bin\src\controller\blog.js
 */
const { exec } = require('../db/mysql')
//获取博客列表
const getList = (author, keyword) => {
    let sql = `select * from blog where 1=1 `
    if (author) {
        sql += `and author='${author}'`
    }
    if (keyword) {
        sql += `and title like '%${keyword}'`
    }
    sql += `order by createdtime desc`
    //exec函数返回的是一个promise 对象
    // 返回 exec函数返回的promise 对象
    return exec(sql).then(data => {
        return data
    })
}
//获取博客详情
const getBlogDetail = (id) => {
    const sql = `select * from blog where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}
//新建博客
const newBlog = (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const createdtime = Date.now()
    const author = blogData.author
    const sql = `insert into blog (title,content,createdtime,author) 
                values('${title}','${content}','${createdtime}','${author}')`
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}
//更新博客
const updataBlog = (id, blogData = {}) => {
    const title=blogData.title
    const content=blogData.content
    const sql = `update blog set title='${title}',content='${content}' where id=${id}`
    return exec(sql).then(updateData=>{
     if(updateData.affectedRows>0){
         return true
     }
     return false
    })
}
//删除博客
const DelBlog = (id,author) => {
    const sql = `delete from blog where id=${id} and author='${author}'`
    return exec(sql).then(delData=>{
        if(delData.affectedRows>0){
            return true
        }
        return false
    })
}
module.exports = {
    getList,
    getBlogDetail,
    newBlog,
    updataBlog,
    DelBlog
}