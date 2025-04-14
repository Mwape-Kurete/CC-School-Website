<script setup lang="ts">
import Welcome from '../components/Welcome.vue'
import FeatureBlocks from '../components/FeatureBlocks.vue'
import Testimonials from '../components/Testimonials.vue'
import CareerStarts from '../components/CareerStarts.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <main class="main-container">
    <Welcome />
    
    <!-- Full-width marquee -->
    <div class="full-width-marquee">
      <div class="marquee-content">
        <span>Join our program today</span>
        <span class="divider">❋</span>
        <span>Your Future is about to begin</span>
        <span class="divider">❋</span>
        <span>Unlock What's Next</span>
        <span class="divider">❋</span>
        <span>Join our program today</span>
        <span class="divider">❋</span>
        <span>Your Future is about to begin</span>
        <span class="divider">❋</span>
        <span>Unlock What's Next</span>
      </div>
    </div>
    
    <div class="content-container">
      <FeatureBlocks />
      <Testimonials />
      <CareerStarts />
    </div>
    

    <SiteFooter />
  </main>
</template>

<style>
/* Main container with top margin */
.main-container {
  margin-top: 160px; /* This pushes everything down */
}

/* Full-width marquee styles */
.full-width-marquee {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 50px; /* Keep this for spacing after Welcome */
  padding: 1.5rem 0;
  border-top: 2px dashed #4b5563;
  border-bottom: 2px dashed #4b5563;
  background-color: #F7F6FB;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  animation: scroll 15s linear infinite;
}

.divider {
  color: #9ca3af;
}

@keyframes scroll {
  0% { transform: translateX(25%); }
  100% { transform: translateX(-25%); }
}

/* Container for regular content */
.content-container {
  width: 100%;
  max-width: 1390px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Dark mode support */
.dark .full-width-marquee {
  background-color: #1e293b;
  border-color: #64748b;
}

.dark .marquee-content {
  color: #f1f5f9;
}

.dark .divider {
  color: #94a3b8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .marquee-content {
    font-size: 1.25rem;
    gap: 1rem;
    animation-duration: 10s;
  }
}
</style>