### 常考题目
#### src和href的区别
* src表示对资源的引用，他指向的内容会嵌入到当前标签所在的位置，src会将其指向的资源下载并应用到文档内，如请求js文档.当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，所以js脚本一般会放在页面底部。
* href表示超文本引用，他指向一些网络文件，建立和当前元素或本文档的连接关系。当浏览器识别到他指向的文件时，就会并行下载资源，不会暂停对当前文档的处理，常用在a、link等标签上

#### script标签中defer和async的区别
1. 作用： 异步加载js文件
2. 区别：
    * 执行顺序： 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行
    * 脚本是否并行执行：async和defer的加载都是异步进行的，但是async表示后续文档的执行顺序也是异步进行的，但是defer要等文档所有元素解析完成之后才执行。

#### meta
#### dom查询
1. getElementsByClassName
2. getElementsByTagName
3. getElementsById
4. getElementsByName
5. querySelector
6. querySelectorAll

#### 拖拽draggable
#### 标签
1. 行内元素：span、a、img、input、strong、select
2. 块级元素：div、h1-h6、ul、ol、li、p、dl、dt、dd
3. 空元素：br、hr、img、input、link、meta、area、base、col、colgroup、command、embed、keygen、param、source、track、wbr
空元素指的是没有内容的html标签，在开始标签中关闭，没有闭合标签

#### iframe
1. 优点：用于加载速度较慢的内容、可以使脚本并行下载、可以实现跨子域通信
2. 缺点：会阻塞主页面的onload事件、无法被一些搜索引擎识别、会产生很多页面 
#### （Doctype）和<!Doctype html>有何作用? 
1. doctype（文档声明）的作用是为了告诉浏览器当前html文档使用的什么版本的html来写的
2. <!doctype html>的作用是让浏览器进入标准模式，使用最新的html5标准来解析渲染页面，如果不写，浏览器就会进入混杂模式。
3. 标准模式又称为严格模式，指的是浏览器按照w3c标准解析代码
4. 混杂模式又称怪异模式、兼容模式。是指浏览器按照自己的方式解析代码，混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作。

### HTML5新特性

#### 声明方式
#### 语义化标签
1. 优缺点
    * 根据内容的结构化（内容语义化），选择合适的标签（代码语义化）
    * 对机器友好，更适合搜索引擎的爬虫爬取有效信息，有利于seo
    * 对机器友好，增强了可读性，结构更加清晰
2. 常用语义化标签
    * <header></header> 头部
    * <nav></nav>   导航栏
    * <section></section> 区块（有语义化的div）
    * <main></main> 主要区域
    * <article></article> 主要内容
    * <aside></aside>   侧边栏
    * <footer></footer> 底部
3. 区别
    * title和h1的区别：title只是一个标题，h1表示层次明确的标题
    * i和em：i的内容展示为斜体，em表示强调的文本
    * strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签

#### 音视频API
    audio和video
    详见：HTML\test\1.video.html
          HTML\test\3.audio.html
#### 表单控件新特性
* 表单类型
    1. email
    2. range
    3. number
    4. submit
    5. time
    6. data
    7. color
    8. search
    9. url
    10. week
    11. month
* 表单属性
    1. placeholder：提示信息
    2. autofocus：自动获焦
    3. required：必填项
    4. multiple：多选
    5. pattern：正则模式

#### 本地存储
1. localStorage
2. sessionStorage
3. cookie

#### 离线存储