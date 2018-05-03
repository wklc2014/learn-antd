/**
 * 获取 KForm 表单组布局类型
 * 默认为表单布局类型的第一种
 * @return {string} 表单布局类型
 */
import is from 'is_js';

const formLayoutTypes =  ['horizontal', 'vertical', 'inline'];

export default function getFormLayout(layout) {
  if (is.inArray(layout, formLayoutTypes)) {
    return layout;
  }
  return formLayoutTypes[0];
}