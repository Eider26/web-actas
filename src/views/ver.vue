<template>
    <div class="grid grid-cols-[280px_1fr] min-h-screen w-full">
      <!-- Sidebar -->
      <div class="sidebar bg-blue-400 text-white flex flex-col gap-8">
        <div class="sidebar-header p-4">
          <a href="#" class="sidebar-link flex items-center gap-2 text-white font-bold text-xl">
            <img src="./login/assets/images/actas-removebg-preview.png" alt="Tus Actas" class="icon" width="50" height="50">
            <span>Tus Actas</span>
          </a>
        </div>
        <div class="sidebar-content flex-1 overflow-auto p-8">
          <nav class="nav grid gap-4">
            <a href="./crear.html" class="nav-link">Crear Acta</a>
            <a href="./ver.html" class="nav-link">Ver Actas</a>
            <a href="#" class="nav-link">Editar Acta</a>
            <a href="#" class="nav-link">Archivar Acta</a>
          </nav>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="main-content flex flex-col">
        <!-- Header -->
        <header class="header bg-blue-300 text-white p-4 flex justify-between items-center">
          <div class="flex items-center gap-4">
            <a class="flex items-center gap-2" href="#">
              <img src="/login/assets/images/R.png" width="24" height="24" class="h-6 w-6" alt="Actas">
              <span class="font-bold text-lg">Actas</span>
            </a>
          </div>
          <nav>
            <a href="./Reunion.html">Salir</a>
          </nav>
          <button class="menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span class="sr-only">Toggle navigation</span>
          </button>
        </header>
  
        <!-- Main Content -->
        <main class="main bg-admin flex-1 p-8">
          <div class="content">
            <div class="mb-6">
              <h1 class="title">Actas</h1>
              <p class="subtitle">Aquí puedes ver, crear, editar y archivar actas.</p>
            </div>
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Título</th>
                    <th>Estado</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024-05-15</td>
                    <td>Reunión Trimestral</td>
                    <td><span class="badge success">Aprobada</span></td>
                    <td><a href="#" class="link">Ver Detalles</a></td>
                  </tr>
                  <tr>
                    <td>2024-04-20</td>
                    <td>Planificación Anual</td>
                    <td><span class="badge warning">Pendiente</span></td>
                    <td><a href="#" class="link">Ver Detalles</a></td>
                  </tr>
                  <tr>
                    <td>2024-03-10</td>
                    <td>Revisión de Objetivos</td>
                    <td><span class="badge danger">Archivada</span></td>
                    <td><a href="#" class="link">Ver Detalles</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
  
        <!-- Footer -->
        <footer class="footer bg-blue-300 text-white p-4 text-center">
          <p>&copy; derechos reservados para LUIS, EIDER, DANA, MAROLYN</p>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Actas',
  };
  </script>
  
  <style scoped>
  /* Estilos de Tailwind CSS se aplican automáticamente */
  .bg-admin {
    background-image: url('./login/assets/images/bg2.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  
  .content {
    max-width: 64rem;
    margin: 0 auto;
  }
  
  .title {
    font-size: 1.875rem;
    font-weight: bold;
  }
  
  .subtitle {
    color: #0d0f0f;
  }
  
  .table-container {
    background-color: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .table {
    width: 100%;
    text-align: left;
    font-size: 0.875rem;
  }
  
  .table th,
  .table td {
    padding: 1rem;
  }
  
  .table th {
    font-weight: medium;
    color: #6b7280;
  }
  
  .table tr:hover {
    background-color: #f3f4f6;
  }
  
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  .badge.success {
    background-color: #d1fae5;
    color: #065f46;
  }
  
  .badge.warning {
    background-color: #fef3c7;
    color: #92400e;
  }
  
  .badge.danger {
    background-color: #fee2e2;
    color: #b91c1c;
  }
  
  .link {
    color: #87ceeb;
    text-decoration: none;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  
  .footer {
    background-color: #9acfe2;
    color: white;
    padding: 1rem 1.5rem;
    text-align: center;
  }
  
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>
  