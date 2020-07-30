/*
 * @Author: your name
 * @Date: 2020-07-29 16:08:07
 * @LastEditTime: 2020-07-30 15:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_web_server_blog\login_cookie_session_redis\cookie.js
 */ 
// 1.登录校验：如果没有登录，或者登录过期，需要重新登录

// 2.登录信息存储

// 3.cookie:
//  存储在浏览器的一段字符串，跨域不共享，格式如下：k1=v1;k2=v2
//  每次发送http请求，会将请求域的cookie一起发送给server,请求头的cookie字段
//  server可以修改cookie，通过响应头返回给浏览器
//  浏览器中也可以通过js修改cookie(但是有限制)，document.cookie()，没有参数获取cookit,有参数就是在已有的cookie值上添加（注意，不会被覆盖）
//  cookie做登录验证：每个接口处理逻辑加是否存在cookie的判断逻辑，没有就是没有登录，返回错误信息。登录接口处，设置cookie值并返回给浏览器。（可以设置过期时间）
//  path=/:这个域下的所有请求都起作用    HttpOnly：http请求下请作用

// 4.session
// cookie存在的问题：用户信息存在客户端不安全
// 在服务器端保存用户信息  cookie设置一个没有实际意义的不会泄露用户信息的字段，通过这个字段取到保存在服务器端的用户信息

// session存在的问题：session是js变量，存在node的进程内存中
// 进程的内存有限，访问量过大，内存报增
// 正式线上运行是多进程的，进程之间内存无法共享（操作系统会限制一个进程的最大内存，所以大部分时候线上运行是需要多个进程的)

//5.redis：内存数据库（mysql：硬盘数据库）
//web server 和redis是两个单独的服务，都是独立的，可扩展的（可扩展成集群）。
//redis特点：性能高，快速读取，操作频率快也没有大问题
//断电丢失，session数据存在redis可以不考虑这个问题，大不了重新登录。
//redis存储的数据量下，session数据本来就只有用户小部分信息，适用。

//6.为何网站数据不存在redis而是在mysql
//相对session数据而言，操作频率没有那么高，性能要求没那么高
//网站数据断电不能丢失
//数据量太大，内存成本太高