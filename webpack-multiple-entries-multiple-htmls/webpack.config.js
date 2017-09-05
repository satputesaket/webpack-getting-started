const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
     app: './src/index.js',
     print: './src/print.js',
     display:['./src/display.js','./src/common.js'],
     'modules/admin-mgmt/admin':['./src/modules/admin-mgmt/admin.js','./src/display.js'],
     'modules/member-mgmt/member':['./src/modules/member-mgmt/member.js','./src/common.js']
    },

  plugins:[
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
       title: 'index',
       template: 'src/index.ejs',
       chunks:['app']
     }),
      new HtmlWebpackPlugin({
      title: 'admin',
      filename: 'modules/admin-mgmt/admin.html',
      chunks:['modules/admin-mgmt/admin']
    }),
      new HtmlWebpackPlugin({
      title: 'member',
      filename: 'modules/member-mgmt/member.html',
      chunks:['modules/member-mgmt/member']
    })  
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
};