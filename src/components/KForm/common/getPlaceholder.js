/**
 * 获取 KFormItem 表单元素 placeholder 属性
 * placeholder 初始 placeholder
 * label 表单元素 label 属性
 * id 表单元素 id
 * type 表单元素输入类型
 */
export default function getPlaceholder({ placeholder, label, id, type }) {

  if (!placeholder && !label && !id) {
    return null;
  }

  let newPlaceholder = placeholder || `请输入${label || id}`;
  switch (type) {
    case 'dateRange':
      newPlaceholder = [
        `开始${newPlaceholder}`,
        `结束${newPlaceholder}`,
      ];
      break;
    default:
  }

  return newPlaceholder;
}