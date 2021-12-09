async function async1 () {
  console.log('async1 start') // 2
  await async2()
  console.log('async1 end') // 8
}

async function async2 () {
  console.log('async start') // 3
  return new Promise((resolve, reject) => {
    resolve()
    console.log('async2 promise') // 4
  })
}

console.log('script start') // 1
setTimeout(() => {
  console.log('setTimeout') // 9
}, 0)

async1()

new Promise((resolve) => {
  console.log('promise1') // 5
  resolve()
}).then(() => {
  console.log('promise2') // 6
}).then(() => {
  console.log('promise3') // 7
})
console.log('script end') // 6
