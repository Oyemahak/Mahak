// main.jsx — The Launchpad 🚀
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// 🧼 Global styles first!
import './styles/global.css';

// ✨ Theme base + interactions
import './styles/theme-switcher.css';

// 🌙 Glowing stars & cosmic vibes
import './styles/moon-theme.css';

// ❄️ Flakes, frost, and frozen focus rings
import './styles/snow-theme.css';

// 🌧️ Raindrops & lightning drama
import './styles/rain-theme.css';

import './styles/theme-effects.css';
import './styles/projects.css';
import './styles/webProjects.css';

// ✅ Theme & interaction scripts for rain, moon, snow, etc.
import './js/main.js';

// 🌍 Set basename only for GitHub Pages
const isGitHubPages = import.meta.env.BASE_URL !== '/';
const baseName = isGitHubPages ? '/mahak' : '';

// 🌟 Render the app!
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={baseName}>
    <App />
  </BrowserRouter>
);