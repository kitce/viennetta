import gulp from 'gulp';
import cleanScssDts from './clean.scss.d.ts';
import sass from './sass';
import cleanCSS from './clean.css';
import watchSCSS from './watch.scss';
import serveDev from './serve.dev';

const task = gulp.series(
  cleanScssDts,
  sass,
  cleanCSS,
  gulp.parallel(
    watchSCSS,
    serveDev
  )
);

task.displayName = 'dev';

export default task;
