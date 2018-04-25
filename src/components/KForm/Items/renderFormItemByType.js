/**
 * KFormItem 支持的各种表单元素输入类型
 */
import React from 'react';
import is from 'is_js';
import { Button, Cascader, TreeSelect, Checkbox, DatePicker, Input, InputNumber, Radio, Rate, Select, Slider, Switch, TimePicker } from 'antd';

const { TextArea, Search } = Input;
const { Option } = Select;
const { RangePicker, MonthPicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

export default function renderFormItemByType({ type, params, onChange, extMap, value }) {
  const newProps = {...params};

  if (onChange) {
    const inputType = ['input', 'textarea', 'search', 'radio', 'radioButton'];
    const dateTypes = ['date', 'range', 'month', 'time'];
    const baseTypes = ['rate', 'slider', 'switch', 'number', 'checkbox', 'select', 'treeSelect', 'cascader'];
    if (is.inArray(type, inputType)) {
      Object.assign(newProps, { onChange: (e) => onChange(e.target.value) });
    } else if (is.inArray(type, dateTypes)) {
      Object.assign(newProps, { onChange: (_, e) => onChange(e) });
    } else if (is.inArray(type, baseTypes)) {
      Object.assign(newProps, { onChange });
    } else if (type === 'button') {
      Object.assign(newProps, { onClick: (e) => onChange(extMap.value) });
    }
  }

  if (type === 'input') {
    return <Input {...newProps} />;
  } else if (type === 'textarea') {
    return <TextArea rows={5} {...newProps} />;
  } else if (type === 'search') {
    return <Search {...newProps} />;
  } else if (type === 'rate') {
    return <Rate {...newProps} />;
  } else if (type === 'slider') {
    return <Slider {...newProps} />;
  } else if (type === 'switch') {
    return <Switch {...newProps} />;
  } else if (type === 'number') {
    return <InputNumber {...newProps} />;
  } else if (type === 'checkbox') {
    return <CheckboxGroup {...newProps} />;
  } else if (type === 'select') {
    const Children = extMap.data.map((v, i) => (
      <Option key={i} value={v.value}>{v.label}</Option>
    ));
    return <Select {...newProps}>{Children}</Select>;
  } else if (type === 'date') {
    return <DatePicker {...newProps} />;
  } else if (type === 'range') {
    return <RangePicker {...newProps} />;
  } else if (type === 'month') {
    return <MonthPicker {...newProps} />;
  } else if (type === 'time') {
    return <TimePicker {...newProps} />;
  } else if (type === 'radio') {
    const Children = extMap.data.map((v, i) => (
      <Radio key={i} value={v.value}>{v.label}</Radio>
    ));
    return <RadioGroup {...newProps}>{Children}</RadioGroup>;
  } else if (type === 'radioButton') {
    const Children = extMap.data.map((v, i) => (
      <RadioButton key={i} value={v.value}>{v.label}</RadioButton>
    ));
    return <RadioGroup {...newProps}>{Children}</RadioGroup>;
  } else if (type === 'text') {
    const newProps = { className: 'ant-form-text' };
    if (is.function(extMap.render)) {
      value = extMap.render(value);
    } else if (is.array(extMap.data)) {
      const targetValue = extMap.data.find(v => v.value === value);
      if (targetValue) {
        value = targetValue.label;
      }
    }
    return <span {...newProps}>{value}</span>;
  } else if (type === 'treeSelect') {
    Object.assign(newProps, { treeData: extMap.data });
    return <TreeSelect {...newProps} />;
  } else if (type === 'button') {
    return <Button {...newProps}>{extMap.label}</Button>;
  } else if (type === 'cascader') {
    if (is.function(extMap.render)) {
      Object.assign(newProps, { options: extMap.data });
      const newStyle = {...newProps.style, display: 'inline'};
      return (
        <Cascader {...newProps}>
          <div style={newStyle}>
            {extMap.render(value)}
          </div>
        </Cascader>
      );
    }
    return <Cascader {...newProps} />;
  }
}
