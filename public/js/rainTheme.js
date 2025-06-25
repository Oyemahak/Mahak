// rainTheme.js — FINAL FIXED VERSION ⚡🌧️
export function initRainTheme() {
  createRain();
  createLightningLayer();
  setupLightningHoverRepeater(); // trigger binding persistently
}

function createRain() {
  // Remove old raindrops
  document.querySelectorAll('.raindrop, .ripple').forEach(el => el.remove());

  for (let i = 0; i < 120; i++) { // doubled the density
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.top = `${Math.random() * -100}px`;
    drop.style.height = `${10 + Math.random() * 20}px`;
    drop.style.animationDuration = `${1 + Math.random() * 1.5}s`;
    document.body.appendChild(drop);

    if (i % 6 === 0) {
      setTimeout(() => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${parseFloat(drop.style.left) - 10}px`;
        ripple.style.top = '90vh';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1500);
      }, parseFloat(drop.style.animationDuration) * 900);
    }
  }
}

function createLightningLayer() {
  // Create a lightning layer if it doesn't exist
  if (!document.querySelector('.lightning')) {
    const flash = document.createElement('div');
    flash.className = 'lightning';
    document.body.appendChild(flash);
  }
}

function setupLightningHoverRepeater() {
  const observer = new MutationObserver(() => bindLightningToButtons());
  observer.observe(document.body, { childList: true, subtree: true });
  bindLightningToButtons(); // also do an initial bind
}

function bindLightningToButtons() {
  const buttons = document.querySelectorAll('.resume-button');
  const lightning = document.querySelector('.lightning');

  if (!lightning) return;

  buttons.forEach(btn => {
    if (!btn.dataset.lightningBound) {
      btn.dataset.lightningBound = 'true';
      btn.addEventListener('mouseenter', () => flashLightning(lightning));
    }
  });
}

function flashLightning(layer) {
  layer.style.transition = 'none';
  layer.style.opacity = '1';
  requestAnimationFrame(() => {
    layer.style.transition = 'opacity 0.3s ease';
    layer.style.opacity = '0';
  });

  setTimeout(() => {
    layer.style.transition = 'none';
    layer.style.opacity = '0.6';
    requestAnimationFrame(() => {
      layer.style.transition = 'opacity 0.4s ease';
      layer.style.opacity = '0';
    });
  }, 250);
}