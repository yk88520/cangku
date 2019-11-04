//初始服务器
//node  模块
//加载http模块
var http = require("http")
//创建服务器
var server = http.createServer(function(req,res){
    //req request 请求  认识 response 响应
    res.end("hello node")
    //结束响应
})
server.listen(3000,function(){
    console.log("服务器已挂失起来")
})