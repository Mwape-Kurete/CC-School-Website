<script setup> 
import NavBar from '@/components/NavBar.vue'
</script> 

<template>
    <div class="page-contain">
      <div class="nav-cont">
        <NavBar /> 
      </div>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  