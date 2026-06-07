// Animate skill bars on page load
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-fill').forEach(el => {
    const w = el.style.width;
    el.style.width = '0';
    setTimeout(() => { el.style.width = w; }, 300);
  });
});
