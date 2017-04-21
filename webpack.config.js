var path = require('path')
module.exports = {
    entry: './app/app.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            include:[path.resolve(__dirname, 'app')],
            exclude: [path.resolve(__dirname,"node_modules")],
            loader: "babel-loader",
            query: {presets: ["env","react"]},
        }]
    }
}
