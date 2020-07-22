/*
 * @Author: 147
 * @Date: 2020-07-16 01:42:53
 * @LastEditTime: 2020-07-16 03:00:50
 * @LastEditors: Please set LastEditors
 * @Description: router of blog
 * @FilePath: \blog_one\bin\src\router\blog.js
 */ 
const {
  getList,
  getBlogDetail,
  newBlog,
  updataBlog,
  DelBlog} = require("../controller/blog")
const {SuccessModel,ErrorModel} = require("../model/resModel")
const HandleBlogRouter = (req,res)=>{
  const method = req.method;
  //获取博客列表
  if(method==="GET" && req.url==='/api/blog/list'){
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author,keyword)
    return new SuccessModel(listData)
  }
  //新增博客
  if(method ==="POST" && req.url==="/api/blog/add"){
    const data = newBlog(req.body)
    return new SuccessModel(data)
  }
  //删除博客
  if(method==="POST" && req.url==="/api/blog/del"){
    const id = req.body.id
    const data = DelBlog(id)
    if(data){
      return new SuccessModel("删除成功")
    }else{
      return new ErrorModel("删除 失败")
    }
  }
  //修改博客
  if(method==="POST" && req.url==="/api/blog/edit"){
    let blogData = JSON.parse(JSON.stringify(req.body))
    const id = req.body.id
    delete blogData.id
    const data = updataBlog(id,blogData)
    if(data){
      return new SuccessModel("更新成功")
    }else{
      return new ErrorModel("更新失败")
    }
  }
  //获取博客详情
  if(method==="GET" && req.url==="/api/blog/detail"){
    const id = req.query.id || '';
    const blogDetail = getBlogDetail (id)
    return new SuccessModel(blogDetail)
  }
}

module.exports = HandleBlogRouter