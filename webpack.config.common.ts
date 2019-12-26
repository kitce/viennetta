import webpack from 'webpack';
import typescript from './webpack/rules/typescript';
import scss from './webpack/rules/scss';
import htmlWebpackPlugin from './webpack/plugins/html-webpack-plugin';

/* Configuration */
const config: webpack.Configuration = {
  entry: {
    main: './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      typescript,
      scss
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ],
  stats: 'minimal'
};

export default config;
