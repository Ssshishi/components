import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  define: {
    APP_NAME: 'APP_NAME',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelPlugins: ['@babel/plugin-proposal-export-namespace-from'],
  fastRefresh: {},
  dva: {},
  antd: false,
  hash: true,
  routes,
});
