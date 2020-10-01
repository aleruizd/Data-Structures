const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    devtool: 'eval-source-map',
    plugins: [
        new MinCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copys the content of the existing index.html to the new /build index.html
            template:  path.resolve('./public/index.html'),
          }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css|sass)$/,
                use: [
                    MinCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}