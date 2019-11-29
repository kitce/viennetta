import del from 'del';
import { scss } from './files';

const task = () => (
  del(scss.dts)
);

task.displayName = 'clean:scss.d.ts';

export default task;
