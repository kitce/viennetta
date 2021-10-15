import webpack from 'webpack';
import css from '../loaders/css-loader';
import postcss from '../loaders/postcss-loader';
import sass from '../loaders/sass-loader';
import style from '../loaders/style-loader';

const rule: webpack.RuleSetRule = {
  test: /\.s?css$/,
  use: [
    style,
    css,
    postcss,
    sass
  ]
};

export default rule;
