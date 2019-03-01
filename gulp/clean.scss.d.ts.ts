import del from 'del';
import gulp from 'gulp';
import { scssDts } from './files';

const task: gulp.TaskFunction = () => del(scssDts);

task.displayName = 'clean:scss.d.ts';

export default task;
