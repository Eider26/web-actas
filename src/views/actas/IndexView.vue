<template>
    <Layout>
        <template v-slot:main>
            <div class="w-full p-4">
                <div class="bg-white rounded-md shadow-md p-4">

                    <div class="flex justify-between mb-4">

                        <RouterLink
                            class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md text-lg transition duration-300"
                            :to="{ name: 'reuniones.index' }">
                            regresar
                        </RouterLink>
                        <RouterLink :to="{ name: 'actas.create', params: { id: route.params.id } }"
                            class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md text-lg transition duration-300">
                            Crear Acta
                        </RouterLink>
                    </div>


                    <table class="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead class="bg-blue-500 text-white">
                            <tr>
                                <th class="text-left p-4">Tema</th>
                                <th class="text-left p-4">Contenido</th>
                                <th class="text-left p-4">Tipo</th>
                                <th class="text-left p-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="data in actas" :key="data.id" class="odd:bg-blue-300 even:bg-blue-200">
                            <td class="p-4">{{ data.tema }}</td>
                            <td class="p-4">{{ data.contenido }}</td>
                            <td class="p-4">{{ data.tipo }}</td>
                            
                            <td class="p-4">
                                <RouterLink :to="{ name: 'actas.editar', params: { id: data.id_acta } }"
                                class="bg-green-500 mr-2 text-white p-2 rounded">Editar</RouterLink>
                                
                                <RouterLink class="bg-blue-500 mr-2 text-white p-2 rounded"
                                    :to="{ name: 'actas.compromisos', params: { idReunion: data.id_reunion, idActa:  data.id_acta } }">
                                    Compromisos
                                </RouterLink>
                                
                                <button @click="destroy(data.id_acta)"
                                    class="bg-red-500 text-white p-2 rounded">Eliminar</button> 
                            </td>
                        </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </template>
    </Layout>
</template>
<script setup>
import Layout from '@/layouts/Layout.vue';
import { useRoute } from 'vue-router';
import useActaStore from '@/stores/acta';
import { ref, onMounted } from 'vue';

const actas = ref([]);

const { getActasByReunion, deleteActa } = useActaStore();

const route = useRoute();

const index = async () => {
    const response = await getActasByReunion(route.params.id);
    actas.value = response.data.data;
}

const destroy = async (id) => {
    await deleteActa(id);
    await index();
};


onMounted(async () => {
    await index();
})

</script>