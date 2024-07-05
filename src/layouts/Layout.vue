<template>
    <div class="h-screen flex flex-col">
        <header class="flex items-center justify-between px-4 bg-blue-500">
            <div>
                <img src="/images/actas-removebg-preview.png" alt="logo" width="74" height="74">
            </div>

            <div>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M21 12L13 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
        </header>

        <div class="flex-1 flex">
            <aside class=" w-56  bg-blue-800 p-2">

                <RouterLink :to="{name:'reuniones.create'}" class="py-4 mb-4 flex justify-center items-center text-white font-semibold bg-blue-500/50 hover:bg-blue-500 ">
                    <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path opacity="0.1"
                                d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"
                                fill="#ffffff"></path>
                            <path
                                d="M15.6309 7.15517C15.9015 7.05482 16.1943 7 16.4999 7C17.8806 7 18.9999 8.11929 18.9999 9.5C18.9999 10.8807 17.8806 12 16.4999 12C16.1943 12 15.9015 11.9452 15.6309 11.8448"
                                stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19"
                                stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M17 15C19.403 15.095 20.5292 15.6383 21 17" stroke="#ffffff" stroke-width="2"
                                stroke-linecap="round"></path>
                            <path
                                d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"
                                stroke="#ffffff" stroke-width="2"></path>
                        </g>
                    </svg>
                    Crear reunion
                </RouterLink>
                <RouterLink :to="{name: 'reuniones.index'}" class="py-4 flex justify-center items-center text-white font-semibold bg-blue-500/50 hover:bg-blue-500 ">
                    <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M16.8494 7.05025C14.1158 4.31658 9.6836 4.31658 6.94993 7.05025L4.82861 9.17157C3.49528 10.5049 2.82861 11.1716 2.82861 12C2.82861 12.8284 3.49528 13.4951 4.82861 14.8284L6.94993 16.9497C9.6836 19.6834 14.1158 19.6834 16.8494 16.9497L18.9707 14.8284C20.3041 13.4951 20.9707 12.8284 20.9707 12C20.9707 11.1716 20.3041 10.5049 18.9707 9.17157L16.8494 7.05025ZM12.0002 8.75C10.2053 8.75 8.75019 10.2051 8.75019 12C8.75019 13.7949 10.2053 15.25 12.0002 15.25C13.7951 15.25 15.2502 13.7949 15.2502 12C15.2502 10.2051 13.7951 8.75 12.0002 8.75Z" fill="#ffffff"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#ffffff" stroke-width="2"></path> <path d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
                    Mostrar Reuniones
                </RouterLink>

            </aside>

            <main class="w-full bg-[url('/images/bg3.jpg')] bg-cover mx-auto p-8">
                <slot name="main"></slot>
            </main>

        </div>
    </div>
</template>
<script setup>
</script>