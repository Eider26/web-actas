import { defineStore } from "pinia";
import api from "@/axios";
import { ref } from "vue";

const useCompromisoStore = defineStore('compromiso', () => {

    const compromisos = ref([]);    

    const getCompromisosByActa = async (actaId) => {
        const response = await api.get(`/compromisos/acta/${actaId}`);
        compromisos.value = response.data;
        return response;
    }

    const getCompromiso = async (id) => {
        const response = await api.get(`/compromisos/${id}`);
        return response;
    }   

    const storeCompromiso = async (form) => {
        const response = await api.post('/compromisos', form);
        return response;
    }

    const updateCompromiso = async (id, form) => {
        const response = await api.put(`/compromisos/${id}`, form);
        return response;
    }

    const deleteCompromiso = async (id) => {
        const response = await api.delete(`/compromisos/${id}`);
        return response;
    }

    return {
        compromisos,
        getCompromiso,
        getCompromisosByActa,
        storeCompromiso,
        updateCompromiso,
        deleteCompromiso
    }   

});

export default useCompromisoStore;