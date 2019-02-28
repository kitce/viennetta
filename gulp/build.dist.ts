import { TaskFunction } from 'gulp';
import webpack from 'webpack';
import webpackProductionConfig from '../webpack.config.prod';

const task: TaskFunction = (done) => {
  const compiler = webpack(webpackProductionConfig);
  compiler.run((err, stats) => {
    if (err) return done(err);
    if (stats.hasErrors()) {
      const info = stats.toJson();
      return done(info.errors);
    }
    const output = stats.toString({ colors: true });
    console.info(output);
    done();
  });
};

task.displayName = 'build:dist';

export default task;
