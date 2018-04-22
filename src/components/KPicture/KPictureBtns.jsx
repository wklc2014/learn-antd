import React from 'react';
import propTypes from 'prop-types';
import { Button, Popover } from 'antd';

import Display from '../Display/Display.jsx';
import getPopoverContent from './common/getPopoverContent.js';
import getPopoverTitle from './common/getPopoverTitle.js';

const ButtonGroup = Button.Group;

export default function KPictureBtns (props) {

  const {
    btns = [],
    rotate = 0,
    zoom = 100,
    onChange,
  } = props;

  const PopoverStyle = { width: 400 };
  const values = { rotate, zoom };

  const btnEle = btns.map((btn, i) => {
    const content = getPopoverContent(btn.value, values, onChange);
    const title = getPopoverTitle(btn.value);
    const condition = btn.value === 'rotate' || btn.value === 'zoom';
    return (
      <Display condition={condition} key={i}>
        <Popover
          content={content}
          overlayStyle={PopoverStyle}
          title={title}
          trigger="click"
        >
          <Button disabled={btn.disabled}>{btn.label}</Button>
        </Popover>
        <Button
          onClick={() => onChange(btn.value)}
          disabled={btn.disabled}
        >
          {btn.label}
        </Button>
      </Display>
    )
  })

  return (
    <div className="k-picture-btn">
      <ButtonGroup>{btnEle}</ButtonGroup>
    </div>
  )
}

KPictureBtns.propTypes = {
  btns: propTypes.array,
  rotate: propTypes.number,
  zoom: propTypes.number,
  onChange: propTypes.func.isRequired,
}
