import del from 'del';
import { TaskFunction } from 'gulp';
import { scssDts } from './files';

const task: TaskFunction = () => del(scssDts);

task.displayName = 'clean:scss.d.ts';

export default task;
