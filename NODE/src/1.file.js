const fs = require('fs')
fs.writeFile('./file.txt', 'isfile', (err, data) => {
  if (err) {

  } else {
    console.log('εε»Ίζε')
  }
})

fs.readFile('./test.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})
