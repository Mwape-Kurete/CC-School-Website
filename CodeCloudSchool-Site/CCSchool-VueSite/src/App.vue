<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="pt-20 min-h-screen w-full px-4 md:px-8 max-w-7xl mx-auto">
    <RouterView />
  </main>
</template>

<style>
/* Global reset */
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #F7F6FB;
}
</style>