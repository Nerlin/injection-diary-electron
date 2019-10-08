const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    electron: "./src/main.ts",
    view: "./src/view/index.tsx"
  },
  target: "electron-main",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Injection Diary",
    template: "./src/view/index.html",
    chunks: ["view"]
  })],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};