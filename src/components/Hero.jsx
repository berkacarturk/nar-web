import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Content Layer */}
            <div className="container hero-content">

                <h1 className="hero-title">
                    Nükleer Algılayıcılar ve robotik Uyg. <br />
                    <span className="text-gradient">Arş. Merkezi</span>
                </h1>
                <p className="hero-subtitle">
                
                </p>
                <div className="hero-buttons">
                    <a href="#research" className="btn btn-primary">Projelerimizi İnceleyin</a>
                    <a href="#contact" className="btn btn-outline">İletişime Geçin</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
