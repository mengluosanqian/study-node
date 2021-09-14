// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('HELLO EXPRESS')
})
app.all('/axios-server', (request, response) => {
  /// app.post('/server',(request,response) => {
  // 设置响应头,允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: '张三'
  }
  let str = JSON.stringify(data)
  // 设置响应体
  response.send(str) // 只接受字符串类型
})
// all可以接收任意类型的请求
app.all('/server', (request, response) => {
  // app.post('/server',(request,response) => {
  // 设置响应头,允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: '张三'
  }
  let str = JSON.stringify(data)
  // 设置响应体
  response.send(str) // 只接受字符串类型
})

app.get('/ie', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send('HELLO IE - 2')
})
app.get('/delay', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    response.send('HELLO IE - 2')
  }, 3000)
})

app.all('/cors-server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Method', '*')
  response.send('hello') // 只接受字符串类型
})

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log('服务已启动')
})
// 5.浏览器查看 127.0.0.1:8000

// post 请求
