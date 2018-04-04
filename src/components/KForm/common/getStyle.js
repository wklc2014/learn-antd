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