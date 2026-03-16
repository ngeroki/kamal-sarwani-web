import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/10 text-platinum w-full pt-20 pb-8">
      <div className="container-main">
        


        {/* Main Grid: Info + Nav + Legal/Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand/Summary column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img src="/logo-transparent.png" alt="Kamal Sarwani Logo" className="h-[64px] object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
            </a>
            <p className="text-body mb-6">Tours &amp; Travel</p>
            <p className="text-body font-medium italic text-sahara mb-6">
              "Ibadah Nyaman. Hati Tenang. Keluarga Berkah."
            </p>
            <p className="text-sm opacity-60">
              Dioperasikan di bawah manajemen eksekutif profesional.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-h3 font-semibold text-white mb-6">Kontak Operasional</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-sahara shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Gedung Operasional Menara Bidakara,<br/>Jl. Gatot Subroto, Jakarta Selatan.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-sahara shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:Info@kshandling.com" className="hover:text-white transition-colors">Info@kshandling.com</a>
              </li>
              <li className="flex items-center gap-3">
                 <div className="bg-success/20 text-success text-xs px-2 py-1 rounded font-bold tracking-widest">WHATSAPP</div>
                 <a href="https://wa.me/966566885319" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+966 566 885 319</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-h3 font-semibold text-white mb-6">Akses Cepat</h4>
             <ul className="space-y-3">
               <li><a href="#packages" className="text-sm hover:text-sahara transition-colors flex items-center before:content-['›'] before:mr-2 before:text-sahara">Paket Umrah</a></li>
               <li><a href="#calculator" className="text-sm hover:text-sahara transition-colors flex items-center before:content-['›'] before:mr-2 before:text-sahara">Simulasi Rombongan</a></li>
               <li><a href="#muthawif" className="text-sm hover:text-sahara transition-colors flex items-center before:content-['›'] before:mr-2 before:text-sahara">Pembimbing Spiritual</a></li>
               <li><a href="#faq" className="text-sm hover:text-sahara transition-colors flex items-center before:content-['›'] before:mr-2 before:text-sahara">Tanya Jawab (FAQ)</a></li>
             </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-h3 font-semibold text-white mb-6">Legalitas Pribadi</h4>
             <ul className="space-y-3">
               <li><a href="#" className="text-sm border-b border-transparent hover:border-sahara hover:text-white pb-1 transition-all">Kebijakan Privasi</a></li>
               <li><a href="#" className="text-sm border-b border-transparent hover:border-sahara hover:text-white pb-1 transition-all">Syarat & Ketentuan</a></li>
               <li>
                 <a href="#trust-bar" className="inline-flex mt-4 items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-capsule text-xs font-semibold hover:bg-white/20">
                   Cek Izin Kemenag
                 </a>
               </li>
             </ul>
          </div>

        </div>

        {/* Partnership / Supported By Sleek Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-t border-white/10 pt-10 pb-6 mb-4 gap-8 lg:gap-0">
           
           <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 flex-1">
              <div className="text-xs uppercase tracking-[0.25em] text-sahara font-bold text-center md:text-left">
                Supported By
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              
               <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                 <img src="/ngaji-kehidupan.png" alt="Ngaji Kehidupan Logo" className="w-[120px] md:w-[160px] h-auto object-contain shrink-0 drop-shadow-[0_0_15px_rgba(192,38,211,0.4)]" />
                 <div>
                    <h4 className="text-white font-display text-2xl mb-1.5 tracking-wide">Ngaji Kehidupan</h4>
                    <a href="https://www.ngajikehidupan.com" target="_blank" rel="noopener noreferrer" className="text-sahara hover:text-white transition-colors text-sm font-medium border-b border-sahara/30 hover:border-white pb-0.5 inline-block">
                      www.ngajikehidupan.com
                    </a>
                 </div>
              </div>
           </div>
           
           <div className="text-platinum/60 text-sm lg:text-right mt-4 lg:mt-0 lg:max-w-xs shrink-0 text-center">
             Mitra spiritual resmi pengamalan nilai tasawuf Kamal Sarwani.
           </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2026 Kamal Sarwani Tour & Travel. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-4">
             {/* Social Icons Placeholder */}
             <a href="#" className="hover:text-white"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
             <a href="#" className="hover:text-white"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
