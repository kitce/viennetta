import gulp from 'gulp';
import cleanScssDts from './clean.scss.d.ts';
import buildScssDts from './build.scss.d.ts';
import watchScss from './watch.scss';
import serveDev from './serve.dev';

const task = gulp.series(
  cleanScssDts,
  buildScssDts,
  gulp.parallel(
    watchScss,
    serveDev
  )
);

task.displayName = 'dev';

export default task;
