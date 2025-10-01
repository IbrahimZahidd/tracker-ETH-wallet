const path = require('path');
module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        use: { loader: "babel-loader" }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    compress: true,
    port: 3001,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
};
