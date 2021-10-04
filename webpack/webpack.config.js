const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/ ,//正则
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {},
                    },
                ]
            },
            {
                test: /\.less$/ ,//正则
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {},
                    },
                    {
                        loader: 'less-loader',
                        options: {},
                    },
                ]
            }
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
        ]
    }
}