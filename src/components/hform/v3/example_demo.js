import React, { useState, Component } from 'react';
import { Form, Button } from 'antd';
import HForm, { getValue } from './index.js';
import configs from './example_configs.js';

class ExampleDemo extends Component {

    constructor(props) {
      super(props);
      const defValues = getValue(configs);
      this.state = {
        values: {
            ...defValues,
            searchPassword: 'baidu',
        }
      }
    }

    setValues = ({ id, value }) => {
        console.log(id, value);
        const { values } = this.state;
        this.setState({
            values: {
                ...values,
                [id]: value,
            }
        })
    }

    handleValidate = () => {
        this.props.form.validateFields((errors, values) => {
            console.error('errors>>>', errors);
            console.log('values>>>', values);
        })
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    render() {
        const { values } = this.state;

        return (
            <div style={{ width: 800, border: '1px solid #ddd', padding: 16 }}>
                <div style={{ paddingBottom: 16 }}>
                    <Button type="primary" style={{ marginRight: 16 }} onClick={this.handleValidate}>验证</Button>
                    <Button type="primary" onClick={this.handleReset}>重置</Button>
                </div>
                <Form>
                    <HForm
                        cols={1}
                        configs={configs}
                        onChange={this.setValues}
                        values={values}
                        form={this.props.form}
                    />
                </Form>
            </div>
        )
    }
}

export default Form.create()(ExampleDemo);
