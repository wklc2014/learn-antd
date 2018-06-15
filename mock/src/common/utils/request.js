/**
 * 请求后台接口方法
 * url 接口地址
 * params 接口参数
 * options axios 的配置参数
 */
import axios from 'axios';
import utils from './utils.js';

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
    }).catch((err) => {
      const myErrors = utils.ajaxErrorResponse(err);
      resolve(myErrors);
    });
  })
}
