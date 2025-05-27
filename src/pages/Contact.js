import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaMusic, FaCheck } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a backend server
    // This is just a simulation for demonstration purposes
    
    // Simulate successful form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Vielen Dank für Ihre Anfrage! DJ Chezy wird sich in Kürze bei Ihnen melden.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      location: '',
      message: ''
    });
    
    // Scroll to top of form to show success message
    document.querySelector('.booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="contact-overlay"></div>
        <div className="tropical-decoration left"></div>
        <div className="tropical-decoration right"></div>
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kontakt
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-flex">
            <motion.div 
              className="contact-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Lass uns in Kontakt treten</h2>
              <p className="section-description">
                Haben Sie Fragen oder möchten Sie DJ Chezy für Ihr Event buchen? Füllen Sie das Formular aus oder kontaktieren Sie mich direkt über einen der folgenden Kanäle.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-details">
                    <h3>Telefon</h3>
                    <p>+49 123 456789</p>
                    <span>Montag - Freitag, 10:00 - 18:00 Uhr</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>info@djchezy.com</p>
                    <span>Antwort innerhalb von 24 Stunden</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-details">
                    <h3>Standort</h3>
                    <p>Berlin, Deutschland</p>
                    <span>Verfügbar für Events in ganz Deutschland & Europa</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Social Media</h3>
                <p>Folgen Sie mir für Updates und Behind-the-Scenes</p>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">FB</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">IG</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">YT</a>
                  <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="social-icon soundcloud">SC</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="form-header">
                <div className="form-icon">
                  <FaCalendarAlt />
                </div>
                <h2>Booking Anfrage</h2>
              </div>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  <FaCheck className="message-icon" />
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Ihr vollständiger Name" 
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Ihre Email-Adresse" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Ihre Telefonnummer" 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventType">Event-Typ *</label>
                    <select 
                      id="eventType" 
                      name="eventType" 
                      value={formData.eventType} 
                      onChange={handleChange} 
                      required
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="wedding">Hochzeit</option>
                      <option value="corporate">Firmenveranstaltung</option>
                      <option value="club">Club / Bar</option>
                      <option value="festival">Festival</option>
                      <option value="birthday">Geburtstag</option>
                      <option value="private">Andere private Feier</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="eventDate">Event-Datum *</label>
                    <input 
                      type="date" 
                      id="eventDate" 
                      name="eventDate" 
                      value={formData.eventDate} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Veranstaltungsort *</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="Stadt oder genaue Adresse" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Ihre Nachricht *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Teilen Sie Details zu Ihrem Event mit (Uhrzeit, Anzahl der Gäste, Musikwünsche, etc.)" 
                    rows="5" 
                    required 
                  ></textarea>
                </div>
                
                <div className="form-footer">
                  <button type="submit" className="submit-btn">
                    <FaMusic className="btn-icon" />
                    Anfrage Senden
                  </button>
                  <p className="form-note">* Pflichtfelder</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="wave-top"></div>
        <div className="container">
          <h2 className="section-title">Mein Einzugsgebiet</h2>
          <p className="section-description">
            Mit Basis in Berlin bin ich in ganz Deutschland und darüber hinaus verfügbar. Reisekosten werden individuell besprochen.
          </p>
          
          <div className="map-container">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="map-placeholder">
              <div className="map-overlay">
                <div className="map-pin">
                  <FaMapMarkerAlt className="pin-icon" />
                  <span>Berlin</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="location-info">
            <div className="location-card">
              <h3>Verfügbarkeit</h3>
              <ul className="location-list">
                <li>Berlin & Brandenburg</li>
                <li>Hamburg & Umgebung</li>
                <li>München & Umgebung</li>
                <li>Köln, Düsseldorf & das Ruhrgebiet</li>
                <li>Frankfurt & Umgebung</li>
                <li>Weitere Städte auf Anfrage</li>
              </ul>
            </div>
            
            <div className="location-card">
              <h3>Internationale Bookings</h3>
              <p>
                Als DJ mit internationaler Erfahrung stehe ich auch für Events außerhalb Deutschlands zur Verfügung. Reise- und Unterkunftskosten werden individuell besprochen.
              </p>
              <a href="mailto:international@djchezy.com" className="international-link">
                Internationale Anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Häufig gestellte Fragen</h2>
          
          <div className="faq-grid">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3>Wie weit im Voraus sollte ich buchen?</h3>
              <p>
                Für Hochzeiten und große Events empfehle ich eine Buchung mindestens 6-12 Monate im Voraus. Für kleinere Veranstaltungen genügen in der Regel 2-3 Monate. Bei kurzfristigen Anfragen lohnt es sich trotzdem anzufragen - ich helfe gerne, wenn ich kann!
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3>Wie läuft die Bezahlung ab?</h3>
              <p>
                Nach der Buchungsbestätigung wird eine Anzahlung von 30% fällig. Der Restbetrag ist spätestens 14 Tage vor dem Event zu begleichen. Die Zahlungsmöglichkeiten besprechen wir individuell.
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3>Bringen Sie Ihre eigene Ausrüstung mit?</h3>
              <p>
                Ja, ich bringe mein professionelles DJ-Equipment mit. Für größere Veranstaltungen arbeite ich mit zuverlässigen Partnern für Sound- und Lichttechnik zusammen. Die genauen technischen Details klären wir in der Planungsphase.
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3>Kann ich eine Wunschliste erstellen?</h3>
              <p>
                Absolut! Ich freue mich über Ihre Musikwünsche und erstelle gerne eine maßgeschneiderte Playlist für Ihr Event. Nach der Buchung erhalten Sie ein Formular, in dem Sie Ihre Lieblingssongs und No-Gos eintragen können.
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3>Wie lange spielen Sie auf einem Event?</h3>
              <p>
                Die Standard-Buchung umfasst 5 Stunden. Längere Spielzeiten sind nach Absprache möglich. Für Hochzeiten biete ich auch spezielle Pakete an, die den ganzen Tag abdecken können.
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3>Können Sie auch als MC fungieren?</h3>
              <p>
                Ja, ich kann Ankündigungen und Moderationen in Deutsch, Spanisch und Englisch übernehmen. Dies ist besonders bei Hochzeiten und Firmenfeiern beliebt, um den Ablauf zu koordinieren.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
