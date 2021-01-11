const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack.config.js
module.exports = {
  entry : "/src/index.js",
  resolve : {
    extensions : [".js",".jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"), // directory where our output file will be saved
    filename: "bundle.js", // specifies the name of the output file
    publicPath: "./", // path to bundle.js relative to index.html
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/react"],
          plugins: [],
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),],
}
