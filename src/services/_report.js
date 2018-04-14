import request from '../utils/request.js';
import * as api from '../utils/configs/api.js';

export function getUser(params) {
  return request(`${api.getUser}`, params, {
    method: 'GET',
  });
}
