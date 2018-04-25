/**
 * 搜索数据接口，
 * 执行回调
 */
import request from '../../../common/utils/request.js';

let timeout;

export default function handleFetch(url, params, options, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }

  async function fake() {
    const resp = await request(api[url], params.data, options);
    callback(resp);
  }

  timeout = setTimeout(fake, params.time || 300);
}