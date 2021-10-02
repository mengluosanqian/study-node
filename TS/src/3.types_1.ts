// 可以直接使用字面量进行类型声明
let a:10
a = 10;
// a = 11 会报错
// 可以使用 | 来连接多个类型（联合类型）
let b: 'man' | 'women'
b = 'man'
b = 'women'
let c: boolean | string
c = true
c = 'hello'

// any表示任意类型，一个变量设置类型为any，相对于对该变量关闭了类型检测
// 使用ts时，不建议使用any
let d: any;
// 声明变量时，不指定类型，则默认为any
let e; 
// unknown表示未知类型的值,实际上就是一个类型安全的any
let f :unknown;
f = 'ssad';
f = 1231;
f = true;

// any类型的值可以赋值给任意变量，但是unknown不可以

// 类型断言,可以用来告诉解析器变量的实际类型
// 语法： * as [type]
        // <type> *
let s :string;
s = f as string;
s = <string>f;

// void 表示空值
function fn():string {
    return 'asda'
}
function fn1():void {
    // 没有返回值
}
// never表示不会返回值
function fn2():never {
    throw new Error('报错')
}

