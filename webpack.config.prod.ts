import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import merge, { MergeStrategy } from 'webpack-merge';
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
  }
};

const strategy = {
  'module.rules.use': <MergeStrategy>'prepend'
};
const config: webpack.Configuration = merge.smartStrategy(strategy)(common, prod);

export default config;
