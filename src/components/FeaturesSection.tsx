import React from 'react';
import { BookOpen, Scale, ShieldCheck } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full section-spacing bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-[800px] mx-auto px-4 md:px-0">
          <h2 className="font-display text-h2 md:text-display-sm text-midnight mb-6 leading-tight">
            Lebih dari Sekadar Umrah. <br className="hidden md:block"/>
            <span className="text-sahara tracking-wide">Perjalanan Spiritual yang Mengubah Hidup.</span>
          </h2>
          <p className="text-body-lg text-platinum max-w-[700px] mx-auto">
            Kamal Sarwani hadir bukan sebagai penjual tiket perjalanan, namun sebagai jembatan yang mendekatkan hati Anda kepada Sang Pencipta melalui pemahaman ibadah yang utuh.
          </p>
        </div>

        {/* Features Grid: 1-Col (Mobile) -> 3-Col (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-2 sm:px-0">
          
          {/* Blok 1: Umroh + Ngaji */}
          <div className="card p-6 sm:p-8 group flex flex-col md:items-center md:text-center text-left items-start">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-5 sm:mb-6 
                            group-hover:bg-emerald group-hover:text-white transition-colors duration-300">
              <BookOpen size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-h3 font-semibold text-midnight mb-3">Umrah & Ngaji Tasawuf</h3>
            <p className="text-base text-platinum leading-relaxed">
              Ini bukan tur fisik yang melelahkan. Kami fokus memaknai ibadah Umrah secara komprehensif. Anda akan dibimbing mengkaji ilmu Ketauhidan dan Tasawuf selama perjalanan, merelasikan setiap rukun ihram dengan hakikat kehidupan sehari-hari agar hati menemukan kedamaian sejati.
            </p>
          </div>

          {/* Blok 2: Bimbingan Spiritual Mendalam */}
          <div className="card p-6 sm:p-8 group flex flex-col md:items-center md:text-center text-left items-start">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sahara/10 text-sahara flex items-center justify-center mb-5 sm:mb-6 
                            group-hover:bg-sahara group-hover:text-white transition-colors duration-300">
              <Scale size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-h3 font-semibold text-midnight mb-3">Bimbingan Batin & Mental</h3>
            <p className="text-base text-platinum leading-relaxed">
              Tinggalkan beban dunia di Tanah Air. Muthawif dan Ustaz pendamping kami berdedikasi menjadi teman diskusi spiritual Anda. Kami mengajarkan keikhlasan, ketahanan mental, dan tafakur di setiap jengkal Haramain sehingga setiap jemaah kembali dengan jiwa yang baru.
            </p>
          </div>

          {/* Blok 3: Trust & Transparent Process */}
          <div className="card p-6 sm:p-8 group flex flex-col md:items-center md:text-center text-left items-start lg:col-span-1 border border-border">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-5 sm:mb-6 
                            group-hover:bg-emerald group-hover:text-white transition-colors duration-300">
              <ShieldCheck size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-h3 font-semibold text-midnight mb-3">Proses 100% Transparan</h3>
            <p className="text-base text-platinum leading-relaxed">
              Bisnis ini berfondasikan amanah sejak 2019. Kami menolak praktik travel yang tidak adil. Semuanya transparan: harga yang pasti di awal, tanpa biaya tersembunyi, serta akses penuh melihat status booking tiket Saudia dan konfirmasi hotel ring-1 Anda secara langsung dan jujur.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
