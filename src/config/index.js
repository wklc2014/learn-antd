/**
 * 项目环境全局配置
 * APP_MOCK: 是否开启 mock 功能
 * APP_LOGGER: 是否开启代理功能
 */
const APP_MOCK = true;
const APP_LOGGER = true;
const APP_PROXY = true;

const PROXY_CONFIG = APP_PROXY ? {
  '/proxy': {
    target: 'http://jsonplaceholder.typicode.com/',
    changeOrigin: true,
    pathRewrite: { '^/proxy' : '' },
  },
} : {};

module.exports = {
  mock: APP_MOCK,
  logger: APP_LOGGER,
  proxy: PROXY_CONFIG,
}
