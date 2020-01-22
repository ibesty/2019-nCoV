import request from './request.js';

export function getData() {
    return request({
        url: 'https://api.st.link/angelia',
        method: 'post'
    });
}
