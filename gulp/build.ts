import gulp from 'gulp';
import clean from './clean';
import buildScssDts from './build.scss.d.ts';
import buildDist from './build.dist';
import minifyJS from './minify.js';
import minifyCSS from './minify.css';

const task = gulp.series(
  clean,
  buildScssDts,
  buildDist,
  gulp.parallel(
    minifyJS,
    minifyCSS
  )
);

task.displayName = 'build';

export default task;
