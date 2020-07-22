//获取博客列表
const getList = (auther, keyword) => {
    return [
        {
            id: "1",
            title: "A",
            content: "111111",
            createTime: "1595251447706",
            author: "qiqi"
        },
        {
            id: "2",
            title: "B",
            content: "222222",
            createTime: "1595251467571",
            author: "ayu"
        }
    ]
}
//获取博客详情
const getBlogDetail = (id) => {
    return {
        id: "1",
        title: "A",
        content: "111111",
        createTime: "1595251447706",
        author: "qiqi"
    }
}
//新建博客
const newBlog = (blogData={})=>{
    return {
        id:3
    }
}
//更新博客
const updataBlog = (id,blogData={})=>{
  if(!id){
      return false
  }
  return true
}
//删除博客
const DelBlog = (id)=>{
    if(!id){
        return false
    }
    return true
  }
module.exports = {
    getList,
    getBlogDetail,
    newBlog,
    updataBlog,
    DelBlog
}