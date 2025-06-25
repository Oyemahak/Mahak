// rainTheme.js — FINAL VERSION ⚡ Steady Rain + Perfect Lightning
export function initRainTheme() {
  createRain();              // consistent rain
  createLightningLayer();    // single reusable flash layer
  setupLightningHoverRepeater(); // attach hover logic to all buttons
}

function createRain() {
  // Clear existing rain
  document.querySelectorAll('.raindrop, .ripple').forEach(el => el.remove());

  // Create consistent raindrops
  for (let i = 0; i < 120; i++) {
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
      }, parseFloat(drop.style.animationDuration) * 900);
    }
  }
}

function createLightningLayer() {
  if (!document.querySelector('.lightning')) {
    const flash = document.createElement('div');
    flash.className = 'lightning';
    document.body.appendChild(flash);
  }
}

function setupLightningHoverRepeater() {
  const observer = new MutationObserver(() => bindLightningToButtons());
  observer.observe(document.body, { childList: true, subtree: true });
  bindLightningToButtons();
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
  const flashes = [0, 120, 240, 420]; // realistic flash pattern
  flashes.forEach((delay, i) => {
    setTimeout(() => {
      layer.style.transition = 'none';
      layer.style.opacity = i % 2 === 0 ? '1' : '0.5';
      requestAnimationFrame(() => {
        layer.style.transition = 'opacity 0.3s ease';
        layer.style.opacity = '0';
      });
    }, delay);
  });
}