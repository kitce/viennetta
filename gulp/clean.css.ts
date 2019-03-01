import del from 'del';
import gulp from 'gulp';
import { css } from './files';

const task: gulp.TaskFunction = () => del(css);

task.displayName = 'clean:css';

export default task;
