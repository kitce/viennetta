import gulp from 'gulp';
import cleanCSS from './clean.css';
import cleanScssDts from './clean.scss.d.ts';
import cleanDist from './clean.dist';

const task = gulp.parallel(
  cleanCSS,
  cleanScssDts,
  cleanDist
);

task.displayName = 'clean';

export default task;
