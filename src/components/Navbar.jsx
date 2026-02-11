import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo">
          NAR
          <div className="logo-dot"></div>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#hero">{t('navbar.home')}</a></li>
            <li><a href="#about">{t('navbar.about')}</a></li>
            <li><a href="#research">{t('navbar.research')}</a></li>
            <li><a href="#contact">{t('navbar.contact')} </a></li>
            <li><a href="#team">{t('navbar.team')} </a></li>
          </ul>
          <button className="lang-btn" onClick={toggleLanguage}>
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
