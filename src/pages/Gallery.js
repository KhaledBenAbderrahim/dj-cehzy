import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images data
  const galleryImages = [
    {
      id: 1,
      src: '/assets/images/gallery-1.jpg',
      alt: 'DJ Chezy performing at a beach club',
      category: 'club'
    },
    {
      id: 2,
      src: '/assets/images/gallery-2.jpg',
      alt: 'DJ Chezy at a wedding reception',
      category: 'wedding'
    },
    {
      id: 3,
      src: '/assets/images/gallery-3.jpg',
      alt: 'Latino night at Club Havana',
      category: 'club'
    },
    {
      id: 4,
      src: '/assets/images/gallery-4.jpg',
      alt: 'Beach party in summer',
      category: 'festival'
    },
    {
      id: 5,
      src: '/assets/images/gallery-5.jpg',
      alt: 'Corporate event performance',
      category: 'corporate'
    },
    {
      id: 6,
      src: '/assets/images/gallery-6.jpg',
      alt: 'DJ setup with tropical decoration',
      category: 'setup'
    },
    {
      id: 7,
      src: '/assets/images/gallery-7.jpg',
      alt: 'Night club performance',
      category: 'club'
    },
    {
      id: 8,
      src: '/assets/images/gallery-8.jpg',
      alt: 'Salsa festival headliner',
      category: 'festival'
    },
    {
      id: 9,
      src: '/assets/images/gallery-9.jpg',
      alt: 'Private birthday party',
      category: 'private'
    },
    {
      id: 10,
      src: '/assets/images/gallery-10.jpg',
      alt: 'Beachfront DJ set',
      category: 'club'
    },
    {
      id: 11,
      src: '/assets/images/gallery-11.jpg',
      alt: 'Caribbean themed corporate event',
      category: 'corporate'
    },
    {
      id: 12,
      src: '/assets/images/gallery-12.jpg',
      alt: 'Wedding party dancing',
      category: 'wedding'
    }
  ];

  const [filter, setFilter] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  const filterGallery = (category) => {
    setFilter(category);
    setActiveCategory(category);
  };

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (imageId) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex - 1 < 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <section className="gallery-header">
        <div className="gallery-overlay"></div>
        <div className="tropical-decoration left"></div>
        <div className="tropical-decoration right"></div>
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Galerie
          </motion.h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-intro">
            <h2 className="section-title">Meine Performances</h2>
            <p className="section-description">
              Entdecken Sie Eindrücke von meinen Auftritten bei verschiedenen Events - von intimen Hochzeiten bis zu pulsierenden Clubnächten.
            </p>
          </div>
          
          <div className="gallery-filter">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => filterGallery('all')}
            >
              Alle
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'club' ? 'active' : ''}`}
              onClick={() => filterGallery('club')}
            >
              Clubs
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'wedding' ? 'active' : ''}`}
              onClick={() => filterGallery('wedding')}
            >
              Hochzeiten
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'festival' ? 'active' : ''}`}
              onClick={() => filterGallery('festival')}
            >
              Festivals
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'corporate' ? 'active' : ''}`}
              onClick={() => filterGallery('corporate')}
            >
              Firmenevents
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'private' ? 'active' : ''}`}
              onClick={() => filterGallery('private')}
            >
              Private Feiern
            </button>
          </div>
          
          <motion.div 
            className="gallery-grid"
            layout
          >
            {filteredImages.map((image) => (
              <motion.div 
                key={image.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(image.id)}
              >
                <div className="gallery-image-container">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="image-overlay">
                    <span>Ansehen</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <button className="close-lightbox" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          <div className="lightbox-content">
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>
              <FaChevronLeft />
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={selectedImageData.src} 
                alt={selectedImageData.alt} 
                className="lightbox-image" 
              />
              <div className="image-caption">{selectedImageData.alt}</div>
            </div>
            
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="video-section">
        <div className="wave-top"></div>
        <div className="wave-bottom"></div>
        <div className="container">
          <h2 className="section-title">Video Highlights</h2>
          <p className="section-description">
            Erleben Sie die Atmosphäre meiner Events in Bewegtbild
          </p>
          
          <div className="video-grid">
            <motion.div 
              className="video-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/VIDEO_ID_1" 
                  title="DJ Chezy at Summer Beach Festival" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3>Summer Beach Festival 2024</h3>
            </motion.div>
            
            <motion.div 
              className="video-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/VIDEO_ID_2" 
                  title="Latino Night Club Havana" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3>Latino Night at Club Havana</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="instagram-section">
        <div className="container">
          <h2 className="section-title">Instagram Feed</h2>
          <p className="section-description">
            Folgen Sie mir auf Instagram für tägliche Updates, Behind-the-Scenes und mehr
          </p>
          
          <div className="instagram-container">
            <div className="instagram-header">
              <div className="instagram-profile">
                <div className="profile-image"></div>
                <div className="profile-info">
                  <h3>@dj_chezy</h3>
                  <span>Folgen</span>
                </div>
              </div>
            </div>
            
            <div className="instagram-feed">
              {/* This would be replaced with an actual Instagram feed integration */}
              <div className="instagram-item">
                <img src="/assets/images/insta-1.jpg" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="/assets/images/insta-2.jpg" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="/assets/images/insta-3.jpg" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="/assets/images/insta-4.jpg" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="/assets/images/insta-5.jpg" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="/assets/images/insta-6.jpg" alt="Instagram post" />
              </div>
            </div>
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-link">
              Mehr auf Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
