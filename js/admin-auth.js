(function () {
  'use strict';

  var ADMIN_EMAIL = 'webnexa@webnexa.online';
  var ADMIN_PASSWORD = '0676680';
  var AUTH_KEY = 'webnexa_admin_auth';

  function isAuthenticated() {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  }

  function setAuthenticated(value) {
    if (value) {
      sessionStorage.setItem(AUTH_KEY, 'true');
    } else {
      sessionStorage.removeItem(AUTH_KEY);
    }
  }

  function logout() {
    setAuthenticated(false);
    window.location.href = 'admin-login.html';
  }

  function initLoginPage() {
    var loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value;

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        setAuthenticated(true);
        window.location.href = 'admin.html';
      } else {
        showToast('Invalid email or password', 'error');
      }
    });
  }

  function initAdminPage() {
    if (!isAuthenticated()) {
      window.location.href = 'admin-login.html';
      return;
    }

    var logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        logout();
      });
    }
  }

  function showToast(message, type) {
    var existing = document.querySelector('.admin-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'admin-toast ' + (type || 'success');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('show');
    }, 10);

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 3000);
  }

  if (window.location.pathname.includes('admin-login.html')) {
    initLoginPage();
  } else if (window.location.pathname.includes('admin.html')) {
    initAdminPage();
  }
})();