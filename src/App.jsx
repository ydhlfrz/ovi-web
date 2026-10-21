import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import { MessageCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import { translations } from './data/content';

// Scroll otomatis ke atas saat ganti halaman
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState('en');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div>
        {/* NAVBAR GLASSMORPHISM */}
        <nav className="navbar navbar-expand-lg py-2 sticky-top navbar-glassmorphism">
          <div className="container">
            <Link className="navbar-brand text-center py-0" to="/" onClick={closeNav}>
              <img src="/images/logo.png" onError={(e) => e.target.src="https://via.placeholder.com/150x60?text=OVI+LOGO"} alt="OVI Logo" style={{ height: '90px', objectFit: 'contain' }} />
            </Link>

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

            {/* TOMBOL BURGER DENGAN REACT STATE */}
            <button 
              className="navbar-toggler border-0 p-2 shadow-none" 
              type="button" 
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* COLLAPSE CONTAINER DENGAN KELAS DYNAMIS SHOW */}
            <div className={`collapse navbar-collapse justify-content-center text-center mt-3 mt-lg-0 ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav py-2 py-lg-0">
                <li className="nav-item">
                  <Link className="nav-link py-2" to="/" onClick={closeNav}>{t.nav_home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-2" to="/services" onClick={closeNav}>{t.nav_services}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-2" to="/gallery" onClick={closeNav}>{t.nav_gallery}</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* PERUTEAN HALAMAN */}
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/services" element={<ServicesPage t={t} />} />
          <Route path="/gallery" element={<GalleryPage t={t} />} />
        </Routes>

        {/* FOOTER */}
        <footer className="py-4 border-top mt-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="row align-items-center text-center text-md-start">
              <div className="col-md-4 mb-3 mb-md-0">
                <small className="text-muted">&copy; 2026 OVI Eyelash & Nail Studio. All rights reserved.</small>
              </div>
              <div className="col-md-4 text-center mb-3 mb-md-0">
                <img src="/images/logo.png" onError={(e) => e.target.src="https://via.placeholder.com/150x60?text=OVI+LOGO"} alt="OVI Studio Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div className="col-md-4 text-center text-md-end">
                <span className="font-serif fs-5" style={{ fontStyle: 'italic' }}>See you soon ♡</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;