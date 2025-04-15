<script setup lang="ts">
import ContactWelcome from '@/components/ContactWelcome.vue'
import ContactForm from '@/components/ContactForm.vue'
import FAQAccordion from '@/components/FAQ.vue'
import Footer from '@/components/SiteFooter.vue'
</script>

<template>
  <main class="container contactPage">
    <!-- Stack on mobile, side-by-side on desktop -->
    <div class="">
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
    <div class="footer-sect">
      <Footer />
    </div>
  </main>
</template>

<style>
.contactPage {
  margin: 0 auto;
  width: 100%;
}
.form-section {
  margin-top: 25%;
}

.faq-section {
  margin-top: 5%;
}
</style>
