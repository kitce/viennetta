import del from 'del';
import gulp, { TaskFunction } from 'gulp';
import gulpCleanCSS from 'gulp-clean-css';
import gulpTypedCssModules from 'gulp-typed-css-modules';
import gulpUglifyCompose from 'gulp-uglify/composer';
import typedCssModules from 'typed-css-modules';
import uglifyJS from 'uglify-js';
import webpack from 'webpack';
import webpackProductionConfig from './webpack.config.prod';

const uglify = gulpUglifyCompose(uglifyJS, console);

const files = {
  ts: ['src/**/*.ts'],
  scss: ['src/**/*.scss', '!src/**/_*.scss', '!src/index.scss'],
  scssDts: ['src/**/*.scss.d.ts'],
  dist: 'dist',
  distJS: ['dist/*.js'],
  distCSS: ['dist/*.css'],
};

const cleanDist: TaskFunction = () => (
  del(files.dist)
);

const cleanScssDts: TaskFunction = () => (
  del(files.scssDts)
);

const buildProduction: TaskFunction = (done) => {
  const compiler = webpack(webpackProductionConfig);
  compiler.run((err, stats) => {
    if (err) return done(err);
    if (stats.hasErrors()) {
      const info = stats.toJson();
      return done(info.errors);
    }
    const output = stats.toString({ colors: true });
    console.info(output);
    done();
  });
};

export const buildScssDts: TaskFunction = () => (
  gulp.src(files.scss, { base: '.' })
    .pipe(gulpTypedCssModules({ tcm: typedCssModules }))
    .pipe(gulp.dest('.'))
);

const minifyJS: TaskFunction = () => (
  gulp.src(files.distJS)
    .pipe(uglify())
    .pipe(gulp.dest(files.dist))
);

const minifyCSS: TaskFunction = () => (
  gulp.src(files.distCSS)
    .pipe(gulpCleanCSS())
    .pipe(gulp.dest(files.dist))
);

export const clean = gulp.parallel(
  cleanDist,
  cleanScssDts
);

export const build = gulp.series(
  clean,
  buildScssDts,
  buildProduction,
  gulp.parallel(
    minifyJS,
    minifyCSS
  )
);
