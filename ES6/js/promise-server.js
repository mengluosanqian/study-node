// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()
app.all('/cors-server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Method', '*')
  response.send('hello') // 只接受字符串类型
})
app.listen(8000, () => {
  console.log('服务已启动')
})
