'use client';
import React, { useState, useMemo } from 'react';
import { Calculator, Users, Info, Send, Building, Clock } from 'lucide-react';

// Pricing Matrix based on Brochures
type DurationOption = 9 | 12;

interface HotelVariant {
  makkah: string;
  madinah: string;
  price9: number;
  price12: number;
  note?: string;
}

interface PackageData {
  id: string;
  name: string;
  minPax: number;
  maxPax: number;
  promoEligible: boolean;
  variants: HotelVariant[];
}

const packageMatrix: PackageData[] = [
  {
    id: 'keluarga',
    name: 'Paket Keluarga (Promo Daftar 5 Gratis 1)',
    minPax: 5,
    maxPax: 150,
    promoEligible: true,
    variants: [
      { makkah: 'Biari (Shuttle)', madinah: 'Jauharat (3D)', price9: 28900000, price12: 30500000 },
      { makkah: 'Jada (550m)', madinah: 'Jauharat (3D)', price9: 29700000, price12: 31500000 },
      { makkah: 'Snood Ajiad', madinah: 'Jauharat (3D)', price9: 30500000, price12: 32500000 },
      { makkah: 'Zam-Zam (VVIP)', madinah: 'Mihrob Taoba', price9: 35500000, price12: 41500000 },
    ]
  },
  {
    id: 'reguler',
    name: 'Paket Umroh Reguler (Al Amin Handling)',
    minPax: 1,
    maxPax: 150,
    promoEligible: false,
    variants: [
      { makkah: 'Hotel Biari', madinah: 'Jauharat Rasheed', price9: 25000000, price12: 26000000, note: '(Shuttle Bus Nyaman)' },
      { makkah: 'Jada / Al Fares', madinah: 'Jauharat Rasheed', price9: 25600000, price12: 27500000, note: '(Hanya 550m)' },
      { makkah: 'Snood Ajiad / Zoar Al Bait', madinah: 'Jauharat Rasheed', price9: 26600000, price12: 28000000, note: '(Dekat)' },
      { makkah: 'Zam-Zam / Sofah', madinah: 'Mihrob Taoba', price9: 31500000, price12: 37500000, note: '(Persis Depan Masjid)' },
    ]
  },
  {
    id: 'la',
    name: 'Land Arrangement / B2B (Min. 35 Pax)',
    minPax: 35,
    maxPax: 200,
    promoEligible: false,
    variants: [
      { makkah: 'Jadda Ajiad', madinah: 'Mihrob Taiba', price9: 8800000, price12: 10700000 },
      { makkah: 'Grand Al Massa', madinah: 'Mihrob Taiba', price9: 9500000, price12: 11500000 },
      { makkah: 'Zam-Zam', madinah: 'Mihrob Taiba', price9: 13700000, price12: 16900000 },
      { makkah: 'Zam-Zam', madinah: 'Al Aqik', price9: 17200000, price12: 22500000 },
    ]
  }
];

export default function PricingCalculator() {
  const [packageId, setPackageId] = useState<string>('keluarga');
  const [duration, setDuration] = useState<DurationOption>(9);
  const [variantIndex, setVariantIndex] = useState<number>(0);
  const [paxCount, setPaxCount] = useState<number>(6);

  const selectedPkgData = useMemo(() => packageMatrix.find(p => p.id === packageId) || packageMatrix[0], [packageId]);
  const selectedVariant = selectedPkgData.variants[variantIndex] || selectedPkgData.variants[0];

  const handlePackageChange = (id: string) => {
    setPackageId(id);
    const newPkg = packageMatrix.find(p => p.id === id);
    if (newPkg) {
      if (paxCount < newPkg.minPax) setPaxCount(newPkg.minPax);
      if (paxCount > newPkg.maxPax) setPaxCount(newPkg.maxPax);
      setVariantIndex(0); // reset variant selection
    }
  };

  const promoTrigger = 5; // "Daftar 5 Gratis 1"

  const { finalPrice, totalDiscount, basePricePerPax, isPromoActive } = useMemo(() => {
    const baseAmount = duration === 9 ? selectedVariant.price9 : selectedVariant.price12;
    const isPromoEligible = selectedPkgData.promoEligible;

    let freePax = 0;
    if (isPromoEligible) {
      freePax = Math.floor(paxCount / (promoTrigger + 1));
    }
    const paidPax = paxCount - freePax;

    const finalTotalPrice = paidPax * baseAmount;
    const discountAmountTotal = freePax * baseAmount;

    return { 
      finalPrice: finalTotalPrice, 
      totalDiscount: discountAmountTotal,
      basePricePerPax: baseAmount,
      isPromoActive: isPromoEligible
    };
  }, [paxCount, duration, selectedVariant, selectedPkgData.promoEligible]);

  const formatIDR = (val: number) => {
    return `Rp ${val.toLocaleString('id-ID')}`;
  };

  const handleCheckoutWA = () => {
    if (packageId !== 'la' && paxCount < selectedPkgData.minPax) return;
    
    let text = `Halo Admin Kamal Sarwani,\nSaya ingin berdiskusi mengenai reservasi Umrah.\n\n`;
    text += `*Paket:* ${selectedPkgData.name}\n`;
    text += `*Durasi:* ${duration} Hari\n`;
    text += `*Hotel Makkah:* ${selectedVariant.makkah}\n`;
    text += `*Hotel Madinah:* ${selectedVariant.madinah}\n`;
    
    if (packageId === 'la') {
      text += `*Tipe:* B2B / Land Arrangement\n`;
      text += `*Estimasi Jumlah Grup:* ${paxCount} Pax\n\nMohon informasi lebih lanjut mengenai ketersediaan dan detail harga.`;
    } else {
      text += `*Jumlah Jemaah:* ${paxCount} pax\n\n`;
      text += `*Estimasi Total:* ${formatIDR(finalPrice)}`;
      if (totalDiscount > 0) text += ` (Hemat ${formatIDR(totalDiscount)}!)`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/966566885319?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className="w-full section-spacing bg-white">
      <div className="container-main max-w-[1000px]">
        
        {/* Header */}
        <div className="text-center mb-12 px-4 md:px-0">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sahara/10 text-sahara mb-6">
            <Calculator size={32} />
          </div>
          <h2 className="font-display text-h2 md:text-display-sm text-midnight mb-4">
            Kalkulator Biaya Akurat
          </h2>
          <p className="text-body-lg text-platinum max-w-[600px] mx-auto">
            Hitung estimasi transparan biaya perjalanan Anda berdasarkan durasi dan pilihan akomodasi hotel yang tersedia di brosur.
          </p>
        </div>

        {/* Calculator Widget Wrapper */}
        <div className="bg-alabaster rounded-[24px] border border-platinum/20 p-5 sm:p-8 md:p-10 shadow-lg mt-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-10">
            
            {/* Left: Input Controls */}
            <div className="xl:col-span-7 space-y-8">
              
              {/* Package & Duration Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body font-semibold text-midnight mb-3">Pilih Paket</label>
                  <div className="flex flex-col gap-2">
                    {packageMatrix.map(p => (
                      <button 
                        key={p.id}
                        onClick={() => handlePackageChange(p.id)}
                        className={`text-left py-3 px-4 rounded-lg text-sm font-semibold transition-all border ${
                          packageId === p.id 
                            ? 'bg-midnight text-white border-midnight shadow-md' 
                            : 'bg-white text-platinum border-platinum/20 hover:border-platinum/50'
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-body font-semibold text-midnight mb-3 flex items-center gap-2">
                    <Clock size={16} /> Durasi Perjalanan
                  </label>
                  <div className="flex bg-white rounded-lg p-1 border border-platinum/20 h-max">
                    <button 
                      onClick={() => setDuration(9)}
                      className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-all ${
                        duration === 9 ? 'bg-sahara text-midnight shadow' : 'text-platinum hover:text-midnight'
                      }`}
                    >
                      9 Hari
                    </button>
                    <button 
                      onClick={() => setDuration(12)}
                      className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-all ${
                        duration === 12 ? 'bg-sahara text-midnight shadow' : 'text-platinum hover:text-midnight'
                      }`}
                    >
                      12 Hari
                    </button>
                  </div>
                </div>
              </div>

              {/* Hotel Variant Selector */}
              <div>
                <label className="block text-body font-semibold text-midnight mb-3 flex items-center gap-2">
                  <Building size={16} /> Berdasarkan Hotel Pilihan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPkgData.variants.map((v, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setVariantIndex(idx)}
                      className={`text-left p-4 rounded-lg border-2 transition-all flex flex-col justify-between ${
                        variantIndex === idx 
                          ? 'border-sahara bg-sahara/5 shadow-sm' 
                          : 'border-platinum/20 bg-white hover:border-platinum/50'
                      }`}
                    >
                      <div>
                        <div className="text-xs uppercase font-bold text-platinum tracking-wide mb-1">Makkah</div>
                        <div className="text-sm font-bold text-midnight leading-snug">{v.makkah}</div>
                        {v.note && <div className="text-xs text-platinum italic mt-0.5">{v.note}</div>}
                        
                        <div className="text-xs uppercase font-bold text-platinum tracking-wide mt-3 mb-1">Madinah</div>
                        <div className="text-sm font-bold text-midnight leading-snug mb-3">{v.madinah}</div>
                      </div>
                      
                      {/* Price Badge Preview */}
                      <div className="mt-auto w-full border-t border-platinum/20 pt-3 flex justify-between items-center text-xs font-semibold">
                        <span className="text-platinum">Harga Base</span>
                        <span className="text-emerald text-sm">Rp {(duration === 9 ? v.price9 : v.price12).toLocaleString('id-ID').replace(',00', '')}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Input */}
              {packageId === 'la' ? (
                <div className="bg-sahara/10 border border-sahara/30 p-6 rounded-xl mt-4">
                  <div className="flex items-start gap-4">
                    <Info className="text-sahara shrink-0 mt-1" size={24} />
                    <div className="space-y-4 flex-1">
                      <div>
                        <p className="font-semibold text-midnight text-lg mb-1">Paket B2B Khusus Agen</p>
                        <p className="text-platinum text-sm leading-relaxed">Paket Land Arrangement (LA) membutuhkan minimum pesanan 35 pax. <strong className="text-midnight">Harga khusus handling Saudi (Belum termasuk Tiket Pesawat).</strong></p>
                      </div>
                      
                      <div className="bg-white/50 p-4 rounded-lg border border-platinum/20">
                        <div className="flex justify-between items-end mb-2">
                          <label className="block text-sm font-semibold text-midnight">Estimasi Jumlah Grup</label>
                          <span className="text-body font-bold text-emerald flex items-center gap-2">
                            <Users size={16} />
                            {paxCount} Orang
                          </span>
                        </div>
                        <input 
                          type="range" 
                          min={selectedPkgData.minPax} 
                          max={selectedPkgData.maxPax} 
                          value={paxCount} 
                          onChange={(e) => setPaxCount(parseInt(e.target.value))}
                          className="w-full h-2 bg-platinum/30 rounded-full appearance-none cursor-pointer accent-sahara outline-none focus:ring-2 focus:ring-sahara focus:ring-offset-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-5 sm:p-6 rounded-xl border border-platinum/20">
                  <div className="flex justify-between items-end mb-4">
                    <label className="block text-body font-semibold text-midnight">Jumlah Jemaah</label>
                    <span className="text-h3 font-display font-bold text-emerald flex items-center gap-2">
                      <Users size={20} />
                      {paxCount} Orang
                    </span>
                  </div>
                  {/* Apple-style thick slider */}
                  <input 
                    type="range" 
                    min={selectedPkgData.minPax} 
                    max={selectedPkgData.maxPax} 
                    value={paxCount} 
                    onChange={(e) => setPaxCount(parseInt(e.target.value))}
                    className="w-full h-3 bg-platinum/30 rounded-full appearance-none cursor-pointer accent-sahara outline-none focus:ring-2 focus:ring-sahara focus:ring-offset-2"
                  />
                  {isPromoActive && paxCount < 6 && (
                    <p className="text-sm font-medium text-sahara mt-4 flex items-start gap-2">
                      <Info size={16} className="shrink-0 mt-0.5"/>
                      Geser hingga {promoTrigger + 1} orang untuk mendapatkan 1 pax GRATIS!
                    </p>
                  )}
                  {isPromoActive && paxCount >= 6 && (
                    <p className="text-sm font-semibold text-success mt-4 bg-success/10 px-3 py-2 rounded-md inline-block">
                      Selamat! Anda mendapatkan {Math.floor(paxCount / (promoTrigger + 1))} tiket GRATIS dari promo Keluarga.
                    </p>
                  )}
                </div>
              )}

            </div>

            {/* Right: Output & Result Panel */}
            <div className="xl:col-span-5 bg-midnight rounded-[20px] p-6 lg:p-8 text-white flex flex-col justify-between">
               
               <div>
                  <div className="text-platinum mb-2 uppercase tracking-wide text-xs font-semibold">Taksiran Biaya</div>
                  <div className="flex items-end gap-2 border-b border-platinum/20 pb-6 mb-6">
                    {packageId === 'la' ? (
                      <span className="font-display font-bold text-3xl sm:text-4xl text-sahara">Harga B2B</span>
                    ) : (
                      <span className="font-display font-bold text-3xl sm:text-4xl lg:text-[40px] text-sahara tracking-tight leading-none">{formatIDR(finalPrice)}</span>
                    )}
                  </div>

                  {/* Summary Rows */}
                  {packageId !== 'la' ? (
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between text-platinum items-center">
                        <span>Harga per Pax (Base)</span>
                        <span className="font-medium whitespace-nowrap text-base">{formatIDR(basePricePerPax)}</span>
                      </div>
                      <div className="flex justify-between text-platinum items-center">
                        <span>Subtotal ({paxCount} pax)</span>
                        <span className="font-medium whitespace-nowrap text-base">{formatIDR(basePricePerPax * paxCount)}</span>
                      </div>
                      {totalDiscount > 0 && (
                        <div className="flex justify-between text-success font-semibold px-3 py-3 bg-success/10 rounded-md mt-4">
                          <span>Hemat Promosi (Gratis {Math.floor(paxCount / 6)} Pax)</span>
                          <span className="whitespace-nowrap">- {formatIDR(totalDiscount)}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between text-platinum items-center">
                        <span>Estimasi Harga per Pax</span>
                        <span className="font-bold text-sahara whitespace-nowrap text-lg">{formatIDR(basePricePerPax)}</span>
                      </div>
                      <div className="text-xs text-platinum/60 mt-4 leading-relaxed bg-white/5 p-4 rounded text-center">
                        Total harga akhir akan bergantung pada ketersediaan seat maskapai dan finalisasi jumlah pasti grup Anda.
                      </div>
                    </div>
                  )}

                </div>

               {/* Convert Action */}
               <button 
                  onClick={handleCheckoutWA}
                  disabled={packageId !== 'la' && paxCount < selectedPkgData.minPax}
                  className="w-full mt-8 bg-sahara hover:bg-[#b08e4a] text-midnight font-bold py-4 rounded-capsule flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                 {packageId === 'la' ? 'Tanya Admin via WA' : 'Amankan Kursi via WA'}
                 <Send size={18} className="ml-2" />
               </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
