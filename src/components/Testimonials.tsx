import React from 'react';
import { TESTIMONIALS_DATA } from '../data/contentData';
import { Star, Quote } from 'lucide-react';

/* 
 * =====================================================================
 * PLACEHOLDER TESTIMONIALS SECTION
 * NOTE FOR DEVELOPERS & CLIENTS:
 * The testimonials displayed below are representative placeholders to showcase
 * layout and styling. They can be updated with real parent stories via backend
 * or by modifying the TESTIMONIALS_DATA array in src/data/contentData.ts.
 * =====================================================================
 */

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E6DFD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3F0] text-[#4A6B5D] text-xs font-semibold">
            <span>Parent & Family Experiences</span>
            <span className="text-[#6B7280] font-normal">(Placeholder Showcase)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222623]">
            Voices of Care & Progress
          </h2>
          <p className="text-base text-[#4B5563]">
            Hear how our evidence-informed support plans help children express themselves, build confidence, and bring peace of mind to families.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#4A6B5D]/30 transition-all flex flex-col justify-between relative group"
            >
              {/* Quote Icon */}
              <div className="text-[#C5A059]/30 mb-4">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-sm text-[#222623] leading-relaxed italic mb-6">
                "{t.quote}"
              </p>

              {/* Parent Info & Service Tag */}
              <div className="pt-4 border-t border-[#E6DFD5] space-y-1">
                <p className="font-serif font-bold text-base text-[#222623]">
                  {t.parentName}
                </p>
                <p className="text-xs text-[#6B7280] font-medium">
                  {t.childDetails}
                </p>
                <span className="inline-block text-[11px] font-semibold text-[#4A6B5D] bg-[#EEF3F0] px-2.5 py-0.5 rounded-md mt-1">
                  {t.serviceReceived}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Developer Disclaimer Badge */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#9CA3AF] italic">
            * Developer Notice: Testimonial content above is configured in <code>src/data/contentData.ts</code> as editable placeholder data.
          </p>
        </div>

      </div>
    </section>
  );
};
