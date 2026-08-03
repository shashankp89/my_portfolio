document.addEventListener('DOMContentLoaded', () => {
  const swatches = document.querySelectorAll('.swatch');
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  const currentTheme = localStorage.getItem('theme') || 'default';
  applyTheme(currentTheme);

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const selectedTheme = swatch.getAttribute('data-theme');
      applyTheme(selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    });
  });

  themeToggle.addEventListener('click', () => {
    themeToggle.classList.toggle('open');
  });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navToggle.classList.toggle('active');
  });

  function applyTheme(theme) {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }
});
