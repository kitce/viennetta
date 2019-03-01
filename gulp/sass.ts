import gulp from 'gulp';
import buildSCSS from './build.scss';
import typeCSS from './type.css';

const task = gulp.series(
  buildSCSS,
  typeCSS
);

task.displayName = 'sass';

export default task;
