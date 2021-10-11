const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

// ctx 上下文 context,包含了request 和 response等信息
// 配置路由
router.get('/', async (ctx) => {
  ctx.body = '首页' // 返回数据 相当于： 原生里面的res.writeHead() res.end()
}).get('/news', async (ctx) => {
  ctx.body = '页面内容'
})
// 中间件

// app.use(async (ctx) => {
//   ctx.body = 'koa test111'
// })

// 启动路由
app
  .use(router.routes()) // 启动路由
  .use(router.allowedMethods()) // 可以配置也可以不配置，在当所有路由中间件最后调用，此时根据ctx.status设置response响应头
app.listen(3000)
