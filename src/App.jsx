import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Research />
          <Contact />
          <Team />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;