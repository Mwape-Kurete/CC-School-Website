<script setup>
import Hero from '@/components/CoursesHero.vue'
import Courses from '@/components/CourseContent.vue'
</script>

<template>
  <main class="container contact mx-auto px-4 py-8 md:px-8 lg:px-12 max-w-7xl">
    <div class="course flex flex-col lg:flex-row gap-8">
      <div class="hero-sect lg:w-1/2">
        <Hero />
      </div>
      <div class="course-sect lg:w-1/2" id="course">
        <Courses />
      </div>
      <div class="journey-sect" id="journey"></div>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .course {
    min-height: 25vh; /* Makes section at least full viewport height */
    display: flex; /* Enables flexbox layout */
    align-items: center; /* Vertically centers content */
    padding-top: 5rem; /* Adds 80px space below fixed navbar (adjust as needed) */
    box-sizing: border-box; /* Ensures padding is included in height calculation */
    padding-left: 3rem;
  }
  .hero-sect {
    width: 100%;
    margin-bottom: 5%;
  }

  .course-sec {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
