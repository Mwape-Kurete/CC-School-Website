<script>
import ContactForm from '../components/ContactForm.vue'; 
</script>

<template>
  <main>
    <div class="contact grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        <div class="info-sect col-span-12">
          <h1>We’d Love to Hear from You</h1>
          <p>Have a question about our programs, enrollment, or certifications? Need help choosing the right course for your goals? Our team is here to help every step of the way.</p>
          <p><i>Reach out to us and we’ll get back to you within 24–48 hours.</i></p>
        </div>
        <div class="form-sect col-span-12">
          <ContactForm />
        </div>
        <div class="faq-sect col-span-12"></div>
    </div>
  </main>
  </template>

<style scoped>
@media (min-width: 1024px) {
  .contact {
    min-height: 25vh;        /* Makes section at least full viewport height */
    display: flex;            /* Enables flexbox layout */
    align-items: center;      /* Vertically centers content */
    padding-top: 5rem;        /* Adds 80px space below fixed navbar (adjust as needed) */
    box-sizing: border-box;   /* Ensures padding is included in height calculation */
    padding-left: 3rem; 
  }
  .h1 {
    color: black;
  }
}
</style>