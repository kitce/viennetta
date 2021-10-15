import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import miniCssExtractPlugin from './plugins/mini-css-extract-plugin';
import main from './webpack.config.main';

const prod: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), '/dist')
  },
  plugins: [
    miniCssExtractPlugin
  ]
};

const config = merge(main, prod);

export default config;
