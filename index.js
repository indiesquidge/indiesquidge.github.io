function range(start, end, step = 1) {
  let output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}

const FADE_OUT_DURATION = 1000;

const particleHeader = document.querySelector('.particleHeader');

particleHeader.addEventListener('click', (event) => {
  const particles = [];

  range(5).forEach(() => {
    const particle = document.createElement('span');

    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = FADE_OUT_DURATION + 'ms';

    particleHeader.appendChild(particle);

    particles.push(particle);
  });

  setTimeout(() => {
    particles.forEach((particle) => {
      particle.remove();
    });
  }, FADE_OUT_DURATION + 200);
});