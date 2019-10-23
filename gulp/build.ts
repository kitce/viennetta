import gulp from 'gulp';
import sass from './build:scss';
import bundle from './bundle';
import minify from './minify';

const task = gulp.series(
  sass,
  bundle,
  minify
);

task.displayName = 'build';

export default task;
