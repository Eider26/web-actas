import { defineStore } from "pinia";
import api from '@/axios'
import { ref } from 'vue'

const useReunionesStore = defineStore('reuniones', () => {  

    const reuniones = ref([]);

    const storeReuniones = async (form) => {
        const response = await api.post('/reuniones', form);
        return response;
    }

    const getReuniones = async () => {
        const response = await api.get('/reuniones');
        reuniones.value = response.data;
        return response;
    }

    const getReunion = async (id) => {
        const response = await api.get(`/reuniones/${id}`);
        return response;
    }

    const deleteReunion = async (id) => {
        const response = await api.delete(`/reuniones/${id}`);
        return response;
    }

    const updateReunion = async (id, form) => {
        const response = await api.put(`/reuniones/${id}`, form);
        return response;
    }

    return { reuniones, getReunion, getReuniones, storeReuniones, deleteReunion, updateReunion }
});

export default useReunionesStore;   