import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { ORGANISATION_INFO } from '../data/contentData';

interface NavbarProps {
  onOpenConsultationModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner - Subtle brand transition notice */}
      <div className="bg-[#31493F] text-[#F5EFE6] px-4 py-1.5 text-xs text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full text-[11px] font-semibold text-amber-200">
          <Sparkles className="w-3 h-3" /> Brand Update
        </span>
        <span>
          <strong className="text-white">NeuroGrowth Hub</strong> — Formerly known as <em>{ORGANISATION_INFO.formerName}</em>
        </span>
        <span className="hidden md:inline-block text-white/50">|</span>
        <a 
          href={`tel:${ORGANISATION_INFO.phone.replace(/[^0-9+]/g, '')}`} 
          className="hidden md:inline-flex items-center gap-1 hover:text-amber-200 transition-colors"
        >
          <Phone className="w-3 h-3" /> {ORGANISATION_INFO.phone}
        </a>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E6DFD5] py-3' 
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-[#4A6B5D] text-white flex items-center justify-center shadow-sm group-hover:bg-[#31493F] transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-9" />
                <path d="M12 13C8 13 4 10 4 6c0 0 3-1 6 1 1-2 3-3 5-3 3 0 5 2 5 5 0 3-3 4-8 4z" />
                <circle cx="12" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#222623] group-hover:text-[#4A6B5D] transition-colors">
                NeuroGrowth<span className="text-[#C86D51]">.</span>
              </span>
              <span className="text-[10px] tracking-wider text-[#6B7280] uppercase font-semibold">
                Hub &bull; Educational & Dev Support
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-[#4A6B5D] bg-[#EEF3F0] font-semibold' 
                      : 'text-[#4B5563] hover:text-[#222623] hover:bg-[#F5EFE6]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`https://wa.me/${ORGANISATION_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-[#31493F] bg-[#EEF3F0] hover:bg-[#31493F] hover:text-white transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultationModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4A6B5D] text-white text-sm font-medium hover:bg-[#31493F] active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={onOpenConsultationModal}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#4A6B5D] text-white"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#222623] hover:bg-[#F5EFE6] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E6DFD5] bg-[#FAF8F5] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-[#222623] hover:bg-[#EEF3F0] hover:text-[#4A6B5D] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E6DFD5] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4A6B5D] text-white font-medium text-sm shadow-sm"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${ORGANISATION_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E6DFD5] text-[#31493F] text-xs font-medium bg-white"
              >
                <Phone className="w-3.5 h-3.5" /> Call Us: {ORGANISATION_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
