const themeToggleInit = () => {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const root = document.documentElement;
  const icon = btn.querySelector('span');
  const apply = (t) => {
    root.setAttribute('data-theme', t);
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  };
  apply(root.getAttribute('data-theme') || 'light');
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // storage unavailable, ignore
    }
  });
};

export default themeToggleInit;