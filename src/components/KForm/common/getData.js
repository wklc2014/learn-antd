/**
 * 获取 KFormItem data 属性
 * data 作为 extMap 里的附加字段
 * 可以保存 select, checkbox 等类型表单的多值选项
 */
import __chineseCities from '../common/__chineseCities.js';

export default function getData({ type, ext = {} }) {
  const { data, city } = ext;
  let new_data = data || [];
  switch (type) {
    case 'cascader':
    case 'treeSelect':
      if (city && __chineseCities[city]) {
        new_data = [...__chineseCities[city]];
      }
      break;
    default:
  }
  return new_data;
}
