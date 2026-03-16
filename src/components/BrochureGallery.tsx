'use client';
import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const brochures = [
  { id: 'family', image: '/brochures/umroh-family.png', title: 'Brosur Paket Keluarga' },
  { id: 'reguler', image: '/brochures/reguler.png', title: 'Brosur Paket Reguler' },
  { id: '5in1', image: '/brochures/5in1.png', title: 'Promo Daftar 5 Gratis 1' },
  { id: 'la', image: '/brochures/umroh-la.png', title: 'Land Arrangement (LA)' }
];

export default function BrochureGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section className="w-full py-16 lg:py-24 bg-midnight text-white bg-blend-overlay relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sahara/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="text-center mb-12">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="font-display text-h2 md:text-display-sm mb-4"
            >
              E-Brosur Paket Kami
            </motion.h2>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-platinum text-body-lg max-w-2xl mx-auto"
            >
             Lihat rincian lengkap akomodasi, hotel bintang terdekat, dan jadwal rute perjalanan (9 Hari & 12 Hari) pada brosur di bawah ini.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 max-w-sm sm:max-w-none mx-auto">
          {brochures.map((item, index) => (
             <motion.button 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
               key={item.id} 
               className="relative group cursor-pointer aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-sahara focus-visible:ring-offset-2 focus-visible:ring-offset-midnight shadow-lg bg-[#141b2a] text-left"
               onClick={() => setSelectedImage(item.image)}
               aria-label={`Lihat ${item.title}`}
             >
               <img 
                 src={item.image} 
                 alt={item.title} 
                 loading="lazy"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
               />
               
               {/* Overlay with Zoom Icon */}
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                 <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                   <ZoomIn size={24} />
                 </div>
               </div>

               {/* Text Gradient Overlay */}
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-5 z-20">
                  <p className="font-semibold text-sm md:text-base text-white">{item.title}</p>
               </div>
             </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md cursor-zoom-out"
            style={{ backgroundColor: 'rgba(10, 14, 23, 0.95)' }} // Midnight color with opacity
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 transition-all text-white outline-none focus-visible:ring-2 focus-visible:ring-sahara focus-visible:ring-offset-2 focus-visible:ring-offset-midnight z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Tutup brosur"
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              src={selectedImage} 
              alt="Expanded Brochure" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default bg-black/20" 
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
