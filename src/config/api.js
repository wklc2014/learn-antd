/**
 * 定义项目接口地址
 * 接口地址前端为根据 env 环境变量获取
 *
 * 提示：给每一个接口地址添加详细说明
 */
import env from './env.js';

function getDomainByEnv(_env) {
  switch (_env) {
    case 'prod':
      return '';
    case 'dev':
      return '';
    case 'test':
      return '';
    case 'mock':
      return '/mock';
    default:
  }
}

const domain = getDomainByEnv(env);

export default {
  example: `${domain}/example`,
  users: `${domain}/users`,
}
