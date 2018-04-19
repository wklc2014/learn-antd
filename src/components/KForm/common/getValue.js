/**
 * 获取 KFormItem 表单元素相关值操作
 */
import is from 'is_js';

export default function getValue ({ value, id, changeValue, extMap }) {
  const { toUpperCase, toLowerCase } = extMap;

  if (toUpperCase && is.string(changeValue)) {
    changeValue = changeValue.toUpperCase();
  } else if (toLowerCase && is.string(changeValue)) {
    changeValue = changeValue.toLowerCase();
  }

  if (is.object(value)) {
    return {
      ...value,
      [id]: changeValue,
    };
  }
  return {
    base: value,
    [id]: changeValue,
  }
}

export function setValue(value, id = 'base') {
  return is.object(value) ? value[id] : { base: value }[id];
}