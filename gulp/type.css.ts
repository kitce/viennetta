import gulp from 'gulp';
import gulpRename from 'gulp-rename';
import gulpTypedCssModules from 'gulp-typed-css-modules';
import typedCssModules from 'typed-css-modules';
import { css } from './files';
import { cssLoader } from '../webpack.config.common';

const options = cssLoader.options as any;
const camelCase: boolean | string = options.camelCase;

const renamer = (path: gulpRename.ParsedPath) => {
  const basename = path.basename as string;
  path.basename = basename.replace('.css.d', '.scss.d');
};

const task: gulp.TaskFunction = () => (
  gulp.src(css, { base: '.' })
    .pipe(gulpTypedCssModules({
      tcm: typedCssModules,
      camelCase
    }))
    .pipe(gulpRename(renamer))
    .pipe(gulp.dest('.'))
);

task.displayName = 'type:css';

export default task;
