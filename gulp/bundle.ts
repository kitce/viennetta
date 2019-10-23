import gulp from 'gulp';
import webpack from 'webpack';
import webpackProductionConfig from '../webpack.config.prod';

const task: gulp.TaskFunction = (done) => {
  const compiler = webpack(webpackProductionConfig);
  compiler.run((err, stats) => {
    if (err) return done(err);
    if (stats.hasErrors()) {
      const info = stats.toJson();
      return done(info.errors);
    }
    const output = stats.toString(webpackProductionConfig.stats);
    console.info(output);
    return done();
  });
};

task.displayName = 'bundle';

export default task;
