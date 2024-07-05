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

    const deleteReunion = async (id) => {
        const response = await api.delete(`/reuniones/${id}`);
        return response;
    }

    return { reuniones, getReuniones, storeReuniones, deleteReunion }
});

export default useReunionesStore;   