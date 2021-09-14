(function () {
    function sayHi(str) {
        // str是string类型的
        return '你好' + str;
    }
    var name = "张三";
    console.log(sayHi(name));
})();
// ts中形参如果使用了某个类型进行修饰，那么在最终的js文件中是没有这个类型的
// 如果使用了let声明变量，最终会变成var
