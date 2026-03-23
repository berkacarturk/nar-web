import './Navbar.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const handleNavHome = (hash) => {
    setAboutOpen(false);
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <img src="/narLogo.svg" alt="NAR" className="logo-img" />
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavHome('hero'); }}>{t('navbar.home')}</a></li>
            <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavHome('about'); }}>{t('navbar.about')}</a></li>
            <li className="has-dropdown" ref={dropdownRef}>
              <button
                className="dropdown-trigger"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                {t('navbar.infrastructure')}
                <span className={`dropdown-arrow ${aboutOpen ? 'open' : ''}`}>▾</span>
              </button>
              <ul className={`dropdown-menu ${aboutOpen ? 'show' : ''}`}>
                <li><Link to="/room/hangar" onClick={() => setAboutOpen(false)}>{t('navbar.infraSubs.hangar')}</Link></li>
                <li><Link to="/room/laboratory" onClick={() => setAboutOpen(false)}>{t('navbar.infraSubs.laboratory')}</Link></li>
                <li><Link to="/room/experiment" onClick={() => setAboutOpen(false)}>{t('navbar.infraSubs.experimentRoom')}</Link></li>
                <li><Link to="/room/control" onClick={() => setAboutOpen(false)}>{t('navbar.infraSubs.controlRoom')}</Link></li>
              </ul>
            </li>
            <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavHome('research'); }}>{t('navbar.research')}</a></li>
            <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavHome('contact'); }}>{t('navbar.contact')}</a></li>
            <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavHome('team'); }}>{t('navbar.team')}</a></li>
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
