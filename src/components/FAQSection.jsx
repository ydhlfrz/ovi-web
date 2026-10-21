import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    q: "Berapa lama ketahanan Eyelash Extension di OVI Studio?",
    a: "Eyelash extension kami umumnya bertahan 3 hingga 4 minggu, tergantung pada siklus bulu mata alami dan perawatan harian Anda. Kami menyarankan untuk melakukan refill setiap 2–3 minggu agar tampilan tetap lebat dan rapi."
  },
  {
    q: "Apa perbedaan Korean Lashlift & Tint dengan Eyelash Extension?",
    a: "Korean Lashlift melentikkan dan memberi warna hitam pekat pada bulu mata asli Anda tanpa menambahkan bulu mata sintetis. Sedangkan Eyelash Extension menambahkan helaian bulu mata sintetis untuk efek yang lebih panjang dan tebal."
  },
  {
    q: "Apakah saya harus melakukan booking/reservasi terlebih dahulu?",
    a: "Sangat disarankan! Untuk memastikan ketersediaan jadwal slot terapis dan kenyamanan Anda, harap melakukan reservasi via WhatsApp sebelum datang ke studio kami di Kuta Lombok."
  },
  {
    q: "Berapa lama pengerjaan Gel Manicure atau Nail Art?",
    a: "Pengerjaan Gel Manicure standar memakan waktu sekitar 45–60 menit. Jika menambah desain Nail Art atau perawatan Callus Care, waktu pengerjaan berkisar antara 75–120 menit."
  },
  {
    q: "Di mana lokasi OVI Eyelash & Nail Studio?",
    a: "Studio kami berlokasi strategis di area Kuta, Pujut, Lombok Tengah (dekat dengan kawasan wisata Kuta Mandalika). Anda dapat menghubungi kami via WhatsApp untuk petunjuk rute presisi."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-uppercase small tracking-widest text-muted" style={{ letterSpacing: '2px' }}>
            Frequently Asked Questions
          </span>
          <h2 className="display-5 font-serif mt-1">Pertanyaan Umum (FAQ)</h2>
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