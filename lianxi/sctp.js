var http=require("http")
var form=require("formidable")
var path=require("path")
var sd=require("silly-datetime")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/upload"){
        var fm=form.IncomingForm()
        //fields  文本域   files 文件域
        fm.uploadDir="./uploads"
        fm.parse(req,function(err,fields,files){
            var low=files.pic.path
            var extname=path.extname(files.pic.name)
            var time=sd.format(new Date(),"YYYYMMMDDHHmmss")
            var fanishon="./uploads/"+time+extname
            // console.log(fanishon)
            fs.rename(low,fanishon,(err)=>{
                if(err)throw err
            }) 
            res.end("success")
        })
    } 
}).listen(3000)