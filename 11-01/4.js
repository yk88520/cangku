var express=require("express")
var app=express()
//路由中间件
var router=express.Router()
app.use(router)
//  验证码接口
router.get("/",(req,res)=>{
    res.send("router")
})
router.get("/code",(req,res)=>{
    //随机数  math.randow 0-1
    var randomNum=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str='abcdefghigklmn123456789'
    var result=""
    for(var i=0;i<4;i++){
      result+=str[randomNum(0,str.length-1)]
    }
    res.send({"success":"请求成功","data":result})
})
app.listen(3000)