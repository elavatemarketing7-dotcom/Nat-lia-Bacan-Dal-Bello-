
import React, { useState } from 'react';
import { EXPERT, QUIZ_QUESTIONS, IMAGES } from '../constants';
import { ChevronRight, ArrowLeft, Sparkles } from 'lucide-react';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      const newAnswers = [...answers];
      newAnswers.pop();
      setAnswers(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#faf9f6] animate-[fadeIn_0.3s_ease-out]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
        <img src={IMAGES.hero} alt="" className="object-cover w-full h-full scale-150" />
      </div>

      {/* Compact Header */}
      <header className="relative bg-white/80 backdrop-blur-md p-3 flex items-center justify-between z-20 border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-[#d4af37] overflow-hidden bg-white">
            <img src={IMAGES.hero} alt={EXPERT.name} className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <h3 className="font-serif text-xs font-bold leading-none">{EXPERT.name}</h3>
            <span className="text-[8px] text-[#d4af37] uppercase tracking-tighter">Avaliação Personalizada</span>
          </div>
        </div>
        <button onClick={onSkip} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full hover:text-black transition-colors">
          SAIR
        </button>
      </header>

      <div className="flex-1 flex flex-col max-w-md mx-auto w-full relative z-10">
        {/* Progress Bar - Thinner */}
        <div className="w-full h-1 bg-gray-200/50 overflow-hidden">
          <div 
            className="h-full bg-[#d4af37] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(212,175,55,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex-1 flex flex-col p-4 md:p-6 justify-center">
          {/* Navigation & Counter */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              {currentStep > 0 && (
                <button onClick={handleBack} className="p-1.5 text-gray-400 hover:text-[#d4af37] transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <span className="text-[10px] text-[#d4af37] font-bold tracking-widest uppercase bg-[#d4af37]/10 px-2 py-0.5 rounded">
                PASSO {currentStep + 1}/{QUIZ_QUESTIONS.length}
              </span>
            </div>
          </div>

          {/* Hero Photo in Frame - Scaled down for mobile */}
          {currentStep === 0 && (
            <div className="flex justify-center mb-4 animate-[fadeInScale_0.5s_ease-out]">
              <div className="relative p-1.5 bg-white rounded-2xl shadow-lg shadow-[#d4af37]/10 border border-[#d4af37]/20 -rotate-1">
                <div className="w-24 h-24 rounded-xl overflow-hidden grayscale-[0.1]">
                  <img src={IMAGES.hero} alt={EXPERT.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#d4af37] text-white p-1 rounded-full shadow-md">
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>
            </div>
          )}

          {/* Question Content - Adjusted sizes */}
          <div key={currentStep} className="animate-[slideIn_0.3s_ease-out]">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-6 leading-tight text-center md:text-left">
              {QUIZ_QUESTIONS[currentStep].question}
            </h2>

            <div className="grid grid-cols-1 gap-2.5">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-left p-4 rounded-xl bg-white border border-gray-100 shadow-sm active:scale-[0.98] active:bg-gray-50 hover:border-[#d4af37] hover:shadow-md transition-all duration-200 group flex items-center justify-between"
                >
                  <span className="text-sm text-gray-700 font-semibold group-hover:text-black leading-tight">{option}</span>
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#d4af37]" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info - More subtle */}
        <div className="p-4 text-center">
          <p className="text-[9px] text-gray-400 uppercase tracking-widest font-medium">
            🔒 Avaliação 100% Privada e Segura
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9) rotate(0deg); }
          to { opacity: 1; transform: scale(1) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default Quiz;
