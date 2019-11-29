import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.config.common';

// Rules
const cssRule = {
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader
  ]
};

// Plugins
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].bundle.[hash].css'
});

// Configuration
const prod = {
  mode: 'production',
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      cssRule
    ]
  },
  plugins: [
    miniCssExtractPlugin
  ],
  optimization: {
    minimize: false
  },
  stats: {
    colors: true
  }
};

const strategy = {
  'module.rules.use': 'prepend'
};
const config = merge.smartStrategy(strategy)(common, prod);

export default config;
