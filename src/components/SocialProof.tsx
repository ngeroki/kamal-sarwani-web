import React from 'react';
import { stats, testimonials } from '@/data/content';
import { Star } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="social-proof" className="w-full section-spacing bg-midnight text-white">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-[800px] mx-auto">
          <h2 className="font-display text-h2 md:text-display-sm mb-4">
            Bukti Nyata, Bukan Sekadar Janji
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center border-l border-platinum/20 md:border-none relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-right-6 md:after:w-px md:after:h-12 md:after:bg-platinum/20 md:after:-translate-y-1/2 last:after:hidden py-4">
              <div className="font-display text-[56px] font-bold text-sahara mb-2 leading-none">{stat.value}</div>
              <div className="text-h3 font-semibold mb-2">{stat.label}</div>
              <p className="text-platinum text-sm max-w-[200px] mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-surface-dark border border-platinum/10 rounded-card p-8 md:p-10 hover:border-platform/30 transition-colors">
              <div className="flex gap-1 mb-6 text-sahara">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-body-lg text-platinum leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-platinum/20 overflow-hidden flex items-center justify-center font-bold text-lg text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-caption text-platinum/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
