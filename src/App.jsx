import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// ANIMASI & IKON MODERN
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Heart, Feather, MapPin, Phone, MessageCircle } from 'lucide-react';

// IMPORT LIBRARY AOS & CSS-NYA
import AOS from 'aos';
import 'aos/dist/aos.css';

import { servicesData, galleryImages, translations } from './data/content';

function App() {
  const [lang, setLang] = useState('en');
  const [selectedService, setSelectedService] = useState(null);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });

    // Simulasi loading gambar untuk Skeleton Screen
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* NAVBAR GLASSMORPHISM */}
      <nav className="navbar navbar-expand-lg py-2 sticky-top navbar-glassmorphism">
        <div className="container">
          <a className="navbar-brand text-center py-0" href="#home">
            <img src="/images/logo.png" onError={(e) => e.target.src="https://via.placeholder.com/150x60?text=OVI+LOGO"} alt="OVI Logo" style={{ height: '100px', objectFit: 'contain' }} />
          </a>

          {/* KONTROL MOBILE */}
          <div className="d-flex align-items-center gap-2 ms-auto order-lg-last me-2 me-lg-0">
            <div className="bg-white px-2 py-1 rounded-pill shadow-sm small fw-bold">
              <span className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-danger text-white' : 'text-muted'}`} onClick={() => setLang('en')} style={{ cursor: 'pointer' }}>EN</span>
              <span className="text-muted">|</span>
              <span className={`px-2 py-1 rounded ${lang === 'id' ? 'bg-danger text-white' : 'text-muted'}`} onClick={() => setLang('id')} style={{ cursor: 'pointer' }}>ID</span>
            </div>
            <a href="https://wa.me/6285238652587?text=Halo%20OVI%20Salon,%20saya%20ingin%20reservasi" target="_blank" rel="noreferrer" className="btn btn-custom btn-sm d-none d-lg-inline-flex gap-1">
              <MessageCircle size={16} /> {t.btn_book_wa}
            </a>
          </div>

          {/* HAMBURGER MENU */}
          <button 
            className="navbar-toggler border-0 p-2 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAVIGASI (COLLAPSE) */}
          <div className="collapse navbar-collapse justify-content-center text-center mt-3 mt-lg-0" id="navbarNav">
            <ul className="navbar-nav py-2 py-lg-0">
              <li className="nav-item"><a className="nav-link py-2" href="#home">{t.nav_home}</a></li>
              <li className="nav-item"><a className="nav-link py-2" href="#about">{t.nav_about}</a></li>
              <li className="nav-item"><a className="nav-link py-2" href="#services">{t.nav_services}</a></li>
              <li className="nav-item"><a className="nav-link py-2" href="#gallery">{t.nav_gallery}</a></li>
              <li className="nav-item"><a className="nav-link py-2" href="#contact">{t.nav_contact}</a></li>
            </ul>
            
            {/* Tombol WhatsApp */}
            <div className="d-lg-none mt-2 pb-3">
              <a href="https://wa.me/6285238652587?text=Halo%20OVI%20Salon,%20saya%20ingin%20reservasi" target="_blank" rel="noreferrer" className="btn btn-custom w-100 py-2 gap-2">
                <MessageCircle size={18} /> {t.btn_book_wa}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="position-relative py-5 d-flex align-items-center hero-section">
        <div className="container py-4 py-md-5">
          <div className="row">
            <div className="col-lg-7 col-md-9 col-12" data-aos="fade-up">
              <p className="text-uppercase fs-6 fw-medium tracking-widest text-muted mb-2" style={{ letterSpacing: '2px' }}>
                {t.hero_subtitle}
              </p>

              <h1 className="display-3 font-serif fw-normal mb-3 hero-title" style={{ lineHeight: '1.1' }}>
                {t.hero_title}
              </h1>

              <p className="fs-5 text-muted mb-4 leading-relaxed">
                {t.hero_desc}
              </p>

              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/6285238652587?text=Halo%20OVI%20Salon,%20saya%20ingin%20reservasi" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-custom fs-5 py-3 px-4 px-md-5 shadow me-3 d-inline-flex align-items-center gap-2"
              >
                <MessageCircle size={20} /> {t.btn_book_wa} &rarr;
              </motion.a>

              <p className="fs-6 text-muted mt-4 pt-2 mb-0 d-flex align-items-center gap-1">
                <MapPin size={18} className="text-danger" /> {t.hero_location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>
                {t.about_sub}
              </span>
              <h2 className="display-5 font-serif my-3">
                {t.about_title}
              </h2>
              <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '0 auto 20px' }}></div>
              <p className="fs-5 text-muted leading-relaxed mb-0">
                {t.about_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES CARDS SECTION */}
      <section id="services" className="py-5 my-3" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.services_sub}</span>
            <h2 className="display-5 font-serif mt-1">{t.services_title}</h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '15px auto 0' }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {servicesData.map((item, index) => (
              <div className="col-md-4" key={item.id} data-aos="fade-up" data-aos-delay={index * 150}>
                {!imagesLoaded ? (
                  <div className="skeleton shadow-sm h-100" style={{ height: '380px' }}></div>
                ) : (
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="card service-card card-hover-effect shadow-sm h-100 border-0" 
                    onClick={() => setSelectedService(item)}
                  >
                    <div className="service-card-img-wrapper overflow-hidden">
                      <img src={item.image} onError={(e) => e.target.src = item.fallbackImage} alt={item.category} />
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
                          style={{ 
                            width: '46px', 
                            height: '46px', 
                            backgroundColor: '#ffffff', 
                            color: 'var(--accent-color)' 
                          }}
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4" data-aos="fade-up">
            <div>
              <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.work_sub}</span>
              <h2 className="display-6 font-serif m-0">{t.work_title}</h2>
            </div>
            <button className="btn btn-link text-dark text-decoration-none fw-bold small p-0" onClick={() => setShowGalleryModal(true)}>
              {t.view_gallery} &rarr;
            </button>
          </div>

          <div className="row g-3">
            {galleryImages.slice(0, 8).map((img, index) => (
              <div className="col-6 col-md-3" key={img.id} data-aos="fade-up" data-aos-delay={(index % 4) * 100}>
                {!imagesLoaded ? (
                  <div className="skeleton rounded-4" style={{ height: '220px' }}></div>
                ) : (
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="gallery-item gallery-item-effect shadow-sm rounded-4 overflow-hidden" 
                    onClick={() => setPreviewImage(img)} 
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={img.src} className="img-fluid w-100" alt={img.title} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION RATING & REVIEWS GOOGLE */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container text-center">
          <div data-aos="fade-up">
            <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.review_sub}</span>
            <h2 className="display-6 font-serif mt-1 mb-3">{t.review_title}</h2>

            <div className="d-inline-flex align-items-center bg-white px-4 py-2 rounded-pill shadow-sm mb-4">
              <span className="fw-bold fs-4 me-2">5.0</span>
              <div className="text-warning me-2 fs-5">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <span className="text-muted small border-start ps-2">{t.reviewed_on} <i className="bi bi-google text-primary ms-1"></i> Google Maps</span>
            </div>
          </div>

          <div className="row g-4 text-start">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white p-4 h-100 shadow-sm rounded-3">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"Suka banget sama hasil eyelash dan nail-nya! 😍 Hasilnya cantik, rapi, dan sesuai harapan. Pelayanannya juga bagus dan stafnya ramah. Senang banget dengan hasilnya, bikin makin percaya diri. Recommended banget buat yang mau pasang eyelash dan nail di Lombok! 💅🏻✨❤️"</p>
                <div className="fw-bold small">— Yuliana Yustina</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-4 h-100 shadow-sm rounded-3">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"So happy & satisfied with my nails :) Even after almost 2 weeks, it still looks fresh. I asked for classic gel manicure. The ladies know their craft, everything was clean and comfortable. Thank you so much!"</p>
                <div className="fw-bold small">— A. Hermann</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white p-4 h-100 shadow-sm rounded-3">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"Blink and you would miss this little gem. So friendly, attention to detail is something else. Owner conversant in English and so courteous, had 2 girls, one for each hand. If in Kuta, lombok, give them a visit or booking. I wish them success in the future, I will be back."</p>
                <div className="fw-bold small">— Geoff Aubrey</div>
              </div>
            </div>
          </div>

          <div className="mt-4" data-aos="fade-up" data-aos-delay="400">
            <a href="https://maps.app.goo.gl/fCEPpsCo36EUN9ex5?g_st=iwb" target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm rounded-pill px-4">
              <i className="bi bi-google me-1"></i> {t.see_all_reviews} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT & INTERACTIVE GOOGLE MAPS SECTION */}
      <section id="contact" className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="shadow-sm overflow-hidden rounded-4" style={{ height: '350px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.71714930353!2d116.2750!3d-8.8920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dc2f5e3e218204b%3A0x88981665a31a986d!2sKuta%2C%20Pujut%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%2 Tenggara!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps OVI Salon">
                </iframe>
              </div>
            </div>

            <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
              <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.find_us}</span>
              <h2 className="display-6 font-serif mb-4">{t.visit_title}</h2>

              <div className="row g-4">
                <div className="col-md-6">
                  <h6 className="fw-bold mb-2 d-flex align-items-center gap-1"><MapPin size={18} className="text-danger" /> {t.loc_title}</h6>
                  <p className="small text-muted mb-2">Kuta, Pujut, Kabupaten Lombok Tengah, West Nusa Tenggara</p>
                  <a href="https://maps.app.goo.gl/fCEPpsCo36EUN9ex5?g_st=iwb" target="_blank" rel="noreferrer" className="small text-dark text-decoration-underline fw-bold">{t.get_directions} &rarr;</a>
                </div>

                <div className="col-md-6">
                  <h6 className="fw-bold mb-2 d-flex align-items-center gap-1"><Phone size={18} className="text-primary" /> {t.contact_admin}</h6>
                  <p className="small text-muted mb-2">+62 852-3865-2587</p>
                  <a href="https://wa.me/6285238652587?text=Halo%20OVI%20Salon,%20saya%20ingin%20reservasi" target="_blank" rel="noreferrer" className="small text-success text-decoration-none fw-bold d-inline-flex align-items-center gap-1">
                    <MessageCircle size={16} /> {t.chat_wa} &rarr;
                  </a>
                </div>

                <div className="col-md-12 pt-2">
                  <h6 className="fw-bold mb-3">{t.follow_us}</h6>
                  <div className="d-flex align-items-center gap-2">
                    <a href="https://instagram.com/ovi.eyelash" target="_blank" rel="noreferrer" className="social-link" title="Instagram @ovi.eyelash">
                      <i className="bi bi-instagram" style={{ color: '#E1306C' }}></i>
                    </a>
                    <a href="https://tiktok.com/@ovi.eyelash" target="_blank" rel="noreferrer" className="social-link" title="TikTok @ovi.eyelash">
                      <i className="bi bi-tiktok" style={{ color: '#000000' }}></i>
                    </a>
                    <a href="https://facebook.com/ovi.eyelash" target="_blank" rel="noreferrer" className="social-link" title="Facebook @ovi.eyelash">
                      <i className="bi bi-facebook" style={{ color: '#1877F2' }}></i>
                    </a>
                    <a href="https://wa.me/6285238652587" target="_blank" rel="noreferrer" className="social-link" title="WhatsApp Admin">
                      <i className="bi bi-whatsapp" style={{ color: '#25D366' }}></i>
                    </a>
                  </div>
                  <small className="text-muted d-block mt-2">{t.follow_desc}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DETAIL SERVICE DENGAN ANIMASI & GRID BARU */}
      <AnimatePresence>
        {selectedService && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="modal-content border-0 rounded-4 overflow-hidden shadow-lg" 
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div className="modal-header border-0 pb-0">
                  <h4 className="modal-title font-serif fs-2">{selectedService.modalTitle}</h4>
                  <button type="button" className="btn-close" onClick={() => setSelectedService(null)}></button>
                </div>
                <div className="modal-body p-4" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                  
                  {/* CALLUS CARE TREATMENT (JIKA ADA) */}
                  {selectedService.callusCare && (
                    <div className="p-3 bg-white shadow-sm mb-4 border-start border-4 border-dark rounded-3">
                      <span className="badge bg-dark mb-1">{selectedService.callusCare.badge}</span>
                      <h5 className="fw-bold font-serif fs-4 mb-2">{selectedService.callusCare.title}</h5>
                      <p className="small text-muted mb-3">{selectedService.callusCare.desc}</p>
                      <ul className="list-unstyled small mb-2">
                        {selectedService.callusCare.levels.map((lvl, idx) => (
                          <li className="d-flex justify-content-between py-1 border-bottom" key={idx}>
                            <span>{lvl.name}</span>
                            <strong>{lvl.price} {lvl.gelPrice && `(Gel: ${lvl.gelPrice})`}</strong>
                          </li>
                        ))}
                      </ul>
                      <small className="text-muted italic"><i className="bi bi-info-circle me-1"></i> "{selectedService.callusCare.note}"</small>
                    </div>
                  )}

                  {/* GRID KARTU KATEGORI */}
                  <div className="row g-3">
                    
                    {/* MANICURE */}
                    {selectedService.manicureServices && (
                      <div className="col-md-6">
                        <div className="p-3 bg-white shadow-sm h-100 rounded-3">
                          <h5 className="fw-bold font-serif fs-4 mb-3 border-bottom pb-2">Manicure</h5>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.manicureServices.map((item, idx) => (
                              <li className="py-2 border-bottom" key={idx}>
                                <div className="d-flex justify-content-between align-items-center fw-bold">
                                  <span>{item.name}</span>
                                  <span className="fs-6 text-dark">{item.price}</span>
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
                        <div className="p-3 bg-white shadow-sm h-100 rounded-3">
                          <h5 className="fw-bold font-serif fs-4 mb-3 border-bottom pb-2">Pedicure</h5>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.pedicureServices.map((item, idx) => (
                              <li className="py-2 border-bottom" key={idx}>
                                <div className="d-flex justify-content-between align-items-center fw-bold">
                                  <span>{item.name}</span>
                                  <span className="fs-6 text-dark">{item.price}</span>
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
                        <div className="p-3 bg-white shadow-sm h-100 rounded-3">
                          <h5 className="fw-bold font-serif fs-4 mb-3 border-bottom pb-2">Nail Art / Add On</h5>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.nailArt.map((art, idx) => (
                              <li className="d-flex justify-content-between py-1 border-bottom" key={idx}>
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
                        <div className="p-3 bg-white shadow-sm h-100 rounded-3">
                          <h5 className="fw-bold font-serif fs-4 mb-3 border-bottom pb-2">Removal Service</h5>
                          <ul className="list-unstyled small mb-0">
                            {selectedService.removals.map((rem, idx) => (
                              <li className="d-flex justify-content-between py-1 border-bottom" key={idx}>
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
                    <div className="p-3 bg-white shadow-sm rounded-3">
                      <h5 className="fw-bold font-serif fs-4 mb-3 border-bottom pb-2">Lash Sets</h5>
                      <ul className="list-unstyled small mb-0">
                        {selectedService.lashSets.map((lash, idx) => (
                          <li className="d-flex justify-content-between py-2 border-bottom" key={idx}>
                            <span><strong>{lash.name}</strong> <small className="d-block text-muted">Refill: {lash.refill}</small></span>
                            <strong className="fs-5">{lash.price}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* BROW ITEMS */}
                  {selectedService.browItems && (
                    <div className="row g-3">
                      {selectedService.browItems.map((brow, idx) => (
                        <div className="col-12" key={idx}>
                          <div className="p-3 bg-white shadow-sm rounded-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <h5 className="fw-bold font-serif mb-0">{brow.name}</h5>
                              <span className="fw-bold fs-5">{brow.price}</span>
                            </div>
                            <p className="small text-muted mb-0 mt-1">{brow.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <a href="https://wa.me/6285238652587?text=Halo%20OVI%20Salon,%20saya%20ingin%20reservasi" target="_blank" rel="noreferrer" className="btn-custom w-100 text-center mt-4 py-2 gap-2">
                    <MessageCircle size={18} /> {t.book_service_wa}
                  </a>
                </div>
                <div className="modal-footer border-0 pt-0">
                  <button type="button" className="btn btn-sm btn-secondary rounded-pill px-3" onClick={() => setSelectedService(null)}>{t.close}</button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL ALL GALLERY DENGAN ANIMASI */}
      <AnimatePresence>
        {showGalleryModal && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="modal-content border-0 rounded-4 overflow-hidden shadow-lg" 
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div className="modal-header border-0">
                  <h3 className="modal-title font-serif fs-2">{t.work_title}</h3>
                  <button type="button" className="btn-close" onClick={() => setShowGalleryModal(false)}></button>
                </div>
                <div className="modal-body p-4" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                  <div className="row g-3">
                    {galleryImages.map((img) => (
                      <div className="col-6 col-md-4 col-lg-3" key={img.id}>
                        <div className="gallery-item gallery-item-effect shadow-sm bg-white p-1 rounded-3 overflow-hidden" onClick={() => setPreviewImage(img)} style={{ cursor: 'pointer' }}>
                          <img src={img.src} className="img-fluid w-100" alt={img.title} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX PREVIEW MODAL DENGAN ANIMASI */}
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
                <img src={previewImage.src} className="img-fluid rounded shadow-lg" style={{ maxHeight: '80vh', objectFit: 'contain' }} alt={previewImage.title} />
                <p className="text-white mt-2 font-serif fs-4">{previewImage.title}</p>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-4 border-top mt-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-4 mb-3 mb-md-0">
              <small className="text-muted">&copy; 2026 OVI Eyelash & Nail Studio. All rights reserved.</small>
            </div>
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <img src="/images/logo.png" onError={(e) => e.target.src="https://via.placeholder.com/150x60?text=OVI+LOGO"} alt="OVI Studio Logo" style={{ height: '75px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <div className="col-md-4 text-center text-md-end">
              <span className="font-serif fs-5" style={{ fontStyle: 'italic' }}>See you soon ♡</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;