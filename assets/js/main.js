'use strict';

// ── Set active nav link based on current page ────────────────────────────────
function setActiveNav() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  setActiveNav();
});