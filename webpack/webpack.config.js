const path = require('path')
<<<<<<< HEAD
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
=======
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
>>>>>>> 27281028708a68ee8ed4f4c5cd362d029a9d2c2b
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {DefaultPlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {
  resourceUsage
} = require('process')
module.exports = {
<<<<<<< HEAD
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "img/[name][ext]" //会默认取出最后的.
    },
    module: {
        rules: [{
                // postcss在css之前开始工作
                test: /\.css$/, //正则
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'), //自动加前缀
                                    // 'postcss-preset-env'  //可以简写
                                    require('postcss-preset-env') //功能集合，css样式自动修改
                                ]
                            }
                        }
                    },
                ]
            },
            {
                test: /\.less$/, //正则
                use: [
                    'style-loader', //可以简写
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, //让postcss-loader处理css-loader工作时遇到的css文件
                        },
                    },
                    'postcss-loader', //可以把postcss-loader单独提出一个文件，在文件内部加配置
                    {
                        loader: 'less-loader',
                        options: {},
                    },
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
                    filename: "img/[name][ext]" //指定类型资源的输出
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
                    filename: "font/[name][ext]" //指定类型资源的输出
                },
            },
            {
                test: /\.js$/,
                use: 'babel-loader'  //可以把配置内容提出一个文件 babel.config.js
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
=======
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext]' // 会默认取出最后的.
  },
  module: {
    rules: [
      {
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
>>>>>>> 27281028708a68ee8ed4f4c5cd362d029a9d2c2b
            }
          }
        }
        ]
<<<<<<< HEAD
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'html-webpack-plugin',
            template: './public/index.html'
        }),
        // new DefinePlugin({
        //     BASE_URL:'"./"'
        // }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'public',
                // to: ''//不写的话默认找output里面设计好的，一般默认不写这个值
                globOptions: {
                    ignore: ['**/index.html'] //必须写**/ ，意思是从本目录开始
                }
            }]
        })
=======
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
      }
>>>>>>> 27281028708a68ee8ed4f4c5cd362d029a9d2c2b
    ]
  },
  plugins: [
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
  mode: 'production'
  /*
  mode: 模式
  通过选择 development, production 或 none 之中的一个，来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 production。
  - production    会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。为模块和 chunk 启用确定性的混淆名称，FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin 和 TerserPlugin 。
  - development   会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development. 为模块和 chunk 启用有效的名。
  - none          不使用任何默认优化选项
 */
}
