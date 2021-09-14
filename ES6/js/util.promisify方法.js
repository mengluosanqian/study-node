// 引入util模块
const util = require('util')
// 引入fs模块
const fs = require('fs')
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile) // 借助util.promisify方法将回调函数风格的方法转变为promise的方法
mineReadFile('../../NODE/test.txt').then(value => {
  console.log(value.toString())
}, reason => {
  console.log(reason, '1111111')
})
