var  fs=require("fs")
var http=require("http")
http.createServer((req,res)=>{
     //读文件     异步读取
//   fs.readFile("./1.txt",(err,data)=>{
//       res.end(data)
//   })
  //写文件
// fs.writeFile("./1.txt","我爱祖国",(err)=>{
//     if(err){
//         throw err
//     }
//     res.writeHead(200,{"Content-type":"text/b;charset=utf8"})
//     res.end(写入成功)
// })
   //创建目录
// fs.mkdir("./aa",(err)=>{
//     if(err){
//         throw err
//     }
//     res.end("success")
// })
   //创建文件
//    fs.writeFile("./aa/2.txt","newcontent",(err)=>{
//        if(err){
//            throw err
//        }
//        res.end("success")
//    })
   //删除文件
//    fs.unlink("./aa/2.txt",(err)=>{
//     if(err){
//         throw err
//     }
//     res.end("success")
// })
   //删除目录
//    fs.rmdir("./aa",(err)=>{
//     if(err){
//         throw err
//     }
//     res.end("success")
// })
   //判断文件状态
//    fs.stat("./1.txt",(err,stats)=>{
//        console.log(stats.isFile)
//        res.end("22")
//    })
   //改名称
//        fs.rename("./1.txt", "./2.txt", (err) => {
//             if (err) {
//                 throw err
//             }
//             res.end("修改成功")
//         })
}).listen(3000)