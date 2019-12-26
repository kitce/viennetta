import gulp from 'gulp';
import gulpRename from 'gulp-rename';
import gulpTypedCssModules from 'gulp-typed-css-modules';
import typedCssModules from 'typed-css-modules';
import { css } from './files';
import sass from './sass';
import cleanCss from './clean:css';
import { options } from '../webpack/loaders/css-loader';

const camelCase = options.localsConvention === 'camelCase';

const renamer = (path) => {
  const basename = path.basename;
  path.basename = basename.replace('.css.d', '.scss.d');
};

const typeCss = () => (
  gulp.src(css.src, { base: '.' })
    .pipe(gulpTypedCssModules({
      tcm: typedCssModules,
      quiet: true,
      camelCase
    }))
    .pipe(gulpRename(renamer))
    .pipe(gulp.dest('.'))
);

typeCss.displayName = 'type:css';

const task = gulp.series(
  sass,
  typeCss,
  cleanCss
);

task.displayName = 'type:scss';

export default task;
