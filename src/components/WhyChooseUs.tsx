import React from 'react';
import { WHY_CHOOSE_US, FAMILY_IMAGE_PATH } from '../data/contentData';
import { Compass, UserCheck, Handshake, Target, Clock, Smile } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#4A6B5D]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#C86D51]" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-[#C5A059]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#4A6B5D]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#C86D51]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#31493F]" />;
      default:
        return <UserCheck className="w-6 h-6 text-[#4A6B5D]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E6DFD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4A6B5D] bg-[#EEF3F0] px-3 py-1 rounded-full">
            The NeuroGrowth Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222623]">
            Why Families Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-normal">
            Parents trust NeuroGrowth Hub because we combine rigorous developmental methodologies with warmth, respect, and clear family involvement.
          </p>
        </div>

        {/* Top Feature Image Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-[#E6DFD5] shadow-sm relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-[#F5EFE6]">
            
            <div className="lg:col-span-7 p-8 md:p-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C86D51]">
                Cooperative Family Environment
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#222623]">
                Empowering Families Alongside Children
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                When parents are equipped with practical strategies, developmental growth accelerates naturally. We involve caregivers as active partners, offering observations and tailored home plans after every session.
              </p>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative overflow-hidden">
              <img
                src={FAMILY_IMAGE_PATH}
                alt="Parents and child interacting warmly during a developmental session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#4A6B5D]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6DFD5] flex items-center justify-center shadow-xs">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#222623]">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
