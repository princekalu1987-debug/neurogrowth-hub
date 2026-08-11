import React from 'react';
import { ORGANISATION_INFO } from '../data/contentData';
import { Facebook, Instagram, Linkedin, Heart, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2421] text-[#E6DFD5] pt-16 pb-12 border-t border-[#31493F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A6B5D] text-white flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22v-9" />
                  <path d="M12 13C8 13 4 10 4 6c0 0 3-1 6 1 1-2 3-3 5-3 3 0 5 2 5 0 3-3 4-8 4z" />
                  <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  NeuroGrowth<span className="text-[#C86D51]">.</span>
                </span>
                <p className="text-[10px] uppercase font-semibold text-emerald-200 tracking-wider">
                  Formerly {ORGANISATION_INFO.formerName}
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              "Helping children grow, communicate, learn and thrive."
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              NeuroGrowth Hub provides individualized developmental, communication, behavioural and educational support tailored to each child's strengths and family priorities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ORGANISATION_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#4A6B5D] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ORGANISATION_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C86D51] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ORGANISATION_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C5A059] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-300">
              <li><a href="#home" className="hover:text-amber-200 transition-colors">Home & Overview</a></li>
              <li><a href="#about" className="hover:text-amber-200 transition-colors">About NeuroGrowth Hub</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Support Services</a></li>
              <li><a href="#approach" className="hover:text-amber-200 transition-colors">Our 4-Step Approach</a></li>
              <li><a href="#resources" className="hover:text-amber-200 transition-colors">Parent Resources & Quiz</a></li>
              <li><a href="#contact" className="hover:text-amber-200 transition-colors">Contact & Enquiries</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Center Details
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p><strong className="text-white">Phone:</strong> {ORGANISATION_INFO.phone}</p>
              <p><strong className="text-white">WhatsApp:</strong> {ORGANISATION_INFO.whatsapp}</p>
              <p><strong className="text-white">Email:</strong> {ORGANISATION_INFO.email}</p>
              <p><strong className="text-white">Address:</strong> {ORGANISATION_INFO.location}</p>
              <p className="text-emerald-300/80 pt-1 font-medium">{ORGANISATION_INFO.workingHours}</p>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} <strong>NeuroGrowth Hub</strong> (formerly <em>{ORGANISATION_INFO.formerName}</em>). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-400">
            <span>Family-Centred Practice</span>
            <span>&bull;</span>
            <span>Child-Focused Practice</span>
            <span>&bull;</span>
            <span>Individualized Care</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
