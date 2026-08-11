import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquareHeart, 
  HeartHandshake, 
  BookOpenCheck, 
  Sparkles, 
  Users, 
  UserCheck, 
  ArrowUpRight,
  Info,
  Check,
  Clock,
  Zap
} from 'lucide-react';
import { SERVICES_DATA } from '../data/contentData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultationModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenConsultationModal }) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  // Helper to resolve icon components dynamically
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareHeart':
        return <MessageSquareHeart className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3F0] text-[#4A6B5D] text-xs font-semibold uppercase tracking-wider border border-[#4A6B5D]/15">
              <Zap className="w-3.5 h-3.5 text-[#C86D51]" />
              <span>Individualized Care Areas</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222623] tracking-tight">
              Support Designed Around Your Child
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed">
              We offer structured, compassionate support programs tailored to help children express themselves, learn effectively, regulate emotions, and foster lasting independence.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenConsultationModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4A6B5D] text-white text-sm font-semibold hover:bg-[#31493F] transition-all shadow-xs"
            >
              Request Custom Support Plan
            </button>
          </div>
        </div>

        {/* Six Service Cards Grid with Dynamic Hover Tooltip/Expanded Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isHovered = hoveredServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative group ${
                  isHovered 
                    ? 'border-[#4A6B5D] shadow-xl ring-2 ring-[#4A6B5D]/20 -translate-y-1 z-20' 
                    : 'border-[#E6DFD5] hover:border-[#4A6B5D]/50 hover:shadow-md z-10'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Header row with Icon, Badge & Hover Indicator */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      isHovered ? 'bg-[#31493F] text-white shadow-xs' : 'bg-[#EEF3F0] text-[#4A6B5D]'
                    }`}>
                      {getServiceIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <span className="text-[11px] font-semibold text-[#4A6B5D] bg-[#EEF3F0] px-2.5 py-1 rounded-full border border-[#4A6B5D]/10">
                          {service.badge}
                        </span>
                      )}

                      {/* Tooltip Quick Peek Icon */}
                      <span className={`p-1 rounded-full transition-colors ${
                        isHovered ? 'bg-[#FAEEEA] text-[#C86D51]' : 'text-[#9CA3AF]'
                      }`}>
                        <Info className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#222623] group-hover:text-[#31493F] transition-colors">
                    {service.title}
                  </h3>

                  {/* Standard Short Description */}
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Target Focus Tag */}
                  {service.targetAges && (
                    <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium pt-1">
                      <span>Target Focus:</span>
                      <span className="text-[#222623] font-semibold bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E6DFD5]">
                        {service.targetAges}
                      </span>
                    </div>
                  )}

                  {/* Dynamic Hover Tooltip / Expanded Preview Popup */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="mt-4 p-4 rounded-2xl bg-[#EEF3F0] border border-[#4A6B5D]/30 shadow-inner space-y-2"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#31493F]">
                          <Zap className="w-3.5 h-3.5 text-[#C86D51]" />
                          <span>Quick Insight & Format</span>
                        </div>

                        {service.hoverHighlight && (
                          <p className="text-xs text-[#222623] font-medium leading-relaxed">
                            {service.hoverHighlight}
                          </p>
                        )}

                        {service.typicalFormat && (
                          <div className="flex items-center gap-1.5 text-[11px] text-[#4B5563] pt-1">
                            <Clock className="w-3 h-3 text-[#C86D51]" />
                            <span>Format: <strong>{service.typicalFormat}</strong></span>
                          </div>
                        )}

                        {/* Top 2 Outcomes Highlights */}
                        <div className="pt-2 border-t border-[#4A6B5D]/15 space-y-1">
                          {service.outcomes.slice(0, 2).map((out, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#31493F]">
                              <Check className="w-3 h-3 text-[#4A6B5D] shrink-0 mt-0.5" />
                              <span className="font-medium">{out}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Footer Action Link */}
                <div className="pt-6 mt-6 border-t border-[#F5EFE6] flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A6B5D] group-hover:text-[#31493F] transition-colors focus:outline-none"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C86D51]" />
                  </button>

                  <span className="text-xs text-[#9CA3AF] group-hover:text-[#4A6B5D] font-medium transition-colors">
                    1:1 Care
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
