const path = require('path');

module.exports = {
    entry: ['webpack/hot/dev-server' , './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'starwars.bundle.js'
    },
    watch: true,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      open:true,
      hot: true,
      inline: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /(\.s(a|c)ss$)|css/,
          exclude: /(node_modules)/,
          use:[
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      ]
    }
  };