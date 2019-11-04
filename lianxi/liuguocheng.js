//createReadStream createWriteSteam
//事件  ddata  end
var fs=require("fs")
var readStream=fs.createReadStream("./1.txt")
var length=0
//探究数据流转的过程
readStream.on("data",(chunks)=>{
    length++
    console.log(chunks)
})
readStream.on("end",()=>{
    console.log(length)
})