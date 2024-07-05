import { defineStore } from "pinia";
import api from "@/axios";
import { ref } from "vue";

const useActaStore = defineStore('acta', () => {

    const actas = ref([]);


    const getActa = async (id) => {
        const response = await api.get(`/actas/${id}`);
        actas.value = response.data;
        return response;
    }

    const getActasByReunion = async (reunionId) => {
        const response = await api.get(`/actas/reuniones/${reunionId}`);
        actas.value = response.data;
        return response;
    }

    const storeActa = async (form) => {
        const response = await api.post('/actas', form);
        return response;
    }

    const updateActa = async (id, form) => {
        const response = await api.put(`/actas/${id}`, form);
        return response;
    }

    const deleteActa = async (id) => {
        const response = await api.delete(`/actas/${id}`);
        return response;
    }


    return {
        actas,
        getActa,
        getActasByReunion,
        storeActa,
        updateActa,
        deleteActa
    }
});

export default useActaStore;