import React, { useState } from 'react';
import { RESOURCES_DATA, ASSESSMENT_QUIZ_QUESTIONS } from '../data/contentData';
import { BookOpen, Download, FileText, Sparkles, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourcesProps {
  onOpenConsultationModal: () => void;
}

export const ResourcesSection: React.FC<ResourcesProps> = ({ onOpenConsultationModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const categories = ['All', 'Guide', 'Checklist', 'Tip Sheet', 'Article'];

  const filteredResources = selectedCategory === 'All'
    ? RESOURCES_DATA
    : RESOURCES_DATA.filter(r => r.category === selectedCategory);

  const handleQuizAnswer = (questionId: number, scoreArea: string) => {
    const updated = { ...quizAnswers, [questionId]: scoreArea };
    setQuizAnswers(updated);

    if (quizStep < ASSESSMENT_QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setQuizFinished(false);
  };

  // Determine top recommended area from quiz
  const getRecommendedArea = () => {
    const counts: Record<string, number> = {};
    (Object.values(quizAnswers) as string[]).forEach((area: string) => {
      counts[area] = (counts[area] || 0) + 1;
    });
    let topArea = 'Speech & Communication';
    let max = 0;
    Object.entries(counts).forEach(([area, count]) => {
      if (count > max) {
        max = count;
        topArea = area;
      }
    });
    return topArea;
  };

  return (
    <section id="resources" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4A6B5D] bg-[#EEF3F0] px-3 py-1 rounded-full">
            Knowledge & Tools for Parents
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222623]">
            Parenting & Educational Resources
          </h2>
          <p className="text-base text-[#4B5563]">
            Access evidence-informed guides, developmental milestone checklists, and practical strategies to support your child’s learning and communication journey at home.
          </p>
        </div>

        {/* Interactive Quiz Widget Header */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#E6DFD5] shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="lg:w-1/3 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C86D51] uppercase tracking-wider bg-[#FAEEEA] px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Guidance
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#222623]">
                Find the Right Support Pathway
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Take our quick 3-question self-guided check to discover which NeuroGrowth Hub service area aligns best with your child’s current goals.
              </p>
            </div>

            {/* Quiz Body */}
            <div className="lg:w-2/3 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E6DFD5]">
              {!quizFinished ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#6B7280]">
                    <span>Question {quizStep + 1} of {ASSESSMENT_QUIZ_QUESTIONS.length}</span>
                    <span className="text-[#4A6B5D]">{ASSESSMENT_QUIZ_QUESTIONS[quizStep].category}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#222623]">
                    {ASSESSMENT_QUIZ_QUESTIONS[quizStep].question}
                  </h4>

                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {ASSESSMENT_QUIZ_QUESTIONS[quizStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(ASSESSMENT_QUIZ_QUESTIONS[quizStep].id, opt.scoreArea)}
                        className="text-left p-3.5 rounded-xl bg-white border border-[#E6DFD5] hover:border-[#4A6B5D] hover:bg-[#EEF3F0] transition-all text-sm font-medium text-[#222623] flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-[#4A6B5D] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Quiz Results */
                <div className="space-y-4 py-2">
                  <div className="flex items-center gap-2 text-[#4A6B5D]">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-serif font-bold text-lg">Assessment Summary Complete</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EEF3F0] border border-[#4A6B5D]/20">
                    <p className="text-xs uppercase font-bold text-[#4A6B5D]">Primary Recommended Focus</p>
                    <p className="font-serif text-2xl font-bold text-[#222623] pt-0.5">{getRecommendedArea()}</p>
                    <p className="text-xs text-[#4B5563] pt-1">
                      Based on your responses, our tailored <strong>{getRecommendedArea()}</strong> module or an introductory consultation would be ideal.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={onOpenConsultationModal}
                      className="px-5 py-2.5 rounded-xl bg-[#4A6B5D] text-white text-xs font-semibold hover:bg-[#31493F] transition-all shadow-xs"
                    >
                      Discuss This Focus with Our Team
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#E6DFD5] text-[#4B5563] text-xs font-medium hover:bg-white transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#4A6B5D] text-white shadow-xs'
                  : 'bg-white border border-[#E6DFD5] text-[#4B5563] hover:border-[#4A6B5D]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#E6DFD5] hover:border-[#4A6B5D]/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#C86D51] bg-[#FAEEEA] px-2.5 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#9CA3AF] font-medium">{item.readTime}</span>
                </div>

                <h4 className="font-serif text-xl font-bold text-[#222623]">
                  {item.title}
                </h4>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5EFE6] flex items-center justify-between">
                <button
                  onClick={() => alert(`Previewing resource: "${item.title}". Full PDF download version prepared for deployment.`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A6B5D] hover:underline"
                >
                  {item.downloadable ? <Download className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  <span>{item.downloadable ? 'Download Resource PDF' : 'Read Article'}</span>
                </button>

                <span className="text-[11px] text-[#6B7280]">Free Parent Resource</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
