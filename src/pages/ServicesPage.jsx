import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowLeft, Clock } from 'lucide-react';
import { servicesData } from '../data/content';

function ServicesPage({ t }) {
  const [selectedService, setSelectedService] = useState(null);

  const getWhatsAppLink = (categoryName) => {
    const textMessage = `Halo OVI Salon, saya ingin reservasi untuk layanan ${categoryName}`;
    return `https://wa.me/6285238652587?text=${encodeURIComponent(textMessage)}`;
  };

  const handleImgError = (e, fallback) => {
    e.target.onerror = null;
    e.target.src = fallback || "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800";
  };

  return (
    <div className="py-5" style={{ minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container py-4">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>
            {t.services_sub}
          </span>
          <h2 className="display-4 font-serif mt-1">{t.services_title}</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '15px auto 0' }}></div>
        </div>

        <AnimatePresence mode="wait">
          {!selectedService ? (
            /* DAFTAR KARTU UTAMA */
            <motion.div 
              key="services-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="row g-4 justify-content-center"
            >
              {servicesData.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="card service-card card-hover-effect shadow-sm h-100 border-0" 
                    onClick={() => setSelectedService(item)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="service-card-img-wrapper overflow-hidden position-relative">
                      <img 
                        src={item.image} 
                        onError={(e) => handleImgError(e, item.fallbackImage)} 
                        alt={item.category} 
                        className="w-100"
                      />
                      <div className="service-card-overlay">
                        <span className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm" style={{ letterSpacing: '1px' }}>
                          {t.see_details} &rarr;
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body py-4 px-4 text-start">
                      <div className="d-flex align-items-center gap-3">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                          style={{ width: '46px', height: '46px', backgroundColor: '#ffffff', color: 'var(--accent-color)' }}
                        >
                          <i className={`bi ${item.icon || 'bi-stars'} fs-4`}></i>
                        </div>
                        <div>
                          <h3 className="font-serif fs-4 mb-1 text-dark">{item.category}</h3>
                          <p className="small text-muted mb-0">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          ) : (
            
            /* DETAIL SERVICE INLINE */
            <motion.div
              key="service-detail"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="row justify-content-center"
            >
              <div className="col-lg-10">
                <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 border-0 position-relative">
                  
                  {/* HEADER & BUTTON CLOSE */}
                  <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                    <div>
                      <button 
                        onClick={() => setSelectedService(null)} 
                        className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 mb-2 fw-bold"
                      >
                        <ArrowLeft size={16} /> {t.close}
                      </button>
                      <h3 className="font-serif display-6 mb-0 text-dark">{selectedService.modalTitle}</h3>
                    </div>
                    <button 
                      type="button" 
                      className="btn-close fs-5 p-2" 
                      onClick={() => setSelectedService(null)}
                      aria-label="Close"
                    ></button>
                  </div>

                  {/* CALLUS CARE TREATMENT */}
                  {selectedService.callusCare && (
                    <div className="p-3 p-md-4 bg-light shadow-sm mb-4 border-start border-4 border-dark rounded-3 position-relative">
                      <div className="d-flex justify-content-between align-items-start gap-3">
                        <div>
                          <span className="badge bg-dark mb-1">{selectedService.callusCare.badge}</span>
                          <h4 className="fw-bold font-serif fs-3 mb-2">{selectedService.callusCare.title}</h4>
                        </div>
                        <img 
                          src={selectedService.callusThumb || "/images/gallery-7.png"} 
                          onError={(e) => handleImgError(e, selectedService.fallbackImage)}
                          alt="Callus Care" 
                          className="rounded-3 shadow-sm object-fit-cover border border-2 border-white flex-shrink-0"
                          style={{ width: '100px', height: '70px', borderRadius: '12px' }}
                        />
                      </div>
                      <p className="small text-muted mb-3">{selectedService.callusCare.desc}</p>
                      <ul className="list-unstyled small mb-2">
                        {selectedService.callusCare.levels.map((lvl, idx) => (
                          <li className="d-flex justify-content-between py-2 border-bottom" key={idx}>
                            <span>{lvl.name}</span>
                            <strong>{lvl.price} {lvl.gelPrice && `(Gel: ${lvl.gelPrice})`}</strong>
                          </li>
                        ))}
                      </ul>
                      <small className="text-muted fst-italic"><i className="bi bi-info-circle me-1"></i> "{selectedService.callusCare.note}"</small>
                    </div>
                  )}

                  {/* GRID KATEGORI LAYANAN NAIL */}
                  <div className="row g-4">
                    {/* MANICURE */}
                    {selectedService.manicureServices && (
                      <div className="col-md-6">
                        <div className="p-3 p-md-4 bg-light shadow-sm h-100 rounded-3">
                          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h5 className="fw-bold font-serif fs-4 mb-0">Manicure</h5>
                            <img 
                              src={selectedService.manicureThumb || selectedService.image} 
                              onError={(e) => handleImgError(e, selectedService.fallbackImage)}
                              alt="Manicure" 
                              className="rounded-3 shadow-sm object-fit-cover border border-2 border-white flex-shrink-0"
                              style={{ width: '100px', height: '70px', borderRadius: '12px' }}
                            />
                          </div>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.manicureServices.map((item, idx) => (
                              <li className="py-2 border-bottom" key={idx}>
                                <div className="d-flex justify-content-between align-items-center fw-bold">
                                  <div>
                                    <span>{item.name}</span>
                                    {item.duration && (
                                      <span className="badge bg-white text-muted border ms-2 fw-normal">
                                        <Clock size={12} className="me-1" />{item.duration}
                                      </span>
                                    )}
                                  </div>
                                  <span className="fs-6 text-dark ms-2">{item.price}</span>
                                </div>
                                {item.desc && <p className="small text-muted mb-0 mt-1">{item.desc}</p>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* PEDICURE */}
                    {selectedService.pedicureServices && (
                      <div className="col-md-6">
                        <div className="p-3 p-md-4 bg-light shadow-sm h-100 rounded-3">
                          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h5 className="fw-bold font-serif fs-4 mb-0">Pedicure</h5>
                            <img 
                              src={selectedService.pedicureThumb || "/images/gallery-6.png"} 
                              onError={(e) => handleImgError(e, selectedService.fallbackImage)}
                              alt="Pedicure" 
                              className="rounded-3 shadow-sm object-fit-cover border border-2 border-white flex-shrink-0"
                              style={{ width: '100px', height: '70px', borderRadius: '12px' }}
                            />
                          </div>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.pedicureServices.map((item, idx) => (
                              <li className="py-2 border-bottom" key={idx}>
                                <div className="d-flex justify-content-between align-items-center fw-bold">
                                  <div>
                                    <span>{item.name}</span>
                                    {item.duration && (
                                      <span className="badge bg-white text-muted border ms-2 fw-normal">
                                        <Clock size={12} className="me-1" />{item.duration}
                                      </span>
                                    )}
                                  </div>
                                  <span className="fs-6 text-dark ms-2">{item.price}</span>
                                </div>
                                {item.desc && <p className="small text-muted mb-0 mt-1">{item.desc}</p>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* NAIL ART / ADD ON */}
                    {selectedService.nailArt && (
                      <div className="col-md-6">
                        <div className="p-3 p-md-4 bg-light shadow-sm h-100 rounded-3">
                          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h5 className="fw-bold font-serif fs-4 mb-0">Nail Art / Add On</h5>
                            <img 
                              src={selectedService.nailArtThumb || "/images/gallery-3.png"} 
                              onError={(e) => handleImgError(e, selectedService.fallbackImage)}
                              alt="Nail Art" 
                              className="rounded-3 shadow-sm object-fit-cover border border-2 border-white flex-shrink-0"
                              style={{ width: '100px', height: '70px', borderRadius: '12px' }}
                            />
                          </div>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.nailArt.map((art, idx) => (
                              <li className="d-flex justify-content-between py-2 border-bottom" key={idx}>
                                <span>{art.name}</span><strong>{art.price}</strong>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* REMOVAL SERVICE */}
                    {selectedService.removals && (
                      <div className="col-md-6">
                        <div className="p-3 p-md-4 bg-light shadow-sm h-100 rounded-3">
                          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h5 className="fw-bold font-serif fs-4 mb-0">Removal Service</h5>
                            <img 
                              src={selectedService.removalThumb || "/images/gallery-10.jpeg"} 
                              onError={(e) => handleImgError(e, selectedService.fallbackImage)}
                              alt="Removal Service" 
                              className="rounded-3 shadow-sm object-fit-cover border border-2 border-white flex-shrink-0"
                              style={{ width: '100px', height: '70px', borderRadius: '12px' }}
                            />
                          </div>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.removals.map((rem, idx) => (
                              <li className="d-flex justify-content-between py-2 border-bottom" key={idx}>
                                <span>{rem.name}</span><strong>{rem.price}</strong>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* LASH SETS */}
                  {selectedService.lashSets && (
                    <div className="p-3 p-md-4 bg-light shadow-sm rounded-3 mt-3">
                      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                        <h5 className="fw-bold font-serif fs-4 mb-0">Lash Sets</h5>
                        <img 
                          src={selectedService.lashSetsThumb || selectedService.image} 
                          onError={(e) => handleImgError(e, selectedService.fallbackImage)}
                          alt="Lash Sets" 
                          className="rounded-3 shadow-sm object-fit-cover border border-2 border-white flex-shrink-0"
                          style={{ width: '100px', height: '70px', borderRadius: '12px' }}
                        />
                      </div>
                      <ul className="list-unstyled small mb-0">
                        {selectedService.lashSets.map((lash, idx) => (
                          <li className="d-flex justify-content-between py-2 border-bottom" key={idx}>
                            <div>
                              <strong>{lash.name}</strong> 
                              {lash.duration && (
                                <span className="badge bg-white text-muted border ms-2 fw-normal">
                                  <Clock size={12} className="me-1" />{lash.duration}
                                </span>
                              )}
                              <small className="d-block text-muted">Refill: {lash.refill}</small>
                            </div>
                            <strong className="fs-5">{lash.price}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* BROW ITEMS */}
                  {selectedService.browItems && (
                    <div className="row g-3 mt-1">
                      <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                        <h5 className="fw-bold font-serif fs-4 mb-0">Brow & Lashlift Treatments</h5>
                        <img 
                          src={selectedService.browItemsThumb || selectedService.image} 
                          onError={(e) => handleImgError(e, selectedService.fallbackImage)}
                          alt="Brow Treatments" 
                          className="rounded-3 shadow-sm object-fit-cover border border-2 border-white flex-shrink-0"
                          style={{ width: '100px', height: '70px', borderRadius: '12px' }}
                        />
                      </div>
                      {selectedService.browItems.map((brow, idx) => (
                        <div className="col-12" key={idx}>
                          <div className="p-3 p-md-4 bg-light shadow-sm rounded-3 d-flex justify-content-between align-items-start gap-3">
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center gap-2 mb-1">
                                <h5 className="fw-bold font-serif mb-0">{brow.name}</h5>
                                {brow.duration && (
                                  <span className="badge bg-white text-muted border fw-normal">
                                    <Clock size={12} className="me-1" />{brow.duration}
                                  </span>
                                )}
                              </div>
                              <p className="small text-muted mb-0">{brow.desc}</p>
                            </div>
                            <div className="d-flex align-items-center gap-3 flex-shrink-0">
                              <span className="fw-bold fs-5">{brow.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ACTION BUTTONS */}
                  <div className="d-flex flex-column flex-md-row gap-3 mt-5 pt-3 border-top">
                    <button 
                      onClick={() => setSelectedService(null)} 
                      className="btn btn-outline-dark rounded-pill py-2 px-4 fw-bold order-2 order-md-1"
                    >
                      <ArrowLeft size={18} className="me-1" /> {t.close}
                    </button>
                    <a 
                      href={getWhatsAppLink(selectedService.category)} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-custom py-2 px-4 text-center d-flex align-items-center justify-content-center gap-2 flex-grow-1 order-1 order-md-2"
                    >
                      <MessageCircle size={18} /> {t.book_service_wa} ({selectedService.category})
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default ServicesPage;