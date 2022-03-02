### SPA
#### 对SPA的理解
spa仅在web页面初始化加载相应的HTML、JavaScript和CSS，一旦页面加载完成，SPA不会因为用户的操作而进行页面的重新加载或跳转；
取而代之的是利用机制实现HTML内容的变换，UI与用户的交互，避免页面的重新加载。

#### SPA优点
1. 用户体验好、快、内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染
2. SPA相对于MPA，对服务器的压力相对较小
3. 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理

#### SPA缺点
1. 初次加载耗时多，为实现单页web应用功能及显示效果，需要在加载页面的时候将JavaScript、css统一加载，部分页面按需加载
2. 前进后退路由管理：由于单页应用在一个页面显示所有的内容，所以不能使用浏览器的前进后退功能，所有页面切换需要自己建立堆栈管理
3. SEO难度较大，由于所有的内容都在一个页面中动态替换显示，所以在SEO上有着天然的弱势

### 首屏加载白屏
#### 首屏加载白屏产生原因
1. 首先是html，也就是FP阶段
   - FP（First Paint ，“首次绘制”）是时间线上的第一个时间点，他代表浏览器第一次向屏幕传输像素的时间，也就是页面在屏幕上首次发生视觉变化的时间
   - FP不包含默认背景绘制，但包含非默认的背景绘制

2. 然后是静态资源css、js，之后解析js，生成HTML，也就是FCP阶段，css、js资源加载完成，进行首次的内容绘制
   - FCP（First Contentful Paint，“首次内容绘制”），浏览器第一次向屏幕绘制内容
   - 只有首次绘制文本、图片（包含背景图）、非白色的canvas或svg时才算FCP
   - FP是当浏览器开始绘制内容到屏幕上的时候，只要在视觉上开始发生变化，无论是什么内容触发的视觉变化，在这一刻，这个时间点，叫做FP。相比之下，FCP指的是浏览器首次绘制来自DOM的内容。例如：文本，图片，SVG，canvas元素等，这个时间点叫FCP。

3. ajax请求数据后，首次有效绘制，即FMP，就是页面加载的差不多了，但是可能图片还没加载出来
   - FMP（First Meaningful Paint，“首次有效绘制”），页面的主要内容开始出现在屏幕上的时间点

4. 从FP到FMP这个过程全是白屏

#### 解决方法
1. 预渲染
   将路由模式改为history，再安装prerender-spa-plugin
2. 同构
   - 同构渲染，就是一套代码多端使用
   - 现在有一些框架，Next，Nuxt，类似于渲染就是vue ->json ->vue-server-renderer ->html
3. SSR
   - 服务端渲染也可以解决首屏加载慢这个问题，因为服务端会把所有数据全部渲染完成再返回给客户端
   - ssr =>请求->node->解析 ->吐回给客户端(带请求数据)
   - 但是有一个大问题，重要的是node层，高并发的解决
4. 路由懒加载
   - 通过箭头函数实现路由懒加载
5. quicklink
   - quicklink就是在浏览器空闲的时候去指定需要加载的数据
   - 预加载对应的英文是 prefetch。提到 prefetch 自然会想到使用浏览器的 Resource Hints，通过提示浏览器做一些“预操作”（例如 DNS 解析、资源下载等）来加快后续的访问。
```js
const link = document.createElement(`link`);
link.rel = `prefetch`;
link.href = url;
document.head.appendChild(link);
```
6. 使用Gzip压缩
    - 使用Gzip压缩，减少文件体积,加快首屏页面打开速度
    - 前提是服务器那边得开启gzip
```js
// 修改vue.config.js
const CompressionPlugin = require("compression-webpack-plugin")
​module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /.js$|.html$|.css$|.jpg$|.jpeg$|.png/, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
            deleteOriginalAssets: false, // 是否删除原文件
            minRatio: 0.8
          })
        ]
      }
    }
  }
}
```
7. 外链CSS,js文件
   - 很多时候我们在main.js中直接import一些ui库或者css文件啥的，以后可以在index.html，通过script外链引入，这样就不会通过我们的webpack打包
8. webpack entry
   - 这个就是将单页改成多页应用,比如一些组件中，vue.js vue-router等插件已经在某个页面使用了，然后给它缓存起来，下次就无需加载
9. 骨架屏
    - 骨架屏就是在进入项目的FP阶段，给它来一个类似轮廓的东西，当我们的页面加载完成之后就消失
10. loading
    - 首页加一个loading或许是最原始的方法了，在index.html里加一个loading css效果，当页面加载完成消失
11. 使用CDN资源
12. dns解析优化
   - dns缓存优化
   - dns预加载策略
   - 稳定可靠的dns服务器
13. 浏览器下载、解析、渲染页面优化
   - 尽可能的精简HTML代码和结构
   - 尽可能的优化css文件和结构
   - 合理的放置js代码，尽量不要使用内联的js代码