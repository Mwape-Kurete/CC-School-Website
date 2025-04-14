<template>
  <div class="container">
    <div class="welcome-block">
      <img src="@/assets/header.png" alt="Cloud + Code School" class="header-image" />
    </div>

    <div class="info-section">
      <div class="title">
        Learn Tech Skills. <br />
        Get Certified. <br />
        Launch Your Career. ✽
      </div>
      <p>
        Code & Cloud Academy is your gateway to the digital world. We offer fully online,
        career-focused programs designed to take you from beginner to certified tech professional in
        just 9 months. Whether you're looking to become a software developer, cloud architect, IT
        technician, digital marketer, or web designer — we’ve built the roadmap, all you need to do
        is start.
        <img src="@/assets/header2.png" alt="Cloud + Code School" class="header-image2" />
      </p>
    </div>
  </div>

  <div class="info-section">
    <div class="title">
      Learn In-Demand Tech Skills. <br />
      Get Certified. <br />
      Launch Your Career. *
    </div>
    <p>
      Code & Cloud Academy is your gateway to the digital world. We offer fully online,
      career-focused programs designed to take you from beginner to certified tech professional in
      just 9 months. Whether you're looking to become a software developer, cloud architect, IT
      technician, digital marketer, or web designer — we’ve built the roadmap, all you need to do is
      start.
      <img src="@/assets/header2.png" alt="Cloud + Code School" class="header-image2" />
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - -
    </p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1390px;
  margin: 0 auto; /* Center the container */
  padding: 0 20px; /* Add padding to prevent edge sticking */
}
.welcome-block {
  position: relative; /* Needed for absolute positioning of text */
  width: 100%;
  max-width: 1390px; /* Changed from fixed width to max-width */
  height: 450px;
  margin: 40px auto 0; /* Centered with top margin */
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  overflow: hidden; /* Keeps image corners rounded */
  border-radius: 30px;
  background-color: #d0dfcc;
  margin-right: 50px;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers container */
  object-position: center; /* Centers image focus */
}

.header-image2 {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers container */
  object-position: center; /* Centers image focus */
  margin-top: 30px;
}

.info-section {
  display: flex; /* Enables Flexbox */
  gap: 40px; /* Adds space between title and paragraph */
  margin-top: 40px;
  padding: 0 20px;
  align-items: flex-start; /* Aligns items to the top */
  color: #212121;
  margin-top: 40px;
}

.title {
  font-size: 50px;
  font-weight: 500;
  flex: 1; /* Takes up 1 part of available space */
}

.info-section p {
  flex: 1; /* Takes up 1 part of available space */
  margin: 0; /* Removes default paragraph margin */
}

/* Responsive adjustments */
@media (max-width: 1400px) {
  .welcome-block {
    border-radius: 20px;
    height: 400px;
    margin: 40px 2rem 0;
  }
}

@media (max-width: 768px) {
  .welcome-block {
    height: 300px;
    border-radius: 15px;
  }
}
</style>
