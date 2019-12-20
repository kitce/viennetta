import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.common';

// Loaders
const styleLoader: webpack.RuleSetLoader = {
  loader: 'style-loader'
};

// Rules
const cssRule: webpack.RuleSetRule = {
  test: /\.s?css$/,
  use: [
    styleLoader
  ]
};

// Plugins
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

// Configuration
const dev: webpack.Configuration = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8080
  },
  devtool: 'source-map',
  module: {
    rules: [
      cssRule
    ]
  },
  plugins: [
    hotModuleReplacementPlugin
  ]
};

const strategy = {
  'module.rules.use': 'prepend' as merge.MergeStrategy
};
const config = merge.smartStrategy(strategy)(common, dev);

export default config;
