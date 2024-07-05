<template>
    <Layout>
        <template v-slot:main>
            <div class="max-w-4xl mx-auto p-8 bg-white shadow-lg print:shadow-none" >
                <div class="flex justify-between" >
                    <RouterLink
                            class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md text-lg transition duration-300"
                            :to="{ name: 'reuniones.index'}">
                            regresar
                        </RouterLink>
                    <button @click="descargarPDF"
                        class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md text-lg transition duration-300">
                        Descargar PDF
                    </button>
                </div>
            
            <div id="pdf" class="max-w-4xl mx-auto p-8 bg-white shadow-lg print:shadow-none">
                <h1 class="text-3xl font-bold mb-6 text-center">{{ data.reunion.titulo }}</h1>

                <div class="mb-8">
                    <h2 class="text-2xl font-semibold mb-4">Detalles de la Reunión</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <p><span class="font-semibold">Fecha:</span> {{ formatDate(data.reunion.fecha) }}</p>
                        <p><span class="font-semibold">Hora de inicio:</span> {{ data.reunion.hora_inicio }}</p>
                        <p><span class="font-semibold">Hora de finalización:</span> {{ data.reunion.hora_finalizacion }}
                        </p>
                        <p><span class="font-semibold">Lugar:</span> {{ data.reunion.lugar }}</p>
                        <p><span class="font-semibold">Estado:</span> {{ data.reunion.estado }}</p>
                    </div>
                </div>

                <div v-for="acta in data.actas" :key="acta.id_acta" class="mb-8">
                    <h2 class="text-2xl font-semibold mb-4">Acta</h2>
                    <div class="mb-4">
                        <p><span class="font-semibold">Tema:</span> {{ acta.tema }}</p>
                        <p><span class="font-semibold">Tipo:</span> {{ acta.tipo }}</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-2">Contenido:</h3>
                        <p class="whitespace-pre-wrap">{{ acta.contenido }}</p>
                    </div>
                </div>

                <div v-if="data.compromisos.length > 0">
                    <h2 class="text-2xl font-semibold mb-4">Compromisos</h2>
                    <div v-for="compromiso in data.compromisos" :key="compromiso.id_compromiso"
                        class="mb-4 p-4 border border-gray-200 rounded">
                        <p><span class="font-semibold">Descripción:</span> {{ compromiso.descripcion }}</p>
                        <p><span class="font-semibold">Fecha límite:</span> {{ formatDate(compromiso.fecha_limite) }}
                        </p>
                        <p><span class="font-semibold">Estado:</span> {{ compromiso.estado }}</p>
                    </div>
                </div>
            </div>
        </div>
        </template>
    </Layout>
</template>
<script setup>
import Layout from '@/layouts/Layout.vue';
import useActaStore from '@/stores/acta';
import useReunionesStore from '@/stores/reuniones';
import useCompromisoStore from '@/stores/compromiso';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const route = useRoute();

const data = ref({
    reunion: {},
    actas: [],
    compromisos: [],
});

const { getReunion } = useReunionesStore();
const { getActasByReunion } = useActaStore();
const { getCompromisosByActa } = useCompromisoStore();

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
};

const descargarPDF = async () => {
    const pdfContent = document.getElementById('pdf');
    const canvas = await html2canvas(pdfContent);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
    });
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(data.value.reunion.titulo + '.pdf');

}

onMounted(async () => {
    const response = await getReunion(route.params.id);
    data.value.reunion = response.data.data;

    const responseActas = await getActasByReunion(data.value.reunion.id_reunion);
    data.value.actas = responseActas.data.data;

    const responseCompromisos = await getCompromisosByActa(data.value.actas[0].id_acta);
    data.value.compromisos = responseCompromisos.data.data;

});


</script>