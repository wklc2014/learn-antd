import React, { Component } from 'react';
import propTypes from 'prop-types';

import loadImage from '../../utils/load_image.js';

import KImageBtns from './KImageBtns.jsx';
import KImageArea from './KImageArea.jsx';

import './kImage.less';

const { _ } = window;
const kImgBtns = ['zoomOut', 'zoomIn', 'rotate', 'reset', 'prev', 'next'];

export default class KImage extends Component {

  static defaultProps = {
    wraperStyle: {},
    bodyStyle: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      imgOriginWidth: 0,
      imgWidth: 0,
      imgRotate: 0,
      positionX: 0,
      positionY: 0,
      imgErrors: '',
      imgLoading: false,
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
    this.setState({ imgLoading: true });
    loadImage(imgSrc).then((image) => {
      this.setState({
        imgOriginWidth: image.width,
        imgWidth: image.width,
        imgRotate: 0,
        positionX: 0,
        positionY: 0,
        imgErrors: '',
        imgLoading: false,
      });
    }).catch((e) => {
      console.log(e);
      this.setState({
        imgOriginWidth: 0,
        imgWidth: 0,
        imgRotate: 0,
        positionX: 0,
        positionY: 0,
        imgErrors: e.toString(),
        imgLoading: false,
      });
    });
  }

  onMouseWheel = (event) => {
    if (event.deltaX > 0) {
      this.operating('zoomOut');
    } else {
      this.operating('zoomIn');
    }
  }

  onDoubleClick = () => {
    this.operating('reset');
  }

  operating = (type, num) => {
    const { imgOriginWidth, imgWidth, imgRotate } = this.state;
    switch (type) {
      case 'zoomOut':
        this.setState({ imgWidth: _.round(imgWidth * 1.1) });
        break;
      case 'zoomIn':
        this.setState({ imgWidth: _.round(imgWidth * 0.9) });
        break;
      case 'reset':
        this.setState({ positionX: 0, positionY: 0, imgRotate: 0, imgWidth: imgOriginWidth });
        break;
      case 'prev':
      case 'next':
        this.props.onSwitch(type);
        break;
      case 'rotate':
        this.setState({ imgRotate: num })
        break;
    }
  }

  getImageBtns = () => {
    const { onSwitch } = this.props;
    if (onSwitch) {
      return [...kImgBtns, 'prev', 'next']
    }
    return kImgBtns;
  }

  render() {
    const { imgSrc, wraperStyle } = this.props;
    const { imgWidth, imgRotate, imgErrors, imgLoading } = this.state;
    const imgBtns = this.getImageBtns();

    return (
      <section className="k-image-wraper" style={wraperStyle}>
        <KImageArea
          imgSrc={imgSrc}
          imgWidth={imgWidth}
          imgRotate={imgRotate}
          imgErrors={imgErrors}
          imgLoading={imgLoading}
          onWheel={this.onMouseWheel}
          onDoubleClick={this.onDoubleClick}
        />
        <KImageBtns
          imgRotate={imgRotate}
          onChange={this.operating}
          btns={imgBtns}
        />
      </section>
    )
  }

}

KImage.propTypes = {
  wraperStyle: propTypes.object,
  bodyStyle: propTypes.object,
  imgSrc: propTypes.string.isRequired,
  onSwitch: propTypes.func,
}
