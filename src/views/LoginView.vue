<template>
  <main
    class="flex justify-center items-center h-screen w-full bg-cover bg-[url('/images/login-bg.jpg')]"
  >
    <div class="flex w-3/6 h-2/4 bg-blue-400/80">
      <div class="flex-2 relative">
        <router-link to="/src/views/actas.vue"><button> ir a actas</button></router-link>
        <form
          v-if="showLogin"
          class="absolute -bottom-4 -top-4 left-4 bg-white rounded-2xl p-16"
          @submit.prevent="submitLogin"
        >
          <h2 class="my-8 text-blue-400 text-center text-3xl font-bold">
            Iniciar Sesión
          </h2>
          <input
            class="w-full bg-gray-100 rounded p-2 mb-4"
            v-model="loginForm.usuario"
            type="text"
            placeholder="Usuario"
            name="usuario"
          />
          <input
            class="w-full bg-gray-100 rounded p-2"
            v-model="loginForm.contrasena"
            type="password"
            placeholder="Contraseña"
            name="contrasena"
          />
          <button class="bg-blue-500 text-white p-2 w-32 mt-12 rounded">
            Entrar
          </button>
        </form>
      </div>

      <div class="flex justify-center items-center flex-1 text-white">
        <div v-if="showLogin">
          <h2 class="text-center text-3xl font-semibold">¿Aún no tienes una cuenta?</h2>
          <p class="text-white text-xl text-center my-5">Regístrate para que puedas iniciar sesión</p>
          <button class="py-2 px-8 font-semibold border" @click="toggleForm">
            Registrarse
          </button>
        </div>
        <div v-if="showRegister">
          <h2 class="text-left text-3xl font-semibold px-3-6">¿Ya tienes una cuenta?</h2>
          <p class="text-white text-x1 text-left my-8">Inicia sesión para continuar</p>
          <button class="py-2 px-8 font-semibold border" @click="toggleForm">
            Iniciar Sesión
          </button>
        </div>
      </div>

      <div v-if="showRegister" class="flex-1 relative">
        <form
          class="absolute -bottom-4 -top-4 right-4 bg-white rounded-2xl p-12"
          @submit.prevent="submitRegister"
        >
          <h2 class="my-8 text-blue-400 text-center text-3xl font-bold">
            Registrarse
          </h2>
          <input
            class="w-full bg-gray-100 rounded p-2 mb-4"
            v-model="registerForm.nombre"
            type="text"
            placeholder="Nombre"
            name="nombre"
          />
          <input
            class="w-full bg-gray-100 rounded p-2 mb-4"
            v-model="registerForm.apellido"
            type="text"
            placeholder="Apellido"
            name="apellido"
          />
          <input
            class="w-full bg-gray-100 rounded p-2 mb-4"
            v-model="registerForm.email"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            class="w-full bg-gray-100 rounded p-2 mb-4"
            v-model="registerForm.usuario"
            type="text"
            placeholder="Usuario"
            name="usuario"
          />
          <select
            class="w-full bg-gray-100 rounded p-2 mb-4"
            v-model="registerForm.rol"
            name="rol"
          >
            <option value="admin">Admin</option>
            <option value="visitor">Visitante</option>
          </select>
          <button class="bg-blue-500 text-white p-2 w-32 mt-12 rounded">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const showLogin = ref(true);
const showRegister = ref(false);

const toggleForm = () => {
  showLogin.value = !showLogin.value;
  showRegister.value = !showRegister.value;
};

const loginForm = ref({
  usuario: "",
  contrasena: "",
});

const registerForm = ref({
  nombre: "",
  apellido: "",
  email: "",
  usuario: "",
  rol: "visitor",
});

const submitLogin = async () => {
  // Lógica para enviar el formulario de inicio de sesión
  console.log("Login form submitted", loginForm.value);
};

const submitRegister = async () => {
  // Lógica para enviar el formulario de registro
  console.log("Register form submitted", registerForm.value);
};
</script>
