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
