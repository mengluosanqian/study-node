### websocket
#### websocket是什么
1. websocket是HTML5新增的协议，诞生的目的就是在浏览器和服务器之间建立一个不受限的双向通信的通道
2. 客户端  -->  服务端  服务端 --> 客户端
3. 为什么传统的http协议不能做到websocket实现的功能？
    - 因为http协议是一个请求-响应协议，请求必须先由浏览器发送给服务器，服务器才能进行响应。
    - http协议是无状态的，服务器只会响应来自客户端的请求，但是它与客户端之间不具备持续连接，无法轻松实现实时应用。
    - 轮询的实时性不够，频繁请求会给服务器带来很大的压力
#### 事件
| 事件 | 用法 |
| :--- | :--- |
|   open   |    连接建立时触发  |
|   message |   客户端接收服务端数据时触发  |
|   error   |   通信发生错误时触发  |
|   close   |   连接关闭时触发  |

#### 方法
| 方法 | 用法 |
| :--- | :--- |
|   Socket.send()   |    使用连接发送数据  |
|   Socket.close() |   关闭连接  |

#### 客户端简易代码
```js
        let ws = new WebSocket('ws://localhost:5000')
        // 连接成功后
        ws.onopen = function (evt) {
            console.log('连接开启');
            ws.send('这是客户端信息')
        }
        //   传递和接收服务器数据的方法
        ws.onmessage = function (evt) {
            ws.send('这是客户端发送的第二条信息')
        }
```

#### 服务端简易代码
```js
// 导入websocket模块
const websocket = require('ws')
// 引入Server类并且实例化，定义服务器的端口
const wss = new websocket.Server({port:5000})
wss.on('connection',function(ws) {
    ws.on('message', function (message) {
        console.log('客户端发送过来的信息是'+ message);
        ws.send('这是服务端，接收到了信息')
        ws.close()
      })
})

```