<template>
    <nav class="navbar">
      <div class="navbar-container">
        <!-- Logo -->
        <RouterLink to="/" class="logo">
            <img 
            src="@/assets/vector.svg" 
            alt="Cloud + Code School"
            class="logo-image"
            >
            <span class="logo-text">Cloud + Code School</span>
      </RouterLink>
        
        <!-- Navigation Links -->
        <div class="nav-links">
          <RouterLink 
            to="/" 
            class="nav-link"
            :class="{ 'active': $route.path === '/' }"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="nav-link"
            :class="{ 'active': $route.path === '/about' }"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/courses" 
            class="nav-link"
            :class="{ 'active': $route.path === '/courses' }"
          >
            Courses
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="nav-link"
            :class="{ 'active': $route.path === '/contact' }"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink, useRoute } from 'vue-router'
  const $route = useRoute()
  </script>
  
  <style scoped>
/* Glass Morphism Navbar */
.navbar {
  width: 100%;
  position: fixed;
  padding-right: 5rem; /* Added left padding for whole navbar */
  margin-top: 30px;
  top: 0;
  left: 0;
  z-index: 50;
  
  /* Glass effect - Increased transparency */
  background: rgba(247, 246, 251, 0.5); /* Changed from 0.85 to 0.5 (50% opacity) */
  backdrop-filter: blur(16px); /* Slightly stronger blur to compensate */
  -webkit-backdrop-filter: blur(16px);
  
  /* Border effect - More subtle */
  border-bottom: 1px solid rgba(255, 255, 255, 0.15); /* More transparent border */
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05); /* Lighter shadow */
  border-radius: 100px; /* Rounded corners */
}

.navbar-container {
  height: 4rem;
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Updated Logo Styles */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  margin-right: 2rem;
}

.logo-image {
  height: 2rem;
  width: auto;
}

.logo-text {
  color: #212121;
  font-size: 1.25rem;
  font-weight: 500;
  white-space: nowrap;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.5rem;
}

.nav-link {
  color: #212121;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease; /* Smooth hover transition */
}

.nav-link:hover {
  background-color: rgba(240, 241, 165, 0.7); /* Semi-transparent yellow */
  border-radius: 10px;
  height: 40px;
}

.nav-link.active {
  background-color: rgba(240, 241, 165, 0.9); /* Less transparent yellow */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  height: 40px;
  font-weight: 600;
}

.nav-link:not(:first-child)::before {
  content: "";
  position: absolute;
  left: -0.75rem;
  height: 1.5rem;
  width: 1px;
  background-color: rgba(33, 33, 33, 0.3); /* Semi-transparent divider */
}

/* Mobile styles */
@media (max-width: 768px) {
  .logo-text {
    display: none;
  }
  
  .navbar {
    padding: 0 1rem; /* Adjust padding for mobile */
  }
  
  .nav-links {
    gap: 0.75rem; /* Reduce gap on mobile */
  }
}
</style>