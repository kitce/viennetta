import gulp from 'gulp';
import cleanDist from './clean.dist';
import cleanScssDts from './clean.scss.d.ts';
import sass from './sass';
import cleanCSS from './clean.css';
import bundle from './bundle';
import minify from './minify';

const task = gulp.series(
  gulp.parallel(
    cleanDist,
    cleanScssDts
  ),
  sass,
  cleanCSS,
  bundle,
  minify
);

task.displayName = 'build';

export default task;
