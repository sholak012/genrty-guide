import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Protocol from './pages/Protocol';
import Style from './pages/Style';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 30);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#152018] flex flex-col items-center justify-center z-[9999]">
        <div className="text-center animate-fade-in-up">
          <div className="mb-6 mx-auto w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center rotate-45">
            <span className="text-[#d4af37] font-serif text-xl -rotate-45 font-bold">G</span>
          </div>
          <h1 className="text-white font-serif text-2xl md:text-3xl font-bold tracking-[0.3em] mb-2">GENTRY GUIDE</h1>
          <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.4em] opacity-80 mb-8">Est. 2025</p>
        </div>
        <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-[#d4af37] transition-all duration-100 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-gentle-light dark:bg-[#0b110c] text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <Routes>
        {/* Публичный маршрут /admin без Navbar */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* Все остальные маршруты — с Navbar */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/protocol" element={<Protocol />} />
              <Route path="/style" element={<Style />} />
            </Routes>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;