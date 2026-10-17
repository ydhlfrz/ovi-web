import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { servicesData, galleryImages, translations } from './data/content';

function App() {
  const [lang, setLang] = useState('en');
  const [selectedService, setSelectedService] = useState(null);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const t = translations[lang];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg py-2 sticky-top" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <a className="navbar-brand text-center py-0" href="#home">
            <img src="/images/logo.png" onError={(e) => e.target.src="https://via.placeholder.com/150x60?text=OVI+LOGO"} alt="OVI Logo" style={{ height: '120px', objectFit: 'contain' }} />
          </a>

          {/* KONTROL MOBILE */}
          <div className="d-flex align-items-center gap-2 ms-auto order-lg-last me-2 me-lg-0">
            <div className="bg-white px-2 py-1 rounded-pill shadow-sm small fw-bold">
              <span className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-danger text-white' : 'text-muted'}`} onClick={() => setLang('en')} style={{ cursor: 'pointer' }}>EN</span>
              <span className="text-muted">|</span>
              <span className={`px-2 py-1 rounded ${lang === 'id' ? 'bg-danger text-white' : 'text-muted'}`} onClick={() => setLang('id')} style={{ cursor: 'pointer' }}>ID</span>
            </div>
            <a href="https://wa.me/6285238652587" target="_blank" rel="noreferrer" className="btn btn-custom btn-sm d-none d-lg-inline-block">
              <i className="bi bi-whatsapp me-1"></i> {t.btn_book_wa}
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
              <a href="https://wa.me/6285238652587" target="_blank" rel="noreferrer" className="btn btn-custom w-100 py-2">
                <i className="bi bi-whatsapp me-2"></i> {t.btn_book_wa}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION DENGAN RESPONSIF GAMBAR HP */}
      <section id="home" className="position-relative py-5 d-flex align-items-center hero-section" style={{
        minHeight: '85vh',
        background: `linear-gradient(to right, rgba(250, 244, 246, 0.95) 0%, rgba(250, 244, 246, 0.85) 50%, rgba(250, 244, 246, 0.4) 100%), url('/images/hero-bg.png') center right/cover no-repeat`
      }}>
        <div className="container py-4 py-md-5">
          <div className="row">
            <div className="col-lg-7 col-md-9 col-12">
              <p className="text-uppercase fs-6 fw-medium tracking-widest text-muted mb-2" style={{ letterSpacing: '2px' }}>
                {t.hero_subtitle}
              </p>

              <h1 className="display-3 font-serif fw-normal mb-3 hero-title" style={{ lineHeight: '1.1' }}>
                {t.hero_title}
              </h1>

              <p className="fs-5 text-muted mb-4 leading-relaxed">
                {t.hero_desc}
              </p>

              <a href="https://wa.me/6285238652587" target="_blank" rel="noreferrer" className="btn-custom fs-5 py-3 px-4 px-md-5 shadow me-3 d-inline-block">
                <i className="bi bi-whatsapp me-2"></i> {t.btn_book_wa} &rarr;
              </a>

              <p className="fs-6 text-muted mt-4 pt-2 mb-0">
                <i className="bi bi-geo-alt-fill me-1 text-danger"></i> {t.hero_location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-5">
        <div className="container py-4">
          <div className="row align-items-center mb-5">
            <div className="col-md-5 mb-4 mb-md-0">
              <img src="/images/about-studio.png" onError={(e) => e.target.src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800"} className="img-fluid w-100 shadow-sm" alt="Studio" />
            </div>
            <div className="col-md-7 ps-md-5">
              <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.about_sub}</span>
              <h2 className="display-5 font-serif my-3">{t.about_title}</h2>
              <p className="text-muted leading-relaxed mb-4">{t.about_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES CARDS SECTION */}
      <section id="services" className="py-5 my-3" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.services_sub}</span>
            <h2 className="display-5 font-serif mt-1">{t.services_title}</h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '15px auto 0' }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {servicesData.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card service-card shadow-sm h-100" onClick={() => setSelectedService(item)}>
                  <div className="service-card-img-wrapper">
                    <img src={item.image} onError={(e) => e.target.src = item.fallbackImage} alt={item.category} />
                    <div className="service-card-overlay">
                      <span className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm" style={{ letterSpacing: '1px' }}>
                        {t.see_details} &rarr;
                      </span>
                    </div>
                  </div>
                  <div className="card-body text-center py-4">
                    <h3 className="font-serif fs-3 mb-1">{item.category}</h3>
                    <p className="small text-muted mb-0">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION (DENGAN EFEK HOVER) */}
      <section id="gallery" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.work_sub}</span>
              <h2 className="display-6 font-serif m-0">{t.work_title}</h2>
            </div>
            <button className="btn btn-link text-dark text-decoration-none fw-bold small p-0" onClick={() => setShowGalleryModal(true)}>
              {t.view_gallery} &rarr;
            </button>
          </div>

          <div className="row g-3">
            {galleryImages.slice(0, 8).map((img) => (
              <div className="col-6 col-md-3" key={img.id}>
                <div className="gallery-item shadow-sm" onClick={() => setPreviewImage(img)}>
                  <img src={img.src} className="img-fluid" alt={img.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION RATING & REVIEWS GOOGLE */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container text-center">
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

          <div className="row g-4 text-start">
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 shadow-sm rounded-0">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"Suka banget sama hasil eyelash dan nail-nya! 😍 Hasilnya cantik, rapi, dan sesuai harapan. Pelayanannya juga bagus dan stafnya ramah. Senang banget dengan hasilnya, bikin makin percaya diri. Recommended banget buat yang mau pasang eyelash dan nail di Lombok! 💅🏻✨❤️"</p>
                <div className="fw-bold small">— Yuliana Yustina</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 shadow-sm rounded-0">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"So happy & satisfied with my nails :) Even after almost 2 weeks, it still looks fresh. I asked for classic gel manicure. The ladies know their craft, everything was clean and comfortable. Thank you so much!"</p>
                <div className="fw-bold small">— A. Hermann</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 shadow-sm rounded-0">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"Blink and you would miss this little gem. So friendly, attention to detail is something else. Owner conversant in English and so courteous, had 2 girls, one for each hand. If in Kuta, lombok, give them a visit or booking. I wish them success in the future, I will be back."</p>
                <div className="fw-bold small">— Geoff Aubrey</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a href="https://maps.app.goo.gl/fCEPpsCo36EUN9ex5?g_st=iwb" target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm rounded-pill px-4">
              <i className="bi bi-google me-1"></i> {t.see_all_reviews} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT & INTERACTIVE GOOGLE MAPS SECTION */}
      <section id="contact" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="shadow-sm overflow-hidden" style={{ borderRadius: '4px', height: '350px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.71714930353!2d116.2750!3d-8.8920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dc2f5e3e218204b%3A0x88981665a31a986d!2sKuta%2C%20Pujut%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%2 Tenggara!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps OVI Studio">
                </iframe>
              </div>
            </div>

            <div className="col-lg-6 ps-lg-5">
              <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.find_us}</span>
              <h2 className="display-6 font-serif mb-4">{t.visit_title}</h2>

              <div className="row g-4">
                <div className="col-md-6">
                  <h6 className="fw-bold mb-2"><i className="bi bi-geo-alt me-1 text-danger"></i> {t.loc_title}</h6>
                  <p className="small text-muted mb-2">Kuta, Pujut, Kabupaten Lombok Tengah, West Nusa Tenggara</p>
                  <a href="https://maps.app.goo.gl/fCEPpsCo36EUN9ex5?g_st=iwb" target="_blank" rel="noreferrer" className="small text-dark text-decoration-underline fw-bold">{t.get_directions} &rarr;</a>
                </div>

                <div className="col-md-6">
                  <h6 className="fw-bold mb-2"><i className="bi bi-phone me-1 text-primary"></i> {t.contact_admin}</h6>
                  <p className="small text-muted mb-2">+62 852-3865-2587</p>
                  <a href="https://wa.me/6285238652587?text=Halo%20Admin%20OVI%20Studio,%20saya%20ingin%20bertanya" target="_blank" rel="noreferrer" className="small text-success text-decoration-none fw-bold">
                    <i className="bi bi-whatsapp me-1"></i> {t.chat_wa} &rarr;
                  </a>
                </div>

                <div className="col-md-12 pt-2">
                  <h6 className="fw-bold mb-3"><i className="bi bi-share me-1 text-secondary"></i> {t.follow_us}</h6>
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

      {/* MODAL DETAIL SERVICE */}
      {selectedService && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 rounded-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div className="modal-header border-0 pb-0">
                <h4 className="modal-title font-serif fs-2">{selectedService.modalTitle}</h4>
                <button type="button" className="btn-close" onClick={() => setSelectedService(null)}></button>
              </div>
              <div className="modal-body p-4" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {selectedService.callusCare && (
                  <div className="p-3 bg-white shadow-sm mb-4 border-start border-4 border-dark">
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

                {selectedService.nailArt && (
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="p-3 bg-white shadow-sm h-100">
                        <h5 className="fw-bold font-serif fs-4 mb-3">Nail Art / Add On</h5>
                        <ul className="list-unstyled small mb-0">
                          {selectedService.nailArt.map((art, idx) => (
                            <li className="d-flex justify-content-between py-1 border-bottom" key={idx}>
                              <span>{art.name}</span><strong>{art.price}</strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-white shadow-sm h-100">
                        <h5 className="fw-bold font-serif fs-4 mb-3">Removal Service</h5>
                        <ul className="list-unstyled small mb-0">
                          {selectedService.removals.map((rem, idx) => (
                            <li className="d-flex justify-content-between py-1 border-bottom" key={idx}>
                              <span>{rem.name}</span><strong>{rem.price}</strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedService.lashSets && (
                  <div className="p-3 bg-white shadow-sm">
                    <h5 className="fw-bold font-serif fs-4 mb-3">Lash Sets</h5>
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

                {selectedService.browItems && (
                  <div className="row g-3">
                    {selectedService.browItems.map((brow, idx) => (
                      <div className="col-12" key={idx}>
                        <div className="p-3 bg-white shadow-sm">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold font-serif mb-0">{brow.name}</h5>
                            <span className="fw-bold fs-5">{brow.price}</span>
                          </div>
                          <p className="small text-muted mb-0">{brow.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <a href="https://wa.me/6285238652587" target="_blank" rel="noreferrer" className="btn-custom w-100 text-center mt-4 py-2">
                  <i className="bi bi-whatsapp me-1"></i> {t.book_service_wa}
                </a>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-sm btn-secondary rounded-pill px-3" onClick={() => setSelectedService(null)}>{t.close}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ALL GALLERY (DENGAN EFEK HOVER) */}
      {showGalleryModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content border-0 rounded-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div className="modal-header border-0">
                <h3 className="modal-title font-serif fs-2">{t.work_title}</h3>
                <button type="button" className="btn-close" onClick={() => setShowGalleryModal(false)}></button>
              </div>
              <div className="modal-body p-4" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                <div className="row g-3">
                  {galleryImages.map((img) => (
                    <div className="col-6 col-md-4 col-lg-3" key={img.id}>
                      <div className="gallery-item shadow-sm bg-white p-1" onClick={() => setPreviewImage(img)}>
                        <img src={img.src} className="img-fluid" alt={img.title} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX PREVIEW MODAL */}
      {previewImage && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} onClick={() => setPreviewImage(null)}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0 text-center">
              <img src={previewImage.src} className="img-fluid rounded shadow-lg" style={{ maxHeight: '80vh', objectFit: 'contain' }} alt={previewImage.title} />
              <p className="text-white mt-2 font-serif fs-4">{previewImage.title}</p>
            </div>
          </div>
        </div>
      )}

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