import React, { Component } from 'react';
import propTypes from 'prop-types';

import KPictureArea from './KPictureArea.jsx';
import KPictureBtns from './KPictureBtns.jsx';

import utils from '../../common/utils/utils.js';

import './KPicture.less';

export default class KPicture extends Component {

  static defaultProps = {
    wraperStyle: {},
    areaHeight: 400,
    picWidth: 0,
    picRotate: 0,
    picPositionX: 0,
    picPositionY: 0,
    picZoom: 100,
  }

  constructor(props) {
    super(props);
    this.state = {
      picWidth: 0,
      picRotate: 0,
      positionX: 0,
      positionY: 0,
      picZoom: 1,
      picErrors: '',
    }
  }

  componentDidMount() {
    const { picSrc, picWidth, picRotate, picPositionX, picPositionY, picZoom } = this.props;
    this.planRender({ picSrc, picWidth, picRotate, picPositionX, picPositionY, picZoom });
  }

  componentWillReceiveProps(nextProps) {
    const canRender = this.getRenderParams(this.props, nextProps);
    if (!!canRender) {
      this.planRender(canRender);
    }
  }

  getRenderParams = (prevProps = {}, nextProps = {}) => {
    const {
      picSrc: prevSrc,
      picWidth: prevWidth,
      picRotate: prevRotate,
      picPositionX: prevPositionX,
      picPositionY: prevPositionY,
      picZoom: prevZoom,
    } = prevProps;
    const {
      picSrc: nextSrc,
      picWidth: nextWidth,
      picRotate: nextRotate,
      picPositionX: nextPositionX,
      picPositionY: nextPositionY,
      picZoom: nextZoom,
    } = nextProps;
    if (nextSrc &&
      (prevSrc !== nextSrc ||
      prevWidth !== nextWidth ||
      prevRotate !== nextRotate ||
      prevPositionX !== nextPositionX ||
      prevPositionY !== nextPositionY ||
      prevZoom !== nextZoom)
      ) {
      return {
        picSrc: nextSrc,
        picWidth: nextWidth,
        picRotate: nextRotate,
        picPositionX: nextPositionX,
        picPositionY: nextPositionY,
        picZoom: nextZoom,
      }
    }
    return false;
  }

  planRender = (params) => {
    if (params) {
      const { picSrc, picWidth, picRotate, picPositionX, picPositionY, picZoom } = params;
      utils.asyncLoadImage(picSrc).then((image) => {
        console.log('picWidth || image.width>>>', picWidth , image.width);
        this.setState({
          picWidth: picWidth || image.width,
          picRotate: picRotate,
          picPositionX: picPositionX,
          picPositionY: picPositionY,
          picZoom: picZoom,
          picErrors: '',
        });
      }).catch((e) => {
        this.setState({
          picWidth: 0,
          picRotate: 0,
          positionX: 0,
          positionY: 0,
          picZoom: 100,
          picErrors: e.toString(),
        });
      });
    }
  }

  onMouseWheel = (event) => {
    const { imgZoom } = this.state;
    const zoomRate = 2;
    if (event.deltaY > 0) {
      this.operating('zoom', imgZoom + zoomRate);
    } else {
      this.operating('zoom', imgZoom - zoomRate);
    }
  }

  onDoubleClick = () => {
    this.operating('reset');
  }

  operating = (type, num) => {
    switch (type) {
      case 'zoom':
        this.setState({ picZoom: num });
        break;
      case 'reset':
        this.setState({ picPositionX: 0, picPositionY: 0, picRotate: 0, picZoom: 100 });
        break;
      case 'prev':
      case 'next':
        this.props.onSwitch(type);
        break;
      case 'rotate':
        this.setState({ picRotate: num })
        break;
      default:
    }
  }

  onDrag = (e, data) => {
    this.setState({
      picPositionX: data.x,
      picPositionY: data.y,
    });
  }

  getPictureBtns = () => {
    const { onSwitch } = this.props;
    if (!!onSwitch) {
      return ['zoom', 'rotate', 'reset', 'prev', 'next']
    }
    return ['zoom', 'rotate', 'reset'];
  }

  render() {
    const { picSrc, wraperStyle, areaHeight } = this.props;
    const { picWidth, picRotate, picZoom, picErrors, picPositionX, picPositionY } = this.state;
    const picBtns = this.getPictureBtns();
    const width = picWidth * picZoom * 0.01;

    return (
      <section className="k-picture-wraper" style={wraperStyle}>
        <KPictureArea
          src={picSrc}
          width={width}
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
          disabled={!!picErrors}
          rotate={picRotate}
          zoom={picZoom}
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
  picSrc: propTypes.string.isRequired,
  picRotate: propTypes.number,
  picWidth: propTypes.number,
  picPositionX: propTypes.number,
  picPositionY: propTypes.number,
  picZoom: propTypes.number,
  onSwitch: propTypes.func,
}
