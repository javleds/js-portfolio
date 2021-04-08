const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractConfig = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.css$/i,
                use: [
                    MiniCssExtractConfig.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractConfig(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(
                        __dirname, 'src', 'assets/images'
                    ),
                    to: 'assets/images',
                }
            ]
        })
    ]
}