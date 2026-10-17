export const servicesData = [
  {
    id: "nail",
    category: "Nail Service",
    subtitle: "Callus Care, Nail Art & Add Ons",
    image: "/images/nail-thumb.png",
    fallbackImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800",
    modalTitle: "1. Nail Service Price List",
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
      { name: "Removal Extension/Builder Gel from Ovi", price: "8.5K" },
      { name: "Removal Extension/Builder Gel from Other Salon", price: "15K" }
    ]
  },
  {
    id: "lash",
    category: "Eyelash Extensions",
    subtitle: "Natural, Soft Volume & Russian Set",
    image: "/images/lash-thumb.png",
    fallbackImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800",
    modalTitle: "Eyelash Extensions Price List",
    lashSets: [
      { name: "Natural Lash (Single Lash)", price: "350K", refill: "250K" },
      { name: "Soft Volume Set (2D/3D)", price: "400K", refill: "250K" },
      { name: "Russian Volume", price: "465K", refill: "350K" }
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
    image: "/images/brow-thumb.png",
    fallbackImage: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800",
    modalTitle: "Brow & Lashlift Price List",
    browItems: [
      { name: "Brow Bomber", price: "350K", desc: "brow lamination, shaving, brow tint, nourish" },
      { name: "Brow Lamination", price: "300K", desc: "Brow lift, brow shaving" },
      { 
        name: "K-Glueless Lashlift & Tint", 
        price: "250K", 
        badge: "Newest Technique", 
        desc: "The latest K-Lashlift newest technique perform without use of glue. This technique make your natural lashes straight from the root, revealing every bit of their length for the wide open, K-Beauty gaze." 
      }
    ]
  }
];

export const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpeg", title: "" },
  { id: 2, src: "/images/gallery-2.jpeg", title: "" },
  { id: 3, src: "/images/gallery-3.jpeg", title: "" },
  { id: 4, src: "/images/gallery-4.jpeg", title: "" },
  { id: 5, src: "/images/gallery-5.jpeg", title: "" },
  { id: 6, src: "/images/gallery-6.jpeg", title: "" },
  { id: 7, src: "/images/gallery-7.jpeg", title: "" },
  { id: 8, src: "/images/gallery-8.jpeg", title: "" }
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
    btn_book_wa: "Book on WhatsApp",
    about_sub: "ABOUT OVI",
    about_title: "More Than Just A Beauty Studio",
    about_desc: "At Ovi, we believe beauty is a form of self-care. Our studio in Kuta, Lombok, offers a calm and comfortable space where you can relax, refresh, and feel your best — from perfectly done lashes to healthy nails and brows.",
    why_sub: "WHY CHOOSE US",
    why_title: "Why Choose OVI Studio?",
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
    book_service_wa: "Book via WhatsApp"
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
    btn_book_wa: "Booking via WhatsApp",
    about_sub: "TENTANG OVI",
    about_title: "Lebih Dari Sekadar Studio Kecantikan",
    about_desc: "Di Ovi, kami percaya kecantikan adalah bentuk perawatan diri. Studio kami di Kuta, Lombok menyajikan ruang yang tenang dan nyaman untuk bersantai, menyegarkan diri, dan tampil percaya diri — dari bulu mata yang rapi hingga kuku dan alis yang sehat.",
    why_sub: "MENGAPA PILIH KAMI",
    why_title: "Mengapa Memilih OVI Studio?",
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
    book_service_wa: "Booking via WhatsApp"
  }
};