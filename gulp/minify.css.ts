import gulp, { TaskFunction } from 'gulp';
import gulpCleanCSS from 'gulp-clean-css';
import { distCSS } from './files';

const task: TaskFunction = () => (
  gulp.src(distCSS)
    .pipe(gulpCleanCSS())
    .pipe(gulp.dest('.'))
);

task.displayName = 'minify:css';

export default task;
