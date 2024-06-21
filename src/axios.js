import Axios from 'axios'

const api = Axios.create({
    baseURL: 'localhost:8000', // URL base de tu API
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;