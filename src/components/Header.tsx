import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

export default function Header({ onJoinClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Membership Plans', href: '#plans' },
    { label: 'Eligibility', href: '#eligibility' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-neutral-900/95 text-white'
    }`}>
      {/* Top Banner indicating Flag colors & Hotline */}
      <div className="relative w-full h-1 bg-gradient-to-r from-[#198754] via-black to-[#fd7e14]" />
      
      <div className="bg-neutral-900/5 py-1.5 px-4 text-xs border-b border-neutral-800/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-sans">
              <span className="inline-block w-2.5 h-2 bg-emerald-600 rounded-xs" />
              <span>Zambian community support scheme in the UK</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:info@twendezambia.co.uk" className="hover:text-amber-500 transition-colors">
              info@twendezambia.co.uk
            </a>
            <a href="tel:+447376575093" className="flex items-center gap-1 hover:text-amber-500 transition-colors">
              <Phone className="w-3.5 h-3.5 inline text-amber-500" />
              +44 7376 575093
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo element */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            id="logo-link"
          >
            <div className="p-1.5 rounded-lg bg-emerald-600 text-white group-hover:bg-emerald-500 transition-colors">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className={`block font-bold tracking-tight text-lg leading-tight ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
                Twende Zambia <span className="text-[#fd7e14]">UK</span>
              </span>
              <span className={`block text-[10px] tracking-widest uppercase font-semibold ${isScrolled ? 'text-gray-500' : 'text-gray-400'}`}>
                Community Association
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  isScrolled ? 'text-neutral-600' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onJoinClick}
              className="ml-4 px-4.5 py-2 text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm flex items-center gap-1.5 transition-all hover:scale-103"
              id="header-join-btn"
            >
              Join Now
            </button>
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden gap-3">
            <button
              onClick={onJoinClick}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
              id="header-mobile-cta-btn"
            >
              Join Group
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none ${
                isScrolled ? 'text-neutral-800' : 'text-white hover:text-black'
              }`}
              id="hamburger-btn"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[93px] bg-neutral-900 border-t border-neutral-800 shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-drawer"
      >
        <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-100px)] overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-300 hover:text-white hover:bg-neutral-800 transition-all border-l-2 border-transparent hover:border-emerald-600"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onJoinClick();
              }}
              className="w-full py-3 text-center text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md block transition-all"
            >
              Join Paid Membership
            </button>
            <div className="text-center text-xs text-neutral-400 space-y-1 pt-2">
              <p>Email: info@twendezambia.co.uk</p>
              <p>Phone: +44 7376 575093</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
