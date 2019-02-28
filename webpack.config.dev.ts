import webpack from 'webpack';
import merge, { MergeStrategy } from 'webpack-merge';
import common from './webpack.config.common';

// Loaders
const styleLoader: webpack.RuleSetUse = {
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
    port: 8000
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
  'module.rules.use': <MergeStrategy>'prepend'
};
const config: webpack.Configuration = merge.smartStrategy(strategy)(common, dev);

export default config;
