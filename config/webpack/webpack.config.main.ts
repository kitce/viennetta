import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.config.base';

const main: webpack.Configuration = {
  entry: {
    main: './src/main.ts'
  }
};

const config = merge(base, main);

export default config;
