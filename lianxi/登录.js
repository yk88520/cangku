var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    var obj=url.parse(req.url,true).query
    res.end("接收的password是："+obj.password)
}).listen(3000)