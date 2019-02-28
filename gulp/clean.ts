import gulp from 'gulp';
import cleanDist from './clean.dist';
import cleanScssDts from './clean.scss.d.ts';

const task = gulp.parallel(
  cleanScssDts,
  cleanDist
);

task.displayName = 'clean';

export default task;
