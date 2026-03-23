import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Research.css';

const workAreas = [
    {

        titleTr: "Yeni robot sistemlerinin tasarlanması",
        titleEn: "Designing new robot systems.",
        descTr: "Yüksek radyasyon ortamlarında çalışabilen gelişmiş algılayıcı sistemleri tasarımı, üretimi ve testleri.",
        descEn: "Design, production and testing of advanced detector systems capable of operating in high radiation environments.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
    },
    {

        titleTr: "Mevcut robot sistemlerinin incelenmesi",
        titleEn: "Examining the existing robot systems.",
        descTr: "Otonom ve yarı-otonom robotik platformların araştırma, geliştirme ve entegrasyon çalışmaları.",
        descEn: "Research, development and integration of autonomous and semi-autonomous robotic platforms.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },{

        titleTr: "Sürü robot sistemlerinin incelenmesi",
        titleEn: "Designing swarm robot systems.",
        descTr: "Otonom ve yarı-otonom robotik platformların araştırma, geliştirme ve entegrasyon çalışmaları.",
        descEn: "Research, development and integration of autonomous and semi-autonomous robotic platforms.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {

        titleTr: "Otonom robot sistemlerinin tasarlanması.",
        titleEn: "Designing autonomous robot systems.",
        descTr: "Nükleer dedektörlerde kullanılan sintilatör kristallerin büyütülmesi ve karakterizasyonu.",
        descEn: "Growth and characterization of scintillator crystals used in nuclear detectors.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {

        titleTr: "Medikal robot uygulamaları.",
        titleEn: "Medical robotics applications.",
        descTr: "Çevresel izleme ve endüstriyel uygulamalar için ileri sensör sistemlerinin geliştirilmesi.",
        descEn: "Development of advanced sensor systems for environmental monitoring and industrial applications.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {

        titleTr: "Sektörel robot uygulamaları ve eğitimleri",
        titleEn: "Sectoral robotics applications and trainings.",
        descTr: "Yapay zeka ve makine öğrenmesi tabanlı akıllı kontrol ve karar destek sistemleri.",
        descEn: "AI and machine learning based intelligent control and decision support systems.",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop"
    },
    {
 
        titleTr: "Özel denetleyici ve tasarım uygulamaları",
        titleEn: "Special controller design and applications.",
        descTr: "Radyasyon ölçümü, dozimetri ve radyasyondan korunma alanlarında temel ve uygulamalı araştırmalar.",
        descEn: "Fundamental and applied research in radiation measurement, dosimetry and radiation protection.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop"
    },
    {
 
        titleTr: "Yeni nükleer algılayıcı teknolojilerinin geliştirilmesi ve uygulanması.",
        titleEn: "Development and application of new nuclear detector technologies.",
        descTr: "",
        descEn: "",
        image: ""
    },
    {
 
        titleTr:"Nükleer atıkların karakterizasyonu için yeni kuşak sistemlerin geliştirilmesi.",
        titleEn: "Development of new generation systems for characterizations of nuclear waste.",
        descTr: "",
        descEn: "",
        image: ""
    },
    {
 
        titleTr: "Nükleer atıkların deteksiyonu ve etiketlendirilmesi için sistemler geliştirilmesi.",
        titleEn: "Developing systems for detection and labelling of nuclear waste.",
        descTr: "",
        descEn: "",
        image: ""
    },
    {
 
        titleTr: "Uzaktan komutalı veya otonom nitelikte nükleer algılayıcı sualtı/su üstü/kara/hava robotlarının geliştirilmesi.",
        titleEn: "Development of remote controlled or autonomous nuclear detector. underwater/above water/land/air robots.",
        descTr: "",
        descEn: "",
        image: ""
    },
    {
 
        titleTr: "Otonom radyoaktivite tespit ve takip sistemlerinin geliştirilmesi ve uygulanması",
        titleEn: "Development and application of autonomous radioactivity detection and tracking systems.",
        descTr: "",
        descEn: "",
        image: ""
    },
    {
 
        titleTr: "mal gays",
        titleEn: "Development and application of autonomous radioactivity detection and tracking systems.",
        descTr: "",
        descEn: "",
        image: ""
    }
    
];

const Research = () => {
    const { language } = useLanguage();
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener('scroll', checkScroll, { passive: true });
        window.addEventListener('resize', checkScroll);
        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.querySelector('.wa-card')?.offsetWidth || 340;
        el.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
    };

    const isTr = language === 'tr';

    return (
        <section id="research" className="research-section">
            {/* Banner */}
            <div className="research-banner">
                <div className="research-banner-overlay" />
                <h2 className="research-banner-title">
                    {isTr ? 'Çalışma Alanları' : 'Work Areas'}
                </h2>
            </div>

            {/* Gallery */}
            <div className="wa-gallery-wrapper">
                {canScrollLeft && (
                    <button className="wa-arrow wa-arrow-left" onClick={() => scroll(-1)} aria-label="Scroll left">
                        ‹
                    </button>
                )}
                <div className="wa-gallery" ref={scrollRef}>
                    {workAreas.map((area, i) => (
                        <div key={i} className="wa-card">
                            <div className="wa-card-image" style={{ backgroundImage: `url(${area.image})` }}>
                            </div>
                            <div className="wa-card-body">
                                <h3 className="wa-card-title">{isTr ? area.titleTr : area.titleEn}</h3>
                                <p className="wa-card-desc">{isTr ? area.descTr : area.descEn}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {canScrollRight && (
                    <button className="wa-arrow wa-arrow-right" onClick={() => scroll(1)} aria-label="Scroll right">
                        ›
                    </button>
                )}
            </div>
        </section>
    );
};

export default Research;
