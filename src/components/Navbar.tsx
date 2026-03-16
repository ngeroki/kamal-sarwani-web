'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check immediately on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled 
            ? 'bg-alabaster/95 backdrop-blur-md border-b border-platinum/20 shadow-sm py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-main flex items-center justify-between min-h-[60px] md:min-h-[80px]">
          
          {/* MOBILE: Left Hamburger */}
          <div className="md:hidden flex-1 flex justify-start">
            <button 
              className={`p-2 -ml-1 transition-colors ${isScrolled ? 'text-midnight hover:text-sahara' : 'text-alabaster hover:text-sahara'}`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
               <Menu size={32} strokeWidth={1.5} />
            </button>
          </div>

          {/* DESKTOP: Left Nav Links */}
          <div className="hidden md:flex flex-1 justify-start items-center gap-8 xl:gap-12">
            <a href="#packages" className={`text-sm uppercase tracking-[0.1em] font-semibold transition-colors ${isScrolled ? 'text-midnight hover:text-sahara' : 'text-alabaster hover:text-sahara'}`}>Paket Umrah</a>
            <a href="#calculator" className={`text-sm uppercase tracking-[0.1em] font-semibold transition-colors ${isScrolled ? 'text-midnight hover:text-sahara' : 'text-alabaster hover:text-sahara'}`}>Simulasi Harga</a>
          </div>

          {/* CENTER: Logo */}
          <a href="#" className="flex-shrink-0 flex justify-center transform hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group">
            {/* The image provided by the user will be properly scaled here */}
            {/* When at the top (transparent), it is inverted to pure white. On scroll (light bg), original navy & gold colors are shown. */}
            <img 
              src="/logo-transparent.png" 
              alt="Kamal Sarwani Logo" 
              className={`object-contain transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isScrolled ? 'h-[56px] md:h-[70px]' : 'h-[64px] md:h-[90px] brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]'
              }`}
            />
          </a>

          {/* DESKTOP: Right Nav Links & CTA */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8 xl:gap-12">
            <a href="#faq" className={`text-sm uppercase tracking-[0.1em] font-semibold transition-colors ${isScrolled ? 'text-midnight hover:text-sahara' : 'text-alabaster hover:text-sahara'}`}>FAQ</a>
            <a 
              href="https://wa.me/966566885319?text=Halo%20Admin%20Kamal%20Sarwani,%0ASaya%20ingin%20berkonsultasi%20mengenai%20paket%20Umrah." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-6 py-2.5 rounded-capsule font-semibold text-sm tracking-wide transition-all flex items-center gap-2 ${
                isScrolled 
                  ? 'bg-midnight text-white hover:bg-sahara focus:ring-2 focus:ring-sahara focus:ring-offset-2' 
                  : 'bg-sahara text-midnight hover:bg-[#d6b46b] shadow-[0_0_15px_rgba(197,160,89,0.3)]'
              }`}
            >
              <MessageCircle size={18} />
              Hubungi Kami
            </a>
          </div>

          {/* MOBILE: Right CTA Icon */}
          <div className="md:hidden flex-1 flex justify-end">
             <a 
              href="https://wa.me/966566885319?text=Halo%20Admin%20Kamal%20Sarwani,%0ASaya%20ingin%20berkonsultasi%20mengenai%20paket%20Umrah." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 -mr-1 transition-colors drop-shadow-md ${isScrolled ? 'text-midnight hover:text-sahara' : 'text-sahara hover:text-alabaster'}`}
              aria-label="Contact Admin via WhatsApp"
             >
               <MessageCircle size={32} strokeWidth={1.5} />
             </a>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (Full screen overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
           <motion.div 
             initial={{ opacity: 0, y: '-10px' }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.98 }}
             transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
             className="fixed inset-0 z-[100] bg-white flex flex-col"
           >
             <div className="flex justify-between items-center p-6 border-b border-platinum/20 pt-8">
               <img src="/logo-transparent.png" alt="Logo" className="h-[80px] w-auto object-contain" />
               <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="p-3 bg-alabaster rounded-full text-midnight hover:text-sahara transition-colors"
                 aria-label="Close menu"
               >
                 <X size={28} strokeWidth={2} />
               </button>
             </div>
             
             <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8 pb-20">
                <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-semibold text-midnight hover:text-sahara transition-colors">Paket Umrah</a>
                <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-semibold text-midnight hover:text-sahara transition-colors">Simulasi Harga</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-semibold text-midnight hover:text-sahara transition-colors">FAQ</a>
                
                <a 
                  href="https://wa.me/966566885319?text=Halo%20Admin%20Kamal%20Sarwani,%0ASaya%20ingin%20berkonsultasi%20mengenai%20paket%20Umrah." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 bg-sahara text-midnight px-8 py-4 rounded-capsule font-bold text-lg w-full max-w-[280px] text-center flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(197,160,89,0.3)] hover:brightness-110"
                >
                  <MessageCircle size={24} />
                  Hubungi Admin
                </a>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
