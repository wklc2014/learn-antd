import is from 'is_js';
import env from '../src/config/env.js';
import readFileList from './readFileList.js';

const mock_config = {};
const mock_data = readFileList('./mock/data/');

// 只有环境变量为 mock 的情况才使用前端的 mock 数据
if (env === 'mock') {
  mock_data.forEach(data => {
    const { mock, url } = data;
    Object.assign(mock_config, {
      [`GET /mock${url}`]: mock,
      [`POST /mock${url}`]: mock,
    })
  })
}

export default mock_config;
