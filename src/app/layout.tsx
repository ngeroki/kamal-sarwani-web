import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kamal Sarwani Tour & Travel — Umrah Keluarga Nyaman, Hati Tenang',
  description:
    'Wujudkan kerinduan Tanah Suci bersama keluarga tanpa kelelahan fisik. Paket Umrah premium ramah anak dengan bimbingan spiritual mendalam. Terdaftar resmi Kemenag RI.',
  keywords: [
    'umrah keluarga',
    'paket umrah',
    'umrah balita',
    'umrah premium',
    'kamal sarwani',
    'travel umrah jakarta',
    'umrah VVIP',
  ],
  openGraph: {
    title: 'Kamal Sarwani Tour & Travel — Umrah Keluarga Nyaman, Hati Tenang',
    description:
      'Paket Umrah premium ramah anak dengan bimbingan spiritual mendalam. Terdaftar resmi Kemenag RI.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Kamal Sarwani Tour & Travel',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'Kamal Sarwani Tour & Travel',
              description:
                'Penyelenggara Perjalanan Ibadah Umrah premium ramah keluarga.',
              url: 'https://kamalsarwani.com',
              telephone: '+62-xxx-xxxx-xxxx',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jakarta',
                addressCountry: 'ID',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-alabaster text-midnight antialiased">
        {children}
      </body>
    </html>
  );
}
