/**
 * 带搜索的输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Select } from 'antd';

import * as fetchServices from '../../../services/_fetch.js';

const { Option } = Select;
let timeout;

export default class SearchInput extends Component {

  static defaultProps = {}

  state = {
    data: [],
  }

  getOptions = () => {
    return this.state.data.map(v => <Option key={v.value}>{v.label}</Option>);
  }

  handleChange = (value) => {
    const that = this;
    const { extMap = {}, onChange } = this.props;
    const { url, time = 300 } = extMap;
    onChange && onChange(value);

    async function search() {
      const resp = await fetchServices[url](value);
      const data = resp.success ? resp.data : [];
      that.setState({ data: data || [] })
    }

    timeout = setTimeout(search, time);

  }

  render() {
    const { params } = this.props;
    const options = this.getOptions();
    const newProps = {
      defaultActiveFirstOption: false,
      showArrow: false,
      filterOption: false,
      ...params,
      mode: 'combobox',
      onChange: this.handleChange,
    }
    return <Select {...newProps}>{options}</Select>;
  }
}

SearchInput.propTypes = {

}
