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

const particleHeader = document.querySelector('.particleHeader');

particleHeader.addEventListener('click', (event) => {

  range(5).forEach(() => {
    const particle = document.createElement('span');

    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    particleHeader.appendChild(particle);
  });
});