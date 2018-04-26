/**
 * 获取 KFormItem 表单元素栅格布局
 * @param  {string} layout    表单布局类型
 * @param  {number} colSpan   该表单元素横跨几列，默认为1
 * @param  {number} columns   表单几列布局，默认为1
 * @return {object}           表单元素栅格化布局属性
 */
export default function getFormItemLayout(layout, colSpan = 1, columns = 1) {

  if (layout === 'horizontal') {
    // 只有当表单布局为 horizontal 时，
    // 表单元素才采用栅格布局
    colSpan = Math.min(columns, colSpan);
    switch (columns) {
      case 4:
        return [
          {
            labelCol: { xs: 24, sm: 6, md: 6, lg: 6, xl: 12 },
            wrapperCol: { xs: 24, sm: 18, md: 18, lg: 18, xl: 12 },
          },
          {
            labelCol: { xs: 24, sm: 6, md: 3, lg: 3, xl: 6 },
            wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 18 },
          },
          {
            labelCol: { xs: 24, sm: 6, md: 3, lg: 2, xl: 4 },
            wrapperCol: { xs: 24, sm: 18, md: 21, lg: 22, xl: 20 },
          },
          {
            labelCol: { xs: 24, sm: 6, md: 3, lg: 2, xl: 3 },
            wrapperCol: { xs: 24, sm: 18, md: 21, lg: 22, xl: 21 },
          },
        ][colSpan - 1];
      case 3:
      case 2:
        return [
          {
            labelCol: { xs: 24, sm: 6, md: 6, lg: 6, xl: 6 },
            wrapperCol: { xs: 24, sm: 18, md: 18, lg: 18, xl: 18 },
          },
          {
            labelCol: { xs: 24, sm: 6, md: 3, lg: 3, xl: 3 },
            wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 21 },
          },
          {
            labelCol: { xs: 24, sm: 6, md: 3, lg: 3, xl: 2 },
            wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 22 },
          },
        ][colSpan - 1];
      default:
        return {
          labelCol: { xs: 24, sm: 6 },
          wrapperCol: { xs: 24, sm: 16 }
        };
    }
  }
  return null;

}

// 针对一些表单元素，如按钮，布局需要 offset
export function getFormItemOffset(formItemLayout, offset = '') {
  // 直接返回原始的布局
  if (!offset) return formItemLayout;

  // 将 formItemLayout 元素的 labelCol 值转换
  const newFormItemLayout = {};
  Object.keys(formItemLayout).forEach(val => {
    const label = formItemLayout.labelCol;
    const wrapper = formItemLayout.wrapperCol;
    if (val === 'labelCol') {
      newFormItemLayout.wrapperCol = getOffset(label, wrapper);
    }
  })
  return newFormItemLayout;
}

// 给一个布局对象，添加 offset 属性
function getOffset(label = {}, wrapper) {
  const newData = {};
  Object.keys(label).forEach(d => {
    const v = label[d];
    const w = wrapper[d] || 0;
    if (v > 0 && v < 24) {
      newData[d] = { span: w || v, offset: v };
    } else {
      newData[d] = v;
    }
  })
  return newData;
}