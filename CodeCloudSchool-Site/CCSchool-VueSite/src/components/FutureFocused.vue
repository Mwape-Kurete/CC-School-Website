<template>
            <!-- FutureFocused Section -->
            <section class="future-hero">
              <div class="future-image">
                <img src="@/assets/about-hero.jpg" alt="Team collaborating at Code & Cloud Academy">
              </div>

              <div class="future-content">
                  <h1 class="future-title">👋 About Us</h1>
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
            </section>
</template>

<style scoped>
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

</style>