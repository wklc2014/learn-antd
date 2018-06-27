import api from '../config/api.js';
import request from '../utils/request.js';

export default function example(params) {
  return request(api.example, params, {
    method: 'POST',
  });
}
