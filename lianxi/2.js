// 初识服务器
// node 模块
// 加载HTTP模块
var http = require("http")
http.createServer(function(req,res){
    // 解决中文乱码
	res.writeHead(200,{"Content-type":"text/b;charset=utf8"})
	// res.end("success")
	res.end("我爱中国")
}).listen(3000,function(){
	console.log("挂起")
})
// .listen监听端口