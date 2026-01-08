
import React from 'react';
import { EXPERT, IMAGES } from '../constants';
import { CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface ResultPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const whatsappLink = `${EXPERT.whatsapp}&text=${encodeURIComponent(`Olá Dra. Natália! Fiz minha avaliação no site e meu resultado foi Perfil Compatível.\n\nMinhas respostas:\n- Incomodo: ${answers[0]}\n- Histórico: ${answers[1]}\n- Medo: ${answers[2]}\n- Prazo: ${answers[3]}\n\nGostaria de saber mais sobre o método!`)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white flex flex-col animate-[fadeIn_0.4s_ease-out]">
      <div className="flex-1 flex flex-col min-h-full">
        {/* Compact Header Visual */}
        <div className="relative h-[32vh] md:h-[40vh] w-full overflow-hidden shrink-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/10"></div>
          
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="bg-[#d4af37] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              Avaliação Concluída
            </div>
          </div>
        </div>

        {/* Compact Content Container */}
        <div className="px-6 -mt-8 relative z-10 bg-white rounded-t-[2.5rem] pt-6 pb-6 flex-1 flex flex-col items-center">
          <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg shadow-[#d4af37]/30 mb-4 shrink-0">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>

          <div className="text-center mb-5">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
              Perfil Compatível
            </h1>
            <p className="text-[#d4af37] font-bold uppercase tracking-[0.15em] text-[11px] mt-1">
              Você é a Paciente Ideal
            </p>
          </div>

          <p className="text-center text-gray-600 leading-snug text-sm mb-6 max-w-[280px]">
            Com base no seu perfil, o Método da <span className="text-black font-bold border-b border-[#d4af37]">{EXPERT.name}</span> é a solução exata para a <span className="font-bold text-gray-900">naturalidade</span> que você busca.
          </p>

          {/* Action Buttons - More Compact */}
          <div className="w-full max-w-xs space-y-2.5 mt-auto">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all text-sm animate-[bounceSubtle_2s_infinite]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              1. Enviar minha avaliação a Dra.
            </a>

            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border border-[#25D366]/30 bg-[#25D366]/5 text-[#25D366] font-bold rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all text-sm"
            >
              2. Chamar no WhatsApp sem compromisso
            </a>

            <button 
              onClick={onContinue}
              className="w-full py-3.5 text-gray-400 font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 border border-gray-100 rounded-xl"
            >
              3. Não enviar e continuar no site
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <p className="mt-4 text-[9px] text-gray-300 uppercase tracking-tighter">
            Atendimento Exclusivo em Jaguariúna - SP
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
};

export default ResultPage;
