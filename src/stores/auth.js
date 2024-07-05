import { defineStore } from "pinia";
import api from '@/axios'
import { ref } from 'vue'

const useAuthStore = defineStore('auth', () => {

    const user = ref(null);

    const login = async (form) => {
        const response = await api.post('/login', form);
        localStorage.setItem('access_token', response.data.access_token);
        return response;
    }

    const register = async (form) => {
        const response = await api.post('/register', form);
        return response;
    }

    const getUser = async () => {
        const response = await api.get('auth/user');
        user.value = response.data.data;
        return response;
    }

    return { user, getUser, login, register }

});

export default useAuthStore;