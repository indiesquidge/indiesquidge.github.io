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
const MAGNITUDE = 48;

const particleHeader = document.querySelector('.particleHeader');

particleHeader.addEventListener('click', (event) => {
  const particles = [];

  range(5).forEach(() => {
    const particle = document.createElement('span');

    const xSign = Math.random() < 0.5 ? -1 : 1;
    const ySign = Math.random() < 0.5 ? -1 : 1;
    const x = Math.random() * MAGNITUDE * xSign;
    const y = Math.random() * MAGNITUDE * ySign;

    particle.classList.add('particle');
    particle.style.transform = `translate(${x}px, ${y}px)`;
    particle.style.setProperty('--fade-duration', FADE_OUT_DURATION + 'ms');

    particleHeader.appendChild(particle);

    particles.push(particle);
  });

  setTimeout(() => {
    particles.forEach((particle) => {
      particle.remove();
    });
  }, FADE_OUT_DURATION + 200);
});