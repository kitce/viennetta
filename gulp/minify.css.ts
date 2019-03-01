import gulp from 'gulp';
import gulpCleanCSS from 'gulp-clean-css';
import { distCSS } from './files';

const task: gulp.TaskFunction = () => (
  gulp.src(distCSS, { base: '.' })
    .pipe(gulpCleanCSS())
    .pipe(gulp.dest('.'))
);

task.displayName = 'minify:css';

export default task;
