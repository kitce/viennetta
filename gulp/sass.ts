import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';
import { scss } from './files';

gulpSass.compiler = nodeSass;

const task: gulp.TaskFunction = () => (
  gulp.src(scss.src, { base: '.' })
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('.'))
);

task.displayName = 'sass';

export default task;
