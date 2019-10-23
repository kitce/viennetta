import gulp from 'gulp';
import cleanDist from './clean:dist';
import cleanScssDts from './clean:scss.d.ts';

const task = gulp.parallel(
  cleanDist,
  cleanScssDts
);

task.displayName = 'clean';

export default task;
