import Axios from 'axios'
import router from './router';

const api = Axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});


api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem('access_token');
            router.push({name: 'login'});
        }
        return Promise.reject(error);
    }
);

export default api;