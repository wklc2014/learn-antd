/**
 * mock 配置文件
 */
import readFileList from './readFileList.js';

const mockConfig = {};
const mockData = readFileList('./mock/data/');

mockData.forEach((data) => {
  const { mock, url } = data;
  Object.assign(mockConfig, {
    [`GET ${url}`]: mock,
    [`POST ${url}`]: mock,
  })
})

export default mockConfig;
