import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import RoomPage from './components/RoomPage';
import { LanguageProvider } from './context/LanguageContext';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Contact />
      <Team />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/room/:roomId" element={<RoomPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;