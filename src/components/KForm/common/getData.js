/**
 * 获取 KFormItem data 属性
 */
import chineseCities from '../common/__chineseCities.js';

export default function getData({ type, extMap }) {
  const { data, city } = extMap;
  let newData = data || [];
  switch (type) {
    case 'cascader':
      if (city && chineseCities[city]) {
        newData = [...chineseCities[city]];
      }
      break;
    default:
  }
  return newData;
}
