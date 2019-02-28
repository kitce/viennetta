import gulp, { TaskFunction } from 'gulp';
import { scss } from './files';
import cleanScssDts from './clean.scss.d.ts';
import buildScssDts from './build.scss.d.ts';

const task: TaskFunction = () => (
  gulp.watch(scss,
    gulp.series(
      cleanScssDts,
      buildScssDts
    )
  )
);

task.displayName = 'watch:scss';

export default task;
