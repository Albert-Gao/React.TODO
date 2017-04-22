var path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/app.js'
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            include:[path.resolve(__dirname, 'app')],
            exclude: [path.resolve(__dirname,"node_modules")],
            loader: "babel-loader",
            query: {
                presets: ["env","react"]
            },
        }]
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),
    ],
}
