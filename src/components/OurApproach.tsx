import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { APPROACH_STEPS } from '../data/contentData';
import { 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  Clock, 
  Users, 
  FileText, 
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Compass,
  Search,
  Target,
  LineChart
} from 'lucide-react';

export const OurApproach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = APPROACH_STEPS[activeStepIndex];

  // Icons corresponding to each step
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5" />;
      case 1:
        return <Search className="w-5 h-5" />;
      case 2:
        return <Target className="w-5 h-5" />;
      case 3:
        return <LineChart className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  // Stagger container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  // Individual card reveal variants
  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    }
  };

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-y border-[#E6DFD5]/70">
      {/* Background Subtle Organic Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#EEF3F0]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FAEEEA]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3F0] text-[#4A6B5D] text-xs font-semibold uppercase tracking-wider border border-[#4A6B5D]/15"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>Our 4-Step Care Pathway</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222623] tracking-tight"
          >
            A Structured, Collaborative Pathway
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#4B5563] leading-relaxed"
          >
            We guide families through a clear, transparent four-step pathway designed to nurture confidence, measurable progress, and lasting skill growth for every child.
          </motion.p>
        </div>

        {/* Interactive Desktop Timeline Progress Track Header */}
        <div className="hidden lg:block relative mb-12 px-6">
          {/* Main Background Rail */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-[#E6DFD5] -translate-y-1/2 rounded-full z-0" />
          
          {/* Animated Fill Progress Line */}
          <motion.div 
            className="absolute top-1/2 left-12 h-1 bg-[#4A6B5D] -translate-y-1/2 rounded-full z-0 transition-all duration-500 ease-out"
            style={{
              width: `${(activeStepIndex / (APPROACH_STEPS.length - 1)) * 88}%`
            }}
          />

          {/* Node Indicators on the Rail */}
          <div className="relative z-10 flex justify-between items-center max-w-5xl mx-auto">
            {APPROACH_STEPS.map((step, idx) => {
              const isPassed = idx <= activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <button
                  key={`node-${step.number}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-serif text-sm font-bold transition-all duration-300 border-2 ${
                      isCurrent
                        ? 'bg-[#31493F] text-white border-[#31493F] shadow-md scale-110 ring-4 ring-[#EEF3F0]'
                        : isPassed
                        ? 'bg-[#4A6B5D] text-white border-[#4A6B5D]'
                        : 'bg-white text-[#6B7280] border-[#E6DFD5] hover:border-[#4A6B5D]'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span 
                    className={`mt-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isCurrent ? 'text-[#31493F] font-bold' : 'text-[#6B7280] group-hover:text-[#222623]'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sequential Animated Timeline Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {APPROACH_STEPS.map((step, idx) => {
            const isCurrent = activeStepIndex === idx;

            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                onClick={() => setActiveStepIndex(idx)}
                whileHover={{ y: -6 }}
                className={`relative p-7 rounded-3xl cursor-pointer transition-all duration-300 border flex flex-col justify-between group ${
                  isCurrent
                    ? 'bg-[#31493F] text-white border-[#31493F] shadow-xl ring-2 ring-[#4A6B5D]/40'
                    : 'bg-white text-[#222623] border-[#E6DFD5] hover:border-[#4A6B5D]/60 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Badge and Phase Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-white/15 text-amber-200'
                          : 'bg-[#EEF3F0] text-[#4A6B5D] group-hover:bg-[#4A6B5D] group-hover:text-white'
                      }`}
                    >
                      {getStepIcon(idx)}
                    </div>

                    <span
                      className={`text-xs font-serif font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                        isCurrent
                          ? 'bg-amber-200/20 text-amber-200 border border-amber-200/30'
                          : 'bg-[#FAF8F5] text-[#6B7280] border border-[#E6DFD5]'
                      }`}
                    >
                      Step {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-serif text-2xl font-bold mb-3 ${isCurrent ? 'text-white' : 'text-[#222623]'}`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-5 leading-relaxed ${isCurrent ? 'text-white/90' : 'text-[#4B5563]'}`}>
                    {step.description}
                  </p>
                </div>

                {/* Key Activities Checklist */}
                <div className={`pt-5 border-t ${isCurrent ? 'border-white/15' : 'border-[#F0EBE5]'} space-y-2.5`}>
                  {step.keyActivities.slice(0, 3).map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs leading-snug">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCurrent ? 'text-amber-300' : 'text-[#4A6B5D]'}`} />
                      <span className={isCurrent ? 'text-white/85' : 'text-[#4B5563]'}>{act}</span>
                    </div>
                  ))}

                  {/* Active Indicator Tag */}
                  <div className="pt-3 flex items-center justify-between">
                    <span className={`text-[11px] font-medium inline-flex items-center gap-1 ${
                      isCurrent ? 'text-amber-200' : 'text-[#4A6B5D] group-hover:underline'
                    }`}>
                      {isCurrent ? '● Active Phase Focus' : 'Click to inspect step'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isCurrent ? 'text-amber-200 translate-x-1' : 'text-[#9CA3AF] group-hover:translate-x-1'}`} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Expanded Step Details Drawer Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`detail-${activeStep.number}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E6DFD5] shadow-lg relative"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              {/* Left Column: Deep Phase Breakdown */}
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-[#EEF3F0] text-[#31493F] text-xs font-bold uppercase tracking-wider border border-[#4A6B5D]/20">
                    Phase {activeStep.number} Breakdown: {activeStep.title}
                  </span>
                  {activeStep.duration && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#4B5563] bg-[#FAF8F5] px-3 py-1 rounded-lg border border-[#E6DFD5]">
                      <Clock className="w-3.5 h-3.5 text-[#C86D51]" />
                      <span>Est. Duration: <strong>{activeStep.duration}</strong></span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#222623]">
                  What happens during the {activeStep.title} phase?
                </h3>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {activeStep.description} This phase establishes transparent milestones so caregivers feel fully informed, connected, and involved at every step.
                </p>

                {/* Additional Metadata Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {activeStep.familyRole && (
                    <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#FAEEEA] text-[#C86D51] flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase text-[#6B7280]">Family Role</p>
                        <p className="text-xs font-medium text-[#222623] mt-0.5">{activeStep.familyRole}</p>
                      </div>
                    </div>
                  )}

                  {activeStep.deliverable && (
                    <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#EEF3F0] text-[#4A6B5D] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase text-[#6B7280]">Key Deliverable</p>
                        <p className="text-xs font-medium text-[#222623] mt-0.5">{activeStep.deliverable}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Navigation Controls */}
              <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E6DFD5]">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#31493F] text-white text-sm font-semibold hover:bg-[#222623] transition-all shadow-sm"
                >
                  <span>Begin {activeStep.title} Phase</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 w-full">
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : APPROACH_STEPS.length - 1))}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FAF8F5] text-[#222623] text-xs font-semibold border border-[#E6DFD5] hover:bg-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev < APPROACH_STEPS.length - 1 ? prev + 1 : 0))}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FAF8F5] text-[#222623] text-xs font-semibold border border-[#E6DFD5] hover:bg-white transition-colors"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Introductory Guidance Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#EEF3F0] border border-[#4A6B5D]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#4A6B5D] text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-xl font-bold text-[#222623]">
                Wondering where your child should begin?
              </h4>
              <p className="text-sm text-[#4B5563]">
                Our introductory consultation helps families determine whether an observational assessment or immediate 1:1 strategy is best suited for your child.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#31493F] text-white text-sm font-semibold hover:bg-[#222623] transition-all shadow-xs"
          >
            <span>Book Step 01 Intake</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
