import React from 'react';
import propTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Alert } from 'antd';
import Display from '../Display/Display.jsx';

export default function KPictureArea(props) {

  const {
    areaHeight = 400,
    imgSrc,
    imgWidth,
    imgZoom = 1,
    imgRotate = 0,
    imgErrors = '',
    positionX = 0,
    positionY = 0,
    onDrag,
    onWheel,
    onDoubleClick,
  } = props;

  const picStyle = {
    backgroundImage: `url(${imgSrc})`,
    width: imgWidth,
    transform: `rotate(${imgRotate}deg)`,
  }

  return (
    <div className="k-picture-box" style={{ height: areaHeight }}>
      <Display condition={imgErrors}>
        <Alert message={imgErrors} type="error" showIcon />
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
      </Display>
    </div>
  )
}

KPictureArea.propTypes = {
  areaHeight: propTypes.string,
  imgErrors: propTypes.string,
  imgSrc: propTypes.string.isRequired,
  imgWidth: propTypes.number.isRequired,
  imgRotate: propTypes.number,
  positionX: propTypes.number,
  positionY: propTypes.number,
  onWheel: propTypes.func.isRequired,
  onDoubleClick: propTypes.func.isRequired,
  onDrag: propTypes.func.isRequired,
}
