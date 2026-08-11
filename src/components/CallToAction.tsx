import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { ORGANISATION_INFO } from '../data/contentData';

interface CallToActionProps {
  onOpenConsultationModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="py-16 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Warm Card */}
        <div className="relative rounded-[2.5rem] bg-[#31493F] text-white p-8 sm:p-14 md:p-16 overflow-hidden shadow-xl border border-[#4A6B5D]">
          
          {/* Subtle Background Accent Blurs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C86D51]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-200 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Child & Family Support</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's Help Your Child Take the Next Step.
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              Whether you're looking for communication support, behavioural guidance, academic support or developmental intervention, we're here to help.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-book-btn"
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-amber-300 text-[#222623] text-base font-bold hover:bg-amber-200 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5 text-[#222623]" />
              </button>

              <a
                href={`tel:${ORGANISATION_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-base font-medium transition-all backdrop-blur-sm border border-white/20"
              >
                <PhoneCall className="w-4 h-4 text-emerald-200" />
                <span>Call {ORGANISATION_INFO.phone}</span>
              </a>
            </div>

            <p className="text-xs text-emerald-200/70 pt-2">
              Confidential consultation &bull; No obligation &bull; Family-centred discussion
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
