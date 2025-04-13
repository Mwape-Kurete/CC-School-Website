<template>
    <footer class="site-footer">
        <div class="footer-full-width">
            <!-- Call to Action Section -->
            <div class="cta-section">
                <div class="cta-content">
                <h3>👉 Ready to Start Your Journey?</h3>
                <p>Choose your program, enroll today, and transform your future in just 9 months.</p>
                <div class="cta-buttons">
                    <a href="/courses" class="cta-button">🎓 Browse Courses</a>
                    <a href="/consultation" class="cta-button">💬 Book a Free Consultation</a>
                    <a href="/brochure" class="cta-button">📥 Download Brochure</a>
                </div>
                </div>
            </div>
        
            <!-- Main Footer Content -->
            <div class="footer-main">
                <div class="footer-column">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/programs">All Programs</a></li>
                    <li><a href="/success-stories">Success Stories</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
                </div>
        
                <div class="footer-column">
                <h4>Contact Us</h4>
                <ul>
                    <li>📞 +1 (555) 123-4567</li>
                    <li>✉️ hello@codecloudacademy.com</li>
                    <li>🏢 123 Tech Street, Silicon Valley, CA 94025</li>
                </ul>
                <div class="social-links">
                    <a href="#"><i class="pi pi-twitter"></i></a>
                    <a href="#"><i class="pi pi-linkedin"></i></a>
                    <a href="#"><i class="pi pi-facebook"></i></a>
                    <a href="#"><i class="pi pi-instagram"></i></a>
                    <a href="#"><i class="pi pi-youtube"></i></a>
                </div>
                </div>
        
                <div class="footer-column">
                <h4>Newsletter</h4>
                <p>Subscribe for updates and learning tips</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" required>
                    <button type="submit">Subscribe</button>
                </form>
                </div>
            </div>
        
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-logo">
                <img src="@/assets/logo-dark.png" alt="Code & Cloud Academy" class="logo">
                </div>
                <div class="legal-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/cookies">Cookie Policy</a>
                </div>
                <div class="copyright">
                © 2023 Code & Cloud Academy. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
  </template>
  
  <script setup>
  // No script logic needed unless you want to make it dynamic
  </script>
  
  <style scoped>
  .site-footer {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background-color: #F7F6FB;
    color: #333333;
    padding-top: 3rem;
    border-top: 1px solid #e5e7eb;
  }
  
  .footer-full-width {
  width: 100%;
}

  .cta-section {
    background: linear-gradient(135deg, #F0F1A5 0%, #D8DFE9 50%, #D0DFCC 100%);
    padding: 2.5rem 1rem;
    text-align: center;
  }
  
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cta-content h3 {
    font-size: 1.8rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  .cta-content p {
    color: #4b5563;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .cta-button {
    background-color: #1f2937;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .cta-button:hover {
    background-color: #111827;
    transform: translateY(-2px);
  }
  
  .footer-main {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .footer-column h4 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    color: #1f2937;
  }
  
  .footer-column h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #3b82f6;
  }
  
  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-column li {
    margin-bottom: 0.75rem;
    color: #4b5563;
  }
  
  .footer-column a {
    color: #374151;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-column a:hover {
    color: #3b82f6;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .social-links a {
    color: #6b7280;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: #D0DFCC;
  }
  
  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .newsletter-form input {
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #d1d5db;
    background-color: #f9fafb;
    color: #111827;
  }
  
  .newsletter-form button {
    background-color: #D0DFCC;
    color: #212121;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }
  
  .newsletter-form button:hover {
    background-color: #212121;
    color: #D8DFE9;
  }
  
  .footer-bottom {
    border-top: 1px solid #e5e7eb;
    padding: 1.5rem 1rem;
    text-align: center;
    background-color: #f9fafb;
  }
  
  .footer-logo img {
    height: 40px;
    margin-bottom: 1rem;
  }
  
  .legal-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .legal-links a {
    color: #6b7280;
    font-size: 0.9rem;
    text-decoration: none;
  }
  
  .legal-links a:hover {
    color: #3b82f6;
  }
  
  .copyright {
    color: #6b7280;
    font-size: 0.9rem;
  }
  
  /* Responsive adjustments */
  @media (min-width: 768px) {
    .footer-main {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .cta-content h3 {
      font-size: 2.25rem;
    }
    
    .cta-buttons {
      flex-wrap: nowrap;
    }
  }
  
  @media (min-width: 1024px) {
    .cta-section {
      padding: 4rem 1rem;
    }
    
    .footer-main {
      padding: 4rem 2rem;
    }
  }
  </style>