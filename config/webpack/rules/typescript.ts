import webpack from 'webpack';
import ts from '../loaders/ts-loader';

const rule: webpack.RuleSetRule = {
  // exclude: /node_modules/,
  test: /\.ts$/,
  use: [
    ts
  ]
};

export default rule;
