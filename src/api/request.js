import axios from 'axios'
import { Message } from 'element-ui';

const requests = axios.create({
    baseURL: '/api',
    timeout:500000
})

requests.interceptors.request.use((config) => {
    if(sessionStorage.getItem('token')) {
        config.headers.common['token'] = sessionStorage.getItem('token')
    }
    return config;
})

requests.interceptors.response.use((res) => {
    return res.data;
},() => {
    Message({
        type: 'error',
        duration: 100000
    })
    return Promise.reject(new Error('faile'));
})

export default requests