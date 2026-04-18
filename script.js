// ==========================================
// Portfolio — Gabriel Mayor
// Scroll animations & interactivity
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Nav scroll effect ---
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // --- Mobile menu toggle ---
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.querySelector('.nav-links');
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // --- Scroll reveal animations ---
  const revealElements = document.querySelectorAll(
    '.section-header, .sobre-text, .sobre-card, .skill-category, .project, .timeline-item, .cert, .contact-big, .contact-desc, .contact-links'
  );

  revealElements.forEach(el => el.classList.add('scroll-reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);

        // Animate skill bars when skill category becomes visible
        if (entry.target.classList.contains('skill-category')) {
          const bars = entry.target.querySelectorAll('.skill-fill');
          bars.forEach((bar, i) => {
            setTimeout(() => bar.classList.add('animate'), 200 + (i * 100));
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // --- Smooth parallax on bg-glow ---
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const glow = document.querySelector('.bg-glow');
        if (glow) {
          glow.style.transform = `translateX(-50%) translateY(${scrollY * 0.15}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // --- Console easter egg for curious devs ---
  console.log('%c> Gabriel Mayor · Portfolio',
    'color: #00ffaa; font-family: monospace; font-size: 16px; font-weight: bold;');
  console.log('%c  Curious? Let\'s talk: https://github.com/GabrielMSM2',
    'color: #9a9aaa; font-family: monospace; font-size: 12px;');

});
