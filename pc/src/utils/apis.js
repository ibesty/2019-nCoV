import request from './request.js';

export function getData() {
    return request({
        url: 'https://api.st.link/angelia/2019ncov',
        method: 'post'
    });
}
