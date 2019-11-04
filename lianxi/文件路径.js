//获取文件路径
var path=require("path")
//console.log(path.resolve('c:/Users/Rasin/Desktop/six/day01',"./aa")) //解析成正确的路径
//console.log(path.normalize('c:/Users/Rasin/Desktop/six/day01'))   //规范路径的输出
//console.log(path.isAbsolute('c:/Users/Rasin/Desktop/six/day01')) //检查是否绝对路径
//console.log(path.join("/aa","/sss","/dd","//bb"))    //按照特定的标点分割符进行路径的拼接从而形成正确的路径
// console.log(path.dirname('c:/Users/Rasin/Desktop/six/day01'))   //返回目录名称
// console.log(path.basename('c:/Users/Rasin/Desktop/six/day01'))  //返回当前目录
console.log(path.extname('c:/Users/Rasin/Desktop/six/day01/1.html'))  //获取文件后缀名