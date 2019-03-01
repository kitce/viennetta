import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.common';

// Rules
const cssRule: webpack.RuleSetRule = {
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader
  ]
};

// Plugins
const miniCssExtractPlugin: webpack.Plugin = new MiniCssExtractPlugin({
  filename: '[name].bundle.[hash].css'
});

// Configuration
const prod: webpack.Configuration = {
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
  'module.rules.use': 'prepend' as merge.MergeStrategy
};
const config: webpack.Configuration = merge.smartStrategy(strategy)(common, prod);

export default config;
