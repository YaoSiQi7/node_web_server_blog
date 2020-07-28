/*
 * @Author: 147
 * @Date: 2020-07-16 01:42:53
 * @LastEditTime: 2020-07-28 17:27:58
 * @LastEditors: Please set LastEditors
 * @Description: router of blog
 * @FilePath: \blog_one\bin\src\router\blog.js
 */
const {
  getList,
  getBlogDetail,
  newBlog,
  updataBlog,
  DelBlog } = require("../controller/blog")
const { SuccessModel, ErrorModel } = require("../model/resModel")
const HandleBlogRouter = (req, res) => {
  const method = req.method;
  //获取博客列表
  if (method === "GET" && req.url === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    //result是一个promise对象
    const result = getList(author, keyword)
    return result.then((data => {
      return new SuccessModel(data)
    }))
  }
  //新增博客
  if (method === "POST" && req.url === "/api/blog/add") {
    req.body.author = '77'
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  //删除博客
  if (method === "POST" && req.url === "/api/blog/del") {
    const id = req.body.id
    const author = '77'
    const result = DelBlog(id,author)
    return result.then(data=>{
      if(data){
        return new SuccessModel("删除成功")
      }else {
        return new ErrorModel("删除失败")
      }
    })
  }
  //修改博客
  if (method === "POST" && req.url === "/api/blog/edit") {
    const blogData = JSON.parse(JSON.stringify(req.body))
    const id = req.body.id
    const rusult = updataBlog(id, blogData)
    return rusult.then(data => {
      if (data) {
        return new SuccessModel('修改成功')
      } else {
        return new ErrorModel('修改失败')
      }
    })
  }
  //获取博客详情
  if (method === "GET" && req.url === "/api/blog/detail") {
    const id = req.query.id || '';
    const result = getBlogDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
}

module.exports = HandleBlogRouter