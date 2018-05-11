import React from 'react';
import propTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Alert } from 'antd';
import * as CLS from './common/__classNames.js';

export default function ViewArea(props) {

  const {
    height = 400,
    src,
    width,
    rotate = 0,
    errors = '',
    positionX = 0,
    positionY = 0,
    onDrag,
    onWheel,
    onDoubleClick,
  } = props;

  const picStyle = {
    backgroundImage: `url(${src})`,
    width,
    transform: `rotate(${rotate}deg)`,
  }

  return (
    <div className={CLS.__box}>
      <HDisplay condition={!!errors}>
        <Alert message={errors} showIcon type="error" />
        <Draggable
          position={{ x: positionX, y: positionY }}
          onDrag={onDrag}
          handle=".k-picture-handle"
        >
          <div className="k-picture-drag">
            <div key="1" className="k-picture-pic" style={picStyle} />
            <div
              className="k-picture-handle"
              onWheel={onWheel}
              onDoubleClick={onDoubleClick}
            />
          </div>
        </Draggable>
      </HDisplay>
    </div>
  )
}

ViewArea.propTypes = {
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
