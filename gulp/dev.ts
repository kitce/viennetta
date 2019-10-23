import gulp from 'gulp';
import sass from './build:scss';
import watcher from './watch:scss';
import server from './dev:server';

const task = gulp.series(
  sass,
  gulp.parallel(
    watcher,
    server
  )
);

task.displayName = 'dev';

export default task;
