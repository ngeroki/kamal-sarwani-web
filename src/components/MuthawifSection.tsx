import React from 'react';
import { muthawifs } from '@/data/content';
import { Quote } from 'lucide-react';

export default function MuthawifSection() {
  return (
    <section id="muthawif" className="w-full section-spacing bg-alabaster">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16 max-w-[800px] mx-auto">
          <h2 className="font-display text-h2 md:text-display-sm text-midnight mb-4">
            Pembimbing Perjalanan Spiritual Anda
          </h2>
          <p className="text-body-lg text-platinum">
            Bukan sekadar pemandu wisata. Muthawif kami adalah guru rohani yang mendampingi Anda menemukan makna di setiap langkah ibadah.
          </p>
        </div>

        {/* Profiles Grid: 1-col -> 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[1000px] mx-auto">
          {muthawifs.map((m, idx) => (
            <div key={idx} className="card p-8 md:p-10 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
              
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-sahara transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

              {/* Avatar placeholder - AI placeholder image approach */}
              <div className="w-[120px] h-[120px] shrink-0 rounded-full overflow-hidden bg-platinum/20 border-4 border-white shadow-sm">
                 <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>
              </div>

              <div className="flex-1">
                <Quote size={28} className="text-sahara/30 mb-4" />
                <h3 className="font-display text-h3 font-bold text-midnight mb-1">{m.name}</h3>
                <p className="text-caption text-emerald mb-4 font-semibold">{m.credential}</p>
                <p className="text-body text-platinum italic leading-relaxed">
                  "{m.quote}"
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
