import React from 'react';
import { packages } from '@/data/content';
import { Check, X } from 'lucide-react';

export default function PackageComparison() {
  return (
    <section id="packages" className="w-full section-spacing bg-alabaster">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16x max-w-[800px] mx-auto px-4">
          <h2 className="font-display text-h2 md:text-display-sm text-midnight mb-4">
            Pilih Paket Ibadah Keluarga Anda
          </h2>
          <p className="text-body-lg text-platinum">
            Dua pilihan perjalanan yang dirancang khusus untuk kenyamanan keluarga. Setiap detail telah kami perhitungkan.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap md:flex-nowrap max-w-[900px] mx-auto pb-8 pt-6 md:pt-4 px-4 sm:px-0">
          {packages.filter(p => p.id !== 'la').map((pkg) => (
            <div key={pkg.id} className={`card w-[85vw] max-w-[400px] flex-1 shrink-0 snap-center relative flex flex-col p-6 sm:p-8 ${pkg.isPopular ? 'border-2 border-sahara shadow-card-hover z-10 md:-translate-y-2' : 'border border-platinum/20'}`}>
              
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sahara text-midnight font-bold tracking-wider px-6 py-2 rounded-full shadow-lg">
                  REKOMENDASI
                </div>
              )}

              <div className="mb-6 border-b border-platinum/20 pb-6">
                <span className="overline">{pkg.overline}</span>
                <h3 className="font-display text-[28px] leading-tight md:text-h1 text-midnight mt-3 mb-4">{pkg.name}</h3>
                <div className="flex flex-col mb-4">
                  <span className="text-sm font-medium text-platinum mb-1">Mulai dari</span>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-[28px] sm:text-[32px] font-bold text-emerald leading-none tracking-tight whitespace-nowrap">
                      Rp {pkg.basePrice.toLocaleString('id-ID')}
                    </span>
                    <span className="text-sm text-platinum font-medium whitespace-nowrap">/ pax</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-platinum/10 text-midnight text-sm font-medium px-3 py-1 rounded-sm">
                  {pkg.durationDays} Hari ({pkg.durationDetail})
                </div>
              </div>

              {/* Hotels */}
              <div className="mb-8 space-y-4">
                <div>
                  <div className="text-caption text-platinum font-semibold uppercase tracking-wider mb-1">Makkah</div>
                  <div className="text-body font-medium text-midnight border-l-2 border-emerald pl-3">{pkg.hotels.makkah}</div>
                </div>
                <div>
                   <div className="text-caption text-platinum font-semibold uppercase tracking-wider mb-1">Madinah</div>
                   <div className="text-body font-medium text-midnight border-l-2 border-emerald pl-3">{pkg.hotels.madinah}</div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-body text-midnight">
                    <Check className="text-success shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
                
                {pkg.excluded?.map((exc, idx) => (
                  <li key={idx} className="flex gap-3 text-body text-platinum opacity-60">
                    <X className="text-error shrink-0" size={20} />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>

              <a href="#calculator" className={`btn w-full mt-auto ${pkg.isPopular ? 'btn-primary' : 'btn-secondary text-midnight font-semibold'}`}>
                Simulasi Paket Ini
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
