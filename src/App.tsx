import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import Eligibility from './components/Eligibility';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JoinFormModal from './components/JoinFormModal';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const handleLearnMore = () => {
    const el = document.querySelector('#about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white transition-all text-neutral-800 selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth">
      {/* Navigation Header bar */}
      <Header onJoinClick={() => setIsJoinOpen(true)} />

      {/* Main Single Page Sections */}
      <main>
        {/* HERO SECTION */}
        <Hero 
          onJoinClick={() => setIsJoinOpen(true)} 
          onLearnMoreClick={handleLearnMore} 
        />

        {/* ABOUT US & COMPARISON CALCULATOR */}
        <About />

        {/* HOW IT WORKS DYNAMIC SEQUENCE */}
        <HowItWorks />

        {/* MEMBERSHIP PLANS CARDS */}
        <Plans onJoinClick={() => setIsJoinOpen(true)} />

        {/* ELIGIBILITY COMPLIANCE WIZARD */}
        <Eligibility />

        {/* TESTIMONIALS COMMUNITY REVIEWS */}
        <Testimonials />

        {/* INTERACTIVE FAQ ACCORDIONS */}
        <FaqSection />

        {/* DIRECT MESSAGES & WHATSAPP SHORTCUTS */}
        <ContactSection onJoinClick={() => setIsJoinOpen(true)} />
      </main>

      {/* COMPREHENSIVE FOOTER */}
      <Footer onJoinClick={() => setIsJoinOpen(true)} />

      {/* MULTI-STAGE MEMBERSHIP FORM */}
      <JoinFormModal 
        isOpen={isJoinOpen} 
        onClose={() => setIsJoinOpen(false)} 
      />
    </div>
  );
}
