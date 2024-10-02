// path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// config
module.exports = {
    entry: "./src/static/js/main.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
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