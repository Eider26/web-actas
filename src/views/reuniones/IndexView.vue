<template>
    <Layout>
        <template v-slot:main>
            <div class="flex flex-col items-center justify-center bg-white/80">
                <div class="w-full p-4">
                    <div class="bg-white rounded-md shadow-md p-4">
                        <table class="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                            <thead class="bg-blue-500 text-white">
                                <tr>
                                    <th class="text-left p-4">Título</th>
                                    <th class="text-left p-4">Fecha</th>
                                    <th class="text-left p-4">Hora de Inicio</th>
                                    <th class="text-left p-4">Hora de Finalización</th>
                                    <th class="text-left p-4">Lugar</th>
                                    <th class="text-left p-4">Estado</th>
                                    <th class="text-left p-4">Acciones</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="reunion in reuniones" :key="reunion.id"
                                    class="odd:bg-blue-300 even:bg-blue-200">
                                    <td class="p-4">{{ reunion.titulo }}</td>
                                    <td class="p-4">{{ reunion.fecha }}</td>
                                    <td class="p-4">{{ reunion.hora_inicio }}</td>
                                    <td class="p-4">{{ reunion.hora_finalizacion }}</td>
                                    <td class="p-4">{{ reunion.lugar }}</td>
                                    <td class="p-4">{{ reunion.estado }}</td>
                                    <td class=" flex flex-wrap gap-2 p-4">
                                        <RouterLink
                                            :to="{ name: 'reuniones.editar', params: { id: reunion.id_reunion } }"
                                            class="bg-green-500 mr-2 text-white p-2 rounded">Editar</RouterLink>
                                        <RouterLink class="bg-blue-500 mr-2 text-white p-2 rounded"
                                            :to="{ name: 'reuniones.actas', params: { id: reunion.id_reunion } }">
                                            Actas
                                        </RouterLink>
                                        <button @click="destroy(reunion.id_reunion)"
                                            class="bg-red-500 text-white p-2 rounded">
                                            Eliminar
                                        </button>
                                        <RouterLink :to="{
                                            name: 'reuniones.pdf',
                                            params: { id: reunion.id_reunion }
                                        
                                        }" class="bg-yellow-500 mr-2 text-white p-2 rounded">
                                            PDF
                                        </RouterLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </template>
    </Layout>
</template>
<script setup>
import useReunionesStore from '@/stores/reuniones';
import Layout from '@/layouts/Layout.vue';
import { ref, onMounted } from 'vue';

const { getReuniones, deleteReunion } = useReunionesStore();

const reuniones = ref([]);

const destroy = async (id) => {
    await deleteReunion(id);
    await index();
};

const index = async () => {
    const response = await getReuniones();
    reuniones.value = response.data.data;
};

onMounted(async () => {
    await index();
});



</script>