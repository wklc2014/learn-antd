/**
 * 设置表单栅格布局
 * @param  {number} cols     表单布局列数
 * @param  {number} colspan     一个表单元素占几列
 * @return {object}             表格栅格布局属性
 */
export default function getGridLayout(cols = 1, colspan = 1) {

  colspan = Math.min(cols, colspan);

  switch (cols) {
    case 4:
      return [
        { xs: 24, sm: 24, md: 12, lg: 8,  xl: 6  },
        { xs: 24, sm: 24, md: 24, lg: 16, xl: 12 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 18 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
      ][colspan - 1];
    case 3:
      return [
        { xs: 24, sm: 24, md: 12, lg: 12, xl: 8  },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 16 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
      ][colspan - 1];
    case 2:
      return [
        { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
      ][colspan - 1];
    default:
      return { span: 24 };
  }
}