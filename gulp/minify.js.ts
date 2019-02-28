import gulp, { TaskFunction } from 'gulp';
import gulpUglifyCompose from 'gulp-uglify/composer';
import uglifyJS from 'uglify-js';
import { distJS } from './files';

const uglify = gulpUglifyCompose(uglifyJS, console);

const task: TaskFunction = () => (
  gulp.src(distJS)
    .pipe(uglify())
    .pipe(gulp.dest('.'))
);

task.displayName = 'minify:js';

export default task;
