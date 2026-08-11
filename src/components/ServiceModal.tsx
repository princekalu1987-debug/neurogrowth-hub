import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookConsultation
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E6DFD5] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6B7280] hover:bg-[#F5EFE6] transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center gap-2">
            {service.badge && (
              <span className="text-xs font-bold text-[#4A6B5D] bg-[#EEF3F0] px-3 py-1 rounded-full">
                {service.badge}
              </span>
            )}
            {service.targetAges && (
              <span className="text-xs text-[#6B7280] font-medium">
                Focus: {service.targetAges}
              </span>
            )}
          </div>

          <h3 className="font-serif text-3xl font-bold text-[#222623]">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div className="mt-6 space-y-4 text-sm text-[#4B5563] leading-relaxed">
          <p className="text-base font-medium text-[#222623]">
            {service.shortDescription}
          </p>
          <p>
            {service.fullDescription}
          </p>
        </div>

        {/* Key Outcomes */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A6B5D]">
            <Sparkles className="w-4 h-4" />
            <span>Key Developmental Focus Areas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {service.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-[#222623]">
                <CheckCircle2 className="w-4 h-4 text-[#4A6B5D] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-8 pt-6 border-t border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#E6DFD5] text-xs font-semibold text-[#4B5563] hover:bg-[#F5EFE6]"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              onBookConsultation(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4A6B5D] text-white text-xs font-bold hover:bg-[#31493F] transition-all shadow-xs"
          >
            <span>Book Consultation for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
