import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center pt-[100px] pb-12">
      <div className="absolute inset-0 z-0">
        {/* Fallback pattern/color background since AI placeholder image is requested */}
        <div className="w-full h-full bg-midnight/90 bg-[url('https://images.unsplash.com/photo-1591461942699-231a310bb215?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat bg-blend-overlay"></div>
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent"></div>
      </div>

      <div className="container-main relative z-10 flex flex-col justify-center animate-fade-in-up">
        {/* Mobile: Stacked | Desktop: 50/50 Grid */}
        <div className="w-full lg:w-3/5 text-alabaster text-center md:text-left mt-12 md:mt-0">
          <h1 className="font-display text-[32px] sm:text-[40px] leading-tight md:text-display-lg mb-6 drop-shadow-lg px-2">
            Perjalanan Umrah Transparan, Ibadah Penuh Makna.
          </h1>
          
          <p className="font-sans text-base sm:text-lg md:text-[22px] leading-[1.6] mb-10 text-platinum max-w-[600px] mx-auto md:mx-0 px-4 md:px-0">
            Lebih dari sekadar umrah fisik. Resapi nilai-nilai tasawuf yang menenangkan hati, didukung dengan 100% transparansi fasilitas sejak tahun 2019.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 md:px-0">
            <a href="#calculator" className="btn w-full sm:w-auto bg-sahara text-midnight rounded-capsule px-8 py-4 font-semibold hover:brightness-110 shadow-card text-center flex items-center justify-center">
              Lihat Simulasi Biaya Instan
            </a>
            <a href="#packages" className="btn w-full sm:w-auto bg-transparent border-2 border-alabaster text-alabaster rounded-capsule px-8 py-4 font-medium hover:bg-alabaster/10 backdrop-blur-sm text-center flex items-center justify-center">
              Lihat Rincian Itinerary
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
