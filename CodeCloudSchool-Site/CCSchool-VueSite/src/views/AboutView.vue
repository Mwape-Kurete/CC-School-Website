<script setup lang="ts">
import SiteFooter from '@/components/SiteFooter.vue'
</script>
<template>
  <main class="about-container">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-content">
          <h1 class="hero-title">👋 About Us</h1>
          <h2>Learn. Build. Certify. Launch.</h2><br>

            <p>At Code & Cloud Academy, we believe that quality tech education
              should be accessible,
              flexible, and career-focused. We're an online learning 
              institution that empowers
              individuals to gain job-ready skills in software development,
              cloud computing, digital
              marketing, and IT support — all from the comfort of their 
              home.Founded by a team of tech professionals 
              and educators with decades of
              combined industry experience, we built this academy for one reason:
              To bridge the gap between learning and earning.
          </p>
        </div>
      <div class="hero-image">
        <img src="@/assets/about-hero.jpg" alt="Team collaborating at Code & Cloud Academy">
      </div>
    </section>

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

    <!-- Mission Section -->
    <section class="about-mission">
      <div class="mission-content">
        <h2 class="mission-title">Our Mission</h2>
        <div class="mission-text">
          <p>To equip the next generation of developers, marketers, IT professionals, and cloud
            engineers with globally competitive skills — through expert-led training, practical experience,
            and a clear path to certification and employment.</p>
          <p>Founded by a team of tech professionals and educators with decades of combined industry experience, we built this academy for one reason:</p>
          <p class="mission-highlight">To bridge the gap between learning and earning.</p>
        </div>
      </div>
    </section>

        <!-- Values Section -->
        <section class="about-values">
            <h2 class="values-title">Our Core Values</h2>
              <div class="values-grid">

                  <div class="value-card">
                    <div class="value-icon">🚀</div>
                    <h3> What We Offer</h3>
                    <p>🎓 Career-Aligned Programs in Python, Web Dev, SEO, AWS, CompTIA, and more
                          💼 Certifications from Global Bodies like Oracle, AWS, CompTIA, Meta, Webflow
                          & ICDL
                          󰳓 Experienced Instructors & Mentors who guide you every step of the way
                          🚀 Capstone Projects to build your real-world portfolio
                          💬 Live Support, Office Hours & Discussion Forums
                          📈 Job-Readiness & Career Guidance integrated into every course</p>
                  </div>
                  <div class="value-card">
                    <div class="value-icon">🌐</div>
                    <h3>Why Code & Cloud Academy?</h3>
                    <p>🏡 Learn from Anywhere: 100% online with flexible schedules
                        🌐 Globally Recognized Certifications that open international doors
                        🧰 Project-Based Learning to help you build real-world confidence
                        🤝 Mentorship & Community to keep you motivated
                        📜 Results-Driven Curriculum created by industry pros</p>
                  </div>
                  <div class="value-card">
                    <div class="value-icon">💡</div>
                    <h3> Built By Tech Educators, For Career Changers</h3>
                    <p>We know what it takes to break into tech — because we’ve been there. Our team includes
                        instructors, DevOps engineers, software developers, digital marketers, and cloud architects
                        who’ve trained hundreds of students globally. We’ve poured our knowledge into creating
                        programs that are not only beginner-friendly, but also capable of getting you certified and
                        hired.</p>
                  </div>

              </div>
        </section>

          <!-- Hero Section -->
          <section class="about-hero">

            <div class="hero-image">
              <img src="@/assets/image3.jpg" alt="Team collaborating at Code & Cloud Academy">
            </div>

            <div class="hero-content">
                
                <h2>100% Online. 100% Future-Focused.</h2><br>

                  <p>
                    Whether you're a working professional, a student, or someone making a career switch, our
                    fully online, 9-month programs are designed to fit your life — without compromising on depth
                    or quality.
                    We combine hands-on practical learning, certification preparation, and real-world
                    projects to ensure you're not just learning — you're building a career-ready portfolio and
                    working towards internationally recognized certifications.
                  </p>
              </div>

          </section>

    <SiteFooter />
  </main>
</template>


<style scoped>
.about-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 160px;
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

/* Future Section */
.future-hero {
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0;
  align-items: center;

}

.future-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.future-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--surface-900);
  margin-bottom: 1rem;
}

.future-subtitle {
  font-size: 1.5rem;
  color: var(--surface-700);
  line-height: 1.5;
}

.future-image {
  width: 100%;
  max-width: 1000px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  object-fit: cover; /* Ensures image covers container */
  object-position: center; /* Centers image focus */
}

.future-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Hero Section */
.about-hero {
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0;
  align-items: center;

}

.hero-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--surface-900);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--surface-700);
  line-height: 1.5;
}

.hero-image {
  width: 100%;
  max-width: 1000px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  object-fit: cover; /* Ensures image covers container */
  object-position: center; /* Centers image focus */
}


.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Mission Section */
.about-mission {
  padding: 4rem 0;
  background-color: #F7F6FB;
  border-radius: 16px;
  margin: 2rem 0;
}

.mission-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.mission-title {
  font-size: 2rem;
  color: var(--surface-900);
  margin-bottom: 2rem;
  text-align: center;
}

.mission-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--surface-700);
  text-align: center;
}

.mission-text p {
  margin-bottom: 1.5rem;
}

.mission-highlight {
  font-weight: 600;
  color: var(--primary-500);
  font-size: 1.3rem;
  text-align: center;
  margin-top: 2rem;
}

/* Values Section */
.about-values {
  padding: 4rem 0;
  margin-top:-90px;
}

.values-title {
  font-size: 2rem;
  color: var(--surface-900);
  margin-bottom: 3rem;
  text-align: center;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.3rem;
  color: var(--surface-900);
  margin-bottom: 1rem;
}

.value-card p {
  color: var(--surface-600);
  line-height: 1.6;
}

/* Optional: Add border */
.hero-image {
  border: 5px solid white; /* Clean white border */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 
              0 0 0 10px #F0F1A5; /* Optional secondary accent border */
}

/* Optional: Animation on hover */
.hero-image {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 
              0 0 0 10px #D0DFCC;
}

/* Responsive Adjustments */
@media (min-width: 768px) {
  .about-hero {
    flex-direction: row;
    text-align: left;
    gap: 4rem;
    align-items: center; /* Vertically centers content with image */
  }
  
  .hero-content {
    text-align: left;
    flex: 2; /* Gives more space to text */
  }
  
  .hero-image {
    flex: 1;
    margin: 0; /* Reset auto margin on desktop */
  }

  .values-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.75rem;
  }
  
  .mission-text {
    font-size: 1.2rem;
  }
}
</style>