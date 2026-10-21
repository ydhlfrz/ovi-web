import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle } from 'lucide-react';

function FAQSection({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Mengambil daftar FAQ dari objek translasi t
  const faqData = t.faq_list || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data Schema untuk Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="py-5 bg-white">
      {/* Inject FAQ Schema untuk Google */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>
            {t.faq_sub || "Frequently Asked Questions"}
          </span>
          <h2 className="display-5 font-serif mt-1">{t.faq_title || "Frequently Asked Questions"}</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '15px auto 0' }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion accordion-flush" id="faqAccordion">
              {faqData.map((item, index) => (
                <div key={index} className="border-bottom py-3">
                  <button
                    className="w-100 text-start bg-transparent border-0 d-flex justify-content-between align-items-center py-2 px-0 fw-bold font-serif fs-5 text-dark"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <HelpCircle size={20} className="text-muted flex-shrink-0" />
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 text-muted small pe-4 ps-4">
                      <p className="mb-0">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;