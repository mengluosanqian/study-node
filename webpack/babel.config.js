module.exports = {
  presets: [
    ['@babel/preset-env', // 可以完成绝大多数新语法的处理
      {
        useBuiltIns: 'usage', // 默认值false，表示不对当前js处理做polyfill的填充
        // usage 依据用户源代码当中所使用的新语法进行填充
        // entry 依据所要兼容的浏览器进行填充
        corejs: 3
      }
    ]
  ]
  // plugins: [
  //     ' @babel/plugin-transform-arrow-functions',
  //     '@babel/plugin-transform-block-scoping'
  // ]
}
