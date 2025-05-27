import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import '../styles/Music.css';

const Music = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (trackId) => {
    if (activeTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(trackId);
      setIsPlaying(true);
    }
  };

  // Sample tracks data
  const tracks = [
    {
      id: 1,
      title: 'Bachata Sensation Mix',
      genre: 'Bachata',
      duration: '4:32',
      cover: '/assets/images/track-bachata.jpg'
    },
    {
      id: 2,
      title: 'Salsa Night',
      genre: 'Salsa',
      duration: '5:15',
      cover: '/assets/images/track-salsa.jpg'
    },
    {
      id: 3,
      title: 'Reggaeton Summer Hits',
      genre: 'Reggaeton',
      duration: '3:48',
      cover: '/assets/images/track-reggaeton.jpg'
    },
    {
      id: 4,
      title: 'Latin Urban Mix',
      genre: 'Urban Latin',
      duration: '4:10',
      cover: '/assets/images/track-urban.jpg'
    },
    {
      id: 5,
      title: 'Old School Latino Classics',
      genre: 'Old School',
      duration: '6:22',
      cover: '/assets/images/track-oldschool.jpg'
    },
    {
      id: 6,
      title: 'Dominican Vibes',
      genre: 'Merengue',
      duration: '3:55',
      cover: '/assets/images/track-merengue.jpg'
    }
  ];

  // Sample upcoming events
  const events = [
    {
      id: 1,
      name: 'Latino Night',
      date: '15. Juni 2025',
      location: 'Club Havana, Berlin',
      time: '22:00 - 04:00',
      description: 'Eine heiße Nacht mit den besten lateinamerikanischen Rhythmen. DJ Chezy bringt die authentischen Sounds der Karibik nach Berlin.',
      image: '/assets/images/event-club.jpg',
      ticket: 'https://tickets.example.com'
    },
    {
      id: 2,
      name: 'Salsa & Bachata Festival',
      date: '28. - 30. Juli 2025',
      location: 'Kulturhalle, Hamburg',
      time: 'Ganztägig',
      description: 'Das größte Salsa & Bachata Festival in Norddeutschland mit internationalen Künstlern und DJs. DJ Chezy wird am Samstag ab 21:00 Uhr auflegen.',
      image: '/assets/images/event-festival.jpg',
      ticket: 'https://tickets.example.com'
    },
    {
      id: 3,
      name: 'Karibische Nacht am Strand',
      date: '12. August 2025',
      location: 'Strandbar Mitte, Berlin',
      time: '20:00 - 02:00',
      description: 'Erleben Sie einen tropischen Abend mit karibischen Rhythmen, exotischen Cocktails und Strandatmosphäre. DJ Chezy sorgt für die perfekte Sommerstimmung.',
      image: '/assets/images/event-beach.jpg',
      ticket: 'https://tickets.example.com'
    }
  ];

  return (
    <div className="music-page">
      {/* Header Section */}
      <section className="music-header">
        <div className="music-overlay"></div>
        <div className="tropical-decoration left"></div>
        <div className="tropical-decoration right"></div>
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Musik & Events
          </motion.h1>
        </div>
      </section>

      {/* Music Player Section */}
      <section className="music-player-section">
        <div className="container">
          <h2 className="section-title">Meine Mixes</h2>
          <p className="section-description">
            Erleben Sie einen Vorgeschmack auf die energiegeladenen Sets von DJ Chezy. Von Salsa über Bachata bis hin zu Reggaeton - hier bekommen Sie einen Eindruck meines vielseitigen Musikstils.
          </p>
          
          <div className="tracks-container">
            {tracks.map((track) => (
              <motion.div 
                key={track.id}
                className={`track-card ${activeTrack === track.id && isPlaying ? 'playing' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: track.id * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="track-cover" style={{ backgroundImage: `url(${track.cover})` }}>
                  <div className="track-overlay"></div>
                  <button 
                    className="play-button"
                    onClick={() => togglePlay(track.id)}
                  >
                    {activeTrack === track.id && isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                </div>
                <div className="track-info">
                  <h3>{track.title}</h3>
                  <div className="track-details">
                    <span className="track-genre">{track.genre}</span>
                    <span className="track-duration">{track.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="music-platforms">
            <h3>Folgen Sie mir auf Musikplattformen</h3>
            <div className="platform-links">
              <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="platform-link soundcloud">
                SoundCloud
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="platform-link spotify">
                Spotify
              </a>
              <a href="https://mixcloud.com" target="_blank" rel="noopener noreferrer" className="platform-link mixcloud">
                Mixcloud
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-calendar-section">
        <div className="wave-top"></div>
        <div className="wave-bottom"></div>
        <div className="container">
          <h2 className="section-title">Kommende Events</h2>
          <p className="section-description">
            Hier finden Sie meine nächsten Auftritte. Kommen Sie vorbei und erleben Sie die einzigartige Atmosphäre einer DJ Chezy Performance!
          </p>
          
          <div className="events-list">
            {events.map((event) => (
              <motion.div 
                key={event.id}
                className="event-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: event.id * 0.2 }}
              >
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="event-overlay"></div>
                </div>
                <div className="event-content">
                  <div className="event-date">
                    <FaCalendarAlt className="event-icon" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="event-name">{event.name}</h3>
                  <div className="event-location">
                    <FaMapMarkerAlt className="event-icon" />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-time">{event.time}</div>
                  <p className="event-description">{event.description}</p>
                  <a href={event.ticket} target="_blank" rel="noopener noreferrer" className="event-ticket">
                    <FaTicketAlt className="ticket-icon" />
                    Tickets Kaufen
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section">
        <div className="palm-leaves"></div>
        <div className="container">
          <div className="booking-content">
            <motion.div 
              className="booking-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Buchen Sie DJ Chezy für Ihr Event</h2>
              <p>
                Suchen Sie nach dem perfekten DJ für Ihre Hochzeit, Firmenfeier, Club-Nacht oder private Party? DJ Chezy bringt die authentischen Rhythmen der Karibik zu Ihrer Veranstaltung!
              </p>
              <ul className="booking-features">
                <li>Professionelle Ausrüstung in Studioqualität</li>
                <li>Maßgeschneiderte Playlists für Ihr Event</li>
                <li>Umfangreiche Musikbibliothek mit weltweiten Hits</li>
                <li>Mehrsprachiger MC-Service (Deutsch, Spanisch, Englisch)</li>
                <li>Flexible Anpassung an Ihre Wünsche und Zeitplan</li>
              </ul>
              <div className="booking-cta">
                <a href="/contact" className="btn btn-primary pulse">
                  Jetzt Anfrage senden
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="booking-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="dj-performance-image"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;
