(function () {
  'use strict';

  var STORAGE_KEY = 'webnexa_portfolio';
  var modalOverlay = document.getElementById('modalOverlay');
  var modalTitle = document.getElementById('modalTitle');
  var portfolioForm = document.getElementById('portfolioForm');
  var editIndexInput = document.getElementById('editIndex');
  var tableBody = document.getElementById('portfolioTableBody');
  var addNewBtn = document.getElementById('addNewBtn');
  var cancelBtn = document.getElementById('cancelBtn');
  var modalClose = document.getElementById('modalClose');

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

  function getPortfolio() {
    console.log('Getting portfolio from storage...');
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      console.log('localStorage data:', data);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load portfolio from localStorage', e);
    }

    try {
      var cookie = getCookie(STORAGE_KEY);
      console.log('Cookie data:', cookie);
      if (cookie) {
        var parsed = JSON.parse(cookie);
        savePortfolio(parsed);
        return parsed;
      }
    } catch (e) {
      console.error('Failed to load portfolio from cookie', e);
    }

    console.log('Using default portfolio');
    return defaultPortfolio.slice();
  }

  function savePortfolio(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      setCookie(STORAGE_KEY, JSON.stringify(items), 365);
      showSavedIndicator();
    } catch (e) {
      console.error('Failed to save portfolio', e);
      showToast('Failed to save. Storage may be full.', 'error');
    }
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }

  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/;SameSite=Lax';
  }

  function showSavedIndicator() {
    var existing = document.getElementById('saveIndicator');
    if (existing) existing.remove();

    var indicator = document.createElement('div');
    indicator.id = 'saveIndicator';
    indicator.innerHTML = '<i class="fas fa-check-circle"></i> Saved to browser';
    indicator.style.cssText = 'position:fixed;bottom:24px;left:24px;background:#22c55e;color:#fff;padding:10px 18px;border-radius:8px;font-size:0.85rem;font-weight:600;z-index:2000;box-shadow:0 4px 12px rgba(0,0,0,0.15);display:flex;align-items:center;gap:8px;animation:fadeInOut 2.5s ease forwards;';
    document.body.appendChild(indicator);

    var style = document.createElement('style');
    style.textContent = '@keyframes fadeInOut{0%{opacity:0;transform:translateY(10px)}15%{opacity:1;transform:translateY(0)}85%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-10px)}}';
    document.head.appendChild(style);

    setTimeout(function () {
      indicator.remove();
      style.remove();
    }, 2600);
  }

  function renderTable() {
    var items = getPortfolio();
    var storageSource = 'default';
    var storageClass = 'default';
    try {
      if (localStorage.getItem(STORAGE_KEY)) {
        storageSource = 'localStorage';
        storageClass = 'localStorage';
      } else if (getCookie(STORAGE_KEY)) {
        storageSource = 'cookie backup';
        storageClass = 'cookie';
      } else {
        storageSource = 'default';
        storageClass = 'default';
      }
    } catch (e) {
      storageSource = 'default';
      storageClass = 'default';
    }

    var statusEl = document.getElementById('storageStatus');
    if (statusEl) {
      statusEl.className = 'storage-status ' + storageClass;
      statusEl.innerHTML = '<i class="fas fa-database"></i> Data source: ' + storageSource + ' | Items: ' + items.length;
    }

    tableBody.innerHTML = '';

    if (items.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="6"><div class="empty-state"><i class="fas fa-briefcase"></i><p>No portfolio items yet. Click "Add New Project" to get started.</p></div></td></tr>';
      return;
    }

    items.forEach(function (item, index) {
      var tr = document.createElement('tr');
      var thumbHtml = '';
      if (item.image) {
        thumbHtml = '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.name) + '" class="portfolio-thumb" onerror="this.style.display=\'none\'">';
      } else {
        thumbHtml = '<div class="portfolio-thumb-placeholder"><i class="fas fa-image"></i></div>';
      }
      var liveHtml = item.liveUrl ? '<a href="' + escapeHtml(item.liveUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(item.liveUrl) + '</a>' : '<span style="color:#94a3b8">—</span>';
      tr.innerHTML = '<td>' + thumbHtml + '</td>' +
        '<td><strong>' + escapeHtml(item.name) + '</strong><br><small style="color:#64748b">' + escapeHtml(item.description || '') + '</small></td>' +
        '<td>' + escapeHtml(item.category || '') + '</td>' +
        '<td>' + escapeHtml(item.price || '') + '</td>' +
        '<td>' + liveHtml + '</td>' +
        '<td><div class="action-btns">' +
        '<button class="btn-xs btn-edit" data-index="' + index + '"><i class="fas fa-edit"></i> Edit</button>' +
        '<button class="btn-xs btn-delete" data-index="' + index + '"><i class="fas fa-trash"></i> Delete</button>' +
        '</div></td>';
      tableBody.appendChild(tr);
    });

    document.querySelectorAll('.btn-edit').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openModal(parseInt(this.getAttribute('data-index'), 10));
      });
    });

    document.querySelectorAll('.btn-delete').forEach(function (btn) {
      btn.addEventListener('click', function () {
        deleteItem(parseInt(this.getAttribute('data-index'), 10));
      });
    });
  }

  function openModal(index) {
    var items = getPortfolio();
    if (index !== null && index !== undefined && items[index]) {
      modalTitle.textContent = 'Edit Project';
      document.getElementById('projectName').value = items[index].name || '';
      document.getElementById('projectCategory').value = items[index].category || '';
      document.getElementById('projectImage').value = items[index].image || '';
      document.getElementById('projectDescription').value = items[index].description || '';
      document.getElementById('projectPrice').value = items[index].price || '';
      document.getElementById('projectLiveUrl').value = items[index].liveUrl || '';
      editIndexInput.value = index;
    } else {
      modalTitle.textContent = 'Add New Project';
      portfolioForm.reset();
      editIndexInput.value = '';
    }
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  function deleteItem(index) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    var items = getPortfolio();
    items.splice(index, 1);
    savePortfolio(items);
    renderTable();
    showToast('Project deleted successfully', 'success');
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

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  addNewBtn.addEventListener('click', function () {
    openModal(null);
  });

  cancelBtn.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  portfolioForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var items = getPortfolio();
    var newItem = {
      name: document.getElementById('projectName').value.trim(),
      category: document.getElementById('projectCategory').value.trim(),
      image: document.getElementById('projectImage').value.trim(),
      description: document.getElementById('projectDescription').value.trim(),
      price: document.getElementById('projectPrice').value.trim(),
      liveUrl: document.getElementById('projectLiveUrl').value.trim()
    };

    var editIndex = editIndexInput.value;
    if (editIndex !== '') {
      items[parseInt(editIndex, 10)] = newItem;
      showToast('Project updated successfully', 'success');
    } else {
      items.push(newItem);
      showToast('Project added successfully', 'success');
    }

    savePortfolio(items);
    renderTable();
    closeModal();
  });

  renderTable();
})();