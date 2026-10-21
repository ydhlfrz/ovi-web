import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, ArrowRight, Grid, Image as ImageIcon } from 'lucide-react';

function Home({ t }) {
  return (
    <div>
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
                className="btn-custom fs-5 py-3 px-4 px-md-5 shadow me-3 d-inline-flex align-items-center gap-2 mb-3 mb-md-0"
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
              <h2 className="display-5 font-serif my-3">{t.about_title}</h2>
              <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '0 auto 20px' }}></div>
              <p className="fs-5 text-muted leading-relaxed mb-0">{t.about_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOMBOL NAVIGASI HALAMAN SERVICES & GALLERY */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container text-center py-3">
          <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>
            {t.explore_sub}
          </span>
          <h2 className="display-5 font-serif mt-1 mb-4">
            {t.explore_title}
          </h2>
          
          <div className="row g-4 justify-content-center mt-2">
            <div className="col-md-5" data-aos="fade-right">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between align-items-center">
                <div>
                  <Grid size={48} color="var(--accent-color)" className="mb-3" />
                  <h3 className="font-serif fs-2 mb-2">{t.card_services_title}</h3>
                  <p className="text-muted small mb-4">{t.card_services_desc}</p>
                </div>
                <Link to="/services" className="btn btn-custom w-100 py-3 d-inline-flex align-items-center justify-content-center gap-2">
                  {t.btn_view_services} <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between align-items-center">
                <div>
                  <ImageIcon size={48} color="var(--accent-color)" className="mb-3" />
                  <h3 className="font-serif fs-2 mb-2">{t.card_gallery_title}</h3>
                  <p className="text-muted small mb-4">{t.card_gallery_desc}</p>
                </div>
                <Link to="/gallery" className="btn btn-outline-dark rounded-pill w-100 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2">
                  {t.btn_view_gallery_all} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION RATING & REVIEWS GOOGLE */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <div data-aos="fade-up">
            <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>{t.review_sub}</span>
            <h2 className="display-6 font-serif mt-1 mb-3">{t.review_title}</h2>

            <div className="d-inline-flex align-items-center bg-white px-4 py-2 rounded-pill shadow-sm mb-4">
              <span className="fw-bold fs-4 me-2">5.0</span>
              <div className="text-warning me-2 fs-5">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
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
                <p className="small text-muted fst-italic">"Suka banget sama hasil eyelash dan nail-nya! 😍 Hasilnya cantik, rapi, dan sesuai harapan. Recommended banget!"</p>
                <div className="fw-bold small">— Yuliana Yustina</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-4 h-100 shadow-sm rounded-3">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"So happy & satisfied with my nails :) Even after almost 2 weeks, it still looks fresh. Thank you so much!"</p>
                <div className="fw-bold small">— A. Hermann</div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white p-4 h-100 shadow-sm rounded-3">
                <div className="text-warning mb-2">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="small text-muted fst-italic">"Blink and you would miss this little gem. So friendly, attention to detail is something else. If in Kuta, lombok, give them a visit."</p>
                <div className="fw-bold small">— Geoff Aubrey</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="shadow-sm overflow-hidden rounded-4" style={{ height: '350px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.71714930353!2d116.2750!3d-8.8920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dc2f5e3e218204b%3A0x88981665a31a986d!2sKuta%2C%20Pujut%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%2 Tenggara!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps OVI Salon">
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

                {/* SOCIAL MEDIA SECTION */}
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
    </div>
  );
}

export default Home;