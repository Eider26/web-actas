<template>
    <div class="grid grid-cols-[280px_1fr] min-h-screen w-full">
      <div class="sidebar bg-blue-400 text-white flex flex-col gap-8">
        <div class="sidebar-header p-4">
          <a href="/pagina principal/index.html" class="sidebar-link flex items-center gap-2 text-white font-bold text-xl">
            <img src="/public/images/actas-removebg-preview.png" alt="Tus Actas" width="50" height="50">
            <span>Tus Actas</span>
          </a>
          <router-link to="/src/views/LoginView.vue"> <button class="btn" >boton</button></router-link>
        </div>
        <div class="sidebar-content flex-1 overflow-auto p-8">
          <nav class="nav grid gap-4">
            <a href="./crear.html" class="nav-link block p-2 text-white rounded hover:bg-blue-500">Crear Acta</a>
            <a href="./ver.html" class="nav-link block p-2 text-white rounded hover:bg-blue-500">Ver Actas</a>
            <a href="#" class="nav-link block p-2 text-white rounded hover:bg-blue-500">Editar Acta</a>
            <a href="#" class="nav-link block p-2 text-white rounded hover:bg-blue-500">Archivar Acta</a>
          </nav>
        </div>
      </div>
  
      <div class="main-content flex flex-col">
        <header class="header bg-blue-300 text-white p-4 flex justify-between items-center">
          <div class="flex items-center gap-4">
            <a class="flex items-center gap-2 text-lg font-bold" href="#">
              <img src="/public/images/login-bg.jpg" width="24" height="24" class="h-6 w-6" alt="Actas">
              <span>Actas</span>
            </a>
          </div>
          <nav>
            <a href="./Reunion.html" class="text-white">Bienvenidos</a>
          </nav>
          <button class="menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span class="sr-only">Toggle navigation</span>
          </button>
        </header>
  
        <main class="main-contents flex-1 p-8 bg-cover bg-center bg-fixed" style="background-image: url('/public/images/login-bg.jpg');">
          <div class="form-containers">
            <h1 class="form-titles text-2xl font-bold mb-4">Crear Acta</h1>
            <p class="form-subtitles text-lg mb-6">Llena los siguientes campos para crear una nueva acta.</p>
            <div class="form-boxs bg-white p-6 rounded-lg shadow">
              <form>
                <div class="form-group grid grid-cols-2 gap-4 mb-4">
                  <div class="form-field flex flex-col gap-2">
                    <label for="titulo" class="font-medium text-gray-700">Titulo</label>
                    <input type="text" id="titulo" class="p-2 border rounded" />
                  </div>
                  <div class="form-field flex flex-col gap-2">
                    <label for="fecha" class="font-medium text-gray-700">Fecha</label>
                    <input type="date" id="fecha" class="p-2 border rounded" />
                  </div>
                  <div class="form-field flex flex-col gap-2">
                    <label for="hora-inicio" class="font-medium text-gray-700">Hora de Inicio</label>
                    <input type="time" id="hora-inicio" class="p-2 border rounded" />
                  </div>
                  <div class="form-field flex flex-col gap-2">
                    <label for="hora-fin" class="font-medium text-gray-700">Hora de Finalización</label>
                    <input type="time" id="hora-fin" class="p-2 border rounded" />
                  </div>
                </div>
                <div class="form-group grid grid-cols-2 gap-4 mb-4">
                  <div class="form-field flex flex-col gap-2">
                    <label for="invitados" class="font-medium text-gray-700">Invitados</label>
                    <input type="text" id="invitados" class="p-2 border rounded" />
                  </div>
                  <div class="form-field flex flex-col gap-2">
                    <label for="estado" class="font-medium text-gray-700">Estado</label>
                    <select id="estado" class="p-2 border rounded">
                      <option value="pendiente">Pendiente</option>
                      <option value="aprobada">Aprobada</option>
                      <option value="archivada">Archivada</option>
                    </select>
                  </div>
                </div>
                <div class="form-field flex flex-col gap-2 mb-4">
                  <label for="descripcion" class="font-medium text-gray-700">Descripción</label>
                  <textarea id="descripcion" rows="4" class="p-2 border rounded"></textarea>
                </div>
                <div class="form-actions flex justify-end gap-4">
                  <button type="button" class="btn-outline border border-gray-300 p-2 rounded">Cancelar</button>
                  <a href="https://meet.google.com/" target="_blank">
                    <button type="button" class="btn-primary bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Guardar</button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </main>
  
        <footer class="footer bg-blue-300 text-white p-4 text-center">
          <p>&copy; derechos reservados para LUIS, EIDER, DANA, MAROLYN</p>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Actas',
    methods: {
      enviarDatos() {
        const formData = new FormData(document.getElementById('formularioCrearActa'));
  
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'ReunionesControlador.php', true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
          }
        };
        xhr.send(formData);
      },
    },
    mounted() {
      document.getElementById('btnGuardar').addEventListener('click', (event) => {
        event.preventDefault();
        this.enviarDatos();
      });
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Inter', sans-serif;
  }
  
  .grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 100vh;
    width: 100%;
  }
  
  .menu-item {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: white;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
  }
  
  .sidebar {
    background-color: #87CEEB;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .sidebar-header {
    position:relative;
    top: 0;
    padding: 1rem;
  }
  
  .sidebar-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
  }
  
  .sidebar-content {
    overflow: auto;
    flex: 1;
  }
  
  .nav {
    display: grid;
    gap: 1rem;
    padding: 2rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #6eb8e9;
  }
  
  .sticky {
    position: sticky;
    top: 0;
    padding: 2rem;
  }
  
  .flex {
    display: flex;
  }
  
  .items-center {
    align-items: center;
  }
  
  .gap-2 {
    gap: 0.5rem;
  }
  
  .font-bold {
    font-weight: bold;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
  
  .overflow-auto {
    overflow: auto;
  }
  
  .flex-1 {
    flex: 1;
  }
  
  .grid.gap-2 {
    display: grid;
    gap: 0.5rem;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .nav-item {
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background-color 0.3s;
  }
  
  .nav-item:hover {
    background-color: #6eb8e9;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #87CEEB;
    color: white;
    padding: 1rem;
  }
  
  .main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  
  .main-contents {
    flex: 1;
    padding: 2rem;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  
  .bg-blue-400 {
    background-color: #87CEEB;
  }
  
  .bg-blue-300 {
    background-color: #b0e0e6;
  }
  
  .text-white {
    color: white;
  }
  
  .footer {
    background-color: #87CEEB;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  .form-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .form-subtitle {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
  
  .form-box {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    display: grid;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .form-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  
  .btn-outline {
    border: 1px solid #d1d5db;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
  }
  
  .btn-primary {
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
  }
  
  .btn-primary:hover {
    background-color: #2563eb;
  }
  
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>
  