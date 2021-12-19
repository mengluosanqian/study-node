### 常问问题
#### 选择器
属性选择器
["def"]  选择属性值为"def"的元素
[abc^="def"]    选择 abc 属性值以 "def" 开头的所有元素
[abc$="def"]	选择 abc 属性值以 "def" 结尾的所有元素
[abc*="def"]	选择 abc 属性值中包含子串 "def" 的所有元素 
[class~="important"]  选择 class 属性中包含 important 的元素("~=" 属性选择器能用于任何属性)

#### 不可继承属性
1. display
2. 文本属性 
    * vertical-align
    * text-decoration
    * text-shadow
    * white-space   空白符的处理
    * unicode-bidi 设置文本的方向
3. 盒子模型的属性
    * width
    * height
    * margin
    * border
    * padding
4. 背景属性
5. 定位属性
6. 生成内容属性
7. 轮廓样式属性
8. 页面样式属性
9. 声音样式属性

#### 有继承的属性
1. 字体系列属性
2. 文本系列属性
    * text-indent 文本缩进
    * text-align 文本水平对齐
    * line-height 行高
    * word-spacing 单词之间的间距
    * letter-spacing 中文或者字母之间的间距
    * text-transform 文本大小写
    * color 颜色
3. 元素可见性 visibility
4. 列表布局属性
5. 光标属性

#### link和@import的区别
1. link是XHTML标签，除了加载css外，还可以定义rss等其他事务；@import属于css范畴，只能加载css
2. link引用css时，在页面载入时同时加载；@import需要页面网页完全载入后加载
3. link无兼容问题；@import低版本浏览器不支持
4. link支持使用JavaScript控制dom去改变样式，而@import不支持

#### requestAnimationFrame
1. 请求动画帧
2. window.requestAnimationFrame(callback) 告诉浏览器你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数在浏览器下一次重绘之前执行
3. 该方法属于宏任务
4. 取消动画 cancelAnimationFrame(id) id为requestAnimationFrame默认返回的id
5. cpu节能
6. 函数节流，防止在一个刷新间隔内发生多次函数执行，可保证在每个刷新间隔内，函数只执行一次，这样既保持流畅性，也可以节约开销
7. 减少dom操作，会把每一帧中的所有dom操作集中起来，在一次回流或者重绘中完成

####  为什么有时候⽤translate来改变位置⽽不是定位？
* translate是transform属性的一个值，改变transform或者opacity不会触发浏览器的重新布局或重绘更加高效，并且translate改变位置时元素依然会占据去原始空间

#### 精灵图
* 将一个页面涉及的所有图片都包含到一个大图中去，然后利用background-image、background-repeat、background-position属性进行定位
* 减少网页的http请求，提高性能
* 减少图片字节
* 开发起来较为复杂，维护起来也比较麻烦

#### 预处理器和后处理器
1. 预处理器：less、sass、stylus
2. 后处理器：postCss 给浏览器属性添加浏览器私有前缀

####  display:inline-block 什么时候会显示间隙？
1. 有空格会有间隙
2. margin正值时
3。 使用font-size时

#### 文本溢出
1. 单行文本溢出：
```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
```
2. 多行文本溢出
```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```
#### 媒体查询
使用 @media 查询，可以针对不同的媒体类型定义不同的样式。

#### z-index什么时候会失效
1. 父元素position为relative，子元素的z-index会失效
2. 元素没有设置position为非static属性
3. 元素在设置z-index的同时还设置了float浮动

#### 元素层叠顺序
从上到下：
1. 背景和边框
2. 负的z-index
3. 块级盒
4. 浮动盒
5. 行内盒
6. z-index:0 
7. 正z-index

#### display、float、position的关系
1. 首先判断display属性是否为none，如果为none，则float和position的属性值不影响元素最后的表现
2. position的值如果为absolute或者fixed，则float失效，并且display的值应该被设置为table或者block
3. position的值如果不为absolute或者fixed，如果float不为none，则display按上面的规则转换
4. position为relative并且float存在，则relative相对于浮动后的最终位置定位
5. 如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，则保持指定的display属性值不变。

### 性能优化
#### 加载性能
#### 选择器性能
#### 渲染性能
#### 可维护性、健壮性

### css工程化
#### 作用
1. 宏观设计
2. 编码优化
3. 构建
4. 可维护性

#### 实现工程化
1. 预处理器： less、sass等
    * 嵌套代码的能力，通过嵌套来反映不同css属性之间的层级关系
    * 支持定义css变量
    * 提供计算函数
    * 允许对代码片段进行extend和mixin
    * 支持循环语句的使用
    * 支持将css文件模块化，实现复用
2. 工程化插件： postCss
    * 编译尚未被浏览器广泛支持的先进的css语法
    * 自动为一些需要额外兼容的语法增加前缀
    * 有着强大的插件机制，支持各种各样的扩展
3. webpack loader
    * style-loader 创建style标签，把css内容写入标签
    * css-loader 导入css模块，对css代码进行编译处理，执行顺序一定要在style-loader后面

### 浮动和BFC
#### 浮动
#### 清除浮动
#### 什么是bfc
#### 如何创建bfc
#### bfc的特点和作用



