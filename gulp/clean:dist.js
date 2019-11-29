import del from 'del';
import { dist } from './files';

const task = () => (
  del(dist.dir)
);

task.displayName = 'clean:dist';

export default task;
