import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { HERO_IMAGE_PATH, ORGANISATION_INFO } from '../data/contentData';

interface HeroProps {
  onOpenConsultationModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6]/50 to-[#FAF8F5]">
      
      {/* Soft background ambient shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3F0] border border-[#4A6B5D]/20 text-[#31493F] text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4A6B5D] animate-pulse" />
              <span>Personalized Child Development & Education</span>
              <span className="text-[#8B9892]">&bull;</span>
              <span className="text-[#C86D51] font-medium">Formerly Little Treasures Consult</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#222623] leading-[1.15]">
              Helping Every Child <br className="hidden sm:inline" />
              <span className="italic text-[#4A6B5D] font-normal">Grow</span>,{' '}
              <span className="text-[#C86D51]">Communicate</span> &{' '}
              <span className="underline decoration-[#C5A059]/40 decoration-wavy decoration-2">Thrive</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              {ORGANISATION_INFO.subtagline}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-book-btn"
                onClick={onOpenConsultationModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#4A6B5D] text-white text-base font-semibold hover:bg-[#31493F] shadow-md hover:shadow-lg active:scale-[0.99] transition-all"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-explore-btn"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#E6DFD5] text-[#222623] text-base font-medium hover:bg-[#F5EFE6] hover:border-[#4A6B5D]/30 transition-all shadow-xs"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 border-t border-[#E6DFD5]/80 w-full">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-[#4B5563]">
                <span className="inline-flex items-center gap-1.5 text-[#31493F]">
                  <CheckCircle2 className="w-4 h-4 text-[#4A6B5D]" /> Individualized support
                </span>
                <span className="text-gray-300">&bull;</span>
                <span className="inline-flex items-center gap-1.5 text-[#31493F]">
                  <Heart className="w-4 h-4 text-[#C86D51]" /> Family-centred care
                </span>
                <span className="text-gray-300">&bull;</span>
                <span className="inline-flex items-center gap-1.5 text-[#31493F]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" /> Child-focused practice
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Backing Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#4A6B5D]/20 via-amber-200/30 to-[#C86D51]/10 rounded-[2.5rem] blur-xl transform rotate-1 pointer-events-none" />
              
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white">
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Specialist pediatric therapist engaging positively with a young child in a calm session room"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Highlight Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E6DFD5] shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF3F0] flex items-center justify-center text-[#4A6B5D] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#222623]">Evidence-Informed Practice</p>
                    <p className="text-[11px] text-[#6B7280]">Tailored specifically to your child’s unique needs and strengths.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
