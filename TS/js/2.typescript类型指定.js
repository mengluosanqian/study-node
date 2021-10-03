"use strict";
(() => {
    function sayHi(str) {
        // str是string类型的
        return '你好' + str;
    }
    let a;
    // 声明了a，并且指定了a是number,之后给a赋值时只能给a赋值number
    // a = 'string'  此行代码会报错
    let name = "张三";
    console.log(sayHi(name));
    // 即使ts中有错误，也会编译生成js
    // 声明完变量直接赋值,但是一般不这样写
    // 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
    // 因此，同时进行时类型声明可以省略
    let c = false;
    let d = false;
    d = true;
    // d = 'das'; 会报错，d只能是boolean类型
    // js中的函数是不考虑参数的类型和个数
})();
