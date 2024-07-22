const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};
