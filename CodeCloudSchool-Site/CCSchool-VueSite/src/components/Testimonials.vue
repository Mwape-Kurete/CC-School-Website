<template>
    <div class="testimonials-container">
      <div class="testimonials-header">
        <h2>What Our Students Say</h2>
      </div>
      
      <div class="testimonials-grid">
        <!-- Testimonial 1 -->
        <div class="testimonial-card">
          <div class="quote-icon">“</div>
          <p class="testimonial-text">
            "I went from zero coding knowledge to landing my first freelance gig before the course ended!"
          </p>
          <div class="testimonial-author">
            — Anele M, Full Stack Graduate
          </div>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="testimonial-card">
          <div class="quote-icon">“</div>
          <p class="testimonial-text">
            "The mentors were incredible, and the exam support helped me pass my AWS certification on the first try."
          </p>
          <div class="testimonial-author">
            — Zanele K, Cloud Computing Graduate
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No script logic needed unless you want to make it dynamic
  </script>
  
  <style scoped>
  .testimonials-container {
    width: 100%;
    max-width: 1400px;
    margin: 4rem auto;
    padding: 0 20px;
  }
  
  .testimonials-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .testimonials-header h2 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--surface-900);
    position: relative;
    display: inline-block;
  }
  
  .testimonials-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #F0F1A5, #D8DFE9, #D0DFCC);
    background-size: 200% 200%;
    animation: gradientShift 6s ease infinite;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
  
  .testimonial-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }
  
  .testimonial-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: 0;
    border-radius: 14px;
    background: linear-gradient(45deg, #F0F1A5, #D8DFE9, #D0DFCC, #D8DFE9, #F0F1A5);
    background-size: 300% 300%;
    animation: gradientShift 8s ease infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-card:hover::before {
    opacity: 0.8;
  }
  
  .quote-icon {
    font-size: 4rem;
    line-height: 1;
    color: #D0DFCC;
    position: absolute;
    top: 0;
    left: 1rem;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  .testimonial-card:hover .quote-icon {
    color: #F0F1A5;
    opacity: 1;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--surface-700);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }
  
  .testimonial-author {
    font-weight: 600;
    color: var(--surface-900);
    position: relative;
    z-index: 1;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  /* Dark mode support */
  .dark .testimonial-card {
    background: var(--surface-800);
  }
  
  .dark .testimonial-text {
    color: var(--surface-300);
  }
  
  .dark .testimonial-author {
    color: var(--surface-0);
  }
  
  .dark .testimonial-card::before {
    opacity: 0;
  }
  
  .dark .testimonial-card:hover::before {
    opacity: 0.6;
  }
  
  /* Responsive adjustments */
  @media (min-width: 768px) {
    .testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .testimonials-header h2 {
      font-size: 2.5rem;
    }
  }
  
  @media (min-width: 1024px) {
    .testimonial-card {
      padding: 2.5rem;
    }
  }
  </style>