import gulp from 'gulp';
import gulpRename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import gulpTypedCssModules from 'gulp-typed-css-modules';
import nodeSass from 'node-sass';
import typedCssModules from 'typed-css-modules';
import { scss } from './files';
import { cssLoader } from '../webpack.config.common';

gulpSass.compiler = nodeSass;

const options = cssLoader.options; // eslint-disable-line @typescript-eslint/no-explicit-any
const camelCase = options.camelCase;

const renamer = (path) => {
  const basename = path.basename;
  path.basename = basename.replace('.css.d', '.scss.d');
};

const task = () => (
  gulp.src(scss.src, { base: '.' })
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulpTypedCssModules({
      tcm: typedCssModules,
      quiet: true,
      camelCase
    }))
    .pipe(gulpRename(renamer))
    .pipe(gulp.dest('.'))
);

task.displayName = 'type:scss';

export default task;
