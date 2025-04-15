<script setup>
import { ref } from 'vue'
import Courses from '@/components/CourseContent.vue'
import Journey from '@/components/Journies.vue'
import Footer from '@/components/SiteFooter.vue'
import Hero from '@/components/CoursesHero.vue'

const currentView = ref('courses')

function updateView(view) {
  currentView.value = view
}
</script>

<template>
  <main class="main-content">
    <Hero @toggle-view="updateView" />
    <Courses v-if="currentView === 'courses'" />
    <Journey v-else-if="currentView === 'journey'" />
    <Footer />
  </main>
</template>

<style>
/* Base styles for all screen sizes */
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Spacing between sections */
.main-content > * {
  width: 100%;
  margin-bottom: 2rem;
}

/* Remove bottom margin from last element */
.main-content > *:last-child {
  margin-bottom: 0;
}

/* Desktop-specific adjustments */
@media (min-width: 1024px) {
  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .main-content > * {
    margin-bottom: 3rem;
  }
}
</style>
