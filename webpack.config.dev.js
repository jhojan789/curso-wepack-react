const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve:{
    extensions: ['.js','.jsx'],
    alias:{
      '@components' : path.resolve(__dirname, 'src/components'),
      '@styles' : path.resolve(__dirname, 'src/styles')
    }
  },
  
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader'
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader','sass-loader']
        
      }

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),

    new MiniCssWebpackPlugin({
      filename: '[name].css'
    }),

    new CleanWebpackPlugin()

  ],
  devServer:{
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3006,
    
  },

}