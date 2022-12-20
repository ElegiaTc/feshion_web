import axios from 'axios'

const requests = axios.create({
    baseURL: '/api',
    timeout:5000
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
    return Promise.reject(new Error('faile'));
})

export default requests