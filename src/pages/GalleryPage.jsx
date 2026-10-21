import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/content';

function GalleryPage({ t }) {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="py-5" style={{ minHeight: '80vh', backgroundColor: 'var(--bg-secondary)' }}>
      
      {/* Dynamic SEO Metadata */}
      <Helmet>
        <title>Client Portfolio & Gallery | OVI Eyelash & Nail Studio Lombok</title>
        <meta name="description" content="Explore real treatment results from OVI Studio Kuta Lombok. Browse our portfolio of Eyelash Extensions, Korean Lashlift, and Gel Nail Art." />
        <link rel="canonical" href="https://ovieyelash.com/gallery" />
      </Helmet>

      <div className="container py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.work_sub}</span>
          <h2 className="display-4 font-serif mt-1">{t.work_title}</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '15px auto 0' }}></div>
        </div>

        <div className="row g-3">
          {galleryImages.map((img, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={img.id} data-aos="fade-up" data-aos-delay={(index % 4) * 80}>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="gallery-item gallery-item-effect shadow-sm bg-white p-1 rounded-4 overflow-hidden" 
                onClick={() => setPreviewImage(img)} 
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={img.src} 
                  className="img-fluid w-100" 
                  alt={img.title || `OVI Eyelash & Nail Studio Portfolio Kuta Lombok - Work ${img.id}`} 
                  style={{ height: '260px', objectFit: 'cover' }} 
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX PREVIEW */}
      <AnimatePresence>
        {previewImage && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} onClick={() => setPreviewImage(null)}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="modal-content bg-transparent border-0 text-center"
              >
                <img 
                  src={previewImage.src} 
                  className="img-fluid rounded shadow-lg" 
                  style={{ maxHeight: '80vh', objectFit: 'contain' }} 
                  alt={previewImage.title || `OVI Eyelash & Nail Studio Portfolio Kuta Lombok - Full View`} 
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryPage;