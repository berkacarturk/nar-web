import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Mesajınız alındı! Teşekkürler.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">İletişim</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Bizimle İletişime Geçin</h3>
                        <p></p>

                        <div className="info-item">
                            <span className="icon">📍</span>
                            <p>Teknoloji Geliştirme Bölgesi, İstanbul/Türkiye</p>
                        </div>
                        <div className="info-item">
                            <span className="icon">✉️</span>
                            <p>nar@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <span className="icon">📞</span>
                            <p>+90 (000) 000 00 00</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Adınız Soyadınız"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="E-posta Adresiniz"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Mesajınız"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Gönder</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
