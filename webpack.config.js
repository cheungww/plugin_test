let path = require('path')
/* let DonePlugin = require('./plugins/DonePlugin.js')
let AsyncPlugin = require('./plugins/AsyncPlugin.js') */
let HtmlWebpackPlugin = require('html-webpack-plugin')
let FileListPlugin = require('./plugins/FileListPlugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let InlineSourcePlugin = require('./plugins/InlineSourcePlugin')
// let UploadPlugin = require('./plugins/UploadPlugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '打包后上传文件的网址' 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    /* new DonePlugin(),
    new AsyncPlugin() */
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
     new FileListPlugin({
       filename: 'list.md'
     }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new InlineSourcePlugin({
      test: /(\.js|css)/
    }),
    /* new UploadPlugin({
      bucket: 'test',  // 七牛的存储空间
      domain: 'poyrjyh1b.bkt.clouddn.com',
      accessKey: 'xxxxxx', // 七牛云的两对密匙
      secretKey: 'yyyyyy' // 七牛云的两对密匙
    }) */
  ]
}