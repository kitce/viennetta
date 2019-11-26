import gulp from 'gulp';
import { scss } from './files';

type WatcherFunction = (task: gulp.TaskFunction) => gulp.TaskFunction;

const watch: WatcherFunction = (task) => {
  const _task: gulp.TaskFunction = () => (
    gulp.watch(scss.src, task)
  );
  _task.displayName = `watch:scss > ${task.displayName}`;
  return _task;
};

export default watch;
