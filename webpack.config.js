const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        main: ["@babel/polyfill", path.resolve(__dirname, './src', "index.js")]
    },
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [ /node_modules/ ],
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
}