/**
 * KFormItem 支持的各种表单元素输入类型
 */
import React from 'react';
import is from 'is_js';
import { Button, Cascader, TreeSelect, Checkbox, DatePicker, Input, InputNumber, Radio, Rate, Select, Slider, Switch, TimePicker } from 'antd';

import utils from '../../../common/utils/utils.js';
import MyFetchInput from './MyFetchInput.jsx';

const { TextArea, Search } = Input;
const { Option } = Select;
const { RangePicker, MonthPicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

export default function renderFormItemByType({ type, params, onChange, extMap, value }) {
  const newProps = {...params, value};

  // 分组表单元素类型
  const inputType = ['input', 'textarea', 'search', 'radio', 'radioButton'];
  const baseTypes = ['rate', 'slider', 'switch', 'number', 'checkbox', 'select', 'treeSelect', 'cascader', 'date', 'range', 'month', 'time'];
  const myTypes = ['fetchInput'];

  // 不同的表单类型，
  // 还需要绑定不同的属性
  if (is.inArray(type, inputType)) {
    Object.assign(newProps, { onChange: (e) => onChange(e.target.value) });
  } else if (is.inArray(type, baseTypes)) {
    Object.assign(newProps, { onChange });
  } else if (type === 'button') {
    Object.assign(newProps, { onClick: (e) => onChange(extMap.value) });
  }

  // 处理自定义表单元素
  const myProps = {};
  if (is.inArray(type, myTypes)) {
    Object.assign(myProps, { onChange, extMap, params, value });
  }

  // 处理不同的表单类型
  if (type === 'input') {
    // 单行文本输入框
    return <Input {...newProps} />;
  }

  else if (type === 'textarea') {
    // 多行文本输入框
    return <TextArea rows={5} {...newProps} />;
  }

  else if (type === 'search') {
    // 带搜索按钮的单行文本输入框
    return <Search {...newProps} />;
  }

  else if (type === 'rate') {
    // 星星评级
    return <Rate {...newProps} />;
  }

  else if (type === 'slider') {
    // 滑动输入条
    return <Slider {...newProps} />;
  }

  else if (type === 'switch') {
    // 切换开关
    return <Switch {...newProps} />;
  }

  else if (type === 'number') {
    // 数字输入框
    return <InputNumber {...newProps} />;
  }

  else if (type === 'checkbox') {
    // 多选框
    return <CheckboxGroup {...newProps} />;
  } else if (type === 'select') {
    // 下拉选择框
    const Children = extMap.data.map((v, i) => <Option key={i} value={v.value}>{v.label}</Option>);
    return <Select {...newProps}>{Children}</Select>;
  }

  else if (type === 'date') {
    // 日期选择框
    return <DatePicker {...newProps} />;
  }

  else if (type === 'range') {
    // 日期区间选择框
    return <RangePicker {...newProps} />;
  }

  else if (type === 'month') {
    // 月份选择框
    return <MonthPicker {...newProps} />;
  }

  else if (type === 'time') {
    // 时间选择框
    return <TimePicker {...newProps} />;
  }

  else if (type === 'radio') {
    // 单选框
    const Children = extMap.data.map((v, i) => <Radio key={i} value={v.value}>{v.label}</Radio>);
    return <RadioGroup {...newProps}>{Children}</RadioGroup>;
  }

  else if (type === 'radioButton') {
    // 单选按钮
    const Children = extMap.data.map((v, i) => <RadioButton key={i} value={v.value}>{v.label}</RadioButton>);
    return <RadioGroup {...newProps}>{Children}</RadioGroup>;
  }

  else if (type === 'text') {
    // 纯文本显示
    if (is.function(extMap.render)) {
      value = extMap.render(value);
    } else if (is.array(extMap.data)) {
      const targetValue = extMap.data.find(v => v.value === value);
      if (targetValue) value = targetValue.label;
    }
    return <span className="ant-form-text">{value}</span>;
  }

  else if (type === 'treeSelect') {
    // 树形选择控件
    return <TreeSelect dropdownStyle={{ maxHeight: 300 }} {...newProps} treeData={extMap.data} />;
  }

  else if (type === 'button') {
    // 按钮
    if (is.array(extMap.data) && extMap.data.length) {
      // 一次生成多个按钮
      return extMap.data.map((btn, i) => {
        const btnStyle = i === 0 ? null : { marginLeft: 8 };
        onChange && Object.assign(newProps, { onClick: (e) => onChange(btn.value) });
        return (
          <span style={btnStyle} key={i}>
            <Button {...newProps} type={btn.type || newProps.type}>{btn.label}</Button>
          </span>
        );
      });
    }
    return <Button {...newProps}>{extMap.label}</Button>;
  }

  else if (type === 'cascader') {
    // 级联选择
    Object.assign(newProps, { options: extMap.data });
    if (is.function(extMap.render)) {
      const newStyle = {...newProps.style, display: 'inline'};
      return <Cascader {...newProps}><div style={newStyle}>{extMap.render(value)}</div></Cascader>;
    }
    return <Cascader {...newProps} />;
  }

  // 输入后自动发起请求
  // 返回下拉选择项的下拉框
  else if (type === 'fetchInput') {
    return <MyFetchInput {...myProps} />;
  }

  else {
    utils.errorLogs(`没有与之相对应表单元素类型${type}`);
  }
}
