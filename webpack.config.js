const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    done: './src/Done.js',
    subTask: './src/SubTask.js',
    task: './src/Task.js',
    todoList: './src/TodoList.js',
    project: './src/Project.js',
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: './',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    devMiddleware: {
      index: true,
      publicPath: './',
      mimeTypes: {
        phtml: 'text/html',
      },
      serverSideRender: true,
      writeToDisk: true,
    },
    static: './dist',
  },
};
