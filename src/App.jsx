import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Play from './pages/Play';
import About from './pages/About';

// 🎮 Mini-games
import TouchMe from './games/touchme/TouchMe';
import MemoryGame from "./games/memory/MemoryGame";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        
        {/* 🎮 Mini-Game Routes */}
        <Route path="/touchme" element={<TouchMe />} />
        <Route path="/memorygame" element={<MemoryGame />} />
      </Routes>
    </>
  );
}

export default App;