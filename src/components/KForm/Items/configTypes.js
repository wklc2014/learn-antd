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

export default function configTypes({ type, params, onChange, extMap, value }) {
  const { subType } = extMap;
  switch (type) {

  }
}

export default {
  input: ({ params, onChange, extMap }) => {
    const newProps = {...params};
    const { subType } = extMap;
    onChange && Object.assign(newProps, { onChange: (e) => onChange(e.target.value) });
    if (subType === 'textarea') {
      return <TextArea rows={5} {...newProps} />;
    } else if (subType === 'search') {
      return <Search {...newProps} />
    }
    return <Input {...newProps} />
  },
  rate: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange });
    return <Rate {...newProps} />;
  },
  slider: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange });
    return <Slider {...newProps} />;
  },
  switch: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange });
    return <Switch {...newProps} />;
  },
  number: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange });
    return <InputNumber {...newProps} />;
  },
  checkbox: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange });
    return <CheckboxGroup {...newProps} />;
  },
  cascader: ({ params, onChange, extMap, value }) => {
    const newProps = { options: extMap.data, ...params };
    onChange && Object.assign(newProps, { onChange });
    if (is.function(extMap.render)) {
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
  },
  select: ({ params, onChange, extMap }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange });
    const ChildEle = extMap.data.map((v, i) => (
      <Option key={i} value={v.value}>{v.label}</Option>
    ));
    return <Select {...newProps}>{ChildEle}</Select>;
  },
  date: ({ params, onChange, extMap }) => {
    const { subType } = extMap;
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (_, e) => onChange(e) });
    if (subType === 'range') {
      return <RangePicker {...newProps} />;
    } else if (subType === 'month') {
      return <MonthPicker {...newProps} />;
    } else if (subType === 'time') {
      return <TimePicker {...newProps} />;
    }
    return <DatePicker {...newProps} />;
  },
  radioButton: ({ params, onChange, extMap }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (e) => onChange(e.target.value) });
    const ChildEle = extMap.data.map((v, i) => (
      <RadioButton key={i} value={v.value}>{v.label}</RadioButton>
    ));
    return <RadioGroup {...newProps}>{ChildEle}</RadioGroup>;
  },
  radio: ({ params, onChange, extMap }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (e) => onChange(e.target.value) });
    const ChildEle = extMap.data.map((v, i) => (
      <Radio key={i} value={v.value}>{v.label}</Radio>
    ))
    return <RadioGroup {...newProps}>{ChildEle}</RadioGroup>;
  },
  text: ({ extMap, value }) => {
    const newProps = { className: 'ant-form-text' };
    const { data } = extMap;
    if (is.function(extMap.render)) {
      value = extMap.render(value);
    } else if (is.array(data)) {
      const targetValue = data.find(v => v.value === value);
      if (targetValue) {
        value = targetValue.label;
      }
    }
    return <span {...newProps}>{value}</span>;
  },
  button: ({ params, onChange, extMap }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onClick: (e) => onChange(extMap.value) });
    return <Button {...newProps}>{extMap.label}</Button>;
  },
  treeSelect: ({ params, onChange, extMap }) => {
    const newProps = {
      treeData: extMap.data,
      dropdownStyle: { maxHeight: 400, overflow: 'auto' },
      ...params
    };
    onChange && Object.assign(newProps, { onChange: (e) => onChange(e) });
    return <TreeSelect {...newProps} />;
  },
}
