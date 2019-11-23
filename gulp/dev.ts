import gulp from 'gulp';
import typeScss from './type:scss';
import watchScss from './watch:scss';
import server from './dev:server';

const watcher = watchScss(typeScss);

const task = gulp.series(
  typeScss,
  gulp.parallel(
    watcher,
    server
  )
);

task.displayName = 'dev';

export default task;
