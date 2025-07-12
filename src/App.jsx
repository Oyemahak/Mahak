import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// 🌐 Core Pages
import Home from './pages/Home';
import Play from './pages/Play';
import About from './pages/About';

// 🎨 UX Case Study Pages
import Byblos from './pages/projects/Byblos';
import CitiBank from './pages/projects/CitiBank';
import Accenture from './pages/projects/Accenture';
import AmazonPrime from './pages/projects/AmazonPrime';

// 🛠️ Web Dev Project Pages
import Qronster from './pages/projects/Qronster';
import SchoolSystem from './pages/projects/SchoolSystem';
import OyeClicker from './pages/projects/OyeClicker';
import DazzlingSmile from './pages/projects/DazzlingSmile';
import AdminCMS from './pages/projects/AdminCMS';
import VibeCoding from './pages/projects/VibeCoding';

// 🎮 Mini-Games
import TouchMe from './games/touchme/TouchMe';
import MemoryGame from "./games/memory/MemoryGame";
import ClickRush from './games/clickrush/ClickRush';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* 🌐 Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />

        {/* 🎨 UX Case Study Routes */}
        <Route path="/byblos" element={<Byblos />} />
        <Route path="/citi" element={<CitiBank />} />
        <Route path="/accenture" element={<Accenture />} />
        <Route path="/amazonprime" element={<AmazonPrime />} />

        {/* 🛠️ Web Dev Project Routes */}
        <Route path="/qronster" element={<Qronster />} />
        <Route path="/schoolsystem" element={<SchoolSystem />} />
        <Route path="/oyeclicker" element={<OyeClicker />} />
        <Route path="/dazzlingsmile" element={<DazzlingSmile />} />
        <Route path="/admincms" element={<AdminCMS />} />
        <Route path="/vibecoding" element={<VibeCoding />} />

        {/* 🎮 Mini-Game Routes */}
        <Route path="/touchme" element={<TouchMe />} />
        <Route path="/memorygame" element={<MemoryGame />} />
        <Route path="/clickrush" element={<ClickRush />} />
      </Routes>
    </>
  );
}

export default App;