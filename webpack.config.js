// path
const path = require('path');

// imports
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');

// config
module.exports = {
    mode: "development",
    entry: "./src/static/js/main.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/**/*"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
}