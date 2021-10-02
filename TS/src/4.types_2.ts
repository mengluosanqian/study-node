let aa :object;
aa = {}
aa = function() {

}

let bb:{name:string,age?:number}
// bb = {} 会报错，必须声明bb的那么属性
// ?: 表示属性可选
bb = {name:'ads'}
// [propName] 属性名 
// [propName: string]: any 可以有任意属性
let cc: {name:String,[propName: string]: any}

// 设置函数结构的类型声明
//  {形参：类型，形参：类型 ...} => 返回值

/*
数组的类型声明
type[]
Array<type>
*/ 
// string[] 表示字符串数组
let dd : string[]
dd = ['a'] 
// :Array<number> 表示数值数组
let ee:Array<number>

// 元组：固定长度的数组
let ff : [string,string];
ff = ['fdsfs','adasd']

// 枚举 enu m

enum gender{
    man = 1,
    women = 0
}

let gg: {name:string,gender:gender}
// 女 0 男 1
gg = {
    name: 'aaa',
    gender: gender.man
}

let hh:string & number 
// hh即是string类型又是number类型,这些写没有意义，主要服务于下面实例
let ii : {name:string} & {age:number}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let j:myType;
let k:myType;


