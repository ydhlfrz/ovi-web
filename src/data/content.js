export const servicesData = [
  {
    id: "nail",
    category: "Nail Service",
    subtitle: "Manicure, Pedicure, Callus Care, Nail Art & Removals",
    icon: "bi-heart",
    image: "/images/nail-thumb.png",
    fallbackImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800",
    modalTitle: "Nail Service Price List",

    manicureThumb: "/images/manicure.jpg",
    pedicureThumb: "/images/pedicure-service.jpg",
    callusThumb: "/images/callus-care.jpg",
    nailArtThumb: "/images/nail-art.jpg",
    removalThumb: "/images/removal-service.jpg",

    manicureServices: [
      { name: "Russian Manicure + Gel", desc: "E-File Technique + Gel Polish", duration: "60 min", price: "250K" },
      { name: "BIAB with Russian Manicure", desc: "E-File Technique + Strengthener Overlay + Colour and Nourishing Oil", duration: "120 min", price: "365K" },
      { name: "Express Manicure Only", desc: "Cleaning, Shaping, Cuticle Care, Buffing, Shining and Nourishing Oil", duration: "45 min", price: "175K" },
      { name: "Gel X Extensions", desc: "E-File Technique, Extension with Soft Gel Tips, Colour and Nourishing Oil", duration: "120 min", price: "350K" },
      { name: "Gel Extensions", desc: "E-File Technique, Extension with Builder Gel/Hard Gel, Colour and Nourishing Oil", duration: "140 min", price: "450K" }
    ],

    pedicureServices: [
      { name: "Russian Pedi + Gel Polish", desc: "E-File Pedicure + Gel Polish and Nourishing Oil", duration: "60 min", price: "285K" },
      { name: "Russian Pedi with Overlay", desc: "E-File Pedicure with Overlay, Gel Colour and Nourishing Oil", duration: "120 min", price: "325K" },
      { name: "Foot Spa", desc: "Dry Cuticle Care with Drill Machine, Shaping, Exfoliating Scrub, Callus Removal, Soak in Relaxing Water and Salt, 15 Minutes Foot Massage with Nourishing Cream", duration: "90 min", price: "200K" }
    ],

    callusCare: {
      title: "Callus Care Treatment",
      badge: "Dr. Fetto Products",
      desc: "Russian Pedi + Callus (Treatment level will be assisted by our nail technician before the service begins)",
      note: "All of our callus treatments include Spa (a bath salt, scrub and nourishing cream)",
      levels: [
        { name: "Light - Normal feet with minimal calluses", price: "250K", gelPrice: "300K" },
        { name: "Moderate - Dry, rough feet with noticeable calluses", price: "350K", gelPrice: "400K" },
        { name: "Heavy - Severely dry feet with deep heel cracks", price: "400K", gelPrice: "450K" }
      ]
    },

    nailArt: [
      { name: "Single Nail Repair with Gel", price: "30K" },
      { name: "Soft Gel Tips Extensions", price: "35K" },
      { name: "Glitter/Reflective/Cat Eye", price: "5K-10K" },
      { name: "French/Gradient/Chrome/Glazed", price: "7K" },
      { name: "Simple Hand-Painted Art", price: "10K-15K" },
      { name: "3D/Embossed Art", price: "10K-15K" },
      { name: "Polygel/Acrylic Extensions", price: "45K" }
    ],

    removals: [
      { name: "Gel Polish Removal from Ovi", price: "7K" },
      { name: "Gel Polish Removal from Other Salon", price: "10K" },
      { name: "Removal Extension/Builder Gel from Other Salon", price: "15K" }
    ]
  },
  {
    id: "lash",
    category: "Eyelash Extensions",
    subtitle: "Natural, Soft Volume & Russian Set",
    icon: "bi-eye",
    image: "/images/lash-thumb.png",
    fallbackImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800",
    modalTitle: "Eyelash Extensions Price List",
    lashSetsThumb: "/images/lash-thumb.png",
    lashSets: [
      { name: "Natural Lash (Single Lash)", duration: "2 h", price: "375K", refill: "250K" },
      { name: "Soft Volume Set (2D/3D)", duration: "2 h", price: "450K", refill: "250K" },
      { name: "Russian Volume", duration: "2 h", price: "550K", refill: "350K" }
    ],
    addOns: [
      { name: "Whispy Style", price: "50K" },
      { name: "Anime Lash Style", price: "75K" },
      { name: "Remove Extensions from Ovi", price: "50K" },
      { name: "Remove Extensions from Other Salon", price: "100K" }
    ]
  },
  {
    id: "brow",
    category: "Brow & Lashlift",
    subtitle: "Brow Bomber & K-Glueless Lashlift",
    icon: "bi-flower1",
    image: "/images/brow-thumb.png",
    fallbackImage: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800",
    modalTitle: "Brow & Lashlift Price List",
    browThumb: "/images/brow-service.jpg",
    browItems: [
      { name: "Brow Wax", duration: "15 min", price: "100K", desc: "Precision eyebrow shaping and hair removal using gentle wax."},
      { name: "Brow Bomber", duration: "120 min", price: "350K", desc: "brow lamination, shaving, brow tint, nourish"},
      { name: "Brow Wax and Tint", duration: "30 min", price: "180K", desc: "Eyebrow waxing with custom tinting for a fuller look."},
      { name: "Brow Lamination", duration: "1 h", price: "300K", desc: "Brow lift, brow shaving (Without Wax: 250K)"},
      { name: "Brow Lamination + Wax", duration: "1 h 20 min", price: "300K", desc: "Complete brow lamination paired with clean waxing shaping."},
      { 
        name: "K-Glueless Lashlift & Tint", 
        duration: "1 h 15 min", 
        price: "300K", 
        badge: "Newest Technique", 
        desc: "The latest K-Lashlift newest technique perform without use of glue. This technique make your natural lashes straight from the root, revealing every bit of their length for the wide open, K-Beauty gaze."
      }
    ]
  }
];

export const galleryImages = [
  { id: 1, src: "/images/gallery-1.png", title: "" },
  { id: 2, src: "/images/gallery-2.png", title: "" },
  { id: 3, src: "/images/gallery-3.png", title: "" },
  { id: 4, src: "/images/gallery-4.png", title: "" },
  { id: 5, src: "/images/gallery-5.png", title: "" },
  { id: 6, src: "/images/gallery-6.png", title: "" },
  { id: 7, src: "/images/gallery-7.png", title: "" },
  { id: 8, src: "/images/gallery-8.png", title: "" },
  { id: 9, src: "/images/gallery-9.png", title: "" },
  { id: 10, src: "/images/gallery-10.jpeg", title: "" }
];

export const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    hero_subtitle: "OVI EYELASH & NAIL STUDIO",
    hero_title: "Effortless Beauty, Elevated.",
    hero_desc: "Eyelash, Nail & Brow Studio · Kuta, Lombok",
    hero_location: "Kuta, Lombok, Indonesia",
    btn_book_wa: "Book Your Appointment",
    about_sub: "ABOUT OVI",
    about_title: "Beauty You Can Feel Good About.",
    about_desc: "At Ovi Eyelash & Nail Studio, every detail is designed around your beauty, comfort, and confidence. From our signature Korean Lashlift to beautifully crafted lash extensions and refined nail treatments, our professional team is here to help you look and feel your best. We value cleanliness, careful techniques, and properly sterilized tools to make your beauty experience as comfortable and hygienic as possible. Your time. Your beauty. Your little escape in Kuta Lombok. Ready for your next beauty moment? Book your appointment with Ovi today.",
    why_sub: "WHY CHOOSE US",
    why_title: "Why Choose OVI Eyelash?",
    services_sub: "OUR SERVICES",
    services_title: "Treatments & Price List",
    see_details: "See Details",
    work_sub: "OUR WORK",
    work_title: "Real Results, Happy Clients",
    view_gallery: "VIEW GALLERY",
    review_sub: "WHAT OUR CLIENTS SAY",
    review_title: "Google Reviews & Rating",
    reviewed_on: "Reviewed on",
    see_all_reviews: "See All Reviews on Google Maps",
    find_us: "FIND US",
    visit_title: "Visit Our Studio",
    loc_title: "Location",
    get_directions: "Get Directions",
    contact_admin: "Contact Admin",
    chat_wa: "Chat WhatsApp",
    follow_us: "Follow Our Social Media",
    follow_desc: "Follow us for updates, promos, and latest works!",
    close: "Close",
    book_service_wa: "Book via WhatsApp",
    explore_sub: "EXPLORE OVI STUDIO",
    explore_title: "Discover Our Treatments & Portfolio",
    card_services_title: "Our Services & Price List",
    card_services_desc: "Explore our complete menu of Manicure, Pedicure, Eyelash Extensions, and Brow treatments.",
    btn_view_services: "View All Services",
    card_gallery_title: "Client Portfolio Gallery",
    card_gallery_desc: "See real results, lash extension styles, and intricate nail art crafted by our certified team.",
    btn_view_gallery_all: "View Full Gallery"
  },
  id: {
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_services: "Layanan",
    nav_gallery: "Galeri",
    nav_contact: "Kontak",
    hero_subtitle: "OVI EYELASH & NAIL STUDIO",
    hero_title: "Kecantikan Elegan & Terawat.",
    hero_desc: "Studio Bulu Mata, Kuku & Alis · Kuta, Lombok",
    hero_location: "Kuta, Lombok, Indonesia",
    btn_book_wa: "Buat Janji Temu Anda",
    about_sub: "TENTANG OVI",
    about_title: "Kecantikan yang Membuat Anda Merasa Nyaman.",
    about_desc: "Di Ovi Eyelash & Nail Studio, setiap detail dirancang demi kecantikan, kenyamanan, dan kepercayaan diri Anda. Mulai dari layanan unggulan Korean Lashlift, pemasangan ekstensi bulu mata yang dikerjakan dengan apik, hingga perawatan kuku yang elegan, tim profesional kami siap membantu Anda tampil dan merasa dalam kondisi terbaik. Kami sangat mengutamakan kebersihan, teknik yang cermat, serta penggunaan peralatan yang disterilkan dengan benar, agar pengalaman kecantikan Anda terasa nyaman dan higienis. Waktu Anda. Kecantikan Anda. Sebuah pelarian singkat untuk Anda di Kuta, Lombok. Siap untuk momen kecantikan Anda berikutnya? Segera buat janji temu Anda di Ovi hari ini.",
    why_sub: "MENGAPA MEMILIH KAMI",
    why_title: "Mengapa Memilih OVI Eyelash?",
    services_sub: "LAYANAN KAMI",
    services_title: "Pilihan Perawatan & Daftar Harga",
    see_details: "Lihat Detail",
    work_sub: "HASIL KERJA KAMI",
    work_title: "Hasil Nyata & Pelanggan Puas",
    view_gallery: "LIHAT GALERI",
    review_sub: "APA KATA PELANGGAN KAMI",
    review_title: "Ulasan & Rating Google",
    reviewed_on: "Diulas di",
    see_all_reviews: "Lihat Semua Ulasan di Google Maps",
    find_us: "TEMUKAN KAMI",
    visit_title: "Kunjungi Studio Kami",
    loc_title: "Lokasi",
    get_directions: "Petunjuk Arah",
    contact_admin: "Kontak Admin",
    chat_wa: "Chat WhatsApp",
    follow_us: "Ikuti Sosial Media Kami",
    follow_desc: "Ikuti kami untuk update promo dan hasil pengerjaan terbaru!",
    close: "Tutup",
    book_service_wa: "Booking via WhatsApp",
    explore_sub: "JELAJAHI OVI STUDIO",
    explore_title: "Temukan Perawatan & Portofolio Kami",
    card_services_title: "Layanan & Daftar Harga Kami",
    card_services_desc: "Jelajahi menu lengkap perawatan Manicure, Pedicure, Eyelash Extensions, dan Brow kami.",
    btn_view_services: "Lihat Semua Layanan",
    card_gallery_title: "Galeri Portofolio Klien",
    card_gallery_desc: "Lihat hasil pengerjaan nyata, gaya lash extension, dan kreasi nail art anggun dari tim tersertifikasi kami.",
    btn_view_gallery_all: "Lihat Seluruh Galeri"
  }
};