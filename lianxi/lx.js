//流的类型 四种{
   // 1 readable stream 可读流
  //  2wirteable stream  可写流
  //  3duplex  双工流（可读可写）
  //  4Transform  转换流
   // 数据压缩 zlib
   var fs=require("fs")
   //压缩模块 zlib
   var zlib=require("zlib")
   var readStream=fs.createReadStream("./1.txt")
   var writeStream=fs.createWriteStream("./1.txt.gz")
// 流支持链式操作  zlib createzip()创建压缩包
readStream.pipe(zlib.createGzip()).pipe(writeStream)