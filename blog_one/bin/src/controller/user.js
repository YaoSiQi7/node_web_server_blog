const login =(userName,password)=>{
    if(userName==="zhangsan" && password==="123"){
        return true
    }else{
        return false
    }
}
const register =(postData = {})=>{
     if(userName && password){
        return true
    }else{
        return false
    }
}
module.exports={
    login, 
    register
}