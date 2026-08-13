(function () {
  'use strict';

  var WHATSAPP_NUMBER = '923008932525';
  var BUSINESS_NAME = 'WebNexa';

  var websiteTypes = [
    {
      id: 'business',
      name: 'Business / Company Website',
      icon: 'fa-building',
      features: [
        { label: 'Company Information', example: 'Company ka naam, address, contact details' },
        { label: 'Services / Products Showcase', example: 'Kya services ya products bechte hain' },
        { label: 'About Us Page', example: 'Hamari kahani aur vision' },
        { label: 'Contact Form', example: 'Logo se seedha baat karne ke liye form' },
        { label: 'Testimonials', example: 'Customers ki reviews aur feedback' },
        { label: 'Team Section', example: 'Hamari team ke members ki details' },
        { label: 'FAQ Section', example: 'Logo ke sawal aur unka jawab' },
        { label: 'Map / Location', example: 'Google Map par apna location dikhana' },
        { label: 'Photo Gallery', example: 'Office ya products ki photos' },
        { label: 'Blog Section', example: 'Updates aur news share karne ke liye' }
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Store',
      icon: 'fa-shopping-cart',
      features: [
        { label: 'Product Catalog', example: 'Sare products ka list aur details' },
        { label: 'Search & Filtering', example: 'Products dhundhne aur filter karne ka tareeqa' },
        { label: 'Product Detail Pages', example: 'Har product ki alag page with full info' },
        { label: 'Shopping Cart', example: 'Products cart mein rakhna' },
        { label: 'Checkout Process', example: 'Kharidari complete karne ka process' },
        { label: 'Payment Gateway', example: 'JazzCash, EasyPaisa, Card payments' },
        { label: 'User Accounts', example: 'Customers ke login aur profile' },
        { label: 'Order Tracking', example: 'Order kahan hai track karne ke liye' },
        { label: 'Product Reviews', example: 'Customers ki products par reviews' },
        { label: 'Wishlist', example: 'Pasandeedah products save karna' },
        { label: 'Inventory Management', example: 'Stocks ka manage' },
        { label: 'Discount / Coupon System', example: 'Offers aur discounts ke liye' }
      ]
    },
    {
      id: 'blog',
      name: 'Blog Website',
      icon: 'fa-pen-nib',
      features: [
        { label: 'Articles / Posts', example: 'Naye articles likhne aur publish karne' },
        { label: 'Categories', example: 'Topics ke hisaab se articles organize' },
        { label: 'Tags', example: 'Chhoti chhoti details ke saath tag' },
        { label: 'Search Bar', example: 'Articles aasani se dhundhne ke liye' },
        { label: 'Comments System', example: 'Logo ke comments aur feedback' },
        { label: 'Author Profiles', example: 'Har likhne wale ki alag profile' },
        { label: 'Related Posts', example: 'Waqe posts ke suggestions' },
        { label: 'Social Sharing', example: 'Doston ke sath share karne ke buttons' },
        { label: 'Newsletter Signup', example: 'Email par naye articles receive karna' },
        { label: 'Reading Time', example: 'Article parhne mein kitna time lagega' }
      ]
    },
    {
      id: 'news',
      name: 'News / Magazine',
      icon: 'fa-newspaper',
      features: [
        { label: 'News Categories', example: 'Sports, Politics, Entertainment jaise sections' },
        { label: 'Articles & Stories', example: 'Daily news articles publish' },
        { label: 'Search Functionality', example: 'Khabrein dhundhne ke liye search' },
        { label: 'Breaking News Section', example: 'Important khabrein top par dikhana' },
        { label: 'Author Profiles', example: 'Reporters aur editors ki details' },
        { label: 'Trending Stories', example: 'Sab se zyada parhi jane wali khabrein' },
        { label: 'Advertisement Spaces', example: 'Ads ke liye dedicated jagah' },
        { label: 'Newsletter Signup', example: 'Email par daily news receive karne' },
        { label: 'Video News', example: 'Videos ke sath news' },
        { label: 'Commenting', example: 'Logo ke reactions aur comments' }
      ]
    },
    {
      id: 'portfolio',
      name: 'Portfolio Website',
      icon: 'fa-briefcase',
      features: [
        { label: 'Project Gallery', example: 'Apne sare projects ka showcase' },
        { label: 'Case Studies', example: 'Har project ki detail story' },
        { label: 'About Me Section', example: 'Apni kahani aur experience' },
        { label: 'Skills / Services', example: 'Kya skills aur services dete hain' },
        { label: 'Testimonials', example: 'Clients ki reviews aur feedback' },
        { label: 'Contact Form', example: 'Naye clients se baat karne ke liye' },
        { label: 'Resume / CV Download', example: 'CV download karne ka option' },
        { label: 'Blog / Articles', example: 'Apne khayal likhne ke liye' },
        { label: 'Video Showcase', example: 'Apne projects ki videos' }
      ]
    },
    {
      id: 'education',
      name: 'Education / E-Learning',
      icon: 'fa-graduation-cap',
      features: [
        { label: 'Course Catalog', example: 'Sare available courses ka list' },
        { label: 'Video Lessons', example: 'Recorded classes aur tutorials' },
        { label: 'Quizzes & Tests', example: 'Students ke liye tests aur quizzes' },
        { label: 'Assignments', example: 'Homework aur assignments submit' },
        { label: 'Student Accounts', example: 'Har student ka alag account' },
        { label: 'Progress Tracking', example: 'Kitna course complete hua' },
        { label: 'Certificates', example: 'Course complete karne par certificate' },
        { label: 'Discussion Forum', example: 'Students aur teachers ki baat' },
        { label: 'Live Classes', example: 'Real-time online classes' },
        { label: 'Payment for Courses', example: 'Courses ke liye fee lena' }
      ]
    },
    {
      id: 'school',
      name: 'School / University',
      icon: 'fa-school',
      features: [
        { label: 'Admissions Portal', example: 'Naye students ke liye admission form' },
        { label: 'Programs & Courses', example: 'Kya programs aur degrees offer kiye ja rahe hain' },
        { label: 'Faculty Information', example: 'Teachers aur staff ki details' },
        { label: 'Academic Calendar', example: 'Exams, holidays, aur events ka schedule' },
        { label: 'Notices & Announcements', example: 'Important notices sab ke liye' },
        { label: 'Results & Grades', example: 'Students ke results online dekhne' },
        { label: 'Events Section', example: 'Aane wale events ki list' },
        { label: 'Student Portal', example: 'Students ke liye login area' },
        { label: 'Online Fee Payment', example: 'Fee online dena' },
        { label: 'Library System', example: 'Books ka online catalog' }
      ]
    },
    {
      id: 'government',
      name: 'Government',
      icon: 'fa-landmark',
      features: [
        { label: 'Departments & Services', example: 'Kya services available hain' },
        { label: 'Online Forms', example: 'Applications aur forms online bharna' },
        { label: 'Announcements', example: 'Important aam zubaan mein notices' },
        { label: 'Regulations & Rules', example: 'Laws aur rules ki details' },
        { label: 'Online Applications', example: 'Sehat card, passport jaise apply' },
        { label: 'Citizen Accounts', example: 'Logon ke liye personal accounts' },
        { label: 'Contact Directory', example: 'Departments ke contact details' },
        { label: 'Downloads', example: 'Forms aur documents download' },
        { label: 'Feedback System', example: 'Logo ki raay lena' },
        { label: 'Multilingual Support', example: 'Kai languages mein' }
      ]
    },
    {
      id: 'social',
      name: 'Social Media Platform',
      icon: 'fa-users',
      features: [
        { label: 'User Profiles', example: 'Har user ki alag profile page' },
        { label: 'Posts & Feeds', example: 'Posts likhne aur dekhne' },
        { label: 'Likes & Comments', example: 'Posts par like aur comment' },
        { label: 'Follow / Friends', example: 'Doston ko follow ya add karna' },
        { label: 'Messaging', example: 'Logon ke beech private messages' },
        { label: 'Notifications', example: 'Nayi activity ka alert' },
        { label: 'Media Sharing', example: 'Photos aur videos share karna' },
        { label: 'Stories / Status', example: '24 ghante ke liye status' },
        { label: 'Groups / Communities', example: 'Groups banane aur join karna' }
      ]
    },
    {
      id: 'forum',
      name: 'Forum / Community',
      icon: 'fa-comments',
      features: [
        { label: 'User Accounts', example: 'Members ke liye signup aur login' },
        { label: 'Discussion Threads', example: 'Har topic par alag thread' },
        { label: 'Categories & Sections', example: 'Topics ke hisaab se organize' },
        { label: 'Replies & Comments', example: 'Threads par jawab dena' },
        { label: 'Voting / Reactions', example: 'Posts par vote ya emoji' },
        { label: 'Moderation Tools', example: 'Admin control ke liye tools' },
        { label: 'Search', example: 'Purane topics dhundhne ke liye' },
        { label: 'Private Messaging', example: 'Members ki beech messages' },
        { label: 'User Reputation', example: 'Active members ke liye badges' }
      ]
    },
    {
      id: 'marketplace',
      name: 'Marketplace',
      icon: 'fa-store',
      features: [
        { label: 'Seller Accounts', example: 'Sellers ke liye alag accounts' },
        { label: 'Product / Service Listings', example: 'Har seller ka apna list' },
        { label: 'Search & Filtering', example: 'Cheezain dhundhne aur filter' },
        { label: 'Messaging System', example: 'Buyer aur seller ki baat' },
        { label: 'Reviews & Ratings', example: 'Sellers ke reviews' },
        { label: 'Payments', example: 'Online paise lena aur dena' },
        { label: 'Order Management', example: 'Orders track aur manage' },
        { label: 'Seller Dashboard', example: 'Sellers ke liye apna panel' },
        { label: 'Dispute Resolution', example: 'Problems ka solution' }
      ]
    },
    {
      id: 'job',
      name: 'Job Portal',
      icon: 'fa-briefcase',
      features: [
        { label: 'Job Listings', example: 'Sare available jobs ka list' },
        { label: 'Search & Filtering', example: 'Jobs title, city, salary se dhundhna' },
        { label: 'Company Profiles', example: 'Har company ki detail page' },
        { label: 'Candidate Profiles', example: 'Job seekers ki CV aur profile' },
        { label: 'CV / Resume Upload', example: 'Apna CV upload karna' },
        { label: 'Job Applications', example: 'Jobs ke liye apply karna' },
        { label: 'Job Alerts', example: 'Naye jobs ka notification' },
        { label: 'Resume Builder', example: 'Online CV banane ka tool' },
        { label: 'Interview Scheduling', example: 'Interviews ka time fix' }
      ]
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: 'fa-home',
      features: [
        { label: 'Property Listings', example: 'Homes, shops, plots ka list' },
        { label: 'Search & Filtering', example: 'Price, location, size se dhundhna' },
        { label: 'Photos & Videos', example: 'Property ki photos aur video tour' },
        { label: 'Map Integration', example: 'Google Map par property location' },
        { label: 'Property Details', example: 'Full details: size, price, rooms' },
        { label: 'Agent Profiles', example: 'Real estate agents ki details' },
        { label: 'Inquiry Form', example: 'Property ke liye inquiry bhejna' },
        { label: 'Virtual Tour', example: 'Online property dekhna' },
        { label: 'Mortgage Calculator', example: 'Loan ka hisab' },
        { label: 'Favorites / Shortlist', example: 'Pasandeedah properties save' }
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant / Food',
      icon: 'fa-utensils',
      features: [
        { label: 'Menu Display', example: 'Sare dishes aur prices ka menu' },
        { label: 'Online Ordering', example: 'Ghar baithe order dena' },
        { label: 'Table Reservation', example: 'Restaurant mein table book karna' },
        { label: 'Location / Map', example: 'Restaurant kahan hai dikhana' },
        { label: 'Opening Hours', example: 'Kab khula hai aur kab band' },
        { label: 'Reviews & Ratings', example: 'Customers ke reviews' },
        { label: 'Delivery Information', example: 'Delivery area aur charges' },
        { label: 'Special Offers', example: 'Discounts aur deals' },
        { label: 'Gallery', example: 'Food ki photos' },
        { label: 'Online Payment', example: 'Card ya JazzCash se pay' }
      ]
    },
    {
      id: 'travel',
      name: 'Travel / Booking',
      icon: 'fa-plane',
      features: [
        { label: 'Destinations Info', example: 'Ghumnaye jagahon ki details' },
        { label: 'Hotel / Flight Listings', example: 'Hotels aur flights ka list' },
        { label: 'Search & Filtering', example: 'Budget, date, location se dhundhna' },
        { label: 'Booking System', example: 'Online booking aur reservation' },
        { label: 'Payments', example: 'Online paise dena' },
        { label: 'Reviews', example: 'Travelers ke reviews' },
        { label: 'Itineraries', example: 'Trip ka plan aur schedule' },
        { label: 'Travel Packages', example: 'Ready-made trips aur deals' },
        { label: 'Travel Blog', example: 'Travel experiences share' },
        { label: 'Weather Info', example: 'Destination ka mausam' }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'fa-heartbeat',
      features: [
        { label: 'Doctor Profiles', example: 'Doctors ke qualifications aur timings' },
        { label: 'Departments / Services', example: 'Kya departments aur services hain' },
        { label: 'Appointment Booking', example: 'Online appointment lena' },
        { label: 'Patient Portal', example: 'Patients ke liye login area' },
        { label: 'FAQs', example: 'Common sawal aur jawab' },
        { label: 'Location / Contact', example: 'Hospital ka address aur contact' },
        { label: 'Emergency Info', example: 'Emergency contact aur timing' },
        { label: 'Online Consultation', example: 'Video call par doctor se baat' },
        { label: 'Prescription Management', example: 'Medicines aur prescriptions' },
        { label: 'Health Articles', example: 'Health tips aur articles' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance / Banking',
      icon: 'fa-university',
      features: [
        { label: 'Account Login', example: 'Users ke liye secure login' },
        { label: 'Balance & Statements', example: 'Account balance aur history' },
        { label: 'Transactions', example: 'Paise bhejne aur lene ka record' },
        { label: 'Transfers', example: 'Ek account se doosre mein transfer' },
        { label: 'Bill Payments', example: 'Electricity, gas, phone bills' },
        { label: 'Notifications', example: 'Transaction par alert messages' },
        { label: 'Security Features', example: 'OTP, 2FA, aur security' },
        { label: 'Loan Application', example: 'Loan ke liye apply' },
        { label: 'Investment Dashboard', example: 'Investments track karna' },
        { label: 'Support Chat', example: 'Customer se baat karna' }
      ]
    },
    {
      id: 'saas',
      name: 'SaaS / Web Application',
      icon: 'fa-cloud',
      features: [
        { label: 'Sign-up / Login', example: 'Naye users ke liye account banana' },
        { label: 'Dashboard', example: 'Users ke liye main dashboard' },
        { label: 'Subscriptions', example: 'Free aur paid plans' },
        { label: 'User Settings', example: 'Apni settings change karna' },
        { label: 'Notifications', example: 'Updates aur alerts' },
        { label: 'Data Management', example: 'Apna data safely store' },
        { label: 'Integrations', example: 'Dosri apps ke sath connect' },
        { label: 'API Access', example: 'Developers ke liye API' },
        { label: 'Team Collaboration', example: 'Team ke sath kaam karna' },
        { label: 'Analytics & Reports', example: 'Data aur performance' }
      ]
    },
    {
      id: 'membership',
      name: 'Membership Website',
      icon: 'fa-id-card',
      features: [
        { label: 'Registration', example: 'Naye members ke liye signup' },
        { label: 'Member Profiles', example: 'Har member ki profile page' },
        { label: 'Login System', example: 'Members ke liye secure login' },
        { label: 'Restricted Content', example: 'Sirf members ke liye content' },
        { label: 'Subscriptions', example: 'Monthly ya yearly plans' },
        { label: 'Payments', example: 'Online membership fee' },
        { label: 'Member Dashboard', example: 'Apni activity aur content dekhna' },
        { label: 'Member Directory', example: 'Sare members ki list' },
        { label: 'Private Community', example: 'Members ki beech group' }
      ]
    },
    {
      id: 'directory',
      name: 'Directory / Listing',
      icon: 'fa-list',
      features: [
        { label: 'Business / Person Listings', example: 'Sare businesses ka directory' },
        { label: 'Categories', example: 'Kya category mein kya aata hai' },
        { label: 'Search', example: 'Business dhundhne ke liye search' },
        { label: 'Filters', example: 'Location, rating, price se filter' },
        { label: 'Maps', example: 'Business location dikhana' },
        { label: 'Profiles', example: 'Har business ki detail profile' },
        { label: 'Reviews', example: 'Customers ke reviews' },
        { label: 'Contact Options', example: 'Direct call ya message bhejna' },
        { label: 'Claim Listing', example: 'Apna business profile claim karna' },
        { label: 'Premium Listings', example: 'Paid promotions' }
      ]
    },
    {
      id: 'nonprofit',
      name: 'Nonprofit / Charity',
      icon: 'fa-hand-holding-heart',
      features: [
        { label: 'Mission / About', example: 'Organization ki kahani aur goal' },
        { label: 'Campaigns', example: 'Current campaigns aur causes' },
        { label: 'Donation System', example: 'Online donation lena' },
        { label: 'Volunteer Registration', example: 'Volunteers ke liye signup' },
        { label: 'Events', example: 'Aane wale events aur fundraisers' },
        { label: 'Impact Stories', example: 'Hamare kaam ke results' },
        { label: 'Contact', example: 'Logon se baat karne ke liye' },
        { label: 'Newsletter', example: 'Updates email par lena' },
        { label: 'Partner Logos', example: 'Supporters ka showcase' },
        { label: 'Transparency Report', example: 'Paise kahan kharch kiye' }
      ]
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: 'fa-film',
      features: [
        { label: 'Videos / Music Library', example: 'Sare videos aur music ka collection' },
        { label: 'Categories', example: 'Music, Movies, Shows ke hisaab se' },
        { label: 'Playlists', example: 'Apne favourite content ka list' },
        { label: 'Ratings & Reviews', example: 'Content par ratings dena' },
        { label: 'User Accounts', example: 'Users ke profiles aur history' },
        { label: 'Recommendations', example: 'Apne pasandeedah content ke suggestions' },
        { label: 'Search', example: 'Content dhundhne ke liye' },
        { label: 'Downloads', example: 'Offline dekhne ke liye' },
        { label: 'Live Streaming', example: 'Live events aur shows' },
        { label: 'Subtitles', example: 'Multiple languages mein' }
      ]
    },
    {
      id: 'personal',
      name: 'Personal Website',
      icon: 'fa-user',
      features: [
        { label: 'Biography', example: 'Apni kahani aur background' },
        { label: 'Interests & Hobbies', example: 'Kya pasand karte hain' },
        { label: 'Projects Showcase', example: 'Apne personal projects' },
        { label: 'Blog', example: 'Apne khayal aur articles' },
        { label: 'Gallery', example: 'Photos aur memories' },
        { label: 'Social Links', example: 'Social media ke links' },
        { label: 'Contact Info', example: 'Logon se baat karne ke liye' },
        { label: 'Resume', example: 'Apni qualifications aur experience' },
        { label: 'Services', example: 'Kya services offer karte hain' }
      ]
    },
    {
      id: 'landing',
      name: 'Landing Page',
      icon: 'fa-rocket',
      features: [
        { label: 'Hero Section', example: 'Pehli nazar par attract karne wali heading' },
        { label: 'Value Proposition', example: 'Aapke product ya service ka fayda' },
        { label: 'CTA Button', example: 'Action lene ke liye button' },
        { label: 'Features / Benefits', example: 'Kyun choose karein aapko' },
        { label: 'Testimonials', example: 'Customers ki reviews' },
        { label: 'Pricing', example: 'Plans aur prices' },
        { label: 'Contact / Signup Form', example: 'Naye leads ke liye form' },
        { label: 'Video', example: 'Product explainer video' },
        { label: 'FAQ Section', example: 'Common sawal aur jawab' },
        { label: 'Trust Badges', example: 'Clients ya awards ka showcase' }
      ]
    },
    {
      id: 'wiki',
      name: 'Wiki / Knowledge Base',
      icon: 'fa-book',
      features: [
        { label: 'Articles', example: 'Detailed information articles' },
        { label: 'Categories', example: 'Topics ke hisaab se organize' },
        { label: 'Search', example: 'Articles dhundhne ke liye' },
        { label: 'Internal Links', example: 'Articles ke beech links' },
        { label: 'Editing Tools', example: 'Articles ko update karne ke liye' },
        { label: 'Revision History', example: 'Purani versions dekhna' },
        { label: 'User Contributions', example: 'Users ke articles add karne' },
        { label: 'Images & Media', example: 'Articles ke sath photos' },
        { label: 'Discussion Pages', example: 'Har article par baat' }
      ]
    },
    {
      id: 'webportal',
      name: 'Web Portal',
      icon: 'fa-th-large',
      features: [
        { label: 'Login System', example: 'Users ke liye secure login' },
        { label: 'Personalized Dashboard', example: 'Har user ke liye apna dashboard' },
        { label: 'Multiple Services', example: 'Ek saath kai services' },
        { label: 'Notifications', example: 'Updates aur alerts' },
        { label: 'Documents', example: 'Files aur documents download' },
        { label: 'Search', example: 'Sari cheezein dhundhna' },
        { label: 'User Management', example: 'Admin ke liye user control' },
        { label: 'Reports', example: 'Data aur statistics' },
        { label: 'Settings', example: 'Apni preferences' },
        { label: 'Help Center', example: 'Support aur guidance' }
      ]
    },
    {
      id: 'other',
      name: 'Other / Custom Website',
      icon: 'fa-ellipsis-h',
      features: [
        { label: 'Custom Design', example: 'Apni pasandeedah design' },
        { label: 'Custom Features', example: 'Koi bhi special feature' },
        { label: 'Admin Panel', example: 'Content manage karne ke liye' },
        { label: 'API Integration', example: 'Dosri apps ke sath connect' },
        { label: 'Multi-language', example: 'Kai languages mein website' },
        { label: 'Analytics', example: 'Visitors ke bare mein data' },
        { label: 'SEO Optimization', example: 'Google par aage lane ke liye' },
        { label: 'Custom Database', example: 'Apna data structure' },
        { label: 'Third-party Tools', example: 'Dosri tools integrate' }
      ]
    }
  ];

  var selectedType = null;
  var selectedFeatures = new Set();
  var homepageData = null;
  var requirementsState = null;

  function loadHomepageData() {
    try {
      var stored = localStorage.getItem('webnexa_homepage_inquiry');
      if (stored) {
        homepageData = JSON.parse(stored);
      }
    } catch (e) {
      homepageData = null;
    }
  }

  function clearHomepageData() {
    localStorage.removeItem('webnexa_homepage_inquiry');
  }

  function saveRequirementsState() {
    var state = {
      type: selectedType,
      features: Array.from(selectedFeatures),
      budget: document.getElementById('reqBudget').value,
      service: document.getElementById('reqService').value,
      timeline: document.getElementById('reqTimeline').value,
      details: document.getElementById('reqDetails').value.trim(),
      reference: document.getElementById('reqReference').value.trim(),
      manual: document.getElementById('manualRequirements').value.trim()
    };
    localStorage.setItem('webnexa_requirements_state', JSON.stringify(state));
  }

  function loadRequirementsState() {
    try {
      var stored = localStorage.getItem('webnexa_requirements_state');
      if (stored) {
        requirementsState = JSON.parse(stored);
      }
    } catch (e) {
      requirementsState = null;
    }
  }

  function restoreRequirementsState() {
    if (!requirementsState) return;

    if (requirementsState.type) {
      selectedType = requirementsState.type;
      var cards = typesGrid.querySelectorAll('.type-card');
      cards.forEach(function (card) {
        if (card.getAttribute('data-type') === selectedType) {
          card.classList.add('selected');
        }
      });
      renderFeatures(selectedType);
      step2.classList.remove('hidden');
    }

    if (requirementsState.budget) {
      document.getElementById('reqBudget').value = requirementsState.budget;
    }
    if (requirementsState.service) {
      document.getElementById('reqService').value = requirementsState.service;
    }
    if (requirementsState.timeline) {
      document.getElementById('reqTimeline').value = requirementsState.timeline;
    }
    if (requirementsState.details) {
      document.getElementById('reqDetails').value = requirementsState.details;
    }
    if (requirementsState.reference) {
      document.getElementById('reqReference').value = requirementsState.reference;
    }
    if (requirementsState.manual) {
      document.getElementById('manualRequirements').value = requirementsState.manual;
    }

    if (requirementsState.features && requirementsState.features.length > 0) {
      var items = featuresGrid.querySelectorAll('.feature-item');
      items.forEach(function (item) {
        var feature = item.getAttribute('data-feature');
        if (requirementsState.features.indexOf(feature) !== -1) {
          selectedFeatures.add(feature);
          item.classList.add('selected');
        }
      });
      updateFeaturesSummary();
    }

    updateProgressIndicator();
  }

  function clearRequirementsState() {
    localStorage.removeItem('webnexa_requirements_state');
  }

  var typesGrid = document.getElementById('typesGrid');
  var step2 = document.getElementById('step2');
  var featuresGrid = document.getElementById('featuresGrid');
  var selectedTypeName = document.getElementById('selectedTypeName');
  var requirementsForm = document.getElementById('requirementsForm');
  var backToTypesBtn = document.getElementById('backToTypes');
  var previewBtn = document.getElementById('previewBtn');
  var previewModal = document.getElementById('previewModal');
  var previewModalClose = document.getElementById('previewModalClose');
  var previewCancel = document.getElementById('previewCancel');
  var previewConfirm = document.getElementById('previewConfirm');
  var previewContent = document.getElementById('previewContent');
  var changeTypeBtn = document.getElementById('changeTypeBtn');
  var selectAllFeaturesBtn = document.getElementById('selectAllFeatures');
  var clearAllFeaturesBtn = document.getElementById('clearAllFeatures');
  var featuresSummaryText = document.getElementById('featuresSummaryText');
  var toast = document.getElementById('toast');
  var sidebarSteps = document.querySelectorAll('.progress-step');

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

  function updateProgressIndicator() {
    var step1 = document.getElementById('sidebarStep1');
    var step2 = document.getElementById('sidebarStep2');
    var step3 = document.getElementById('sidebarStep3');
    var step4 = document.getElementById('sidebarStep4');

    [step1, step2, step3, step4].forEach(function (s) {
      if (s) s.classList.remove('active', 'completed');
    });

    if (!homepageData) {
      step1.classList.add('active');
    } else if (!selectedType) {
      step1.classList.add('completed');
      step2.classList.add('active');
    } else if (selectedType && selectedFeatures.size === 0) {
      step1.classList.add('completed');
      step2.classList.add('completed');
      step3.classList.add('active');
    } else {
      step1.classList.add('completed');
      step2.classList.add('completed');
      step3.classList.add('completed');
      step4.classList.add('active');
    }
  }

  function scrollToStep2() {
    step2.classList.remove('hidden');
    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateProgressIndicator();
  }

  function scrollToStep1() {
    step2.classList.add('hidden');
    document.getElementById('step1').scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateProgressIndicator();
  }

  function updateFeaturesSummary() {
    var count = selectedFeatures.size;
    if (count === 0) {
      featuresSummaryText.textContent = 'Abhi koi feature select nahi kiya';
    } else if (count === 1) {
      featuresSummaryText.textContent = '1 feature select kiya hai';
    } else {
      featuresSummaryText.textContent = count + ' features select kiye hain';
    }
  }

  function renderFeatures(typeId) {
    featuresGrid.innerHTML = '';
    selectedFeatures.clear();

    var typeData = websiteTypes.find(function (t) { return t.id === typeId; });
    if (!typeData) return;

    selectedTypeName.textContent = typeData.name;

    typeData.features.forEach(function (feature) {
      var item = document.createElement('div');
      item.className = 'feature-item';
      item.setAttribute('data-feature', feature.label);

      item.innerHTML = '<div class="feature-checkbox"><i class="fas fa-check"></i></div>' +
        '<div class="feature-content">' +
        '<div class="feature-label">' + feature.label + '</div>' +
        '<div class="feature-example">Example: ' + feature.example + '</div>' +
        '</div>';

      item.addEventListener('click', function () {
        if (selectedFeatures.has(feature.label)) {
          selectedFeatures.delete(feature.label);
          item.classList.remove('selected');
        } else {
          selectedFeatures.add(feature.label);
          item.classList.add('selected');
        }
        updateFeaturesSummary();
        updateProgressIndicator();
      });

      featuresGrid.appendChild(item);
    });

    updateFeaturesSummary();
  }

  function initTypeCards() {
    var cards = typesGrid.querySelectorAll('.type-card');
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        cards.forEach(function (c) { c.classList.remove('selected'); });
        card.classList.add('selected');
        selectedType = card.getAttribute('data-type');
        renderFeatures(selectedType);
        scrollToStep2();
      });
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[\+]?[\d\s\-\(\)]{7,15}$/.test(phone);
  }

  function buildPreviewHTML() {
    var name = document.getElementById('reqName').value.trim() || 'Not provided';
    var email = document.getElementById('reqEmail').value.trim() || 'Not provided';
    var phone = document.getElementById('reqPhone').value.trim() || 'Not provided';
    var budget = document.getElementById('reqBudget');
    var budgetText = budget.options[budget.selectedIndex] ? budget.options[budget.selectedIndex].text : 'Not specified';
    var service = document.getElementById('reqService');
    var serviceText = service.options[service.selectedIndex] ? service.options[service.selectedIndex].text : 'Not specified';
    var timeline = document.getElementById('reqTimeline');
    var timelineText = timeline.options[timeline.selectedIndex] ? timeline.options[timeline.selectedIndex].text : 'Not specified';
    var details = document.getElementById('reqDetails').value.trim() || 'Not provided';
    var reference = document.getElementById('reqReference').value.trim() || 'Not provided';
    var manual = document.getElementById('manualRequirements').value.trim() || 'Not provided';

    var typeData = websiteTypes.find(function (t) { return t.id === selectedType; });

    var html = '';

    if (homepageData) {
      html += '<div class="preview-section homepage-preview">';
      html += '<h3><i class="fas fa-home"></i> Homepage Inquiry Details</h3>';
      html += '<div class="preview-grid">';
      html += '<div class="preview-item"><span class="preview-label">Name:</span><span class="preview-value">' + escapeHtml(homepageData.name) + '</span></div>';
      html += '<div class="preview-item"><span class="preview-label">Email:</span><span class="preview-value">' + escapeHtml(homepageData.email) + '</span></div>';
      html += '<div class="preview-item"><span class="preview-label">Phone:</span><span class="preview-value">' + escapeHtml(homepageData.phone) + '</span></div>';
      html += '<div class="preview-item"><span class="preview-label">Company Size:</span><span class="preview-value">' + escapeHtml(homepageData.companySize) + '</span></div>';
      html += '</div></div>';
    }

    html += '<div class="preview-section">';
    html += '<h3><i class="fas fa-user"></i> Personal Information</h3>';
    html += '<div class="preview-grid">';
    html += '<div class="preview-item"><span class="preview-label">Name:</span><span class="preview-value">' + escapeHtml(name) + '</span></div>';
    html += '<div class="preview-item"><span class="preview-label">Email:</span><span class="preview-value">' + escapeHtml(email) + '</span></div>';
    html += '<div class="preview-item"><span class="preview-label">Phone:</span><span class="preview-value">' + escapeHtml(phone) + '</span></div>';
    html += '</div></div>';

    html += '<div class="preview-section">';
    html += '<h3><i class="fas fa-cog"></i> Project Details</h3>';
    html += '<div class="preview-grid">';
    html += '<div class="preview-item"><span class="preview-label">Website Type:</span><span class="preview-value">' + escapeHtml(typeData ? typeData.name : selectedType) + '</span></div>';
    html += '<div class="preview-item"><span class="preview-label">Service:</span><span class="preview-value">' + escapeHtml(serviceText) + '</span></div>';
    html += '<div class="preview-item"><span class="preview-label">Budget:</span><span class="preview-value">' + escapeHtml(budgetText) + '</span></div>';
    html += '<div class="preview-item"><span class="preview-label">Timeline:</span><span class="preview-value">' + escapeHtml(timelineText) + '</span></div>';
    html += '<div class="preview-item" style="grid-column:1/-1;"><span class="preview-label">Details:</span><span class="preview-value">' + escapeHtml(details) + '</span></div>';
    html += '<div class="preview-item" style="grid-column:1/-1;"><span class="preview-label">Reference:</span><span class="preview-value">' + escapeHtml(reference) + '</span></div>';
    html += '</div></div>';

    html += '<div class="preview-section">';
    html += '<h3><i class="fas fa-check-square"></i> Selected Features (' + selectedFeatures.size + ')</h3>';
    if (selectedFeatures.size > 0) {
      html += '<ul class="preview-list">';
      selectedFeatures.forEach(function (feature) {
        html += '<li><i class="fas fa-check"></i> ' + escapeHtml(feature) + '</li>';
      });
      html += '</ul>';
    } else {
      html += '<p class="preview-empty">No features selected</p>';
    }
    html += '</div>';

    if (manual && manual !== 'Not provided') {
      html += '<div class="preview-section">';
      html += '<h3><i class="fas fa-plus-circle"></i> Additional Requirements</h3>';
      html += '<p class="preview-manual">' + escapeHtml(manual).replace(/\n/g, '<br>') + '</p>';
      html += '</div>';
    }

    return html;
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildWhatsAppMessage() {
    var name = document.getElementById('reqName').value.trim();
    var email = document.getElementById('reqEmail').value.trim();
    var phone = document.getElementById('reqPhone').value.trim();
    var budget = document.getElementById('reqBudget').value;
    var service = document.getElementById('reqService').value;
    var timeline = document.getElementById('reqTimeline').value;
    var details = document.getElementById('reqDetails').value.trim();
    var reference = document.getElementById('reqReference').value.trim();
    var manual = document.getElementById('manualRequirements').value.trim();

    var budgetLabels = {
      'under-50k': 'Under Rs 50,000',
      '50k-1lac': 'Rs 50,000 - 1,00,000',
      '1lac-3lac': 'Rs 1,00,000 - 3,00,000',
      '3lac-5lac': 'Rs 3,00,000 - 5,00,000',
      'above-5lac': 'Above Rs 5,00,000',
      'not-sure': 'Abhi confirm nahi'
    };

    var timelineLabels = {
      '1-week': '1 Week',
      '2-4-weeks': '2 - 4 Weeks',
      '1-2-months': '1 - 2 Months',
      '3-6-months': '3 - 6 Months',
      '6-months-plus': '6 Months+',
      'flexible': 'Flexible / No rush'
    };

    var typeData = websiteTypes.find(function (t) { return t.id === selectedType; });

    var serviceLabels = {
      'design': 'Web Design',
      'development': 'Web Development',
      'seo': 'SEO Optimization',
      'ecommerce': 'E-Commerce',
      'marketing': 'Digital Marketing',
      'app': 'App Development'
    };

    var companySizeLabels = {
      'startup': 'Startup (1-10)',
      'small': 'Small Business (11-50)',
      'medium': 'Medium (51-200)',
      'large': 'Enterprise (200+)'
    };

    var msg = 'New ' + BUSINESS_NAME + ' Website Requirement Inquiry:%0A%0A';

    if (homepageData) {
      msg += '=== Homepage Inquiry ===%0A';
      msg += 'Name: ' + encodeURIComponent(homepageData.name) + '%0A';
      msg += 'Email: ' + encodeURIComponent(homepageData.email) + '%0A';
      msg += 'Phone: ' + encodeURIComponent(homepageData.phone) + '%0A';
      msg += 'Company Size: ' + encodeURIComponent(companySizeLabels[homepageData.companySize] || homepageData.companySize) + '%0A';
      msg += '%0A';
    } else {
      msg += 'Name: ' + encodeURIComponent(name) + '%0A';
      msg += 'Email: ' + encodeURIComponent(email) + '%0A';
      msg += 'Phone: ' + encodeURIComponent(phone) + '%0A%0A';
    }

    msg += '=== Requirements ===%0A';
    msg += 'Website Type: ' + encodeURIComponent(typeData ? typeData.name : selectedType) + '%0A';
    msg += 'Service: ' + encodeURIComponent(serviceLabels[service] || service) + '%0A';
    msg += 'Budget: ' + encodeURIComponent(budgetLabels[budget] || 'Not specified') + '%0A';
    msg += 'Timeline: ' + encodeURIComponent(timelineLabels[timeline] || 'Not specified') + '%0A';
    if (details) {
      msg += 'Details: ' + encodeURIComponent(details) + '%0A';
    }
    if (reference) {
      msg += 'Reference: ' + encodeURIComponent(reference) + '%0A';
    }
    msg += '%0ASelected Features:%0A';

    if (selectedFeatures.size > 0) {
      selectedFeatures.forEach(function (feature) {
        msg += '- ' + encodeURIComponent(feature) + '%0A';
      });
    } else {
      msg += '- None selected%0A';
    }

    if (manual) {
      msg += '%0AAdditional Requirements:%0A';
      msg += encodeURIComponent(manual) + '%0A';
    }

    return msg;
  }

  function openPreview() {
    previewContent.innerHTML = buildPreviewHTML();
    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePreview() {
    previewModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initForm() {
    backToTypesBtn.addEventListener('click', function () {
      scrollToStep1();
    });

    changeTypeBtn.addEventListener('click', function () {
      scrollToStep1();
      var cards = typesGrid.querySelectorAll('.type-card');
      cards.forEach(function (c) { c.classList.remove('selected'); });
      selectedType = null;
      saveRequirementsState();
      updateProgressIndicator();
    });

    selectAllFeaturesBtn.addEventListener('click', function () {
      var items = featuresGrid.querySelectorAll('.feature-item');
      items.forEach(function (item) {
        var feature = item.getAttribute('data-feature');
        selectedFeatures.add(feature);
        item.classList.add('selected');
      });
      updateFeaturesSummary();
      updateProgressIndicator();
      saveRequirementsState();
    });

    clearAllFeaturesBtn.addEventListener('click', function () {
      selectedFeatures.clear();
      var items = featuresGrid.querySelectorAll('.feature-item');
      items.forEach(function (item) {
        item.classList.remove('selected');
      });
      updateFeaturesSummary();
      updateProgressIndicator();
      saveRequirementsState();
    });

    previewBtn.addEventListener('click', function () {
      if (!homepageData) {
        var name = document.getElementById('reqName').value.trim();
        var email = document.getElementById('reqEmail').value.trim();
        var phone = document.getElementById('reqPhone').value.trim();

        if (!name || !email || !phone) {
          showToast('Pehle apna naam, email, aur phone number fill karein.', 'error');
          return;
        }

        if (!validateEmail(email)) {
          showToast('Please enter a valid email address.', 'error');
          return;
        }

        if (!validatePhone(phone)) {
          showToast('Please enter a valid phone number.', 'error');
          return;
        }
      }

      if (!selectedType) {
        showToast('Pehle website type select karein.', 'error');
        return;
      }

      openPreview();
    });

    previewCancel.addEventListener('click', function () {
      closePreview();
    });

    previewConfirm.addEventListener('click', function () {
      closePreview();

      if (!homepageData) {
        var name = document.getElementById('reqName').value.trim();
        var email = document.getElementById('reqEmail').value.trim();
        var phone = document.getElementById('reqPhone').value.trim();

        if (!name || !email || !phone) {
          showToast('Please fill in all required fields.', 'error');
          return;
        }

        if (!validateEmail(email)) {
          showToast('Please enter a valid email address.', 'error');
          return;
        }

        if (!validatePhone(phone)) {
          showToast('Please enter a valid phone number.', 'error');
          return;
        }
      }

      if (!selectedType) {
        showToast('Please select a website type.', 'error');
        return;
      }

      var messageText = buildWhatsAppMessage();
      var whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + messageText;
      window.open(whatsappUrl, '_blank');
      showToast('Redirecting to WhatsApp...', 'success');
      clearHomepageData();
      clearRequirementsState();
      var banner = document.getElementById('homepageDataBanner');
      if (banner) banner.classList.add('hidden');
      var summary = document.getElementById('homepageSummary');
      if (summary) summary.classList.add('hidden');
      var personalSection = document.getElementById('personalInfoSection');
      if (personalSection) personalSection.classList.remove('hidden');
      selectedType = null;
      selectedFeatures.clear();
      updateProgressIndicator();
    });

    previewModalClose.addEventListener('click', function () {
      closePreview();
    });

    previewModal.addEventListener('click', function (e) {
      if (e.target === previewModal) {
        closePreview();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && previewModal.classList.contains('active')) {
        closePreview();
      }
    });

    requirementsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      previewBtn.click();
    });

    var autoSaveFields = ['reqName', 'reqEmail', 'reqPhone', 'reqBudget', 'reqService', 'reqTimeline', 'reqDetails', 'reqReference', 'manualRequirements'];
    autoSaveFields.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', function () {
        saveRequirementsState();
      });
      el.addEventListener('change', function () {
        saveRequirementsState();
        updateProgressIndicator();
      });
    });

    var origRenderFeatures = renderFeatures;
    renderFeatures = function (typeId) {
      origRenderFeatures(typeId);
      saveRequirementsState();
      updateProgressIndicator();
    };
  }

  function init() {
    loadHomepageData();
    loadRequirementsState();

    if (homepageData) {
      var banner = document.getElementById('homepageDataBanner');
      var details = document.getElementById('bannerDetails');
      if (banner && details) {
        details.textContent = 'Name: ' + homepageData.name + ' | Email: ' + homepageData.email + ' | Phone: ' + homepageData.phone;
        banner.classList.remove('hidden');
      }

      renderHomepageSummary();

      var personalSection = document.getElementById('personalInfoSection');
      if (personalSection) {
        personalSection.classList.add('hidden');
      }
    }

    initTypeCards();

    if (requirementsState) {
      restoreRequirementsState();
    }

    updateProgressIndicator();
    initForm();
  }

  function renderHomepageSummary() {
    if (!homepageData) return;

    var summary = document.getElementById('homepageSummary');
    if (!summary) return;

    summary.classList.remove('hidden');

    var nameEl = document.getElementById('summaryName');
    var emailEl = document.getElementById('summaryEmail');
    var phoneEl = document.getElementById('summaryPhone');
    var companySizeEl = document.getElementById('summaryCompanySize');

    if (nameEl) nameEl.textContent = homepageData.name || '';
    if (emailEl) emailEl.textContent = homepageData.email || '';
    if (phoneEl) phoneEl.textContent = homepageData.phone || '';
    if (companySizeEl) companySizeEl.textContent = homepageData.companySize || '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
