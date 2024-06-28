<template>
    <div class="bg-blue-300 min-h-screen flex flex-col justify-center items-center">
      <header class="container mx-auto py-8">
        <a href="#" class="flex items-center gap-2 text-white font-bold text-3xl">
          <img src="/public/images/actas-removebg-preview.png" alt="Tus Actas" class="icon" width="50" height="50">
          <span>Tu Administrador de Actas</span>
        </a>
      </header>
  
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row items-center justify-center">
          <div class="lg:w-1/2 lg:mr-16 mb-8 lg:mb-0">
            <div class="text-white text-center lg:text-left">
              <h2 class="text-4xl font-bold mb-4">¡Obtén ya tu Asistente Virtual para Actas de Reuniones!</h2>
              <p class="mb-6">Simplifica y profesionaliza tus reuniones al instante.</p>
              <a href="/vista/login/index.html" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg transition duration-300">Ingresar</a>
            </div>
          </div>
          <div class="lg:w-1/2">
            <img src="/public/images/bg3.jpg" alt="Asistente Virtual" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  /* Aquí puedes añadir estilos adicionales específicos si es necesario */
  </style>
  