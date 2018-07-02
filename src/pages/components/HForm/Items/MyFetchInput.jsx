/**
 * 带搜索的输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;
let timeout;

export default class MyFetchInput extends Component {

  static defaultProps = {
    ext: {},
    api: {},
    value: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  getOptions = () => {
    const { data } = this.state;
    return data.map(v => <Option key={v.value}>{v.label}</Option>);
  }

  handleChange = (value) => {
    const that = this;
    const { ext = {}, onChange } = this.props;
    const { service, time = 300 } = ext;
    onChange && onChange(value);

    if (timeout) {
      window.clearTimeout(timeout);
      timeout = null;
    }

    async function search() {
      try {
        const resp = await service(value);
        const data = resp.success ? resp.data : [];
        that.setState({ data: data || [] })
      } catch (e) {
        // eslint-disable-next-line
        console.log(`MyFetchInput ${e} : ${service}`);
      }
    }

    timeout = setTimeout(search, time);
  }

  render() {
    const { api, value } = this.props;
    const options = this.getOptions();
    const new_props = {
      defaultActiveFirstOption: false,
      showArrow: false,
      filterOption: false,
      mode: 'combobox',
      value,
      ...api,
      onSearch: this.handleChange,
    }
    return <Select {...new_props}>{options}</Select>;
  }
}

MyFetchInput.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}