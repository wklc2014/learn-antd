import React, { Component } from 'react';
import propTypes from 'prop-types';

import utils from '../../utils/utils.js';

import KPictureBtns from './KPictureBtns.jsx';
import KPictureArea from './KPictureArea.jsx';

import './KPicture.less';

const kImgBtns = ['zoom', 'rotate', 'reset', 'prev', 'next'];

export default class KPicture extends Component {

  static defaultProps = {
    wraperStyle: {},
    bodyStyle: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      imgWidth: 0,
      imgZoom: 1,
      imgRotate: 0,
      positionX: 0,
      positionY: 0,
      imgErrors: '',
    }
  }

  componentDidMount() {
    this.planRender(this.props.imgSrc);
  }

  componentWillReceiveProps(nextProps) {
    const { imgSrc: prevImg } = this.props;
    const { imgSrc: nextImg } = nextProps;
    if (nextImg && prevImg !== nextImg) {
      this.planRender(nextImg);
    }
  }

  planRender = (imgSrc) => {
    utils.asyncLoadImage(imgSrc).then((image) => {
      this.setState({
        imgWidth: image.width,
        imgRotate: 0,
        imgZoom: 100,
        positionX: 0,
        positionY: 0,
        imgErrors: '',
      });
    }).catch((e) => {
      console.log(e);
      this.setState({
        imgWidth: 0,
        imgZoom: 1,
        imgRotate: 0,
        positionX: 0,
        positionY: 0,
        imgErrors: e.toString(),
      });
    });
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
        this.setState({ imgZoom: num });
        break;
      case 'reset':
        this.setState({ positionX: 0, positionY: 0, imgRotate: 0, imgZoom: 100 });
        break;
      case 'prev':
      case 'next':
        this.props.onSwitch(type);
        break;
      case 'rotate':
        this.setState({ imgRotate: num })
        break;
      default:
    }
  }

  onDrag = (e, data) => {
    this.setState({
      positionX: data.x,
      positionY: data.y,
    });
  }

  getImageBtns = () => {
    const { onSwitch } = this.props;
    if (onSwitch) {
      return [...kImgBtns, 'prev', 'next']
    }
    return [...kImgBtns];
  }

  render() {
    const { imgSrc, wraperStyle, areaHeight } = this.props;
    const { imgWidth, imgRotate, imgZoom, imgErrors, positionX, positionY } = this.state;
    const imgBtns = this.getImageBtns();
    const width = imgWidth * imgZoom * 0.01;

    return (
      <section className="k-picture-wraper" style={wraperStyle}>
        <KPictureArea
          imgSrc={imgSrc}
          imgWidth={width}
          imgRotate={imgRotate}
          imgErrors={imgErrors}
          areaHeight={areaHeight}
          positionX={positionX}
          positionY={positionY}
          onDoubleClick={this.onDoubleClick}
          onDrag={this.onDrag}
          onWheel={this.onMouseWheel}
        />
        <KPictureBtns
          disabled={!!imgErrors}
          imgRotate={imgRotate}
          imgZoom={imgZoom}
          onChange={this.operating}
          btns={imgBtns}
        />
      </section>
    )
  }

}

KPicture.propTypes = {
  wraperStyle: propTypes.object,
  areaHeight: propTypes.string,
  imgSrc: propTypes.string.isRequired,
  onSwitch: propTypes.func,
}
