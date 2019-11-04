var express=require("express")
var app=express()
//设置模板引擎
// app.set("view engine","html")
app.engine("html",require("express-art-template"))
app.get("/",(req,res)=>{
    var list=["tom","jack","rose"]
    res.render("home.html",{list:list})
})
app.listen(3000)