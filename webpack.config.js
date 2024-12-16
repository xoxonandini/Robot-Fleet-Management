const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the dist folder on each build
  },
  mode: 'development',
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, 'public'), // Serve files from the public folder
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // Correct path to index.html
      filename: 'index.html', // Output filename
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Transpile JS
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Process CSS
      },
    ],
  },
};
