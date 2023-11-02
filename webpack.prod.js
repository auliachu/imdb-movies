const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path');

module.exports=merge(config,{
    mode:'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mainprod.js'
    },
    module:{
        rules:[
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
});