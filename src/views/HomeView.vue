<template>
    <div class="bg-[url('/images/bg3.jpg')] bg-cover min-h-screen">
        <main class="mx-auto">
            <div class="flex flex-col items-center justify-center">
                
                
                
                <div class="mt-24 text-white text-center">
                    <div class="flex justify-center items-center mb-8 " >
                        <img src="/public/images/actas-removebg-preview.png" alt="Tus Actas" class="icon" width="50"
                        height="50">
                        <h1 class="font-bold text-3xl"  >Tu Administrador de Actas</h1>
                    </div>

                    <h2 class="text-4xl font-bold mb-4">
                        ¡Obtén ya tu Asistente Virtual para Actas de Reuniones!
                    </h2>

                    <p class="mb-6">
                        Simplifica y profesionaliza tus reuniones al instante.
                    </p>

                    <RouterLink :to="{name: 'login'}"
                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg transition duration-300">
                        Ingresar
                    </RouterLink>

                </div>
            </div>
        </main>
    </div>
</template>
