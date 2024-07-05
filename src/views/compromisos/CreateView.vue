<template>
    <Layout>
        <template v-slot:main>

            <form class=" bg-white/80 p-6 rounded shadow-md" @submit.prevent="submit">
                <div class="mb-4">
                    <RouterLink
                        class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md text-lg transition duration-300"
                        :to="{ name: 'actas.compromisos', params: { idReunion: route.params.idReunion, idActa: route.params.idActa} }">
                        regresar
                    </RouterLink>
                </div>

                <div class="mb-4">
                    <label for="titulo" class="block text-gray-700 mb-2">descripción</label>
                    <textarea v-model="form.descripcion" id="titulo" class="w-full bg-gray-100 rounded p-2" type="text"
                        placeholder="Título" name="titulo"></textarea>
                </div>
                <div class="mb-4">
                    <label for="contenido" class="block text-gray-700 mb-2">Fecha Limite</label>
                    <input v-model="form.fecha_limite" id="contenido" class="w-full bg-gray-100 rounded p-2"
                        placeholder="contenido" name="contenido" type="date" />
                </div>
                <div class="mb-8">
                    <label for="estado" class="block text-gray-700 mb-2">Estado</label>
                    <select v-model="form.estado" id="estado" class="w-full bg-gray-100 rounded p-2" name="estado">
                        <option value="pendiente">pendiente</option>
                        <option value="completado">completado</option>
                    </select>
                </div>

                <button class="w-full bg-green-500 text-white rounded p-2" type="submit">
                    {{ route.name === 'compromisos.editar' ? 'Actualizar' : 'Crear' }}
                </button>
            </form>
        </template>
    </Layout>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import Layout from '@/layouts/Layout.vue';
import useCompromisoStore from '@/stores/compromiso';
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const { storeCompromiso, getCompromiso, updateCompromiso } = useCompromisoStore();

const form = ref({
    descripcion: '',
    fecha_limite: '',
    estado: '',
    id_acta: -1,
});

const submit = async () => {
    route.name == 'compromisos.create' ? await store() : await update();
};

const store = async () => {
    form.value.id_acta = route.params.idActa;
    await storeCompromiso(form.value);
    //router.push({ name: 'reuniones.actas', params: { id: route.params.id } });
};

const update = async () => {
    await updateCompromiso(form.value.id_compromiso, form.value);
    //router.push({ name: 'reuniones.actas', params: { id: form.value.id_reunion } });
};


onMounted(async () => {
    if (route.name === 'compromisos.editar') {
        const response = await getCompromiso(route.params.id);
        form.value = response.data.data;
    }
});



</script>