import gulp from 'gulp';
import cleanScssDts from './clean.scss.d.ts';
import sass from './sass';
import cleanCSS from './clean.css';
import { scss } from './files';

const task: gulp.TaskFunction = () => (
  gulp.watch(scss,
    gulp.series(
      cleanScssDts,
      sass,
      cleanCSS
    )
  )
);

task.displayName = 'watch:scss';

export default task;
