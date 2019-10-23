import gulp from 'gulp';
import sass from './sass';
import typeCSS from './type:css';

const task = gulp.series(
  sass,
  typeCSS
);

task.displayName = 'build:sass';

export default task;
