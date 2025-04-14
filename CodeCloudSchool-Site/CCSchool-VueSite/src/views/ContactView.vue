<script setup>
import ContactForm from '@/components/ContactForm.vue'
import Accordion from '@/components/Accordion.vue'
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 gap-8">
      <!-- Info Section -->
      <div class="col-span-full text-center">
        <h1 class="text-4xl font-bold mb-4">We'd Love to Hear from You</h1>
        <p class="text-lg mb-2">
          Have a question about our programs, enrollment, or certifications?
        </p>
        <p class="italic">Reach out to us and we'll get back to you within 24-48 hours.</p>
      </div>

      <!-- Form Section -->
      <div class="col-span-full">
        <ContactForm />
      </div>

      <!-- FAQ Section -->
      <div class="col-span-full mt-12">
        <h1 class="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <Accordion />
      </div>
    </div>
  </main>
</template>
