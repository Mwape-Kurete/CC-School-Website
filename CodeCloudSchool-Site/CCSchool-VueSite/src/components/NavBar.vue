<template>
    <nav class="bg-blue-600 w-full fixed top-0 left-0 z-50 shadow-md">
      <!-- Single flex row for all elements -->
      <div class="flex items-center h-16 px-4 md:px-8 max-w-7xl mx-auto gap-6">
        <!-- Logo as regular text (not RouterLink if you prefer) -->
        <span class="text-xl font-bold text-white hover:text-blue-200">
          Cloud + Code School
        </span>
        
        <!-- Navigation links container -->
        <div class="flex items-center h-full gap-1 ml-auto">
          <RouterLink 
            to="/" 
            class="text-white hover:bg-blue-500 px-4 h-full flex items-center"
            active-class="bg-blue-700"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="text-white hover:bg-blue-500 px-4 h-full flex items-center"
            active-class="bg-blue-700"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/courses" 
            class="text-white hover:bg-blue-500 px-4 h-full flex items-center"
            active-class="bg-blue-700"
          >
            Courses
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="text-white hover:bg-blue-500 px-4 h-full flex items-center"
            active-class="bg-blue-700"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>

<style scoped>
/* Add any custom styles that can't be done with Tailwind here */
nav {
  /* Example of custom CSS if needed */
  backdrop-filter: blur(4px);
}

/* Active state enhancements */
.router-link-active {
  @apply shadow-inner; /* Using Tailwind in CSS */
}
</style>