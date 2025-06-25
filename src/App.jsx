// App.jsx — Final working version for GitHub Pages with Vite

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Play from './pages/Play';
import TouchMe from './games/touchme/TouchMe';
import MemoryGame from './games/memory/MemoryGame';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/mahak">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/touchme" element={<TouchMe />} />
        <Route path="/memorygame" element={<MemoryGame />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;