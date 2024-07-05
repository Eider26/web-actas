<template>
  <main class="flex justify-center items-center h-screen w-full bg-cover bg-[url('/public/images/login-bg.jpg')]">
    <div class="flex w-4/6 h-2/4 bg-blue-400/80">
      <div class="flex-1 relative">
        <form class="absolute -top-2 left-4 bg-white rounded-2xl p-8" @submit.prevent="submit">
          <h2 class="my-8 text-blue-400 text-center text-3xl font-bold">
            Iniciar Sesión
          </h2>
          <input class="w-full bg-gray-100 rounded p-2 mb-4" v-model="form.usuario" type="text" placeholder="Usuario"
            name="usuario" />
          <input class="w-full bg-gray-100 rounded p-2" v-model="form.contrasena" type="password"
            placeholder="Contraseña" name="contrasena" />
            
          <button class="bg-blue-500 text-white p-2 w-32 mt-12 rounded">
            Entrar
          </button>

        </form>

      </div>
      <div class="flex justify-center items-center flex-1 text-white">
        <div>
          <h2 class="text-center text-3xl font-semibold">¿Aún no tienes una cuenta?</h2>
          <p class="text-white text-xl text-center my-8">Regístrate para que puedas iniciar sesion</p>
          <RouterLink to="/register" class="py-2 px-8 font-semibold border">Registrarse</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import useAuthStore from "@/stores/auth";
import { ref } from "vue";

const auth = useAuthStore();

const form = ref({
  usuario: "",
  contrasena: "",
});

const submit = async () => {
  const response = await auth.login(form.value);
  console.log(response);

};


</script>
