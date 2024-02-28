const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],
    target: 'web',
}
