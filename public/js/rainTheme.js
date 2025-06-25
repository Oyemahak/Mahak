// rainTheme.js — ⚡ Rainstorm Time
export function initRainTheme() {
  createRain();       // 🌧️
  createLightning();  // ⚡
  setupLightningHover(); // ⛈️
}

function createRain() {
  for (let i = 0; i < 60; i++) {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.top = `${Math.random() * -100}px`;
    raindrop.style.height = `${10 + Math.random() * 20}px`;
    raindrop.style.animationDuration = `${1 + Math.random() * 1.5}s`;
    document.body.appendChild(raindrop);

    // Add ripple effect after raindrop reaches the ground
    if (i % 5 === 0) {
      setTimeout(() => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${parseFloat(raindrop.style.left) - 10}px`;
        ripple.style.top = '90vh';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        document.body.appendChild(ripple);
      }, parseFloat(raindrop.style.animationDuration) * 1000 * 0.9);
    }
  }
}

function createLightning() {
  const lightning = document.createElement('div');
  lightning.className = 'lightning';
  document.body.appendChild(lightning);
}

function setupLightningHover() {
  const resumeBtn = document.querySelector('.resume-button');
  const lightning = document.querySelector('.lightning');

  if (!resumeBtn || !lightning) return;

  resumeBtn.addEventListener('mouseenter', () => {
    lightning.style.opacity = '0.9';
    lightning.style.transition = 'none';
    setTimeout(() => {
      lightning.style.opacity = '0';
      lightning.style.transition = 'opacity 0.3s';
    }, 50);
    setTimeout(() => {
      lightning.style.opacity = '0.6';
      lightning.style.transition = 'none';
      setTimeout(() => {
        lightning.style.opacity = '0';
        lightning.style.transition = 'opacity 0.3s';
      }, 100);
    }, 200);
  });
}