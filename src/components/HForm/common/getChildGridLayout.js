/**
 * 获取表单子元素的栅格布局
 * @param  {Number} childSpan [第一个子元素占栅格布局份数，总数24]
 * @return {object}           [获取表单子元素的栅格布局]
 */
export default function getChildGridLayout (childSpan = 12) {
  const left = {
    xs: 24,
    sm: childSpan,
    md: childSpan,
    lg: childSpan,
    xl: childSpan,
    style: { marginBottom: '8px' },
  };

  const right = {
    xs: 24,
    sm: 24 - childSpan,
    md: 24 - childSpan,
    lg: 24 - childSpan,
    xl: 24 - childSpan,
  };

  return { left, right };
}