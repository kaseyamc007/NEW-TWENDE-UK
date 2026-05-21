import React, { useState } from 'react';
import { Facebook, Mail, Phone, HeartHandshake, ArrowRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  onJoinClick: () => void;
}

export default function Footer({ onJoinClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    
    setSubscribed(true);
    setEmail('');
  };

  const scrollSmoothTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'Register Active Pool', href: '#home' },
    { label: 'About Union', href: '#about' },
    { label: 'How Bereavement Works', href: '#how-it-works' },
    { label: 'Pricing Plans', href: '#plans' }
  ];

  const policyLinks = [
    { label: 'Eligibility Guidelines', href: '#eligibility' },
    { label: 'Interactive FAQs', href: '#faqs' },
    { label: 'Support Contacts', href: '#contact' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-450 text-xs py-16 border-t border-neutral-900 relative">
      
      {/* Dynamic Floating WhatsApp Button */}
      <a
        href="https://wa.me/447376575093"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3 bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 group"
        title="Contact Twende Zambia Registry on WhatsApp"
        id="floating-whatsapp-cta"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold text-xs whitespace-nowrap pr-0 group-hover:pr-2 block pl-0 group-hover:pl-1">
          WhatsApp Support Desk
        </span>
        <MessageSquare className="w-5.5 h-5.5 shrink-0" />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns */}
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900 leading-relaxed text-left">
          
          {/* Col 1: Branding and support message */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-700 text-white">
                <HeartHandshake className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                Twende Zambia <span className="text-[#fd7e14]">UK</span>
              </span>
            </div>
            
            <p className="text-neutral-400">
              Standing Together in Times of Loss. We are an independent, non-partisan, non-profit community union dedicated to relieving the immediate unexpected cost of flight repatriation and funeral arrangements for UK-based Zambian households.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono pt-2 text-neutral-300">
              <a href="tel:+447376575093" className="hover:text-[#fd7e14] transition-colors flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 inline text-emerald-400" />
                +44 7376 575093
              </a>
              <span className="text-neutral-800">|</span>
              <a href="mailto:info@twendezambia.co.uk" className="hover:text-[#fd7e14] transition-colors flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 inline text-emerald-400" />
                info@twendezambia.co.uk
              </a>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-extrabold text-neutral-200 text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 font-medium">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollSmoothTo(link.href); }}
                    className="hover:text-[#fd7e14] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Compliance/Rules links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-extrabold text-neutral-200 text-xs uppercase tracking-wider">Guidelines</h4>
            <ul className="space-y-2 font-medium">
              {policyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollSmoothTo(link.href); }}
                    className="hover:text-[#fd7e14] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter sign-up */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-extrabold text-[#fd7e14] text-xs uppercase tracking-wider">Newsletter updates</h4>
            <p className="text-neutral-400">
              Subscribe to receive quarterly community audits, guideline reviews, and official board briefings.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-900 rounded-lg text-emerald-400 text-center font-bold">
                ✓ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="name@example.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 text-white rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-emerald-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors flex items-center justify-center shrink-0"
                  title="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower footer row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-neutral-500">
          <div>
            <p>© 2026 Twende Zambia UK. All Rights Reserved.</p>
            <p className="mt-1 font-sans text-[10px] text-neutral-600">
              Disclaimer: Twende Zambia UK operates as a mutual support union, not a traditional insurance company. All claims are supported strictly according to community guidelines and general agreement pools.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Facebook Page">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="mailto:info@twendezambia.co.uk" className="hover:text-white transition-colors" title="Email Contact">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
