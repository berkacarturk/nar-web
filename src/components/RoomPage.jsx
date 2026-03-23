import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './RoomPage.css';

const roomData = {
    hangar: {
        images: [
            '/images/hangar-1.jpg',
            '/images/hangar-2.jpg',
            '/images/hangar-3.jpg',
        ],
    },
    laboratory: {
        images: [
            '/images/lab-1.jpg',
            '/images/lab-2.jpg',
            '/images/lab-3.jpg',
        ],
    },
    experiment: {
        images: [
            '/images/experiment-1.jpg',
            '/images/experiment-2.jpg',
            '/images/experiment-3.jpg',
        ],
    },
    control: {
        images: [
            '/images/control-1.jpg',
            '/images/control-2.jpg',
            '/images/control-3.jpg',
        ],
    },
};

const translationKeys = {
    hangar: { title: 'about.hangarTitle', text: 'about.hangarText', navKey: 'navbar.aboutSubs.hangar' },
    laboratory: { title: 'about.labTitle', text: 'about.labText', navKey: 'navbar.aboutSubs.laboratory' },
    experiment: { title: 'about.experimentTitle', text: 'about.experimentText', navKey: 'navbar.aboutSubs.experimentRoom' },
    control: { title: 'about.controlTitle', text: 'about.controlText', navKey: 'navbar.aboutSubs.controlRoom' },
};

const RoomPage = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const { t } = useLanguage();

    const room = roomData[roomId];
    const keys = translationKeys[roomId];

    if (!room || !keys) {
        return (
            <div className="room-page">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        ← {t('room.backToHome')}
                    </button>
                    <h1>404 — Not Found</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="room-page">
            <div className="room-hero">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        ← {t('room.backToHome')}
                    </button>
                    <h1 className="room-title">{t(keys.title)}</h1>
                </div>
            </div>

            <div className="container room-content">
                <div className="room-description">
                    <p>{t(keys.text)}</p>
                </div>

                <div className="room-gallery">
                    {room.images.map((src, index) => (
                        <div key={index} className="room-gallery-item">
                            <img
                                src={src}
                                alt={`${t(keys.title)} - ${index + 1}`}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="room-placeholder" style={{ display: 'none' }}>
                                <span>📷</span>
                                <p>{t(keys.title)} — {t('room.photo')} {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomPage;
