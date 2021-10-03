(function () {
    class Animal {
        mname: string
        constructor(mname: string) {
            this.mname = mname
        }
        say() {
            console.log('sssss ');
            
        }
    }

    class Dog extends Animal{
        age:number;
        constructor(mname:string,age:number) {
            // 如果在子类中写了构造函数,必须对父类构造函数进行调用
            super(mname) //调用父类构造函数
            this.age = age
        }
        say() {
            // 在类的方法中,super表示当前类的父类
            super.say()
        }
    }
    const dog = new Dog('ss',3)
    console.log(dog);
    
    dog.say()
})()