import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Spin, Alert } from 'antd';
import Display from '../Display/Display.jsx';

export default function KPictureArea(props) {

  const {
    areaHeight = 400,
    imgSrc,
    imgWidth,
    imgRotate = 0,
    imgErrors = '',
    imgLoading = false,
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
    <Spin spinning={imgLoading} tip="图片加载中">
      <div className="k-picture-box" style={{ height: areaHeight }}>
        <Display condition={imgErrors}>
          <Alert message={imgErrors} type="error" />
          <Draggable
            position={{ x: positionX, y: positionY }}
            onDrag={onDrag}
            handle=".k-picture-handle"
          >
            <div className="k-picture-drag">
              <div className="k-picture-pic" style={picStyle} />
              <div
                className="k-picture-handle"
                onWheel={onWheel}
                onDoubleClick={onDoubleClick}
              />
            </div>
          </Draggable>
        </Display>
      </div>
    </Spin>
  )
}

KPictureArea.propTypes = {
  areaHeight: propTypes.number,
  imgErrors: propTypes.string,
  imgLoading: propTypes.bool,
  imgSrc: propTypes.string.isRequired,
  imgWidth: propTypes.number.isRequired,
  imgRotate: propTypes.number,
  positionX: propTypes.number,
  positionY: propTypes.number,
  onWheel: propTypes.func.isRequired,
  onDoubleClick: propTypes.func.isRequired,
  onDrag: propTypes.func.isRequired,
}
