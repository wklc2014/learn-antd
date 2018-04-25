/**
 * kFormItem 支持的输入类型
 */
import React from 'react';

import configTypes from './configTypes.js';

import SearchInput from './SearchInput.jsx';

export default {
  ...configTypes,
  searchInput: (props) => <SearchInput {...props} />
}
