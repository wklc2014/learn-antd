import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';

import KPictureArea from './KPictureArea.jsx';
import KPictureBtns from './KPictureBtns.jsx';

import utils from '../../common/utils/utils.js';
import __kPictureBtns from './common/__kPictureBtns.js';

import './KPicture.less';

export default class KPicture extends Component {

  static defaultProps = {
    wraperStyle: {},
    areaHeight: 400,
    picSrc: [],
    picNumber: 0,
    picWidth: 0,
    picRotate: 0,
    picPositionX: 0,
    picPositionY: 0,
  }

  constructor(props) {
    super(props);
    const {
      picNumber = 0,
      picWidth = 0,
      picRotate = 0,
      picPositionX = 0,
      picPositionY = 0,
    } = props;
    this.state = {
      picOriginWidth: 0,  // 图片原始宽度
      picNumber,          // 当前图片序号
      picWidth,           // 图片显示宽度
      picRotate,          // 图片显示旋转角度
      picPositionX,          // 图片显示 x 坐标
      picPositionY,          // 图片显示 y 坐标
      picErrors: '',      // 图片加载错误信息
    }
  }

  componentDidMount() {
    const { picSrc } = this.props;
    const { picNumber } = this.state;
    const params = this.getRenderState({}, this.props);
    const init = !params.picWidth;
    this.planRender(picSrc[picNumber], params, init);
  }

  componentWillReceiveProps(nextProps) {
    const { picSrc: prevSrc, picNumber: prevNumber = 0 } = this.props;
    const { picSrc: nextSrc, picNumber: nextNumber = 0 } = nextProps;
    const prevPic = prevSrc[prevNumber];
    const nextPic = nextSrc[nextNumber];
    const params = this.getRenderState(this.props, nextProps);
    if (nextPic && prevPic !== nextPic) {
      // 图片地址改变后，重新 planRender
      this.planRender(nextPic, params);
    } else {
      // 仅仅是其他 props 改变
      this.setState(params);
    }
  }

  // props 改变时，引起 state 改变
  getRenderState = (prev = {}, next = {}) => {
    const params = {};
    ['Number', 'Width', 'Rotate', 'PositionX', 'PositionY'].forEach(key => {
      if (next[`pic${key}`] && prev[`pic${key}`] !== next[`pic${key}`]) {
        params[`pic${key}`] = next[`pic${key}`];
      }
    })
    return params;
  }

  // 渲染新的图片
  planRender = (src, params = {}, init) => {
    utils.asyncLoadImage(src).then((image) => {
      const newState = {
        picOriginWidth: image.width,
        ...params,
        picErrors: '',
      };
      if (init) newState.picWidth = image.width;
      this.setState(newState);
    }).catch((e) => {
      let picErrors = '图片加载错误！';
      try {
        picErrors = e.toString();
      } catch (e) {}
      this.setState({ picErrors, ...params });
    });
  }

  // 鼠标缩放
  onMouseWheel = (event) => {
    event.preventDefault();
    const picZoom = this.getPicZoom();
    const zoomRate = 1;
    if (event.deltaY > 0) {
      this.operating('zoom', picZoom - zoomRate);
    } else {
      this.operating('zoom', picZoom + zoomRate);
    }
  }

  // 上一张，下一张
  onSwitch = (type) => {
    const { picSrc } = this.props;
    const { picNumber } = this.state;
    if (type === 'prev' && picNumber > 0) {
      this.planRender(picSrc[picNumber - 1], { picNumber: picNumber - 1 });
    } else if (type === 'next' && picNumber < picSrc.length - 1) {
      this.planRender(picSrc[picNumber + 1], { picNumber: picNumber + 1 });
    }
  }

  // 双击图片
  onDoubleClick = () => {
    this.operating('reset');
  }

  // 执行各种变化
  // zoom, rotate, prev, next, reset
  operating = (type, num) => {
    const { picOriginWidth } = this.state;
    switch (type) {
      case 'zoom':
        this.setState({ picWidth: lodash.round(picOriginWidth * num * 0.01) });
        break;
      case 'reset':
        this.setState({
          picWidth: picOriginWidth,
          picRotate: 0,
          picPositionX: 0,
          picPositionY: 0,
        });
        break;
      case 'prev':
      case 'next':
        this.onSwitch(type);
        break;
      case 'rotate':
        this.setState({ picRotate: num });
        break;
      default:
    }
  }

  // 拖动
  onDrag = (e, data) => {
    this.setState({
      picPositionX: data.x,
      picPositionY: data.y,
    });
  }

  // 获取操作按钮
  getPictureBtns = () => {
    const { picErrors, picNumber } = this.state;
    const { picSrc, picBtns = __kPictureBtns } = this.props;
    const length = picSrc.length;
    return picBtns.map((btn) => {
      let disabled = false;
      switch (btn.value) {
        case 'zoom':
        case 'rotate':
        case 'reset':
          disabled = !!picErrors;
          break;
        case 'prev':
          disabled = picNumber <= 0;
          break;
        case 'next':
          disabled = picNumber >= length - 1;
          break;
        default:
      }
      return { ...btn, disabled };
    })
  }

  // 获取缩放级别
  getPicZoom = () => {
    const { picWidth, picOriginWidth } = this.state;
    return picWidth / picOriginWidth * 100;
  }

  render() {
    const { picSrc, wraperStyle, areaHeight } = this.props;
    const { picNumber, picWidth, picRotate, picErrors, picPositionX, picPositionY } = this.state;
    const zoom = this.getPicZoom();
    const picBtns = this.getPictureBtns();

    return (
      <section className="k-picture-wraper" style={wraperStyle}>
        <KPictureArea
          src={picSrc[picNumber]}
          width={picWidth}
          rotate={picRotate}
          errors={picErrors}
          height={areaHeight}
          positionX={picPositionX}
          positionY={picPositionY}
          onDoubleClick={this.onDoubleClick}
          onDrag={this.onDrag}
          onWheel={this.onMouseWheel}
        />
        <KPictureBtns
          rotate={picRotate}
          zoom={zoom}
          btns={picBtns}
          onChange={this.operating}
        />
      </section>
    )
  }

}

KPicture.propTypes = {
  wraperStyle: propTypes.object,
  areaHeight: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
  picBtns: propTypes.shape({
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
  }),
  picSrc: propTypes.array,
  picWidth: propTypes.number,
  picRotate: propTypes.number,
  picPositionX: propTypes.number,
  picPositionY: propTypes.number,
  onSwitch: propTypes.func,
}
