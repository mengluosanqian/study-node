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
// 使用静态资源
// app.use(express.static('pubilc'))
// 如果要使用多个静态资源目录，多次调用 express.static 中间件函数
// 访问静态资源文件时，express.static 中间件函数会根据目录的添加顺序查找所需的文件。
// 现在，你就可以通过带有 /static 前缀地址来访问 public 目录中的文件了。
app.use('/static', express.static('pubilc'))
app.use('/img', express.static('../images'))
// 4.监听端口启动服务
app.listen(8000, () => {
  console.log('服务已启动')
})
// 5.浏览器查看 127.0.0.1:8000

// 使用nodemon 自动重启服务  npm install -g nodemon

// 为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，请使用 Express 中的 express.static 内置中间件函数。
// 此函数特征如下：
// express.static(root, [options])
