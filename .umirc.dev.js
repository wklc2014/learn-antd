/**
 * dev 环境 umi 配置
 */
const CONFIGS = require('./src/config/index.js');

export default {
  define: {
    APP_ENV: 'DEV',
  },
  proxy: CONFIGS.proxy,
};