(function () {
    class Animal {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        say(something: string) {
            console.log(something);
        }
    }

    // 使用extends继承animal类
    // 此时animal被称为父类，dog和cat被称为子类
    // 使用继承后,子类会拥有父类所有的属性和方法
    
    // 如果要添加父类中没有的方法,直接在子类中添加即可
    class Dog extends Animal {
       run() {
           console.log(`${this.name}  run`);
           
       }
    }
    const dog1 = new Dog('a1', 17)
    console.log(dog1);
    dog1.say('www')
    dog1.run()

    // 如果子类中添加了和父类相同的名字,会覆盖父类中的方法
    // 这就是父类方法的重写
    class Cat extends Animal {
      say() {
          console.log('adsad');
          
      }
    }

    const cat1 = new Cat('a1', 17)
    console.log(cat1);
    // cat1.say('mmm')
    cat1.say()
})()