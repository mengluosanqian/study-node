(() => {
    function sayHi(str:string) {
        // str是string类型的
        return '你好' + str
    }
    let name = "张三"
    console.log(sayHi(name));
    
})()