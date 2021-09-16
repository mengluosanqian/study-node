const fs = require('fs')
const util = require('util')
const mineReadFile = util.promisify(fs.readFile)
// 使用回调函数
// fs.readFile('./file1.html',(err,data1) => {
//     if(err) throw err;
//     fs.readFile('./file2.html',(err,data2) => {
//         if(err) throw err;
//         fs.readFile('./file3.html',(err,data3) => {
//             if(err) throw err;
//             console.log(data1+data2+data3);
//         })
//     })
// })

async function main() {
    try {
        let data1 = await mineReadFile('./file1.html')
        let data2 = await mineReadFile('./file2.html')
        let data3 = await mineReadFile('./file3.html')
        console.log(data1 + data2 + data3);
    } catch (error) {
        console.log(error);
    }

}
main()