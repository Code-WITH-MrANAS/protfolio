document.addEventListener('DOMContentLoaded', () => {
  const span = document.querySelector('.left-section h2 span');
  if (!span) return;

  const phrases = [
    'Full Stack Developer',
    'Web Developer',
    'Designer',
  ];
  let i = 0;

  function update() {
    span.textContent = phrases[i];
    i = (i + 1) % phrases.length;
  }

  update();
  setInterval(update, 2000);
});


