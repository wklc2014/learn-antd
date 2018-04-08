import React, { Component } from 'react';
import { Form } from 'antd';
import { actions } from 'mirrorx';

import KFormItem from '../../components/KForm/KFormItem.jsx';
// import KFormItemExt from '../../components/HForm/KFormItemExt.jsx';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 18,
      offset: 4,
    },
  },
};

class TestKFormItem extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      editor: '巴拉巴拉',
    }

  }

  onChange = ({ id, value }) => {
    if (id === 'user_name_3') {
      actions._report.example();
    }
  }

  render() {
    const { form } = this.props;

    const KFormItemProps_1 = {
      config: {
        id: 'user_name_1',
        type: 'input',
        options: {
          rules: [
            { required: true, message: '内容必填' }
          ]
        }
      },
      formItemParams: {
        label: '姓名',
      },
      formItemLayout,
      form,
    }

    const KFormItemProps_2 = {
      config: {
        id: 'user_name_2',
        type: 'input',
      },
      formItemParams: {
        label: '手机号',
      },
      formItemLayout,
      form,
    }

    const KFormItemProps_3 = {
      config: {
        id: 'user_name_3',
        type: 'button',
        params: {
          type: 'primary',
        },
        extMap: {
          label: '提交'
        },
      },
      formItemLayout: tailFormItemLayout,
      form,
      onChange: this.onChange,
    }

    return (
      <div style={{ padding: 16 }}>
        <Form>
          <KFormItem {...KFormItemProps_1} />
          <KFormItem {...KFormItemProps_2} />
          <KFormItem {...KFormItemProps_3} />
        </Form>
      </div>
    )
  }
}

const Wraper = Form.create()(TestKFormItem);

export default Wraper;
