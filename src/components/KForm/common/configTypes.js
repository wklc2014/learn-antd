import React from 'react';
import is from 'is_js';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
} from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker, MonthPicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

export default {
  input: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (e) => onChange(e.target.value) });
    return <Input {...newProps} />
  },
  textarea: ({ params, onChange }) => {
    const newProps = { rows: 4, ...params };
    onChange && Object.assign(newProps, { onChange: (e) => onChange(e.target.value) });
    return <TextArea {...newProps} />;
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
    const newProps = { ...params, options: extMap.data };
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
  date: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (_, e) => onChange(e) });
    return <DatePicker {...newProps} />;
  },
  dateRange: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (_, e) => onChange(e) });
    return <RangePicker {...newProps} />;
  },
  dateMonth: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (_, e) => onChange(e) });
    return <MonthPicker {...newProps} />;
  },
  time: ({ params, onChange }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onChange: (_, e) => onChange(e) });
    return <TimePicker {...newProps} />;
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
    } else if (is.array(data) && data.length) {
      const targetValue = data.find(v => v.value === value) || {};
      value = targetValue.label;
    }
    return <span {...newProps}>{value}</span>;
  },
  button: ({ params, onChange, extMap }) => {
    const newProps = {...params};
    onChange && Object.assign(newProps, { onClick: (e) => onChange(extMap.value) });
    return <Button {...newProps}>{extMap.label}</Button>;
  },
}
