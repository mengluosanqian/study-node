// 或者可以采用import导入
import oImgSrc from '../../public/images/faqi.png'
import '../css/bg.css' 

function packImg() { 
    // 创建一个容器元素
    const oele = document.createElement('div')
    // 创建img标签，设置src属性
    const oImg = document.createElement('img')
    oImg.width = 400
    oImg.src = oImgSrc
    // oImg.src = require('../../public/images/headerbackground.png')  //在webpack.config.js添加esModule参数
    // oImg.src = require('../../public/images/headerbackground.png').default  //webpack5  file-loader返回的是一个对象
    oele.appendChild(oImg)

    const nDiv = document.createElement('div')
    nDiv.className = 'backg'
    oele.appendChild(nDiv)
    return oele
 }

 document.body.appendChild(packImg())