import React from 'react';
import propTypes from 'prop-types';
import { Slider, Button, Popover } from 'antd';

const ButtonGroup = Button.Group;
const { is } = window;

const K_PICTURE_BTNS = [
  { label: '放大', value: 'zoomOut' },
  { label: '缩小', value: 'zoomIn' },
  { label: '旋转', value: 'rotate' },
  { label: '还原', value: 'reset' },
  { label: '上一张', value: 'prev' },
  { label: '下一张', value: 'next' },
]

export default function KPictureBtns ({ btns = [], onChange, imgRotate = 0, disabled = false }) {

  const PopoverContent = (
    <Slider
      marks={{ 0: '0', 90: '90', 180: '180', 270: '270', 360: '360' }}
      min={0}
      max={360}
      value={imgRotate}
      onChange={(e) => onChange('rotate', e)}
    />
  );

  const PopoverStyle = { width: 300 };

  const btnEle = K_PICTURE_BTNS.filter(v => is.inArray(v.value, btns)).map((btn, i) => {
    if (btn.value === 'rotate') {
      return (
        <Popover
          key={i}
          content={PopoverContent}
          overlayStyle={PopoverStyle}
          title="旋转角度(deg)"
          trigger="click"
        >
          <Button>{btn.label}</Button>
        </Popover>
      )
    }
    return (
      <Button
        key={i}
        onClick={() => onChange(btn.value)}
      >
        {btn.label}
      </Button>
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
  onChange: propTypes.func.isRequired,
  imgRotate: propTypes.number,
}
