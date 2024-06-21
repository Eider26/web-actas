import { defineStore } from "pinia";
import api from '@/axios'

const useAuthStore = defineStore('auth', () => {

    const login = async (form) => {
        const response = await api.post('/login', form);
        return response;
    }   


    return { login }

});

export default useAuthStore;