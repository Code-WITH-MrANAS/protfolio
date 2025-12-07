/* Loader hiding and scroll animations */
window.addEventListener('load', () => {
  const loader = document.getElementById('site-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 300);
  }

  // play simple entry animations for main content
  const left = document.querySelector('.left-section');
  const right = document.querySelector('.right-section');
  const about = document.querySelector('.about');
  if (left) left.classList.add('fade-in-up');
  if (right) right.classList.add('fade-in-up');
  if (about) about.classList.add('fade-in-up');

  // staggered play
  setTimeout(() => { if (left) left.classList.add('play'); }, 250);
  setTimeout(() => { if (right) right.classList.add('play'); }, 450);
  setTimeout(() => { if (about) about.classList.add('play'); }, 650);

  // IntersectionObserver for reveal-on-scroll elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-item').forEach(el => observer.observe(el));
});