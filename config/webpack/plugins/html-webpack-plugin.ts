import HtmlWebpackPlugin from 'html-webpack-plugin';

const plugin = new HtmlWebpackPlugin({
  template: './public/index.html'
});

export default plugin;
