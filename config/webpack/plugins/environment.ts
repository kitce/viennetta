import { EnvironmentPlugin } from 'webpack';

const plugin = new EnvironmentPlugin({
  NODE_ENV: 'development'
});

export default plugin;
