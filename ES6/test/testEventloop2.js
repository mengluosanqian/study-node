async function async1 () {
  console.log(1) // 5
  await async2()
  console.log(2) // 8
}
async function async2 () {
  console.log(3) // 6
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
    console.log(4) // 2
  }, 1000)
}).then(() => {
  console.log(5) // 3
  new Promise((resolve, reject) => {
    setTimeout(() => {
      async1()
      resolve()
      console.log(6) // 7
    }, 1000)
  }).then(() => {
    console.log(7) // 9
  }).then(() => {
    console.log(8) // 10
  })
}).then(() => {
  console.log(9) // 4
})
new Promise((resolve, reject) => {
  console.log(10) // 1
  setTimeout(() => {
    resolve()
    console.log(11) // 11
  }, 3000)
}).then(() => {
  console.log(12) // 12
})
