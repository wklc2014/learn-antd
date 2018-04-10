import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import KPicture from '../../components/KPicture/KPicture.jsx';

import pic_1 from './common/1.jpg';
import pic_2 from './common/2.jpg';
import pic_3 from './common/3.jpg';
import pic_4 from './common/4.jpg';
import pic_5 from './common/5.jpg';

const paths = [pic_1, pic_2, pic_3, pic_4, pic_5, '2'];

export default class TestKImage extends Component {

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      visible: false,
    }

  }

  onSwitch = (type) => {
    const { index } = this.state;
    if (type === 'prev' && index > 0) {
      this.setState({ index: index - 1 });
    } else if (type === 'next' && index < paths.length - 1) {
      this.setState({ index: index + 1 });
    }
  }

  onBtnClick = () => {
    this.setState({ visible: true });
  }

  onCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { index, visible } = this.state;

    const divStyle = {
      padding: 16
    }

    return (
      <div style={divStyle}>
        <Button onClick={this.onBtnClick}>切换</Button>
        <Modal
          visible={visible}
          title="审核凭证"
          width="95vw"
          footer={false}
          onCancel={this.onCancel}
        >
          <KPicture
            imgSrc={paths[index]}
            areaHeight="60vh"
            onSwitch={this.onSwitch}
          />
        </Modal>
      </div>
    )
  }

}
