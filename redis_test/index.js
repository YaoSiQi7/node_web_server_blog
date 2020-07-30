/*
 * @Author: your name
 * @Date: 2020-07-30 15:11:41
 * @LastEditTime: 2020-07-30 16:10:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_web_server_blog\redis_test\index.js
 */ 
const redis = require('redis')
//创建客户端
// const pwd = '123456'
// const opts = {
// 	auth_pass: pwd,
// }
const redisClient = redis.createClient(6379,'127.0.0.1')

redisClient.on('error',err=>{
  console.log(err)
})
//测试
redisClient.on('connect',function () {
  console.log('redis连接成功...')
});
redisClient.set('myname',"147",redis.print)
// redisClient.get('myname',(err,val)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('val',val)

//   //退出
//   redisClient.quit()
// })