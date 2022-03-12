## ajax
1. ajax是最早出现的发送后端请求的技术，属于原生js
2. 优点
    - 对原生XHR的封装，做了兼容处理，简化了使用
    - 增加了对JSONP的支持，可以简单处理部分跨域
3. 缺点
    - 如果有多个请求，并且有依赖关系的话，容易形成回调地狱
    - 本身是针对MVC的编程，不符合现在前端MVVM的浪潮
    - ajax是jQuery中的一个方法，如果只是要使用ajax却要引入整个jQuery非常不合理
```js
// ajax使用
let xhr = new XMLHttpRequest()
xhr.open('method','url')
// 以表单的形式传递数据
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send()
xhr.onReadyStateChange = () => {
    if(xhr.readyState == 4) {
        if(xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
}
```

### fetch
1. 优点：
    - 解决了回调地狱问题
    - 返回结果是一个promise对象
    - 发送网络请求时，可以传输任意格式的数据
2. 缺点：
    - 超时、终止取消不方便，只能通过取消promise来完成
    - 对低版本浏览器和IE浏览器支持不好

```js
fetch(url,options).then(response => {
    // handle HTTP response
},error => {
    // handle network error
})
```

### axios
1. 优点：
    - 在浏览器中创建XMLHttpRequest请求，在node.js创建http请求
    - 解决回调地狱问题
    - 自动转化为json数据类型
    - 支持promise技术，提供并发请求接口
    - 浏览器兼容性好
    - 有拦截器，可以对请求和响应进行统一处理
    - 提供超时处理

```js
axios.post('url',{}).then(function(response) {
    console.log(response)
}).catch((error) => {
    console.error(error)
})
```
#### 请求拦截器
```js
import axios from 'axios'
const service = axios.create({
    baseRUL:'',
    timeout: 3000 // 超时
})
service.interceptors.request.use(config => {
    const token = storage.get("token");
    if (token) {
      config.headers.Token = token;
    }
    if (config.method === "POST") {
      config.data = qs.stringify(config.data);
    }
    return config;
},error => Promise.reject(error))
```

#### 响应拦截器
```js
service.interceptors.response.use(res => {
    const { data, meta } = res.data
}, _error => {
  // 返回报错处理
  Message({
    message: '接口请求有误，请检查',
    type: 'error'
  })
})
```