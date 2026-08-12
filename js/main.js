(function () {
  'use strict';

  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
  const bookingForm = document.getElementById('bookingForm');
  const toast = document.getElementById('toast');
  const testimonialTrack = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const sliderDots = document.getElementById('sliderDots');
  const statNumbers = document.querySelectorAll('.stat-number');

  let currentSlide = 0;
  let totalSlides = 0;
  let autoSlideInterval = null;

  /* === Header Scroll Effect === */
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* === Mobile Menu Toggle === */
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

  /* === Active Nav Link on Scroll === */
  function updateActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* === Counter Animation === */
  function animateCounters() {
    statNumbers.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-count'), 10);
      var duration = 2000;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(step);
    });
  }

  var counterAnimated = false;
  function checkCounterVisibility() {
    if (counterAnimated) return;
    var heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;
    var rect = heroStats.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counterAnimated = true;
      animateCounters();
    }
  }

  window.addEventListener('scroll', checkCounterVisibility, { passive: true });
  checkCounterVisibility();

  /* === Scroll Reveal (AOS-like) === */
  function initScrollReveal() {
    var elements = document.querySelectorAll('[data-aos]');

    elements.forEach(function (el) {
      var delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);
      if (delay > 0) {
        el.style.transitionDelay = delay + 'ms';
      }
    });

    function checkReveal() {
      elements.forEach(function (el) {
        if (el.classList.contains('aos-animated')) return;
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('aos-animated');
        }
      });
    }

    window.addEventListener('scroll', checkReveal, { passive: true });
    checkReveal();
  }

  /* === Testimonials Slider === */
  function initSlider() {
    var cards = testimonialTrack.querySelectorAll('.testimonial-card');
    totalSlides = cards.length;

    if (totalSlides <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      return;
    }

    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement('button');
      dot.classList.add('slider-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', (function (index) {
        return function () {
          goToSlide(index);
        };
      })(i));
      sliderDots.appendChild(dot);
    }

    prevBtn.addEventListener('click', function () {
      goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', function () {
      goToSlide((currentSlide + 1) % totalSlides);
      resetAutoSlide();
    });

    goToSlide(0);
    startAutoSlide();
  }

  function goToSlide(index) {
    currentSlide = index;
    testimonialTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

    var dots = sliderDots.querySelectorAll('.slider-dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  initSlider();

  /* === Booking Form === */
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var guests = document.getElementById('guests').value;

    if (!name || !email || !phone || !guests) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    var phoneRegex = /^[\+]?[\d\s\-\(\)]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      showToast('Please enter a valid phone number.', 'error');
      return;
    }

    var homepageData = {
      name: name,
      email: email,
      phone: phone,
      companySize: guests
    };

    localStorage.setItem('webnexa_homepage_inquiry', JSON.stringify(homepageData));
    window.location.href = 'requirements.html';
  });

  /* === Toast Notification === */
  function showToast(message, type) {
    toast.textContent = message;
    toast.className = 'toast ' + type;

    setTimeout(function () {
      toast.classList.add('show');
    }, 10);

    setTimeout(function () {
      toast.classList.remove('show');
    }, 4000);
  }

  /* === Smooth Scroll for Anchor Links === */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* === Parallax Effect on Hero === */
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
      }
    }, { passive: true });
  }

  /* === Portfolio Loader === */
  function renderPortfolio() {
    var portfolioGrid = document.getElementById('portfolioGrid');
    console.log('renderPortfolio called, portfolioGrid:', portfolioGrid);

    if (!portfolioGrid) {
      console.log('portfolioGrid not found, returning');
      return;
    }

    var defaultPortfolio = [
      {
        name: 'CarPart',
        category: 'Car Parts Store',
        description: 'A complete car parts e-commerce experience with product catalog, search, and smooth checkout flow.',
        price: 'From Rs 2,999',
        image: 'assets/images/car-part.png',
        liveUrl: 'https://babyd.vercel.app/'
      },
      {
        name: 'Babyz Store',
        category: 'Baby Products',
        description: 'A complete baby products store with product catalog, categories, and a smooth checkout experience.',
        price: 'From Rs 2,999',
        image: 'assets/images/babyz-photo.png',
        liveUrl: 'https://carpart-coral.vercel.app/'
      },
      {
        name: 'DailyPulse CMS',
        category: 'News Platform',
        description: 'High-traffic media platform with a custom headless CMS, blazing-fast page loads, and multi-channel publishing.',
        price: 'From Rs 2,999',
        image: '',
        liveUrl: ''
      }
    ];

    var items = [];
    try {
      var stored = localStorage.getItem('webnexa_portfolio');
      console.log('localStorage stored:', stored);
      if (stored) {
        items = JSON.parse(stored);
        console.log('Parsed items from localStorage:', items);
      }
    } catch (e) {
      console.error('Failed to load portfolio', e);
    }

    console.log('Items before fallback:', items);

    if (!items.length) {
      console.log('Using default portfolio');
      items = defaultPortfolio;
    }

    console.log('Rendering', items.length, 'items');

    portfolioGrid.innerHTML = '';

    items.forEach(function (item, index) {
      var card = document.createElement('div');
      card.className = 'fleet-card';
      card.setAttribute('data-aos', 'fade-up');
      if (index > 0) {
        card.setAttribute('data-aos-delay', (index * 100).toString());
      }

      var imageHtml = '';
      if (item.image) {
        imageHtml = '<a href="' + escapeHtml(item.liveUrl || '#') + '" target="_blank" rel="noopener noreferrer" class="portfolio-link" aria-label="View ' + escapeHtml(item.name) + ' live project">' +
          '<div class="fleet-img-placeholder">' +
          '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.name) + ' website preview" class="portfolio-img">' +
          '</div>' +
          '</a>';
      } else {
        imageHtml = '<div class="fleet-img-placeholder">' +
          '<div class="news-placeholder">' +
          '<i class="fas fa-newspaper"></i>' +
          '<span>News Platform</span>' +
          '</div>' +
          '</div>';
      }

      var liveLinkHtml = '';
      if (item.liveUrl) {
        liveLinkHtml = '<a href="' + escapeHtml(item.liveUrl) + '" target="_blank" rel="noopener noreferrer" class="view-project">View Live Project <i class="fas fa-external-link-alt"></i></a>';
      }

      card.innerHTML = '<div class="fleet-image">' +
        imageHtml +
        '<div class="fleet-badge">' + escapeHtml(item.category || 'Project') + '</div>' +
        '<div class="portfolio-overlay">' +
        '<div class="portfolio-metrics">' +
        liveLinkHtml +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="fleet-info">' +
        '<h3 class="fleet-name">' + escapeHtml(item.name) + '</h3>' +
        '<p class="fleet-specs">' + escapeHtml(item.category || '') + '</p>' +
        '<p class="fleet-desc">' + escapeHtml(item.description || '') + '</p>' +
        '<div class="fleet-price">' +
        '<span class="price">' + escapeHtml(item.price || '') + '</span>' +
        '<span class="price-period">/ Project</span>' +
        '</div>' +
        '<a href="#contact" class="btn btn-primary btn-sm">Get Quote</a>' +
        '</div>';

      portfolioGrid.appendChild(card);
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  renderPortfolio();
  console.log('renderPortfolio called at line 415');

  initScrollReveal();

  /* === Prefers Reduced Motion === */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.wave, .floating-element').forEach(function (el) {
      el.style.animation = 'none';
    });
  }
})();