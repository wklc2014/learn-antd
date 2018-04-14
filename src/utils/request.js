import axios from 'axios';
import ajaxErrorResponse from './configs/ajaxErrorResponse.js';

export default function request(url, params = {}, options = {}) {

  const newParams = Object.assign({}, params, {
    _input_charset: 'utf-8',
    _random: new Date().getTime(),
  });

  const axios_options = {
    url,
    timeout: 2000,
    ...options,
  }

  const { method = 'get' } = options;

  if (method.toLowerCase() === 'get') {
    axios_options.params = newParams;
  } else {
    axios_options.data = newParams;
  }

  return new Promise((resolve, reject) => {
    axios(axios_options).then((resp) => {
      resolve(resp.data);
    }).catch((error) => {
      const myErrors = ajaxErrorResponse(error);
      resolve(myErrors);
    });
  })
}
