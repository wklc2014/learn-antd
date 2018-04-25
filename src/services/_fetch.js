import request from '../common/utils/request.js';
import * as api from '../common/configs/api.js';

export function fetch(params) {
  return request(`${api.fetch}`, params, {
    method: 'POST',
  });
}
