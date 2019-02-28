import del from 'del';
import { TaskFunction } from 'gulp';
import { dist } from './files';

const task: TaskFunction = () => del(dist);

task.displayName = 'clean:dist';

export default task;
