import React, { Component } from 'react';
import propTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Spin, Alert } from 'antd';

export default class KImageArea extends Component {

  static defaultProps = {
    positionX: 0,
    positionY: 0,
    areaHeight: 400,
    imgRotate: 0,
    imgErrors: '',
    imgLoading: false,
  }

  constructor(props) {
    super(props);
    const { positionX, positionY } = props;
    this.state = {
      positionX,
      positionY,
    }
  }

  onDrag = (e, data) => {
    this.setState({
      positionX: data.x,
      positionY: data.y,
    });
  }

  render() {
    const { positionX, positionY } = this.state;
    const { areaHeight, imgSrc, imgWidth, imgRotate, imgErrors, imgLoading } = this.props;

    const picStyle = {
      backgroundImage: `url(${imgSrc})`,
      width: imgWidth,
      transform: `rotate(${imgRotate}deg)`,
    }

    return (
      <Spin spinning={imgLoading} tip="图片加载中">
        <div className="k-image-box" style={{ height: areaHeight }}>
          { imgErrors ? (
            <Alert message={imgErrors} type="error" />
          ) : (
            <Draggable
              position={{ x: positionX, y: positionY }}
              onDrag={this.onDrag}
              handle=".k-image-handle"
            >
              <div className="k-image-drag">
                <div className="k-image-pic" style={picStyle} />
                <div
                  className="k-image-handle"
                  onWheel={this.props.onWheel}
                  onDoubleClick={this.props.onDoubleClick}
                />
              </div>
            </Draggable>
          ) }
        </div>
      </Spin>

    )
  }

}

KImageArea.propTypes = {
  positionX: propTypes.number,
  positionY: propTypes.number,
  areaHeight: propTypes.number,
  imgErrors: propTypes.string,
  imgLoading: propTypes.bool,
  imgSrc: propTypes.string.isRequired,
  imgWidth: propTypes.number.isRequired,
  imgRotate: propTypes.number,
  onWheel: propTypes.func.isRequired,
  onDoubleClick: propTypes.func.isRequired,
}
