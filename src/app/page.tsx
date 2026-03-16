import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import FeaturesSection from '@/components/FeaturesSection';
import PackageComparison from '@/components/PackageComparison';
import BrochureGallery from '@/components/BrochureGallery';
import PricingCalculator from '@/components/PricingCalculator';
import MuthawifSection from '@/components/MuthawifSection';
import SocialProof from '@/components/SocialProof';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <PackageComparison />
      <BrochureGallery />
      <PricingCalculator />
      <MuthawifSection />
      <SocialProof />
      <FAQSection />
      <Footer />
    </main>
  );
}
