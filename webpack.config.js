const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        script: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 3200
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: [ MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //    dependency: { not: ['url'] },
            //     use: [
            //       {
            //         loader: 'url-loader',
            //         options: {
            //           limit: 8192,
            //         },
            //       },
            //     ],
            //   },
        ]
    }
}