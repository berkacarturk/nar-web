import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-text">
                        <h2 className="section-title">{t('about.title')}</h2>
                        <h3>{t('about.subtitle')}</h3>

                        <h4>{t('about.aboutUsTitle')}</h4>
                        <p className="about-description">
                            {t('about.aboutUsText')}
                        </p>

                        <h4>{t('about.visionTitle')}</h4>
                        <p className="about-description">
                            {t('about.visionText')}
                        </p>

                        <h4>{t('about.goalsTitle')}</h4>
                        <ul className="goals-list">
                            {t('about.goals').map((goal, index) => (
                                <li key={index}>{goal}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-visual">
                        <div className="visual-card">
                            <div className="card-icon">☢️</div>
                            <h3>{t('about.cards.NuclearDetectors')}</h3>
                        </div>
                        <div className="visual-card card-offset">
                            <div className="card-icon">🤖</div>
                            <h3>{t('about.cards.Robotics')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
