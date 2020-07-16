/*
 * @Author: 147
 * @Date: 2020-07-16 01:42:53
 * @LastEditTime: 2020-07-16 03:00:50
 * @LastEditors: Please set LastEditors
 * @Description: router of blog
 * @FilePath: \blog_one\bin\src\router\blog.js
 */ 
const HandleBlogRouter = (req,res)=>{
  const method = req.method;
  const url = req.url.split('?')[0]
  //获取博客列表
  if(method==="GET" && url==='/api/blog/list'){
    return{
      mag:"获取博客列表的接口"
    }
  }
  //新增博客
  if(method ==="POST" && url==="/api/blog/add"){
    return {
      mag:"新增博客"
    }
  }
  //删除博客
  if(method==="POST" && url==="/api/blog/del"){
    return {
      mag:"删除博客"
    }
  }
  //修改博客
  if(method==="POST" && url==="/api/blog/edit"){
    return {
      mag:"修改博客"
    }
  }
  //获取博客详情
  if(method==="GET" && url==="/api/blog/detail"){
    return {
      mag:"获取博客详情"
    }
  }
}

module.exports = HandleBlogRouter