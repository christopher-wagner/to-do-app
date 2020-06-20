const path = require("path")

module.exports = {
  entry: './src/index.js', //where you bundle the javascript code to use in entire program
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // where it goes to be bundled
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
  // Optional for webpack-dev-server
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
  devtool: "source-map",
  mode: 'development'
}