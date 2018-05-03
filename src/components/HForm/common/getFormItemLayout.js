/**
 * 获取 FormItem 表单元素栅格布局
 * @param  {string} formLayout  表单布局类型
 * @param  {number} cols        表单几列布局，默认为1 (一行放几个表单元素的问题)
 * @param  {number} colspan     该表单元素横跨几列，默认为 1 (一个表单元素横跨几列的问题)
 * @return {object}             表单元素栅格化布局对象 { labelCol, wrapperCol }
 */
export function getFormItemLayout(formLayout, cols = 1, colspan = 1) {

  if (formLayout === 'horizontal') {
    /**
     * 只有当表单布局为 horizontal 时，
     * 表单元素才采用栅格布局
     */

    // 一个表单元素横跨列数最多和表单组列数相同
    colspan = Math.min(cols, colspan);

    if (cols === 4) {
      return [
        {
          labelCol:   { xs: 24, sm: 6,  md: 6,  lg: 6,  xl: 12 },
          wrapperCol: { xs: 24, sm: 18, md: 18, lg: 18, xl: 12 },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 3,  xl: 6   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 18  },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 2,  xl: 4   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 22, xl: 20  },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 2,  xl: 3   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 22, xl: 21  },
        },
      ][colspan - 1];
    } else if (cols === 3 || cols === 2) {
      return [
        {
          labelCol:   { xs: 24, sm: 6,  md: 6,  lg: 6,  xl: 6   },
          wrapperCol: { xs: 24, sm: 18, md: 18, lg: 18, xl: 18  },
        },
        {
          labelCol:   { xs: 24, sm: 3,  md: 3,  lg: 3,  xl: 3   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 21  },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 3,  xl: 2   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 22  },
        },
      ][colspan - 1];
    } else {
      return {
        labelCol:   { xs: 24, sm: 6   },
        wrapperCol: { xs: 24, sm: 16  },
      }
    }
  }

  return null;
}

/**
 * 给不设置 label 的表单元素的布局对象去掉 labelCol 属性，wrapperCol 属性添加 offset 属性
 * @param  {Object}  formItemLayout   布局对象
 * @param  {Boolean} offset           是否 offset
 * @return {object}                   新的布局对象
 */
export function getFormItemOffset(formItemLayout = {}, offset = false) {

  // 如果不需要给 wrapper 属性添加 offset 属性，则直接返回 formItemLayout
  if (!offset) return formItemLayout;

  // 添加 offset 属性
  const new_layout = {};
  Object.keys(formItemLayout).forEach(val => {
    const { labelCol = {}, wrapperCol = {} } = formItemLayout;
    if (val === 'labelCol') {
      new_layout.wrapperCol = getOffset(labelCol, wrapperCol);
    }
  })
  return new_layout;
}

// 给一个布局对象，添加 offset 属性
function getOffset(label = {}, wrapper = {}) {
  const new_data = {};
  Object.keys(label).forEach(d => {
    const v = label[d];
    const w = wrapper[d] || 0;
    if (v > 0 && v < 24) {
      new_data[d] = { span: w || v, offset: v };
    } else {
      new_data[d] = v;
    }
  })
  return new_data;
}
