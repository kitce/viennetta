import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import miniCssExtract from './plugins/mini-css-extract';
import main from './webpack.config.main';

const prod: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), '/dist')
  },
  plugins: [
    miniCssExtract
  ]
};

const config = merge(main, prod);

export default config;
