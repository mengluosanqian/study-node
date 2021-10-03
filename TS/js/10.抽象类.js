"use strict";
(function () {
    // 以abstract开头的类是抽象类
    // 抽象类和其他类区别不大,只是不能用来创建对象
    // 抽象类是专门用来被继承的类
    // 抽象类中可以添加抽象方法
    class Animal {
        constructor(mname) {
            this.mname = mname;
        }
    }
    class Dog extends Animal {
        constructor(mname, age) {
            // 如果在子类中写了构造函数,必须对父类构造函数进行调用
            super(mname); //调用父类构造函数
            this.age = age;
        }
        say() {
            // 在类的方法中,super表示当前类的父类
            // super.say()
            console.log('131');
        }
    }
    const dog = new Dog('ss', 3);
    console.log(dog);
    dog.say();
})();
