import webpack from 'webpack';
import environment from './plugins/environment';
import html from './plugins/html-webpack-plugin';
import * as asset from './rules/asset';
import scss from './rules/scss';
import ts from './rules/ts';

const config: webpack.Configuration = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      asset.resource,
      asset.source,
      scss,
      ts
    ]
  },
  plugins: [
    environment,
    html
  ]
};

export default config;
