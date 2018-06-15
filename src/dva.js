import { message } from 'antd';
import { createLogger } from 'redux-logger';

import env from './config/env.js';

const is_dev = env === 'dev' || env === 'mock';

// eslint-disable-next-line
export function config() {

  const dva_options = {
    onError(err) {
      err.preventDefault();
      message.error(err.message);
    },
  }

  if (is_dev) {
    Object.assign(dva_options, {
      onAction: createLogger({
        collapsed: true,
      }),
    })
  }

  return dva_options;
}