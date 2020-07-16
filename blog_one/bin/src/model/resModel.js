/*
 * @Author: 147
 * @Date: 2020-07-16 02:53:40
 * @LastEditTime: 2020-07-16 03:00:10
 * @LastEditors: Please set LastEditors
 * @Description: response model
 * @FilePath: \blog_one\bin\src\model\resModel.js
 */ 
class BaseModel {
  constructor(data,msg){
    if(typeof data ==="string"){
      this.msg=data
      data=null
      msg=null
    }
    if(mag){
      this.msg=msg
    }
    if(data){
      this.data=data
    }
  }
}
class SuccessModel extends BaseModel{
  constructor(data,mag){
    super(data,msg)
    this.code = 0
  }
}
class ErrorModel extends BaseModel{
  constructor(data,msg){
    super(data,msg)
    this.code = -1
  }
}
module.exports={
  SuccessModel,
  ErrorModel
}