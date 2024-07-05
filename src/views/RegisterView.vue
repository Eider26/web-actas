<template>
  <main class="flex justify-center items-center h-screen w-full bg-cover bg-[url('/public/images/login-bg.jpg')]">
    <div class="flex w-4/6 h-2/4 bg-blue-400/80">
     

      <div class="flex justify-center items-center flex-1 text-white">
        <div>
          <h2 class="text-center text-3xl font-semibold">¿Ya tienes una cuenta?</h2>
          <p class="text-white text-xl text-center my-8">Inicia sesion para entrar a tu actas</p>
          <RouterLink to="/login" class="py-2 px-8 font-semibold border">Iniciar sesión</RouterLink>
        </div>
      </div>

      <div class="flex-1 relative">
        <form class="absolute -top-12 left-4 bg-white rounded-2xl p-8" @submit.prevent="submit">
          <h2 class="my-8 text-blue-400 text-center text-3xl font-bold">
            Registrarse
          </h2>

          <input class="w-full bg-gray-100 rounded p-2 mb-4" v-model="form.nombre" type="text"
            placeholder="Nombre completo" name="nombre" />

          <input class="w-full bg-gray-100 rounded p-2 mb-4" v-model="form.correo" type="email"
            placeholder="correo" name="correo" />

          <input class="w-full bg-gray-100 rounded p-2 mb-4" v-model="form.usuario" type="text" placeholder="Usuario"
            name="usuario" />

          <input class="w-full bg-gray-100 rounded p-2" v-model="form.contrasena" type="password"
            placeholder="Contraseña" name="contrasena" />

          <button class="bg-blue-500 text-white p-2 w-32 mt-12 rounded">
            Entrar
          </button>
        </form>
      </div>

    </div>
  </main>
</template>
<script setup>
import useAuthStore from "@/stores/auth";
import { ref } from "vue";

const auth = useAuthStore();

const form = ref({
  nombre: "",
  correo: "",
  usuario: "",
  contrasena: "",
});

const submit = async () => {
  try {
    const response = await auth.register(form.value);
    
  } catch (error) {
    console.log(error);
  }
};


</script>
