//监控日志  readline
var fs=require("fs")
//监听日志
var readline=require("readline") 
var readStream=fs.createReadStream("./1.txt")
//data end  line监听日志事件
//data监听输入数据   end 完成数据读取
var rl=readline.createInterface({
    //监听输入数据
    input:readStream
})
rl.on("line",(lineData)=>{
    console.log(lineData)
    console.log(new Date()+"linenum执行")
})
rl.on("close",()=>{
    console.log("line监听数据完毕")
})