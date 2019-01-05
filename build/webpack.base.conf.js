'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:{
        app:path.resolve(__dirname, '../src/main.js')
    },
    output:{
        path: path.resolve(__dirname,'../dist'),
        filename:'static/js/[name].[hash].js',
        //publicPath:'/'
    },
    resolve: {
        extensions: ['.js', '.vue', 'json', 'less'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name:'static/images/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            hash:true, //防止缓存
        })
    ]
}

// module.exports = vuxLoader.merge(webpackBase, {
//     plugins:['vux-ui']
// })