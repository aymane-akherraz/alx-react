const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
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
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '> 0.25%, not dead',
                },
              ],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
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
