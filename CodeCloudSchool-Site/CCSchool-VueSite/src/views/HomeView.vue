<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="home">
      <h1 class="text-3xl font-bold mb-4">Welcome to My Site!</h1>
      <p class="text-lg">This is my custom landing page.</p>

    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height:25vh;        /* Makes section at least full viewport height */
    display: flex;            /* Enables flexbox layout */
    align-items: center;      /* Vertically centers content */
    padding-top: 5rem;        /* Adds 80px space below fixed navbar (adjust as needed) */
    box-sizing: border-box;   /* Ensures padding is included in height calculation */
    padding-left: 3rem; 
  }
}
</style>