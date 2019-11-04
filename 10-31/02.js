
//接受get传输的数据
var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("默认请求")
})
app.get("/list",(req,res)=>{
    console.log("接受到的参数:"+req.query.username)
    res.send({"data":req.query})
})
app.get("/getid",(req,res)=>{
    console.log(req.params.id)
    res.send({"data":"接受的id为"+req.params.id})
})
app.listen(3000)