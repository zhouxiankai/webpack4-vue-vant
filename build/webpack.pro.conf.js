'use strict'

const path = require('path')
const webpackBase = require('./webpack.base.conf.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackPro = merge(webpackBase, {
    mode: 'production',
    devtool: '#source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
        // runtimeChunk:true
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'less-loader',
                    options: {
                        globalVars: {
                            'rem': '10/750rem'
                        }
                    }
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new CleanWebpackPlugin(
            ['dist/static'],
            {
                root: path.resolve(__dirname, '../'),
                verbose: true,
                dry: false
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'static/css/style.css'
        })
    ]
})

webpack(webpackPro, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
        console.error(err)
        return
    }
    // 处理完成
    console.log(stats.toString({
        chunks: false, // 使构建过程更静默无输出
        colors: true // 在控制台展示颜色
    }))
})
