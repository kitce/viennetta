import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevelopmentConfig from '../webpack.config.dev';

const task: gulp.TaskFunction = () => {
  const compiler = webpack(webpackDevelopmentConfig);
  const { devServer, stats, watchOptions } = webpackDevelopmentConfig;
  const options: WebpackDevServer.Configuration = {
    ...devServer,
    stats,
    watchOptions
  };
  const port = options.port as number;
  const server = new WebpackDevServer(compiler, options);
  server.listen(port, () => {
    console.info(`Starting server on http://localhost:${port}`);
  });
};

task.displayName = 'serve:dev';

export default task;
