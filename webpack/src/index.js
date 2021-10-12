import {sum, square} from './js/utils.js'
import './js/login'
import './js/image'
import './js/font'

if (module.hot) { // 是否开启热更新
  module.hot.accept(['./js/font'], () => {
    console.log('font 模块发生改变')
  }) // 哪些模块开启热更新,热更新会强制刷新页面,可以加回调函数
}
console.log(sum(10, 20))
console.log(square(10))
console.log(111)

/**
    loader 转换 特定类型
    plugin 更多事情（）
        - npm i clean-webpack-plugin -D
        - npm i html-webpack-plugin -D  //不需要自己在dist下创建index.html
        - npm i copy-webpack-plugin -D  //copy插件
 */
