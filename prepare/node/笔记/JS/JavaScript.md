## 常考问题

### script中defer和async的区别
1. defer可以认为是将外链的js放在了页面底部，js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行
2. async能够异步的加载和执行脚本，不会因为加载脚本而阻塞页面的加载。一旦加载到就会立刻执行，有可能不是按照原来的顺序来执行，如果js前后有依赖性，用async，就很有可能出错
3. 总结：
    - 如果async为true，那么脚本在下载完成后异步执行
    - 如果async为false，defer为true，那么脚本在页面解析完毕之后执行
    - 如果async和defer都为false，那么脚本会暂停页面解析，立刻下载并且执行

### XML和JSON的区别
1. JSON相对于XML（可扩展标记语言）来说，数据体积小，传递的速度更快些
2. JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互
3. JSON对数据的描述性比XML差
4. JSON的速度远远快于XML

### 异步编程的实现方式
1. 回调函数
    - 优点：简单、容易理解
    - 缺点：不利于维护，代码耦合性高
2. 事件监听（采用时间驱动模式，取决于某个事件是否发生）
    - 优点：容易理解，可以绑定多个事件，每个事件指定多个回调函数
    - 缺点：事件驱动型，流程不够清晰
3. 发布/订阅（观察者模式）
    - 类似于事件监听，但是可以通过消息中心，了解现在有多少发布者，多少订阅者
4. promise函数
    - 优点：可以使用then方法进行链式写法；可以书写错误时的回调函数
    - 缺点：编写和理解相对较难
5. generator函数
    - 优点：函数体内外的数据交换，错误处理机制
    - 缺点：流程管理不方便
6. async函数
    - 优点：内置执行器、更好的语义、更广的适用性、返回的是promise、结构清晰
    - 缺点：错误机制处理

### 快速让一个数组乱序
```js
    arr.sort(function(){
        return Math.random() - 0.5;
    })  
```

### addEventListener()和attachEvent()的区别
1. addEventListener() 是符合W3C规范的标准⽅法; attachEvent() 是IE低版本的⾮标
准⽅法
2. addEventListener() ⽀持事件冒泡和事件捕获; ⽽attachEvent() 只⽀持事件冒泡
3. addEventListener() 的第⼀个参数中,事件类型不需要添加 on ; attachEvent() 需要添加 'on'
4. 如果为同⼀个元素绑定多个事件,addEventListener() 会按照事件绑定的顺序依次执⾏,attachEvent() 会按照事件绑定的顺序倒序执⾏

### JavaScript全局函数和全局变量
#### 全局变量
1. infinity 代表正的无穷大的数值
2. NaN 指示某个值不是数字值
3. undefined 指示未定义的值

#### 全局函数
1. decodeURI 解码某个编码的URI
2. decodeURIComponent 解码一个编码的URI组件
3. encodeURI 把字符串编码为URI
4. encodeURIComponent 把字符串编码为URI组件
5. escape 对字符串进行编码
6. eval 计算JavaScript字符串，并把它当做脚本代码来执行
7. isFinite 检查某个值是否为有穷大的数
8. isNaN 检查某个值是否是数字
9. Number 把对象的值转化为数字
10. parseFloat 解析一个字符串并返回一个浮点数
11. parseInt 解析一个字符串并返回一个整数
12. String 把对象的值转化为字符串
13. unescape() 对由 escape() 编码的字符串进⾏解码

#### 创建二维空数组
```js
new Array(3).fill(0).map(()=>{return Array(3).fill(0)})
```

#### ASCII互相转换
```js
str="A";
code = str.charCodeAt();//65
str2 = String.fromCharCode(code);//A
str3 = String.fromCharCode(0x60+26);//Z
```