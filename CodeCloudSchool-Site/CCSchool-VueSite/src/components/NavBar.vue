<template>
    <nav class="bg-blue-600 p-4">
      <div class="flex space-x-4">
        <RouterLink 
          to="/" 
          class="text-white hover:bg-blue-500 px-3 py-2 rounded"
        >
          Home
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="text-white hover:bg-blue-500 px-3 py-2 rounded"
        >
          About
        </RouterLink>
        <RouterLink 
          to="/courses" 
          class="text-white hover:bg-blue-500 px-3 py-2 rounded"
        >
          Courses
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="text-white hover:bg-blue-500 px-3 py-2 rounded"
        >
          Contact
        </RouterLink>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>