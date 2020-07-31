const path = require('path');
const merge = require('webpack-merge');
const MiniProgramPlugin = require('mini-program-webpack-loader').plugin;

const resolve = (file) => path.resolve(__dirname, '../', file);
global.context = resolve('src/miniprogram');

const baseConfig = require('./webpack.config.base');


module.exports = merge(baseConfig, {
  context: global.context,
  entry: resolve('src/miniprogram/app.json'),
  output: {
    path: resolve('dist/miniprogram')
  },
  plugins: [
    new MiniProgramPlugin({
      extfile: false
    })
  ]
});

