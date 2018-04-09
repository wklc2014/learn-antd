import request from '../utils/request.js';
import * as api from '../utils/api.js';

export function example(params) {
  return request(`${api.example}`, params, {
    method: 'POST',
  });
}
