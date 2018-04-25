/**
 * 获取 KFormItem data 属性
 */
import __chineseCities from '../common/__chineseCities.js';

export default function getData({ type, extMap }) {
  const { data, city } = extMap;
  let newData = data || [];
  switch (type) {
    case 'cascader':
    case 'treeSelect':
      if (city && __chineseCities[city]) {
        newData = [...__chineseCities[city]];
      }
      break;
    default:
  }
  return newData;
}
