import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Team.css';

const Team = () => {
    const { t } = useLanguage();
    // Fallback to empty array if translations aren't ready yet to prevent crash
    const teamMembers = t('team.members') || [];
    // If t returns the key string because it's missing, handle that
    const members = Array.isArray(teamMembers) ? teamMembers : [];

    return (
        <section id="team" className="section team-section">
            <div className="container">
                <h2 className="section-title">{t('team.title')}</h2>
                <div className="team-grid">
                    {members.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="member-image-container">
                                <div className="member-image-placeholder">
                                    {/* Placeholder for actual image */}
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
