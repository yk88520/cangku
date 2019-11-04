//1定义路由器视图文件router.js
//2在router中定义三个路由视图
//3在03.js通过路径进行访问路由视图
var http=require("http")
var router=require("./static/router")
http.createServer((req,res)=>{
   switch(req.url){
       case "/":router.home(req,res);
       break;
       case "/about":router.about(req,res);
       break;
       case "/news":router.news(req,res);
       break;
   }
}).listen(3000)