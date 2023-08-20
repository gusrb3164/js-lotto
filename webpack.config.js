const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = env => ({
  entry: env.entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlPlugin({template: './index.html'})],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    host: 'localhost',
    port: 3000,
  },
  devtool: 'inline-source-map',
});
