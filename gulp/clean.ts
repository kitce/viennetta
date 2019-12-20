import gulp from 'gulp';
import cleanDist from './clean:dist';
import cleanCss from './clean:css';
import cleanScssDts from './clean:scss.d.ts';

const task = gulp.parallel(
  cleanDist,
  cleanCss,
  cleanScssDts
);

task.displayName = 'clean';

export default task;
