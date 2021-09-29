/*
buffer(缓冲区)
    -   buffer的结构和数组很像，操作方法也和数组类似
    -   数组中不能存储二进制文件，二buffer就是专门用来存储二进制文件的
    -   使用buffer不需要引入模块。直接使用即可
    -   在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
    -   buffer中每一个元素的范围都是从00 - ff （0 - 255）
    -   00000000 - 11111111

*/
let str = 'aas dad'
let str1 = '我发过的给熙'
// 将一个字符串存到buffer中
let buf = Buffer.from(str)
let buf1 = Buffer.from(str1)
console.log(buf.length) // 占用内存的大小
console.log(str.length) // 字符串的长度
console.log(buf1.length) // 占用内存的大小
console.log(str1.length) // 字符串的长度
console.log(buf) // <Buffer 61 61 73 20 64 61 64>

// 创建一个指定大小的buffer
// buffer大小一旦确定，就不可以修改
// buffer构造函数已废弃 new不再使用
var buf2 = Buffer.alloc(10)
// 通过索引为buffer赋值
// 只取后8位
// 输出一定是十进制
// console.log(buf2[1])
buf2[0] = 88
buf2[1] = 0xaa
buf2[2] = 256
buf2[3] = 556
buf2[10] = 12
console.log(buf2)

var buf3 = Buffer.allocUnsafe(10) // 创建一个指定大小的buffer，但是可能含有敏感数据
// 性能更好，但是可能泄露数据
console.log(buf3)

// buf.toString() //转换为字符串
