<template>
    <Layout>
        <template v-slot:main>
            <div class="w-full p-4">
                <div class="bg-white rounded-md shadow-md p-4">

                    <div class="flex justify-between mb-4">

                        <RouterLink
                            class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md text-lg transition duration-300"
                            :to="{ name: 'reuniones.actas', params: { id: route.params.idReunion } }">
                            regresar
                        </RouterLink>
                        <RouterLink
                            :to="{ name: 'compromisos.create', params: { idActa: route.params.idActa, idReunion: route.params.idReunion } }"
                            class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md text-lg transition duration-300">
                            Crear Compromiso
                        </RouterLink>
                    </div>


                    <table class="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead class="bg-blue-500 text-white">
                            <tr>
                                <th class="text-left p-4">Descripcion</th>
                                <th class="text-left p-4">Fecha Limite</th>
                                <th class="text-left p-4">Estado</th>
                                <th class="text-left p-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in compromisos" :key="data.id" class="odd:bg-blue-300 even:bg-blue-200">
                                <td class="p-4">{{ data.descripcion }}</td>
                                <td class="p-4">{{ data.fecha_limite }}</td>
                                <td class="p-4">{{ data.estado }}</td>

                                <td class="p-4">
                                    <RouterLink class="bg-blue-500 mr-2 text-white p-2 rounded"
                                        :to="{ name: 'compromisos.editar', params: { idReunion: route.params.idReunion, idActa: data.id_acta, id: data.id_compromiso } }">
                                        Editar</RouterLink>




                                    <button @click="destroy(data.id_compromiso)"
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
import useCompromisoStore from '@/stores/compromiso';
import { ref, onMounted } from 'vue';

const compromisos = ref([]);

const { getCompromisosByActa, deleteCompromiso } = useCompromisoStore();

const route = useRoute();

const index = async () => {
    const response = await getCompromisosByActa(route.params.idActa);
    compromisos.value = response.data.data;
}

const destroy = async (id) => {
    await deleteCompromiso(id);
    await index();
};


onMounted(async () => {
    await index();
})

</script>