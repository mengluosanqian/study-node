// promise的构造函数，参数为一个函数，又被称为执行器函数executer
// 并且执行器函数会被立即调用，执行器函数也会接受两个参数，且这两个函数均为函数  executor(resolve, reject)
function Promise (executor) {
  let self = this // 保留this
  self.status = 'pending' // promise默认状态
  self.success = undefined // 保存成功回调传递的值
  self.error = undefined // 保存失败回调传递的值

  self.onSuccessCallbacks = [] // 存放成功的回调
  self.onErrorCallbacks = [] // 存放失败的回调

  function resolve (success) {
    if (self.status === 'pending') { // promise状态只改变一次后不再改变，需要判断status状态是否为pending
      self.status = 'resolved' // 成功将状态改为resolved
      self.success = success
      self.onSuccessCallbacks.forEach(element => {
        element()
      })
    }
  }
  function reject (error) {
    if (self.status === 'pending') { // promise状态只改变一次后不再改变，需要判断status状态是否为pending
      self.status = 'rejected' // 失败将状态改为rejected
      self.error = error
      self.onErrorCallbacks.forEach(element => {
        element()
      })
    }
  }
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

// Promise的then方法，为了能让实例调用这个方法，必须将这个方法写在其原型链上，接收两个参数，一个是成功的回调，一个是失败的回调
Promise.prototype.then = function (onResolved, enRejected) {
  let self = this
  if (self.status === 'resolved') {
    onResolved(self.success)
  }
  if (self.status === 'rejected') {
    onResolved(self.error)
  }
}

Promise.prototype.all = function (promises) {
  let resolvedCounter = 0
  let resolvedResult = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(val => {
        resolvedCounter++
        if (resolvedCounter === promises.length) {
          return resolve(resolvedResult)
        }
      }, error => {
        return reject(error)
      })
    }
  })
}

Promise.prototype.race = function (params) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < params.length; i++) {
      params[i].then(resolve, reject)
    }
  })
}
