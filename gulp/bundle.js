import gulp from 'gulp';
import typeCSS from './type:scss';
import webpack from 'webpack';
import webpackProductionConfig from '../webpack.config.prod';

const bundle = (done) => {
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

const task = gulp.series(
  typeCSS,
  bundle
);

task.displayName = 'bundle';

export default task;
