import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config.dev';

const task = () => {
  const compiler = webpack(config);
  const { devServer, stats, watchOptions } = config;
  const options = {
    ...devServer,
    stats,
    watchOptions
  };
  const port = options.port;
  const server = new WebpackDevServer(compiler, options);
  server.listen(port);
};

task.displayName = 'dev:server';

export default task;
