var express=require("express")
//console.log(express)
var app=express()
//get  指代get请求
app.get("/",(req,res)=>{
    console.log(arguments)
    res.send({
        'sucess':'ok',
        'data':[{
            'name':'Abing',
            'age' : 20
        }]
    })
})
app.post("/data",(req,res)=>{
    console.log(arguments)
    res.send({
        'sucess':'ok',
        'data':[{
            'name':'Abing',
            'age':20
        }]
    })
})
//all代表所有
// 什么情况下会使用app.all？控制全局的功能需要使用all
app.all('/',(req,res)=>{
    res.send({'data':'数据请求'})
})
app.listen(3000)