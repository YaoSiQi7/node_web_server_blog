//环境参数
const env = process.env.NODE_ENV
//配置
let MYSQL_CONF
if (env === 'dev') { //开发环境
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "123456",
    port: "3306",
    database: "myblog"
  }
}
if (env === "production") { //生产环境
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "123456",
    port: "3306",
    database: "myblog"
  }
}
module.exports={
  MYSQL_CONF
}