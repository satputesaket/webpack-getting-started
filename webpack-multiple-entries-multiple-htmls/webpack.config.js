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
       title: 'Output Management'
     }),
      new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'modules/admin-mgmt/admin.html',
      chunks:['modules/admin-mgmt/admin']
    }),
      new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'modules/member-mgmt/member.html',
      chunks:['modules/member-mgmt/member']
    })  
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
};