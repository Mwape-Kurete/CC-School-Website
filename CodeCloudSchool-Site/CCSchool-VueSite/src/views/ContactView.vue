<script setup lang="ts">
import ContactWelcome from '@/components/ContactWelcome.vue'
import ContactForm from '@/components/ContactForm.vue'
import FAQAccordion from '@/components/FAQ.vue'
</script>

<template>
  <main class="container contact mx-auto px-4 py-8 md:px-8 lg:px-12 max-w-7xl">
    <!-- Stack on mobile, side-by-side on desktop -->
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="banner-intro lg:w-1/2">
        <ContactWelcome />
      </div>
      <div class="form-section lg:w-1/2">
        <ContactForm />
      </div>
      <div class="faq-section lg:w-1/2">
        <FAQAccordion />
      </div>
    </div>
  </main>
</template>

<style>
.form-section {
  margin-top: 25%;
}

.faq-section {
  margin-top: 5%;
}
</style>
