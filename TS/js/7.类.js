"use strict";
// 使用class关键字定义一个类
class Person {
    constructor() {
        this.age = 18;
        console.log(this);
        // 这里的this相当于当前的实例
        // 在构造函数中当前对象就是当前新建的对象
        console.log('这是构造函数');
    }
    sayHi() {
        console.log('hello');
    }
    static sayHello() {
        console.log('static hello');
    }
}
// 定义属性
Person.myname = 'adssd';
// readonly表示是只读属性，不可以进行修改
// new Person 相当于调用constructor
const per = new Person();
// stati sayHello 是类方法，需要由类调用
per.sayHi();
Person.sayHello();
console.log(per);
console.log(per.age);
// per.age 是实例属性，需要先创建对象
// Person.age 是类属性，又叫静态属性(static)，不需要创建对象就可以访问
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('www');
    }
}
const dog1 = new Dog('a1', 17);
const dog2 = new Dog('a2', 2);
console.log(dog1);
console.log(dog2);
dog1.say();
