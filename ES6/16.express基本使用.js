// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (request, response) => {
// 设置响应
  response.send('HELLO EXPRESS')
})
// 4.监听端口启动服务
app.listen(8000, () => {
  console.log('服务已启动')
})
// 5.浏览器查看 127.0.0.1:8000

// 使用nodemon 自动重启服务  npm install -g nodemon
