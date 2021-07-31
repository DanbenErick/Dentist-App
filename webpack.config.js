const path = require('path')

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    open: true,
    hot: true,
    port: 8081,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        use: 'babel-loader',
      }
    ]
  }
}

module.exports = config