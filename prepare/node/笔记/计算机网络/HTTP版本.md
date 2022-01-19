### HTTP
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