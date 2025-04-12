<template>
  <div class="about">
      
      <h1 class="text-3xl font-bold mb-6">About Me</h1>
      <p class="text-lg">This is where you describe your project or yourself.</p>
  </div>
</template>

<style>
/* About page specific styles */
@media (min-width: 1024px) {
  .about {
    min-height: 10vh;        /* Makes section at least full viewport height */
    display: flex;            /* Enables flexbox layout */
    align-items: center;      /* Vertically centers content */
    padding-top: 5rem;        /* Adds 80px space below fixed navbar (adjust as needed) */
    box-sizing: border-box;   /* Ensures padding is included in height calculation */
  }
}
</style>