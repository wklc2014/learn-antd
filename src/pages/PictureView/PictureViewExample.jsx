import React, { Component } from 'react';
import { Modal, Button, Card } from 'antd';

import HPictureView from '../../components/HPictureView/HPictureView.jsx';

import pic_1 from '../../common/images/pic-1.jpg';
import pic_2 from '../../common/images/pic-2.jpg';

export default class PictureViewExample extends Component {

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  onBtnClick = () => {
    this.setState({ visible: true });
  }

  onCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Card>
          <p>
            <Button style={{ marginRight: 8 }} onClick={this.onBtnClick}>切换</Button>
          </p>
          <div style={{ width: 400 }}>
            <HPictureView
              viewHeight={400}
              picSrc={pic_1}
              picBtns
            />
          </div>
        </Card>
        <Modal
          visible={visible}
          title="审核凭证"
          width="90vw"
          footer={false}
          onCancel={this.onCancel}
        >
          <HPictureView
            viewHeight={400}
            picSrc={pic_2}
            picBtns
          />
        </Modal>
      </div>
    )
  }
}
