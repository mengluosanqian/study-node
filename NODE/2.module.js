// 模块化
// 在node中，一个js文件就是一个模块
// 在node中，每一个js文件里面的js代码都是独立运行在一个函数里，而不是全局作用域
// 通过exports 向外部暴露变量和方法
// require() 可以传递一个文件的路径

// 模块分成两大类
// 核心模块
// 由node引擎提供的模块
// 核心模块的标识就是模块的名称
let fs = require('fs')
// 文件模块
// 由用户自己创建的模块
// 相对路径 ./  ../
let md = require('./3.module')
// console.log(md)
// let a = md.add(1, 2)
// console.log(a)
console.log(md.name);
console.log(md.aname);
// 在node中有一个全局对象 global ，作用和window相似
