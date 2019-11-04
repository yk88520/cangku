var express = require('express'),
    app = express(),
    // cookie中间件
    cookieParser = require('cookie-parser'),
    path = require('path'),
    static = path.resolve(__dirname, 'public');

app.use(cookieParser()) // 让express和cookie建立起联系 深层签名             app.use(cookieParser('securt'))
app.use(express.static(static));

app.get('/', (req, res) => {
    res.send({
        'data': 'login中的cookie为:' + req.cookies
    })
})
// 设置setcookie
app.get('/login', (req, res) => {
    var obj = req.query.username;
    // req.cookies = obj;

    // 设置cookie maxAge 过期时长  httpOnly 只允许在服务端修改cookie值          signed 是否生成签名  domain 域名  secure
    res.cookie('username',obj,{maxAge:90000,httpOnly:true})
    res.send({
        'data': obj
    })
})
// 获取cookie
app.get('list',(req,res) => {
    // 获取cookie
    res.send()
})
app.listen(3000)
/*
1.什么是cookie？
    cookie是存在于访问者计算机中的一个变量，便于访问同一域名或服务器存储的用户信息
2.cookie的优缺点？
    优点：
        协助服务器承载压力
        存在过期时间，不便于攻击者进行攻击
    缺点：
        长度限制
        安全性比较低
        存储量小 4kb
3.cookie的存储大小？4kb
4.cookie的安全性？如何解决?
    相对比较低(利用深层签名)
5.cookie的特点？
    cookie保存在浏览器本地
    cookie默认不加密，用户可以直接看到
    cookie支持被删除
    cookie便于用于攻击
    cookie易被篡改
*/