/**
 * 获取 KFormItem 表单元素栅格布局
 * @param  {number} columns   表单几列布局，默认为1 (一行放几个表单元素的问题)
 * @param  {number} col       该表单元素横跨几列，默认为1 (一个表单元素横跨几列的问题)
 * @return {object}           表单元素栅格化布局属性
 */
export default function getFormItemLayout(layoutType, columns = 1, span = 1, offset = '') {
  if (layoutType !== 'horizontal') {
    // 只有当表单布局为 horizontal 时，
    // 表单元素才采用栅格布局
    return null;
  }
  const layout = getLayout(columns, span);
  const layout_offset = getLayoutOffset(layout, offset);
  return layout_offset;
}

function getLayout(columns = 1, span = 1) {
  // 一个表单元素最多横跨 columns 列
  span = Math.min(columns, span);

  if (columns === 4) {
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
        wrapperCol: { xs: 24, sm: 18, md: 21, lg: 22, xl: 21 },
      },
    ][span - 1];
  } else if (columns === 3 || columns === 2) {
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
    ][span - 1];
  } else {
    return {
      labelCol:   { xs: 24, sm: 6   },
      wrapperCol: { xs: 24, sm: 16  }
    }
  }
}

// 某些表单元素不设置 label
// 则该表单元素布局还需要一个 offset 属性
// 常见如按钮
function getLayoutOffset(layout = {}, offset = '') {
  // 直接返回原始的布局
  if (!offset) return layout;

  // 给他 layout 元素的 wrapperCol 值添加 offset 属性
  const new_layout = {};
  Object.keys(layout).forEach(val => {
    const { labelCol = {}, wrapperCol = {} } = layout;
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
