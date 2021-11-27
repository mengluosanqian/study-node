function fn(a, c) {
    console.log(a) // function a () {}
    var a = 123
    console.log(a) // 123 
    console.log(c)  // function c() {}
    function a () {}
    if(false) {
        var d = 678
    }
    console.log(d) // undefined
    console.log(b) // function () {}
    var b = function () {}
    console.log(b)
    function c() {}
}
fn (1,2)