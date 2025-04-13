<template>
    <div class="feature-blocks-container">
      <div class="feature-blocks">
        <!-- Header -->
        <div class="header">
          <h1 class="title">What's All The Hype About?</h1>
          <p class="subtitle">Our custom Programs are the key to get you started.</p>
        </div>
  
        <!-- Grid -->
        <div class="grid">
          <!-- Why Learn With Us -->
          <div class="feature-card">
            <div class="icon-container">
              <i class="pi pi-desktop"></i>
            </div>
            <h3>Why Learn With Us?</h3>
            <div class="content">
              <div class="feature-item">
                <strong>Industry-Relevant Courses</strong>
                <p>Learn what the world is hiring for — Python, Django, MERN, WordPress, SEO, SQL, AWS, and more.</p>
              </div>
              <div class="feature-item">
                <strong>Expert Instructors & Mentors</strong>
                <p>Get guidance from professionals who've worked in the field and taught thousands.</p>
              </div>
              <div class="feature-item">
                <strong>100% Online & Flexible</strong>
                <p>Learn at your pace, from anywhere in the world — no prior experience needed.</p>
              </div>
              <div class="feature-item">
                <strong>Certification-Focused Curriculum</strong>
                <p>Prepare for top international certifications from AWS, Oracle, CompTIA, Meta, ICDL, and more.</p>
              </div>
              <div class="feature-item">
                <strong>Real-World Projects</strong>
                <p>Build a job-ready portfolio with hands-on, practical experience.</p>
              </div>
            </div>
          </div>
  
          <!-- Our 9-Month Programs -->
          <div class="feature-card">
            <div class="icon-container">
              <i class="pi pi-globe"></i>
            </div>
            <h3>Our 9-Month Programs</h3>
            <div class="content">
              <div class="feature-item">
                <strong>Python & Django Web Development</strong>
                <p>Build dynamic web apps and master backend logic with Python.</p>
              </div>
              <div class="feature-item">
                <strong>Web Dev for Marketers: WordPress & Webflow</strong>
                <p>Launch beautiful, SEO-optimized websites — no code required.</p>
              </div>
              <div class="feature-item">
                <strong>Full Stack Development with MERN</strong>
                <p>Learn to build fast, scalable web apps with MongoDB, Express, React & Node.js.</p>
              </div>
              <div class="feature-item">
                <strong>SQL & Oracle DBA</strong>
                <p>Dive deep into databases and prepare for Oracle certification.</p>
              </div>
              <div class="feature-item">
                <strong>Search Engine Optimization (SEO)</strong>
                <p>Become a digital marketing pro and rank #1 on Google.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
.feature-blocks-container {
  width: 100%;
  padding: 2rem 1rem;
  background-color: #F7F6FB;
}

.feature-blocks {
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--surface-900);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--surface-600);
  max-width: 600px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.icon-container {
  width: 64px;
  height: 64px;
  background: #f3f4f6; /* Light gray background */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon-container i {
  font-size: 1.75rem;
  color: #6b7280; /* Medium gray icon color */
  filter: grayscale(100%); /* Ensures full grayscale */
}

.feature-card h3 {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--surface-900);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-item strong {
  color: var(--surface-900);
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-item p {
  color: var(--surface-600);
  line-height: 1.6;
  margin: 0;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .feature-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 1024px) {
  .feature-blocks-container {
    padding: 4rem 2rem;
  }
  
  .title {
    font-size: 2.5rem;
  }
  
  .feature-card {
    padding: 2.5rem;
  }
}

/* Dark mode support */
.dark .feature-blocks-container {
  background-color: var(--surface-950);
}

.dark .feature-card {
  background: var(--surface-800);
}

.dark .feature-card h3,
.dark .feature-item strong {
  color: var(--surface-0);
}

.dark .feature-item p {
  color: var(--surface-300);
}

.dark .icon-container {
  background: var(--primary-900);
}
</style>