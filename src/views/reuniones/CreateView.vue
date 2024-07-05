<template>
    <Layout>
        <template v-slot:main>
            <form class=" bg-white/80 p-6 rounded shadow-md" @submit.prevent="submit">
                <div class="mb-4">
                    <label for="titulo" class="block text-gray-700 mb-2">Título</label>
                    <input v-model="form.titulo" id="titulo" class="w-full bg-gray-100 rounded p-2" type="text"
                        placeholder="Título" name="titulo" />
                </div>
                <div class="mb-4">
                    <label for="fecha" class="block text-gray-700 mb-2">Fecha</label>
                    <input v-model="form.fecha" id="fecha" class="w-full bg-gray-100 rounded p-2" type="date"
                        placeholder="Fecha" name="fecha" />
                </div>
                <div class="mb-4">
                    <label for="hora_inicio" class="block text-gray-700 mb-2">Hora de inicio</label>
                    <input v-model="form.hora_inicio" id="hora_inicio" class="w-full bg-gray-100 rounded p-2"
                        type="time" placeholder="Hora de inicio" name="hora_inicio" />
                </div>
                <div class="mb-4">
                    <label for="hora_finalizacion" class="block text-gray-700 mb-2">Hora de finalización</label>
                    <input v-model="form.hora_finalizacion" id="hora_finalizacion"
                        class="w-full bg-gray-100 rounded p-2" type="time" placeholder="Hora de finalización"
                        name="hora_finalizacion" />
                </div>
                <div class="mb-4">
                    <label for="lugar" class="block text-gray-700 mb-2">Lugar</label>
                    <input v-model="form.lugar" id="lugar" class="w-full bg-gray-100 rounded p-2" type="text"
                        placeholder="Lugar" name="lugar" />
                </div>
                <div class="mb-8">
                    <label for="estado" class="block text-gray-700 mb-2">Estado</label>
                    <select v-model="form.estado" id="estado" class="w-full bg-gray-100 rounded p-2" name="estado">
                        <option value="finalizada">finalizada</option>
                        <option value="programada">programada</option>
                    </select>
                </div>


                <button class="w-full bg-green-500 text-white rounded p-2" type="submit">
                    {{ route.params.id ? 'Actualizar' : 'Crear' }}
                </button>
            </form>

        </template>
    </Layout>
</template>
<script setup>
import useReunionesStore from '@/stores/reuniones';
import Layout from '@/layouts/Layout.vue';
import useAuthStore from '@/stores/auth';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const auth = useAuthStore();
const { storeReuniones, getReunion, updateReunion } = useReunionesStore();

const form = ref({
    titulo: "",
    fecha: "",
    hora_inicio: "",
    hora_finalizacion: "",
    lugar: "",
    estado: "",
    id_usuario: -1
});


const resetForm = () => {
    form.value = {
        titulo: "",
        fecha: "",
        hora_inicio: "",
        hora_finalizacion: "",
        lugar: "",
        estado: "",
        id_usuario: -1
    }
}

const submit = async () => {
    if (route.params.id) {
        await update();
    } else {
        await store();
    }
}

const store = async () => {
    try {
        if (!auth.user) await auth.getUser();

        form.value.id_usuario = auth.user.id_usuario;

        await storeReuniones(form.value);

    } catch (error) {
        console.log(error);
    }
}

const update = async () => {
    try {

        console.log(form.value)

        await updateReunion(form.value.id_reunion, form.value);

    } catch (error) {
        console.log(error);
    }
}

watch(() => route.params.id, async (id) => {
    if (id) {
        const response = await getReunion(id);
        form.value = response.data.data[0];
    } else {
        resetForm();
    }
});

onMounted(async () => {
    if (!auth.user) await auth.getUser();

    if (route.params.id) {
        const response = await getReunion(route.params.id);
        form.value = response.data.data[0];
    } else {
        resetForm();
    }
});


</script>
