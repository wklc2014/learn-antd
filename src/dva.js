/**
 * dva 配置文件
 */
import { message } from 'antd';
import { createLogger } from 'redux-logger';

const CONFIGS = require('./config/index.js');

// eslint-disable-next-line
export function config() {

  const dva_options = {
    onError(err) {
      err.preventDefault();
      message.error(err.message);
    },
  }

  if (CONFIGS.logger) {
    Object.assign(dva_options, {
      onAction: createLogger({
        collapsed: true,
      }),
    })
  }

  return dva_options;
}