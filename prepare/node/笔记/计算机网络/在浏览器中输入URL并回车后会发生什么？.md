### 在浏览器中输入URL并回车后会发生什么？
https://www.baidu.com

url => 统一资源定位符
https: 传输协议（http和TCP之间加了一层TSL或者SSL的安全层）
www： 服务器
baidu.com： 域名

#### 第一次访问
解析URL
DNS域名系统匹配真实IP
得到真实IP
建立连接（TCP三次握手）
拿到数据渲染页面
四次挥手

#### 第二次访问
将域名解析的IP存在本地
读取浏览器缓存

