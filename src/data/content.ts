export interface UmrahPackage {
  id: string;
  name: string;
  overline: string;
  durationDays: number;
  durationDetail: string;
  basePrice: number;
  promoEligible: boolean; // Tells calc if 5 Gratis 1 applies
  hotels: {
    makkah: string;
    madinah: string;
  };
  airline: string;
  features: string[];
  excluded?: string[];
  isPopular: boolean;
  minPax: number;
  maxPax: number;
}

export const packages: UmrahPackage[] = [
  {
    id: 'keluarga',
    name: 'Paket Umrah Keluarga',
    overline: 'PROMO 5 GRATIS 1',
    durationDays: 9,
    durationDetail: 'Tersedia juga opsi 12 Hari',
    basePrice: 28900000, // Based on Biari Shuttle (9 Hari)
    promoEligible: true,
    hotels: {
      makkah: 'Hotel Biari (Shuttle) - Opsi hingga VIP Zam-Zam',
      madinah: 'Hotel Jauharat (3D) - Opsi hingga Mihrob Taoba',
    },
    airline: 'Penerbangan Reguler (Hubungi Admin untuk detail)',
    features: [
      'Diskon Daftar 5 pax Gratis 1 pax',
      'Tiket Pesawat PP & Visa Umrah',
      'Makan 3x sehari',
      'Bus AC & Mutowif',
      'Bimbingan Ibadah'
    ],
    isPopular: true,
    minPax: 5,
    maxPax: 150,
  },
  {
    id: 'reguler',
    name: 'Paket Umroh Reguler',
    overline: 'UMROH AL AMIN',
    durationDays: 9,
    durationDetail: 'Tersedia juga opsi 12 Hari',
    basePrice: 25000000, // Based on Hotel Biari (9 Hari)
    promoEligible: false,
    hotels: {
      makkah: 'Hotel Biari (Shuttle Nyaman) - Opsi hingga VIP Zam-Zam',
      madinah: 'Jauharat Rasheed (3D, Jarak 100m) - Opsi hingga Mihrob Taoba',
    },
    airline: 'Penerbangan Reguler (Hubungi Admin untuk detail)',
    features: [
      'Harga kompetitif mulai 25 Juta-an',
      'Tiket Pesawat PP & Visa Umrah',
      'Makan 3x sehari',
      'Bus AC & Bimbingan Ibadah',
    ],
    isPopular: false,
    minPax: 1,
    maxPax: 150,
  },
  {
    id: 'la',
    name: 'Land Arrangement (LA)',
    overline: 'B2B GRUP/AGEN',
    durationDays: 9,
    durationDetail: 'Minimal 35 Pax Grup',
    basePrice: 8800000, // Jadda Ajiad LA
    promoEligible: false,
    hotels: {
      makkah: 'Jadda Ajiad / Grand Al Massa / Zam-Zam',
      madinah: 'Mihrob Taiba / Al Aqik',
    },
    airline: 'Tidak Termasuk Tiket Pesawat',
    features: [
      'Visa Umrah & Bus Full AC',
      'Makan 3x Sehari',
      'Mutowif & City Tour',
      'Handling Saudi',
      'Air Zam-zam'
    ],
    excluded: [
      'Tiket Pesawat Domestik / Internasional'
    ],
    isPopular: false,
    minPax: 35,
    maxPax: 200,
  },
];

export const faqItems = [
  {
    question: 'Apa nilai lebih Kamal Sarwani dibandingkan travel umrah lainnya?',
    answer:
      'Kami berfokus pada "Umrah + Ngaji". Bersama kami, Anda tidak sekadar melakukan rute fisik umrah biasa, melainkan dibimbing untuk memaknai ibadah dari sudut pandang tasawuf. Anda akan diajak merenung dan merefleksikan nilai-nilai suci untuk dibawa kembali dalam kehidupan sehari-hari.',
  },
  {
    question: 'Bagaimana cara kerja promo "Daftar 5 Gratis 1"?',
    answer:
      'Promo ini berlaku khusus untuk keberangkatan Keluarga. Setiap melakukan pendaftaran untuk kelipatan 6 orang, Anda cukup membayar 5 kursi, dan 1 kursi otomatis GRATIS. Sistem cerdas kami pada halaman ini akan langsung menghitung penghematannya.',
  },
  {
    question: 'Apakah pembayaran dan DP saya dijaga secara transparan?',
    answer:
      'Sangat kami jamin! Kami menjual kepercayaan. Uang muka (DP) langsung kami proses untuk mengunci seat maskapai. Anda langsung mendapatkan kode booking (PNR) tiket pesawat yang bisa Anda lacak validitasnya secara mandiri kapan pun.',
  },
  {
    question: 'Saya takut terburu-buru dan tidak fokus beribadah karena jadwal terlalu padat?',
    answer:
      'Kenyamanan ibadah Anda adalah prioritas. Itinerary kami didesain tidak menguras energi dan diberikan kelonggaran waktu agar jemaah dapat leluasa memperbanyak amalan dan shalat sunnah di Masjid tanpa intervensi.',
  },
  {
    question: 'Apakah Kamal Sarwani menyediakan keberangkatan B2B atau Grup besar?',
    answer:
      'Ya! Sejak berdiri secara profesional, kami sangat kompeten menangani skema Land Arrangement (LA) khusus biro tiket/kemitraan travel untuk jemaah minimum 35 Pax.',
  },
];

export const stats = [
  { value: '2019', label: 'Tahun Berdiri', description: 'Melayani Ribuan Jemaah ke Tanah Suci' },
  { value: '100%', label: 'Transparansi', description: 'Lacak Langsung Tiket, Visa & Hotel' },
  { value: '0', label: 'Insiden', description: 'Gagal Berangkat Karena Masalah Sistem' },
];

export const testimonials = [
  {
    quote:
      'Pendekatan Umrah dan Ngaji ini luar biasa. Kami tidak hanya diceritakan sejarah gedung, tapi diajak merenung ke dalam hati. Rasanya seperti me-recharge iman dan mental dari titik paling terendah.',
    name: 'Bapak Ridwan',
    role: 'Pengusaha',
  },
  {
    quote:
      '100% transparan dan nggak ada biaya tersembunyi. DP langsung dibelikan tiket dan langsung dikasih kode PNR-nya. Benar-benar bikin ibadah lebih fokus karena hati sudah sangat tenang.',
    name: 'Ibu Aisyah',
    role: 'Jamaah Umrah Keluarga',
  },
];

export const muthawifs = [
  {
    name: 'Ustadz Ahmad Fauzi',
    credential: 'Muthawif Karismatik | Praktisi Tasawuf',
    quote:
      'Saya tidak sekadar memandu rute rukun Umrah. Saya mendampingi Anda membedah esensi di setiap tawaf dan sai untuk kedamaian spiritual seumur hidup.',
  },
  {
    name: 'Ustadz Hasan Al-Banna',
    credential: 'Muthawif Utama Terakreditasi Kemenag',
    quote:
      'Pelayanan yang tulus dimulai dari keterbukaan hati. Kami memastikan setiap hak jemaah tertunaikan agar rukun ibadahnya diterima tanpa cacat.',
  },
];
