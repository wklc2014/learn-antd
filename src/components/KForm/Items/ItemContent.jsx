/**
 * 渲染 FormItem content
 */
import { Component } from 'react';
import propTypes from 'prop-types';

import getData from '../common/getData.js';
import renderItemContentByType from './renderFormItemByType.js';
import { getValue, setValue } from '../common/getValue.js';
import getPlaceholder from '../common/getPlaceholder.js';
import getStyle from '../common/getStyle.js';

export default class ItemContent extends Component {

  static defaultProps = {
    label: '',
    api: {},
    ext: {},
    onChange: () => {},
  }

  shouldComponentUpdate(nextProps) {
    const next = JSON.stringify(nextProps);
    const prev = JSON.stringify(this.props);
    return next !== prev;
  }

  onChange = (e) => {
    const { id, ext, value, onChange } = this.props;
    const new_value = setValue({ value, id, changeValue: e, ext });
    onChange(new_value, id);
  }

  render() {
    const { id, label, type, api, ext, value } = this.props;
    const { placeholder } = api;

    // 计算一些必要的属性
    const new_data = getData({ type, ext });
    const new_value = getValue({ type, value, id, ext });
    const new_placeholder = getPlaceholder({ type, placeholder, label, id });
    const new_style = getStyle({ type, ext, style: api.style });

    return renderItemContentByType({
      type,
      api: { ...api, placeholder: new_placeholder, style: new_style },
      ext: { ...ext, data: new_data },
      value: new_value,
      onChange: this.onChange
    });
  }
}

ItemContent.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  type: propTypes.string.isRequired,
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func,
  // 不对 value 值做类型控制
  // value: propTypes,
}
