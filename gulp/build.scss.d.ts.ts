import gulp, { TaskFunction } from 'gulp';
import gulpTypedCssModules from 'gulp-typed-css-modules';
import typedCssModules from 'typed-css-modules';
import { scss } from './files';

const task: TaskFunction = () => (
  gulp.src(scss, { base: '.' })
    .pipe(gulpTypedCssModules({ tcm: typedCssModules }))
    .pipe(gulp.dest('.'))
);

task.displayName = 'build:scss.d.ts';

export default task;
