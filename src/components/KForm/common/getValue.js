/**
 * 获取 KFormItem 表单元素相关值操作
 */
import is from 'is_js';
import moment from 'moment';

export function setValue ({ value, id, changeValue, ext = {} }) {

  const new_change_value = valueBefore({ value: changeValue, ext });

  if (is.object(value) && !moment.isMoment(value)) {
    return {
      ...value,
      [id]: new_change_value,
    };
  }
  return {
    main: value,
    [id]: new_change_value,
  }
}

// 获取对象指定 key
export function getValue({ value, id, ext }) {
  const target_value = is.object(value) && !moment.isMoment(value) ? value[id] : { main: value }[id];
  return  valueBefore({ value: target_value, ext });
}

// value 设置和获取前需要做些转换处理
function valueBefore({ value, ext = {} }) {

  let new_value = value;

  const { toUpperCase, toLowerCase } = ext;

  if (toUpperCase && is.string(value)) {
    new_value = value.toUpperCase();
  } else if (toLowerCase && is.string(value)) {
    new_value = value.toLowerCase();
  }

  return new_value;
}
