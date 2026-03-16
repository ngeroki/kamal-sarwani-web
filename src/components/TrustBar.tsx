import React from 'react';
import { ShieldCheck, Plane, Building2, Award } from 'lucide-react';

export default function TrustBar() {
  return (
    <section id="trust-bar" className="w-full bg-white border-b border-platinum/20 pt-16 pb-12 overflow-hidden">
      <div className="container-main flex flex-col items-center">
        
        <div className="text-center mb-10">
          <span className="overline mb-4 inline-block text-sahara">TERPERCAYA SEJAK 2019</span>
          <p className="text-body-lg font-medium text-midnight max-w-[600px] mx-auto mb-5 leading-relaxed">
            Terdaftar resmi di Kementerian Agama RI sebagai Penyelenggara Perjalanan Ibadah Umrah (PPIU).
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald/5 border border-emerald/20 text-emerald px-5 py-2.5 rounded-capsule font-semibold text-sm shadow-sm transition-colors hover:bg-emerald/10">
            <ShieldCheck size={20} className="w-5 h-5" />
            PPIU Kemenag No. Akan Diupdate
          </div>
        </div>

           <div className="flex flex-wrap py-2 items-center justify-center gap-4 md:gap-8 px-4 sm:px-0">
             
             {/* Partner Chips (acting as logos) */}
             <div className="flex items-center gap-2 px-4 py-2 border border-platinum/30 rounded-lg text-platinum hover:text-midnight hover:border-platinum transition-colors min-w-max bg-alabaster/50">
               <Plane size={18} />
               <span className="font-bold tracking-tight">Saudia Airlines</span>
             </div>
             
             <div className="flex items-center gap-2 px-4 py-2 border border-platinum/30 rounded-lg text-platinum hover:text-midnight hover:border-platinum transition-colors min-w-max bg-alabaster/50">
               <Plane size={18} />
               <span className="font-bold tracking-tight">Garuda Indonesia</span>
             </div>
             
             <div className="flex items-center gap-2 px-4 py-2 border border-platinum/30 rounded-lg text-platinum hover:text-midnight hover:border-platinum transition-colors min-w-max bg-alabaster/50">
               <Building2 size={18} />
               <span className="font-bold tracking-tight">Swissôtel Al Maqam</span>
             </div>
             
             <div className="flex items-center gap-2 px-4 py-2 border border-platinum/30 rounded-lg text-platinum hover:text-midnight hover:border-platinum transition-colors min-w-max bg-alabaster/50">
               <Building2 size={18} />
               <span className="font-bold tracking-tight">Pullman Zamzam</span>
             </div>
             
             <div className="flex items-center gap-2 px-4 py-2 border border-sahara/40 rounded-lg text-sahara hover:bg-sahara/5 transition-colors min-w-max bg-sahara/5">
               <Award size={18} />
               <span className="font-bold tracking-tight">HIMPUH & ASITA</span>
             </div>

           </div>

      </div>
    </section>
  );
}
