import React, { Component } from 'react';
import { Modal, Button, Card } from 'antd';

import KPicture from '../../components/KPicture/Index.jsx';

import pic_1 from './common/images/pic-1.jpg';
import pic_2 from './common/images/pic-2.jpg';
import pic_3 from './common/images/pic-3.jpg';
import pic_4 from './common/images/pic-4.jpg';
import pic_5 from './common/images/pic-5.jpg';

const paths = [pic_1, pic_2, pic_3, pic_4, 'error image path', pic_5];

export default class DemoPicture extends Component {

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      width: 300,
      rotate: 45,
      x: 20,
      y: 10,
      visible: false,
    }
  }

  onBtnClick = () => {
    this.setState({ visible: true });
  }

  onCancel = () => {
    this.setState({ visible: false });
  }

  onChange = (stateKey) => {
    this.setState({
      [stateKey]: this.state[stateKey] + 1
    });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Card>
          <p>
            <Button style={{ marginRight: 8 }} onClick={this.onBtnClick}>切换</Button>
            <Button style={{ marginRight: 8 }} onClick={() => this.onChange('width')}>增加宽度</Button>
            <Button style={{ marginRight: 8 }} onClick={() => this.onChange('rotate')}>增加旋转角度</Button>
            <Button style={{ marginRight: 8 }} onClick={() => this.onChange('x')}>增加 x 坐标</Button>
            <Button onClick={() => this.onChange('y')}>增加 y 坐标</Button>
          </p>
          <KPicture
            picSrc={paths}
            picWidth={this.state.width}
            picRotate={this.state.rotate}
            picPositionX={this.state.x}
            picPositionY={this.state.y}
            areaHeight="60vh"
          />
        </Card>
        <Modal
          visible={visible}
          title="审核凭证"
          width="95vw"
          footer={false}
          onCancel={this.onCancel}
        >
          <KPicture
            picSrc={paths}
            areaHeight="60vh"
          />
        </Modal>
      </div>
    )
  }
}
