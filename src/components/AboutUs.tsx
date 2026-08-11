import React, { useState } from 'react';
import { ABOUT_IMAGE_PATH, ORGANISATION_INFO } from '../data/contentData';
import { ShieldCheck, Heart, Sparkles, Award, ArrowRight, Check } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Side: Professional Image & Badge Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft decorative background shape */}
              <div className="absolute -inset-4 bg-[#4A6B5D]/10 rounded-[2.5rem] transform -rotate-2 -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-lg bg-white">
                <img
                  src={ABOUT_IMAGE_PATH}
                  alt="NeuroGrowth Hub child development specialist guiding a student at a learning table"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-[#E6DFD5] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C86D51]" />
                  <span className="text-xs font-bold text-[#222623]">Child-Centred Practice</span>
                </div>

                <div className="p-6 bg-[#31493F] text-white">
                  <p className="font-serif text-lg font-semibold text-amber-200">
                    "Every child has unique strengths waiting to be nurtured with patience, structure, and love."
                  </p>
                  <p className="text-xs text-emerald-100/90 pt-1.5 font-medium">
                    — {ORGANISATION_INFO.founder}, Founder of {ORGANISATION_INFO.name}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4A6B5D] bg-[#EEF3F0] px-3 py-1 rounded-full">
                About NeuroGrowth Hub
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222623]">
                Empowering Children to Reach Their Highest Potential
              </h2>
            </div>

            <p className="text-base text-[#4B5563] leading-relaxed">
              <strong>NeuroGrowth Hub</strong> (formerly known as <em>{ORGANISATION_INFO.formerName}</em>) is a dedicated child development and educational support organization. We are committed to helping children communicate clearly, learn with enthusiasm, regulate emotional states, develop self-sufficiency, and thrive across all environments.
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed">
              Our multidisciplinary approach blends evidence-informed developmental strategies with deep parental collaboration. We don't believe in one-size-fits-all templates; instead, we listen carefully to each child’s story and design personalized growth pathways that celebrate individuality.
            </p>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Compassionate 1:1 engagement',
                'Evidence-informed methodologies',
                'Family & caregiver empowerment',
                'Dignity & child-first practice',
                'Clear developmental milestone mapping',
                'Collaborative school alignment'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#222623]">
                  <div className="w-5 h-5 rounded-full bg-[#EEF3F0] text-[#4A6B5D] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Expandable Story Detail */}
            {showFullStory && (
              <div className="p-5 rounded-2xl bg-[#EEF3F0] border border-[#4A6B5D]/20 text-sm text-[#31493F] space-y-3 animate-fadeIn">
                <h4 className="font-serif font-bold text-base text-[#222623]">Our Evolution & Founder's Vision</h4>
                <p>
                  Founded by <strong>{ORGANISATION_INFO.founder}</strong> as <em>{ORGANISATION_INFO.formerName}</em>, our practice began with a heart-led mission: to provide gentle, individualized attention to children needing specialized support in speech, behaviour, and early education. Rebranding as <strong>{ORGANISATION_INFO.name}</strong> reflects our holistic commitment to child development and parent empowerment.
                </p>
                <p>
                  Under <strong>{ORGANISATION_INFO.founder}</strong>'s guidance, we strictly operate on principles of compassion, transparency, and scientific grounding — ensuring every family receives an encouraging, tailor-made care roadmap.
                </p>
              </div>
            )}

            {/* Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4A6B5D] text-white text-sm font-semibold hover:bg-[#31493F] transition-all shadow-xs"
              >
                <span>{showFullStory ? 'Show Less' : 'Learn More About Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
