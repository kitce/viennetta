import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeSass from 'node-sass';
import webpack from 'webpack';

// Loaders
const tsLoader: webpack.RuleSetLoader = {
  loader: 'ts-loader'
};

const babelLoader: webpack.RuleSetLoader = {
  loader: 'babel-loader'
};

const sassLoader: webpack.RuleSetLoader = {
  loader: 'sass-loader',
  options: {
    implementation: nodeSass
  }
};

const postcssLoader: webpack.RuleSetLoader = {
  loader: 'postcss-loader'
};

export const cssLoader: webpack.RuleSetLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localsConvention: 'camelCase'
  }
};

// Rules
const tsRule: webpack.RuleSetRule = {
  exclude: /node_modules/,
  test: /\.ts$/,
  use: [
    babelLoader,
    tsLoader
  ]
};

const cssRule: webpack.RuleSetRule = {
  test: /\.s?css$/,
  use: [
    cssLoader,
    postcssLoader,
    sassLoader
  ]
};

// Plugins
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/main.html'
});

// Configuration
const config: webpack.Configuration = {
  entry: {
    main: './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      tsRule,
      cssRule
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ],
  stats: 'minimal'
};

export default config;
