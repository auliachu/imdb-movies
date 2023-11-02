const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports={
    entry: './src/index.js',
    devServer:{
        client:{
            overlay:{
                errors:true,
                warnings:false,
            },
        },
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
        ],
    },
}