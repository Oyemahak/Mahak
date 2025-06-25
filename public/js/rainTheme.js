// rainTheme.js — ⚡ Rainstorm Time
export function initRainTheme() {
  createRain();       // 🌧️
  createLightning();  // ⚡
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