var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
      //普通获取数据的方式
    // fs.readFile("./1.txt",(err.data)=>{
    //     console.log(data)
    //     res.end(data)
    // })
    //pipe   创建文件读取流   通过流的方式去获取数据
   var fsStream=fs.createReadStream("./1.txt")
   fsStream.pipe(res)
   //data end
}).listen(3000)