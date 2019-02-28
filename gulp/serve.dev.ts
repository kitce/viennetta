import { TaskFunction } from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevelopmentConfig from '../webpack.config.dev';

const task: TaskFunction = () => {
  const compiler = webpack(webpackDevelopmentConfig);
  const stats: webpack.Options.Stats = { colors: true };
  const options: WebpackDevServer.Configuration = {
    ...webpackDevelopmentConfig.devServer,
    stats
  };
  const port = options.port as number;
  const server = new WebpackDevServer(compiler, options);
  server.listen(port, () => {
    console.info(`Starting server on http://localhost:${port}`);
  });
};

task.displayName = 'serve:dev';

export default task;
