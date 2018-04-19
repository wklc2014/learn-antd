import request from '../common/utils/request.js';
import * as api from '../common/configs/api.js';

export function getUser(params) {
  return request(`${api.getUser}`, params, {
    method: 'POST',
  });
}
