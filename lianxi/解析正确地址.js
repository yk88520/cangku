var http=require("http")
var url=require("url")
http.createServer(function(req,res){
res.writeHead(200,{"Content-type":"text/b;charset=utf8"})
var obj=url.resolve("http://localhost:3000","/new")
console.log(obj)
res.end()
}).listen(3000)