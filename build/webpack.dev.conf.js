'use strict'

// import webpack from 'webpack'

const merge = require('webpack-merge')
const webpackBase = require('./webpack.base.conf.js')
const webpack = require('webpack')

const webpackDev = merge(webpackBase, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8001,
        compress: true,
        hot: true,
        clientLogLevel: 'warning', // 能隐藏热更替 控制台的进度
        historyApiFallback: true,
        overlay: {
            error: true
        }
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', {
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
        new webpack.HotModuleReplacementPlugin()
    ]
})

module.exports = webpackDev
