// rainTheme.js — ⚡ Rainstorm Time (Final Fixed Version)
export function initRainTheme() {
  createRain();
  createLightning();
  setupLightningHoverAll(); // apply to all buttons
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
        setTimeout(() => ripple.remove(), 1500);
      }, parseFloat(raindrop.style.animationDuration) * 900);
    }
  }
}

function createLightning() {
  // Remove existing to avoid duplicates
  const existing = document.querySelector('.lightning');
  if (existing) existing.remove();

  const lightning = document.createElement('div');
  lightning.className = 'lightning';
  document.body.appendChild(lightning);
}

function setupLightningHoverAll() {
  const buttons = document.querySelectorAll('.resume-button');
  const lightning = document.querySelector('.lightning');

  if (!buttons.length || !lightning) return;

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      // Flash ON
      lightning.style.opacity = '0.9';
      lightning.style.transition = 'none';
      requestAnimationFrame(() => {
        lightning.style.opacity = '0';
        lightning.style.transition = 'opacity 0.2s';
      });

      // Flash AGAIN shortly after
      setTimeout(() => {
        lightning.style.opacity = '0.6';
        lightning.style.transition = 'none';
        requestAnimationFrame(() => {
          lightning.style.opacity = '0';
          lightning.style.transition = 'opacity 0.3s';
        });
      }, 200);
    });
  });
}