// import 'css-loader!../css/login.css'  //行内使用css-loader
import '../css/login.css'  //在配置文件(webpack.config.js)配置css-loader
import '../css/login.less'

function login() { 
    const oh2 = document.createElement('h2')
    oh2.innerText = 'fdsfsdf'
    oh2.className = 'title'
    return oh2
 }
 console.log(login(),'323123');
 document.body.appendChild(login())