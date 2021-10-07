const path = require('path')
const {
    resourceUsage
} = require('process')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "img/[name][ext]" //会默认取出最后的.
    },
    module: {
        rules: [
            {
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
                test :/\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: "font/[name][ext]" //指定类型资源的输出
                },
            }
        ]
    }
}