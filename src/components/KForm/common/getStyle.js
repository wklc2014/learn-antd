/**
 * 获取 KFormItem 表单元素 style 属性
 * type 表单元素输入类型
 * extMap 表单元素扩展配置
 * style 表单元素默认 style
 */

export default function getStyle({ type, extMap, style }) {
  const { toUpperCase, toLowerCase } = extMap;
  const newStyle = {...style};

  // css 大小写处理
  if (toUpperCase) {
    Object.assign(newStyle, { textTransform: 'uppercase' });
  } else if (toLowerCase) {
    Object.assign(newStyle, { textTransform: 'lowercase' });
  }

  switch (type) {
    case 'cascader':
    case 'date':
    case 'dateRange':
    case 'dateMonth':
    case 'time':
    case 'number':
    case 'select':
    case 'editor':
      Object.assign(newStyle, { width: '100%' });
      break;
    default:
  }

  return newStyle;
}