import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeSass from 'node-sass';
import webpack from 'webpack';

// Loaders
const tsLoader: webpack.RuleSetUse = {
  loader: 'ts-loader'
};

const babelLoader: webpack.RuleSetUse = {
  loader: 'babel-loader'
};

const sassLoader: webpack.RuleSetUse = {
  loader: 'sass-loader',
  options: {
    implementation: nodeSass
  }
};

const postcssLoader: webpack.RuleSetUse = {
  loader: 'postcss-loader'
};

export const cssLoader: webpack.RuleSetLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    camelCase: true
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
const htmlWebpackPlugin: webpack.Plugin = new HtmlWebpackPlugin({
  template: './src/index.html'
});

// Configuration
const config: webpack.Configuration = {
  entry: {
    main: './src/index.ts'
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
