const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
    ]
  },
  resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
  devServer: {
    static: './dist',
    open: true,
    compress: true,
    port: 8564,
    hot: true,
  },
}
