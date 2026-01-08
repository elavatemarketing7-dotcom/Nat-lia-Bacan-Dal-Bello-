
import React, { useState, useEffect } from 'react';
import { EXPERT, IMAGES } from './constants';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import LandingPage from './components/LandingPage';
import { ChevronRight, MessageCircle, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'entry' | 'quiz' | 'analyzing' | 'result' | 'landing'>('entry');
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setView('quiz');
  const handleGoDirect = () => setView('landing');
  
  const handleQuizFinish = (responses: string[]) => {
    setAnswers(responses);
    setView('analyzing');
    setTimeout(() => {
      setView('result');
    }, 2500);
  };

  const handleGoToLanding = () => setView('landing');

  if (view === 'entry') {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[#0a0a0a] overflow-hidden">
        {/* Background Image with blur and darkening */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Dra. Natália" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center max-w-md flex flex-col items-center">
          {/* Framed Hero Photo before start */}
          <div className="mb-8 animate-[fadeInScale_0.8s_ease-out]">
            <div className="relative p-2 bg-white rounded-[2.5rem] shadow-2xl shadow-[#d4af37]/20 border border-white/10 -rotate-2">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] overflow-hidden">
                <img 
                  src={IMAGES.hero} 
                  alt={EXPERT.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#d4af37] text-white p-2.5 rounded-full shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            {EXPERT.name}
          </h1>
          <p className="text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-12">
            {EXPERT.profession}
          </p>

          <div className="space-y-4 w-full">
            <button 
              onClick={handleStartQuiz}
              className="w-full py-5 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#d4af37] hover:text-white transition-all duration-300 shadow-xl"
            >
              Fazer Avaliação Personalizada
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={handleGoDirect}
              className="w-full py-5 border border-white/20 text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              Conhecer o site direto
            </button>

            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-[#25D366] text-white font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Falar com a Dra. no WhatsApp
            </a>
          </div>
          
          <p className="mt-8 text-white/40 text-xs px-4">
            Escolha como deseja ser atendida pela especialista em Jaguariúna.
          </p>
        </div>
        
        <style>{`
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.8) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] selection:bg-[#d4af37] selection:text-white">
      {view === 'quiz' && (
        <Quiz 
          onFinish={handleQuizFinish} 
          onSkip={handleGoToLanding}
        />
      )}
      
      {view === 'analyzing' && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-6">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-[#d4af37]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-[#d4af37] rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-serif mb-4">Analisando seu perfil...</h2>
          <div className="w-full max-w-xs bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-[#d4af37] animate-[load_2.5s_ease-in-out_forwards]" style={{width: '0%'}}></div>
          </div>
          <style>{`
            @keyframes load {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
      )}

      {view === 'result' && (
        <ResultPage 
          answers={answers} 
          onContinue={handleGoToLanding}
        />
      )}

      {view === 'landing' && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
