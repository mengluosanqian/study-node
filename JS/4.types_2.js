"use strict";
var aa;
aa = {};
aa = function () {
};
var bb;
// bb = {} 会报错，必须声明bb的那么属性
// ?: 表示属性可选
bb = { name: 'ads' };
// [propName] 属性名 
// [propName: string]: any 可以有任意属性
var cc;
// 设置函数结构的类型声明
//  {形参：类型，形参：类型 ...} => 返回值
/*
数组的类型声明
type[]
Array<type>
*/
// string[] 表示字符串数组
var dd;
dd = ['a'];
// :Array<number> 表示数值数组
var ee;
// 元组：固定长度的数组
var ff;
ff = ['fdsfs', 'adasd'];
// 枚举 enu m
var gender;
(function (gender) {
    gender[gender["man"] = 1] = "man";
    gender[gender["women"] = 0] = "women";
})(gender || (gender = {}));
var gg;
// 女 0 男 1
gg = {
    name: 'aaa',
    gender: gender.man
};
var hh;
// hh即是string类型又是number类型,这些写没有意义，主要服务于下面实例
var ii;
var j;
var k;
