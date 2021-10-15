import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import main from './webpack.config.main';

interface IConfiguration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const dev: IConfiguration = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    hot: true
  }
};

const config = merge(main, dev);

export default config;
