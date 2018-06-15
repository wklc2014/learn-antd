import api from '../config/api.js';
import request from '../utils/request.js';

export function querySuccess(params) {
  return request('/mock/users', params, { method: 'POST' });
}

export function queryError(params) {
  return request('/proxy/users', params);
}
