<template>
    <Layout>
        <template v-slot:main>

            <form class=" bg-white/80 p-6 rounded shadow-md" @submit.prevent="submit">
                <div class="mb-4">
                    <RouterLink
                        class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md text-lg transition duration-300"
                        :to="{ name: 'reuniones.actas', params: { id: route.params.id ? form.id_reunion : route.params.id } }">
                        regresar
                    </RouterLink>
                </div>

                <div class="mb-4">
                    <label for="titulo" class="block text-gray-700 mb-2">Título</label>
                    <input v-model="form.tema" id="titulo" class="w-full bg-gray-100 rounded p-2" type="text"
                        placeholder="Título" name="titulo" />
                </div>
                <div class="mb-4">
                    <label for="contenido" class="block text-gray-700 mb-2">Fecha</label>
                    <textarea v-model="form.contenido" id="contenido" class="w-full bg-gray-100 rounded p-2" 
                        placeholder="contenido" name="contenido" ></textarea>
                </div>
                <div class="mb-8">
                    <label for="estado" class="block text-gray-700 mb-2">Estado</label>
                    <select v-model="form.tipo" id="estado" class="w-full bg-gray-100 rounded p-2" name="estado">
                        <option value="publica">publica</option>
                        <option value="privada">privada</option>
                    </select>
                </div>

                <button class="w-full bg-green-500 text-white rounded p-2" type="submit">
                    {{ route.name === 'actas.editar' ? 'Actualizar' : 'Crear' }}
                </button>
            </form>
        </template>
    </Layout>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import Layout from '@/layouts/Layout.vue';
import useActaStore from '@/stores/acta';
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const { storeActa, getActa, updateActa } = useActaStore();

const form = ref({
    tema: '',
    contenido: '',
    tipo: '',
    id_reunion: -1,
});


const submit = async () => {
    route.name == 'actas.create' ? await store() : await update();
};

const store = async () => {
    form.value.id_reunion = route.params.id;
    await storeActa(form.value);
    router.push({ name: 'reuniones.actas', params: { id: route.params.id } });
};

const update = async () => {
    await updateActa(form.value.id_acta, form.value);
    router.push({ name: 'reuniones.actas', params: { id: form.value.id_reunion } });
};


onMounted( async () => {
    if (route.name === 'actas.editar') {
        const response = await getActa(route.params.id);
        form.value = response.data.data;
    }
});



</script>