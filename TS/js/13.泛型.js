"use strict";
// function fn(a:number): number {
//     return a;
// }
// 在定义函数或者类时，类型不明确可以使用泛型
// T可以是任意值
// 可以体现出返回值类型和a是相同的
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let result = fn(10); //不指定泛型，TS会自动对类型进行推断
let result2 = fn('hello'); //指定泛型
// 泛型可以指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'aaa');
// T extends Inter T必须是Inter的实现类（子类）
function fn3(a) {
    console.log(a.length);
    return a.length;
}
fn3('asda');
