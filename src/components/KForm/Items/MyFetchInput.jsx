/**
 * 带搜索的输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Select } from 'antd';

import * as fetchServices from '../../../services/_fetch.js';
import utils from '../../../common/utils/utils.js';

const { Option } = Select;
let timeout;

export default class MyFetchInput extends Component {

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

    if (timeout) {
      window.clearTimeout(timeout);
      timeout = null;
    }

    async function search() {
      if (fetchServices[url]) {
        const resp = await fetchServices[url](value);
        const data = resp.success ? resp.data : [];
        that.setState({ data: data || [] })
      } else {
        utils.errorLogs(`_fetch.js 没有对应 ${url} 的请求`);
      }
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
      onSearch: this.handleChange,
    }
    return <Select {...newProps}>{options}</Select>;
  }
}

MyFetchInput.propTypes = {
  extMap: propTypes.object.isRequired,
}
