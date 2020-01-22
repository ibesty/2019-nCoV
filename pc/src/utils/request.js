import axios from 'axios';

// 创建axios实例
const service = axios.create({
    baseURL: '/', // api 的 base_url
    timeout: 10000, // 请求超时时间
});
service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

service.interceptors.request.use((config) => {
    config.headers['Cache-Control'] = 'no-cache';
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
}, error => Promise.reject(error));

// 响应拦截器
service.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error);
});

export default service;
