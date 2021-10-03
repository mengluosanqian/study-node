"use strict";
(function () {
    class Person {
        // 可以直接将属性定义在构造函数里
        // constructor(private name:string,age:number) {
        // }
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        /*
        getter 用来读取属性
        setter 用来设置属性
        */
        getName() {
            return this.name;
        }
        setName(val) {
            this.name = val;
        }
        // ts中设置getter的方法
        get getname() {
            return this.name;
        }
        set setname(val) {
            this.name = val;
        }
    }
    // 属性可以任意被修改，会使对象中的数据变得十分不安全
    const per = new Person('a', 12);
    // per.name = 'b' //私有属性不能被外部直接访问
    console.log(per.getName());
    per.setName('bb');
    per.age = 18;
    console.log(per);
    //////
    console.log(per.getname);
    per.setname = '22';
    console.log(per);
})();
