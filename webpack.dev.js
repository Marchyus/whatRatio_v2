const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const { watchFile } = require("fs");

// config
module.exports = merge(common, {
  mode: "development",

  devtool: "source-map",
  devServer: {
    watchFiles: ["./src/**/*"],
  },
});
