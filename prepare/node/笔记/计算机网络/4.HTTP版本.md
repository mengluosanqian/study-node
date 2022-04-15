## HTTP补充
### Accept字段
Accept字段主要由四部分组成：`数据格式、压缩方式、支持语言和字符集`
#### 数据格式
对于发送方来说，报文 body 部分的数据类型，这些类型体现在Content-Type这个字段。接收端想要收到特定类型的数据，也可以用Accept字段。
这两个字段可以分为下面几类：
1. text： text/html, text/plain, text/css 等
2. image: image/gif, image/jpeg, image/png 等
3. audio/video: audio/mpeg, video/mp4 等
4. application: application/json, application/javascript, application/pdf, application/octet-stream

#### 压缩方式
当然一般这些数据都是会进行编码压缩的，采取什么样的压缩方式就体现在了发送方的Content-Encoding字段上， 同样的，接收什么样的压缩方式体现在了接受方的Accept-Encoding字段上。这个字段的取值有下面几种：
1. gzip: 当今最流行的压缩格式
2. deflate: 另外一种著名的压缩格式
3. br: 一种专门为 HTTP 发明的压缩算法

#### 支持语言
对于发送方而言，还有一个Content-Language字段，在需要实现国际化的方案当中，可以用来指定支持的语言，在接受方对应的字段为Accept-Language

#### 字符集
最后是一个比较特殊的字段, 在接收端对应为Accept-Charset，指定可以接受的字符集，而在发送端并没有对应的Content-Charset, 而是直接放在了Content-Type中，以charset属性指定
HTTP请求处理表单数据的提交，体现在两种不同的Content-Type取值:application/x-www-form-urlencoded
multipart/form-data
### HTTP版本
HTTP传输是基于请求-应答的模式进行的，报文必须是一发一收，里面的任务被放在一个任务队列中串行执行，一旦队首的请求处理太慢，就会阻塞后面请求的处理。
#### 1.0版本
最早的http只是使用在一些较为简单的网页上和网络请求上，所以比较简单，每次请求都打开一个新的TCP连接，收到响应后立即断开连接

#### 1.1版本
1. 引入了更多的缓存控制策略，如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等
2. 允许范围请求，即在请求头中加入range头部
3. 请求消息和响应消息都必须包含Host头部，以区分同一个物理主机中的不同虚拟主机的域名
4. 默认开启持久连接，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟
5. 支持持久化连接Persistent Connection，并且默认使用persistent Connection，在同一个tcp的连接中可以传送多个HTTP请求和响应。多个请求和响应可以重叠。多个请求和响应可以同时进行
6. Connection请求头的值为keep-alive时，客户端通知服务器返回本次请求结果后保持连接
7. HTTP1.1还提供了与身份认证、状态管理和Cache缓存等机制相关的请求头和响应头
8. HTTP1.1支持请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟

#### HTTP2.0
由于HTTPS在安全方面已经做得非常好了，HTTP改进的关注点放在了性能方面，对于HTTP/2而言，他对于性能的提升主要在于两点：头部压缩、多路复用