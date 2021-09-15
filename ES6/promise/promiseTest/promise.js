// 声明构造函数
function Promise(executor) {
    // 添加属性
    this.promiseState = 'pending';
    this.promiseResult = null;
    // this.callback = {}
    this.callback = []
    // resolve函数
    const that = this;

    function resolve(data) {
        // 修改对象的状态(promiseState)
        if (that.promiseState !== 'pending') return
        that.promiseState = 'fulfilled';
        // 修改对象的结果值(promiseResult)
        that.promiseResult = data;
        // if(that.callback.onResloved) {  //异步任务的回调执行实现
        //     that.callback.onResloved(data)
        // }
        that.callback.forEach(item => {
            item.onResloved(data)
        });
    }
    // reject函数
    function reject(data) {
        // 修改对象的状态(promiseState)
        if (that.promiseState !== 'pending') return //状态只能更改一次代码实现
        that.promiseState = 'rejected';
        // 修改对象的结果值(promiseResult)
        that.promiseResult = data;
        // if(that.callback.onReject) {  //异步任务的回调执行实现
        //     that.callback.onReject(data)
        // }
        that.callback.forEach(item => {
            item.onReject(data)
        });
    }
    // 同步调用[执行器函数]
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
// then由实例对象调用
Promise.prototype.then = function (onResloved, onReject) {
    //调用回调函数
    const that = this
    // 实现异常穿透
    if(typeof onReject !== 'function') { //如果没有传第二个参数
        onReject = reason => {
            throw reason;
        }
    }
    // 如果then方法中第一个参数也是空的，为其创建一个
    if(typeof onResloved !== 'function') { //如果没有传第二个参数
        onResloved = value => value;
        // value => {return value}  //这两种写法是一样的
    }
    return new Promise((resolve, reject) => {
        //封装函数
        function callback(type) {  
            try {
                let result = type(that.promiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v)
                    }, r => {
                        reject(r)
                    })
                } else {
                    // 对象的结果为成功
                    resolve(result)
                }
            } catch (e) {
                reject(e)
            }
        }
        if (this.promiseState == 'fulfilled') {
            // onResloved(this.promiseResult)
            callback(onResloved)
        }

        if (this.promiseState == 'rejected') {
            callback(onReject)

        }
        if (this.promiseState == 'pending') {
            //保存回调函数
            // this.callback = {  //这样写多个then会覆盖
            //     onResloved:onResloved,
            //     onReject:onReject
            // }
            this.callback.push({
                onResloved: function () {
                   callback(onResloved)
                },
                onReject: function () {
                   callback(onReject)
                }
            })
        }
    })
}

//添加catch方法
Promise.prototype.catch =function (onReject) { 
    return this.then(undefined,onReject)
 }