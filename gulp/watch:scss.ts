import gulp from 'gulp';
import sass from './build:scss';
import { scss } from './files';

const task: gulp.TaskFunction = () => (
  gulp.watch(scss.src, sass)
);

task.displayName = 'watch:scss';

export default task;
