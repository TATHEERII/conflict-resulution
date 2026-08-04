(function () {
  'use strict';

  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileBackdrop = document.getElementById('mobileMenuBackdrop');

  function closeMobileMenu() {
    mainNav.classList.remove('open');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('active');
    }
    document.body.classList.remove('menu-open');
  }

  mobileToggle.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('open');
    mobileToggle.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', isOpen);
    if (mobileBackdrop) {
      mobileBackdrop.classList.toggle('active', isOpen);
    }
    document.body.classList.toggle('menu-open', isOpen);
  });

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();