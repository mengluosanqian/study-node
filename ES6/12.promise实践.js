const fs = require('fs');
// fs.readFile('../NODE/test.txt',(err,data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })
let p = new Promise((resolve, reject) => {
    fs.readFile('../NODE/test.txt', (err, data) => {
        if (err) reject(err);
        resolve(data.toString())
    })
})
p.then(value => {
    console.log(value);
},reason=>{
    console.log(reason);
})