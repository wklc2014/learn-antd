/**
 * 获取 KFormItem 表单元素 placeholder 属性
 * placeholder 初始 placeholder
 * label 表单元素 label 属性
 * id 表单元素 id
 * type 表单元素输入类型
 */
export default function getPlaceholder({ placeholder, label, id, type }) {

  if (placeholder === false) {
    // 手动设置 placeholder 为 false
    // 则不显示 placeholder
    return '';
  }

  if (!placeholder && !label && !id) {
    // 如果 placeholder、label、id 都没有设置
    // 也不显示 placeholder
    return '';
  }

  let newPlaceholder = placeholder || `请输入${label || id}`;
  switch (type) {
    case 'range':
      newPlaceholder = [
        `开始${newPlaceholder}`,
        `结束${newPlaceholder}`,
      ];
      break;
    default:
  }

  return newPlaceholder;
}