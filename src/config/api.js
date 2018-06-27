/**
 * 定义项目接口地址
 * 接口地址前端为根据 env 环境变量获取
 *
 * 提示：给每一个接口地址添加详细说明
 */
const CONFIGS = require('./index.js');

function getDomain() {
  if (CONFIGS.mock) {
    return '/mock';
  }

  return '';
}

const domain = getDomain();

module.exports = {
  // 测试接口，proxy and mock
  example: `${domain}/example.json`,
}
