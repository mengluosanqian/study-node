// console.log('3333');
// exports.x = "sdada"
var a = 10
// console.log(global.a)
// console.log(arguments)
// console.log(arguments.callee + '')
/*
function (exports, require, module, __filename, __dirname) {
// console.log('3333');
// exports.x = "sdada"
var a = 10;
console.log(global.a);
console.log(arguments);
console.log(arguments.callee + '');
exports.add = function (a, b) {
  return a + b
}
exports.sub = function (a, b) {
  return a - b
}

}

*/

// 实际上模块的代码都是包装在函数中进行的，并且在函数执行时，传进了5个实参
// function (exports, require, module, __filename, __dirname) {}
/*
    exports 该对象用来将变量或者函数暴露到外部
    require 用来引入外部的模块
    module 代表的是当前模块本身
            exports就是module的属性
            既可以使用exports导出，也可以使用module.exports导出
    __filename 当前模块的一个完整路径
    __dirname 当前文件所在文件夹的路径
 */

module.exports = {
  name: 'asda',
  age: 18
}
// 直接写exports = {} 是在改对象 ，module.exports = {} 是在改module的exports这个变量
// exports只能使用 . 的方式向外暴露
// exports = {
//   aname: 'asda',
//   aage: 18
// }
console.log(exports === module.exports)
console.log(__filename)
console.log(__dirname)
exports.add = function (a, b) {
  return a + b
}
exports.sub = function (a, b) {
  return a - b
}
