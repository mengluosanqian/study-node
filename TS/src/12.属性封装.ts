(function () {
    class Person{
        // ts可以在属性前添加属性的修饰符
        // ts独有
        /*
        - public 修饰的属性可以在任意位置访问（修改）默认值
        - private 私有属性，只能在类内部进行访问（修改）默认值
        - protected 受保护的属性，只能在当前类和当前类的子类中访问

        在类中添加方法使私有属性可以被外部访问
        */
        private name:string;
        age:number;

        // 可以直接将属性定义在构造函数里
        // constructor(private name:string,age:number) {

        // }
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        /*
        getter 用来读取属性
        setter 用来设置属性
        */
        getName() {
            return this.name
        }
        setName(val:string) {
            this.name = val
        }

        // ts中设置getter的方法
        get getname() {
            return this.name
        }
        set setname(val:string) {
            this.name = val
        }
    }
    // 属性可以任意被修改，会使对象中的数据变得十分不安全
    const per = new Person('a',12)
    // per.name = 'b' //私有属性不能被外部直接访问
    console.log(per.getName());
    per.setName('bb')
    per.age = 18
    console.log(per);

    //////
    console.log(per.getname);
    per.setname = '22'
    console.log(per);
    
    
    
})()