<template>
    <div class="career-starts-container">
      <div class="career-content">
        <div class="career-text">
          <h2 class="career-title">❋ Your Career <br>
                                    Starts Here</h2>
          <ul class="benefits-list">
            <li class="benefit-item"> No experience needed</li>
            <li class="benefit-item"> Global certifications</li>
            <li class="benefit-item"> Supportive community</li>
            <li class="benefit-item"> Expert mentorship</li>
            <li class="benefit-item"> Real-world skills</li>
          </ul>
        </div>
        <div class="career-image">
          <img src="@/assets/image1.jpg" alt="Successful graduate celebrating career achievement" class="feature-image">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No script logic needed unless you want to make it dynamic
  </script>
  
  <style scoped>
  .career-starts-container {
    width: 100%;
    max-width: 1400px;
    margin: 4rem auto;
    padding: 0 20px;
  }
  
  .career-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
  .career-text {
    width: 100%;
  }
  
  .career-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--surface-900);
    margin-bottom: 1.5rem;
  }
  
  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .benefit-item {
    font-size: 1.2rem;
    color: var(--surface-700);
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
  }
  
  .benefit-item::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: #4ade80; /* Green checkmark color */
    font-weight: bold;
  }
  
  .career-image {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
  }
  
  .feature-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Dark mode support */
  .dark .career-title {
    color: var(--surface-0);
  }
  
  .dark .benefit-item {
    color: var(--surface-300);
  }
  
  .dark .benefit-item::before {
    color: #34d399; /* Slightly different green for dark mode */
  }
  
  /* Responsive layout - switches to side-by-side on larger screens */
  @media (min-width: 768px) {
    .career-content {
      flex-direction: row;
      gap: 4rem;
    }
    
    .career-text {
      width: 50%;
    }
    
    .career-image {
      width: 50%;
    }
    
    .career-title {
      font-size: 2.5rem;
    }
    
    .benefit-item {
      font-size: 1.25rem;
    }
  }
  
  @media (min-width: 1024px) {
    .career-content {
      gap: 6rem;
    }
    
    .career-title {
      font-size: 2.75rem;
    }
  }
  </style>