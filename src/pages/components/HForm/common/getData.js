/**
 * 获取表单元素的 data 属性
 */
import _chineseCities from './_chineseCities.js';

export default function getData({ type, ext = {} }) {
  const { data, city } = ext;

  let new_data = data || [];
  switch (type) {
    case 'cascader':
    case 'treeSelect':
      if (city && _chineseCities[city]) {
        new_data = [..._chineseCities[city]];
      }
      break;
    default:
  }
  return new_data;
}