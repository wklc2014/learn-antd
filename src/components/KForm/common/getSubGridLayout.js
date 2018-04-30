/**
 * 获取表单子元素的栅格布局
 * @param  {Number} span [第一个子元素占栅格布局份数，总数24]
 * @return {object}           [获取表单子元素的栅格布局]
 */
export default function getSubGridLayout (span = 12) {
  const left = {
    xs: 24,
    sm: span,
    md: span,
    lg: span,
    xl: span,
    style: { marginBottom: '8px' },
  };

  const right = {
    xs: 24,
    sm: 24 - span,
    md: 24 - span,
    lg: 24 - span,
    xl: 24 - span,
  };

  return { left, right };
}