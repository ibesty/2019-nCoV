import request from './request.js';

export function getData() {
    return request({
        url: '/2019ncov',
        method: 'post'
    });
}
