const path = require('path')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {DefaultPlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const {
  resourceUsage
} = require('process')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'), // 打包后资源的输出目录
    assetModuleFilename: 'img/[name][ext]', // 会默认取出最后的.
    publicPath: '/'
    // index.html内部引用路径，如果为空，就是 域名 + publicPath + filename
    // publicPath为空， http://localhost:8080 + '/' + 'js/main.js'
  },
  target: 'web',
  resolve: {
    extensions: ['.js','.json','.ts','.jsx','.vue'], // 扩展名，引入时文件会自动判断后缀名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devtool: 'source-map', // 映射 => 在调试的时候可以定位到源代码中的信息
  devServer: {
    hot: true, // 是否开启热更新
    // hotOnly: true,
    // port: 4000, // 端口号
    open: false, // 自动打开浏览器
    compress: false, // 压缩文件
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'public')
    },
    // publicPath: '/'
    // publicPath: 指定本地服务所在目录 http://localhost:8080/publicPath
    // contentBase: path.resolve(__dirname, 'public'),
    // 打包后资源依赖其他的资源，此时就告知去哪里找
    // watchContentBase: true
    // 监控contentBase里面的内容是否发生变化
    proxy: {
      '/api': {
        // http://localhost:4000/api/user  =>
        // https://api.github.com/api/user
        target: 'https://api.github.com/',  //去哪个服务端查询数据
        pathRewrite: { "^/api":"" },
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [{
      // postcss在css之前开始工作
      test: /\.css$/, // 正则
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          esModule: false
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              require('autoprefixer'), // 自动加前缀
              // 'postcss-preset-env'  //可以简写
              require('postcss-preset-env') // 功能集合，css样式自动修改
            ]
          }
        }
      }
      ]
    },
    {
      test: /\.less$/, // 正则
      use: [
        'style-loader', // 可以简写
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1 // 让postcss-loader处理css-loader工作时遇到的css文件
          }
        },
        'postcss-loader', // 可以把postcss-loader单独提出一个文件，在文件内部加配置
        {
          loader: 'less-loader',
          options: {}
        }
      ]
    },
      // 简写方式一
      // {
      //     test: /\.css$/ ,
      //     loader: 'css-loader'
      // }
      // 简写方式二
      // {
      //     test: /\.css$/ ,
      //     use: ['style-loader','css-loader']
      // }
      // {
      //     test:/\.(png|svg|gif|jpe?g)$/,
      //     // use:'file-loader'
      //     type:'asset/resource',
      //     generator: {
      //         filename:"img/[name][ext]" //指定类型资源的输出
      //     }
      //     // 可以直接使用asset替代file-loader
      //     // use: {
      //     //     // loader: 'file-loader',
      //     //     loader: 'url-loader',
      //     //     options: {
      //     //         esModule: false, //默认false，不转为module
      //     //         name: '[name].[hash:6].[ext]', //打包后的名称
      //     //         limit: 25*1024, //超过25kb就转为base64，不超过就直接拷贝
      //     //         outputPath: 'img'
      //     //         // 占位符 name
      //     //         // [ext]: 扩展名
      //     //         // [name]: 文件名
      //     //         // [hash]: 文件内容
      //     //         // [contentHash]: 默认和hash一样
      //     //         // [hash:<length>]
      //     //         // [path]
      //     //     }
      //     // }
      // }

      // {
      //     test:/\.(png|svg|gif|jpe?g)$/,
      //     // use:'file-loader'
      //     type:'asset/inline',
      // }

    {
      test: /\.(png|svg|gif|jpe?g)$/,
      // use:'file-loader'
      type: 'asset',
      generator: {
        filename: 'img/[name][ext]' // 指定类型资源的输出
      },
      parser: {
        dataUrlCondition: {
          maxSize: 30 * 1024
        }
      }
    },
    {
      test: /\.(ttf|woff2?)$/,
      type: 'asset/resource',
      generator: {
        filename: 'font/[name][ext]' // 指定类型资源的输出
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader' // 可以把配置内容提出一个文件 babel.config.js
      // use: [{
      //     loader: 'babel-loader',
      //     options: {
      //         presets: [
      //             '@babel/preset-env' //可以完成绝大多数新语法的处理
      //         ]
      //         // plugins: [
      //         //     ' @babel/plugin-transform-arrow-functions',
      //         //     '@babel/plugin-transform-block-scoping'
      //         // ]
      //     }
      // }]
    },
    {
      test: /\.vue$/,
      use: ['vue-loader']
    }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'html-webpack-plugin',
      template: './public/index.html'
    }),
    // new DefinePlugin({
    //     BASE_URL:'"./"'
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          // to: ''//不写的话默认找output里面设计好的，一般默认不写这个值
          globOptions: {
            ignore: ['**/index.html'] // 必须写**/ ，意思是从本目录开始
          }
        }
      ]
    })
  ],
  mode: 'development'
  /*
  mode: 模式
  通过选择 development, production 或 none 之中的一个，来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 production。
  - production    会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。为模块和 chunk 启用确定性的混淆名称，FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin 和 TerserPlugin 。
  - development   会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development. 为模块和 chunk 启用有效的名。
  - none          不使用任何默认优化选项
 */
}
