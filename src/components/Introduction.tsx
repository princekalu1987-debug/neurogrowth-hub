import React from 'react';
import { UserCheck, BookOpenCheck, HeartHandshake } from 'lucide-react';

export const Introduction: React.FC = () => {
  const pillars = [
    {
      title: 'Individualized Support',
      description: 'We recognize that every child has a unique developmental profile. Our programs are custom-tailored to build upon your child’s natural strengths while addressing specific developmental or learning challenges.',
      icon: UserCheck,
      colorBg: 'bg-[#EEF3F0]',
      colorText: 'text-[#4A6B5D]',
      borderColor: 'border-[#4A6B5D]/20',
    },
    {
      title: 'Evidence-Informed Practice',
      description: 'Our approaches combine proven educational, communication, and behavioural practices with continuous skill observation, ensuring thoughtful, effective, and meaningful developmental progress.',
      icon: BookOpenCheck,
      colorBg: 'bg-[#FAF0EC]',
      colorText: 'text-[#C86D51]',
      borderColor: 'border-[#C86D51]/20',
    },
    {
      title: 'Family-Centred Care',
      description: 'Parents and caregivers are a child’s primary anchors. We involve families in every step, offering guidance, practical strategies, and transparent reviews to ensure support continues naturally at home.',
      icon: HeartHandshake,
      colorBg: 'bg-[#FFF8EB]',
      colorText: 'text-[#B8860B]',
      borderColor: 'border-[#C5A059]/30',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E6DFD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Intro Text */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4A6B5D] bg-[#EEF3F0] px-3 py-1 rounded-full">
            Our Foundation & Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222623]">
            Every Child Deserves the Right Support
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal pt-2">
            Every child develops along their own distinct timeline and path. At <strong>NeuroGrowth Hub</strong> (formerly <em>Little Treasures Consult</em>), we believe that with empathetic guidance, structured skill-building, and a nurturing environment, every child can unlock their full potential, communicate with clarity, and build lasting confidence.
          </p>
        </div>

        {/* Three Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-3xl bg-[#FAF8F5] border ${pillar.borderColor} hover:shadow-md transition-all duration-300 flex flex-col items-start space-y-4 group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.colorBg} ${pillar.colorText} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[#222623] pt-1">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
