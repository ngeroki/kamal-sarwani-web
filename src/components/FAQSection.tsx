'use client';
import React, { useState } from 'react';
import { faqItems } from '@/data/content';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full section-spacing bg-white">
      <div className="container-main max-w-[800px]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald/10 text-emerald mb-6">
            <MessageCircleQuestion size={32} />
          </div>
          <h2 className="font-display text-h2 md:text-display-sm text-midnight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-card transition-colors duration-300 ${isOpen ? 'border-sahara bg-alabaster shadow-sm' : 'border-platinum/20 hover:border-platinum/50'}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sahara rounded-card"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold pr-8 ${isOpen ? 'text-sahara text-h3' : 'text-midnight text-body-lg'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={24} 
                    className={`shrink-0 transition-transform duration-300 ease-apple ${isOpen ? 'text-sahara rotate-180' : 'text-platinum'}`} 
                  />
                </button>

                {/* Animated content body setup using maxHeight transitions technique on the actual framework style or mapped container */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-6 px-6' : 'max-h-0 opacity-0 px-6'}`}
                >
                  <p className="text-body text-midnight pt-2 border-t border-platinum/10 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
