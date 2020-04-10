import React from 'react';
import propTypes from 'prop-types';
import { Form } from 'antd';
import HForm from '../h-form.js';
import configs from './configs.js';

function Demo(props) {

  const { } = props;
  const values = {
    first_name: '张',
    last_name: '三',
    cityName: 'mian_yang',
  }

  return (
    <Form initialValues={values}>
      <HForm
        cols={2}
        configs={configs}
        values={values}
      />
    </Form>
  )
}

Demo.propTypes = {

}

Demo.defaultProps = {

}

export default Demo;
