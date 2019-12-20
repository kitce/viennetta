import gulp from 'gulp';
import { scss } from './files';

const watch = (task) => {
  const _task = () => (
    gulp.watch(scss.src, task)
  );
  _task.displayName = `watch:scss > ${task.displayName}`;
  return _task;
};

export default watch;
