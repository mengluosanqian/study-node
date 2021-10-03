(function () {
    // 描述一个对象的原型
    type myType = {
        name: string,
        age: number,
        [propname: string]:any
    }
    // 接口用来定义一个类结构,用来定义一个类中应该包含哪些属性和方法
    // 同时接口也可以当成类型声明来使用
    interface myInterface{
        name: string,
        age: number
    }
    interface myInterface{
        gender: string,
        
    }
    const obj: myInterface = {
        name: 'sss',
        age: 12,
        gender: 'man'
    }
    // 接口可以在定义类的时候限制类的结构
    // 接口中所有属性不能有实际的值
    // 所有的方法都是抽象方法
    // 接口只定义对象的结构，而不考虑实际值
    interface myInter{
        name:string;
        say():void
    }
    // 定义类时，可以使类去实现一个接口
    // 实现接口就是使类满足接口的要求
    // 接口就相当于一个规范
    class myClass implements myInter{
        name:string;
        constructor(name:string){
            this.name = name
        }
        say() {
            console.log(222);
            
        }
    }
})()