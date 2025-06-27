import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Play from './pages/Play';
import About from './pages/About';
import Byblos from './pages/projects/Byblos';
// import CitiBank from './pages/projects/CitiBank';
// import Accenture from './pages/projects/Accenture';
// import AmazonPrime from './pages/projects/AmazonPrime';

// 🎮 Mini-games
import TouchMe from './games/touchme/TouchMe';
import MemoryGame from "./games/memory/MemoryGame";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* 🌐 Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />

        {/* 🔸 Project Pages (One by One as Separate Files) */}
        <Route path="/byblos" element={<Byblos />} />
        {/* <Route path="/citi" element={<CitiBank />} />
        <Route path="/accenture" element={<Accenture />} />
        <Route path="/amazonprime" element={<AmazonPrime />} /> */}
        
        {/* 🎮 Mini-Game Routes */}
        <Route path="/touchme" element={<TouchMe />} />
        <Route path="/memorygame" element={<MemoryGame />} />
      </Routes>
    </>
  );
}

export default App;