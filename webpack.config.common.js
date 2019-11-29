import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeSass from 'node-sass';

// Loaders
const tsLoader = {
  loader: 'ts-loader'
};

const babelLoader = {
  loader: 'babel-loader'
};

const sassLoader = {
  loader: 'sass-loader',
  options: {
    implementation: nodeSass
  }
};

const postcssLoader = {
  loader: 'postcss-loader'
};

export const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    camelCase: true
  }
};

// Rules
const tsRule = {
  exclude: /node_modules/,
  test: /\.ts$/,
  use: [
    babelLoader,
    tsLoader
  ]
};

const cssRule = {
  test: /\.s?css$/,
  use: [
    cssLoader,
    postcssLoader,
    sassLoader
  ]
};

// Plugins
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
});

// Configuration
const config = {
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
