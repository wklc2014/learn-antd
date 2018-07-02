/**
 * 图片显示区域
 */
import React from 'react';
import propTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Alert } from 'antd';

export default function DisplayArea(props) {

  const {
    src,
    width,
    rotate,
    positionX,
    positionY,
    errors,
    onDrag,
    onWheel,
    onDoubleClick,
  } = props;

  if (!!errors) {
    return (
      <div className="h-picture-view-box">
        <Alert message={errors} showIcon type="error" />
      </div>
    )
  }

  const picStyle = {
    backgroundImage: `url(${src})`,
    width,
    transform: `rotate(${rotate}deg)`,
  }

  const handleStyle = {
    transform: `rotate(${rotate}deg)`,
  }

  return (
    <div className="h-picture-view-box">
      <Draggable
        position={{ x: positionX, y: positionY }}
        onDrag={onDrag}
        handle=".h-picture-view-handle"
      >
        <div className="h-picture-view-drag">
          <div className="h-picture-view-pic" style={picStyle} />
          <div
            className="h-picture-view-handle"
            onWheel={onWheel}
            onDoubleClick={onDoubleClick}
            style={handleStyle}
          />
        </div>
      </Draggable>
    </div>
  )
}

DisplayArea.propTypes = {
  src: propTypes.string.isRequired,
  width: propTypes.number.isRequired,
  rotate: propTypes.number,
  positionX: propTypes.number,
  positionY: propTypes.number,
  errors: propTypes.string,
  onWheel: propTypes.func.isRequired,
  onDoubleClick: propTypes.func.isRequired,
  onDrag: propTypes.func.isRequired,
}

DisplayArea.defaultProps = {
  rotate: 0,
  positionX: 0,
  positionY: 0,
  errors: '',
}
