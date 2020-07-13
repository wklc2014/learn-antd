import request from './request.js';

export function getUser(params: any) {
    return request('http://30.20.234.75:15000/learn-antd/user', params, {
        method: 'post',
    });
}
