/**
 * 通过一个配置数组
 * 生成一个表单
 */
import React from 'react';
import propTypes from 'prop-types';

export default function HForm (props) {

  const {
    className = '',
    cols = 1,
    configs = [],
    layout = 'horizontal',
    itemLayout = 'L0',
    itemSpace = 0,
    onChange = () => {},
    values = {},
  } = props;

  const HFormChildrenEle = configs.map((config, i) => {
    const key = `${layout}-${i}`;
    const { id: item_id, label: item_label, type: item_type, api: item_api, ext: item_ext = {} } = config;
    const { colspan } = item_ext;

    // 优先使用传入的 HFormItem 布局配置
    // 否则通过规则计算
    const item_layout = itemLayout || getFormItemLayout(layout, cols, colspan);

    const HFormItemProps = {
      id: item_id,
      label: item_label,
      type: item_type,
      api: item_api,
      ext: {
        layout: item_layout,
        space: itemSpace,
        ...item_ext,
      },
      onChange,
      value: values[id]
    };

    if (layout === 'inline') {
      return (
        <div key={key} style={{ display: 'inline-block' }}>
          <KFormItem {...HFormItemProps} />
        </div>
      )
    }

    const ColProps = getGridLayout(cols, colspan);
    return (
      <Col key={key} {...ColProps}>
        <KFormItem {...HFormItemProps} />
      </Col>
    );

  });

  return (
    <div>

    </div>
  )
}

HForm.propTypes = {
  className: propTypes.string,
  cols: propTypes.number,
  configs: propTypes.array.isRequired,
  layout: propTypes.string,
  itemLayout: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),
  itemSpace: propTypes.number,
  onChange: propTypes.func,
  values: propTypes.object,
}

