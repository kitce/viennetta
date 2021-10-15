import webpack from 'webpack';
import html from './plugins/html-webpack-plugin';
import * as asset from './rules/asset';
import scss from './rules/scss';
import typescript from './rules/typescript';

const config: webpack.Configuration = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      asset.resource,
      asset.source,
      scss,
      typescript
    ]
  },
  plugins: [
    html
  ]
};

export default config;
