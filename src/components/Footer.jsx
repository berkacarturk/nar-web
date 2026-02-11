import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <span className="logo-text">NAR</span>
                    <p>© 2024 Nükleer Algılayıcılar ve Robotik Merkezi</p>
                </div>
                <div className="footer-links">
                    <a href="#">Gizlilik Politikası</a>
                    <a href="#">Kullanım Şartları</a>
                </div>
            </div>
          </footer>
    );
};

export default Footer;
