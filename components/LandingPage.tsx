
import React, { useState } from 'react';
import { EXPERT, IMAGES } from '../constants.ts';
import { 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Play, 
  Check, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Heart,
  X
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (url: string) => setSelectedImage(url);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="relative animate-[fadeIn_0.5s_ease-out]">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full">
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-black"
          />
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center pt-20 lg:pt-0 overflow-hidden bg-white">
        {/* Mobile Background Image */}
        <div className="absolute top-0 right-0 w-full h-[60%] lg:h-full lg:w-1/2 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-[center_15%] lg:object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent lg:bg-gradient-to-r lg:from-white lg:to-transparent"></div>
        </div>

        <div className="relative z-10 w-full lg:w-1/2 px-6 lg:px-20 py-10 flex flex-col items-center lg:items-start text-center lg:text-left mt-[45%] lg:mt-0">
          <span className="bg-[#d4af37] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 shadow-lg">
            Harmonização Exclusiva
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            Eu sou <span className="italic text-[#d4af37] font-medium block mt-2">Dra. Natália Bacan</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            Realço sua beleza única através de um método focado em naturalidade, segurança e propósito.
          </p>
          
          <div className="w-full max-w-sm space-y-4">
            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full py-5 bg-[#d4af37] text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-[#d4af37]/40 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Agendar Consulta no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO HIGHLIGHT SECTION */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[9/16] max-w-sm mx-auto w-full group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 border-8 border-white">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src={EXPERT.videoHero} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-white/30 backdrop-blur-md rounded-full">
              <Play className="w-5 h-5 text-white fill-current" />
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-tight">
              Descubra como a beleza pode ser realçada com técnica e sensibilidade.
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mb-2"></div>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial."
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <Sparkles className="w-8 h-8 text-[#d4af37] mb-2" />
                <h4 className="font-bold text-sm">Naturalidade</h4>
                <p className="text-xs text-gray-500">Sem exageros</p>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-[#d4af37] mb-2" />
                <h4 className="font-bold text-sm">Segurança</h4>
                <p className="text-xs text-gray-500">Técnicas avançadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOCO "QUEM SOU EU" */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
              <img 
                src={IMAGES.authority2} 
                alt="Dra. Natália Bacan" 
                className="relative z-10 w-full rounded-[3rem] shadow-2xl shadow-black/5"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-serif font-bold text-gray-900">Muito prazer, <br /><span className="text-[#d4af37]">Natália Bacan.</span></h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Minha missão não é criar rostos novos, mas sim resgatar o que você tem de melhor. A harmonização facial, para mim, é uma forma de arte que exige responsabilidade e um olhar humanizado.
              </p>
              <p>
                Em Jaguariúna, criei um espaço onde você não é apenas mais uma paciente. Você é única, e seu tratamento é desenhado exclusivamente para suas necessidades.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4">
              {[
                "Avaliação facial 3D detalhada",
                "Foco absoluto em rejuvenescimento natural",
                "Uso exclusivo das melhores marcas mundiais",
                "Acompanhamento personalizado pós-procedimento"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37] transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOCO "RESULTADOS REAIS" */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">A Beleza é Real</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Veja o impacto do Método Natália Bacan em histórias reais. Clique para ampliar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {IMAGES.results.map((url, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(url)}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/5 relative bg-white/5"
              >
                <img 
                  src={url} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest font-bold">Ver Detalhes</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-10 text-center text-white/30 text-[10px] uppercase tracking-widest">
            *Resultados podem variar de pessoa para pessoa. Fotos autorizadas.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">O que minhas pacientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.testimonials.map((url, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                <img src={url} alt="Testo" className="w-full rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (BASTIDORES/LIFESTYLE) - Moved close to Testimonials */}
      <section className="py-24 bg-[#faf9f6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-serif font-bold">Além dos Resultados</h2>
            <p className="text-gray-500 mt-2">A excelência está presente em cada detalhe do atendimento.</p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto px-6 pb-10 snap-x custom-scrollbar">
          {IMAGES.lifestyle.map((url, idx) => (
            <div key={idx} className="flex-none w-[280px] md:w-[400px] snap-center">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/5 bg-white p-2">
                <img src={url} alt="Lifestyle" className="w-full h-full object-cover rounded-[2rem]" />
              </div>
              <p className="mt-4 text-center font-medium text-gray-400 text-sm">Experiência personalizada</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BLOCO "POR QUE CONFIAR EM MIM" */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Pilares da minha entrega</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Avaliação Honesta", desc: "Sempre indico apenas o que trará benefícios reais, sem procedimentos desnecessários.", icon: Star },
              { title: "Atendimento Exclusivo", desc: "Eu atendo pessoalmente cada etapa do seu processo, do início ao fim.", icon: Heart },
              { title: "Clareza Total", desc: "Explico cada passo, técnica e material utilizado com total transparência.", icon: ShieldCheck },
              { title: "Ambiente Premium", desc: "Conforto e discrição em cada detalhe para você se sentir segura e relaxada.", icon: Sparkles },
              { title: "Segurança Médica", desc: "Protocolos rígidos de higiene e segurança em todos os procedimentos.", icon: ShieldCheck },
              { title: "Pós-procedimento", desc: "Suporte contínuo para garantir que sua recuperação seja perfeita.", icon: Check }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 bg-[#d4af37]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors">
                  <card.icon className="w-7 h-7 text-[#d4af37] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#d4af37] rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-[#d4af37]/40 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pronta para o seu novo olhar?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto">
            Não deixe para amanhã a confiança que você pode sentir hoje. Clique abaixo para conversarmos.
          </p>
          <a 
            href={EXPERT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#d4af37] px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            Quero agendar meu horário
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold">O Caminho até a sua <span className="text-[#d4af37]">Melhor Versão</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px border-t border-dashed border-[#d4af37]/30 z-0"></div>
            
            {[
              { step: "01", title: "Contato Inicial", desc: "No WhatsApp, tiramos dúvidas básicas e agendamos sua vinda." },
              { step: "02", title: "Avaliação 360º", desc: "Presencialmente, analisamos sua face, musculatura e desejos." },
              { step: "03", title: "Sua Transformação", desc: "Realizamos o procedimento com as técnicas mais modernas." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-[#d4af37] rounded-full flex items-center justify-center text-2xl font-serif font-bold text-[#d4af37] mb-6 shadow-xl shadow-[#d4af37]/10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src={IMAGES.hero} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-8">
            <Sparkles className="w-10 h-10 text-[#d4af37]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
            Você merece ser <br /><span className="text-[#d4af37]">sua melhor versão.</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-lg">
            Dê o primeiro passo agora. Estou esperando por você em Jaguariúna.
          </p>
          <div className="w-full max-w-sm space-y-4">
            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 bg-[#25D366] text-white font-bold rounded-2xl flex items-center justify-center gap-3 text-xl shadow-2xl shadow-[#25D366]/20 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              Agendar Agora
            </a>
            <p className="text-white/40 text-sm">
              Sua beleza, seu tempo, sua segurança.
            </p>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Onde me encontrar</h2>
              <p className="text-gray-600 mb-8 flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#d4af37] shrink-0" />
                <span>{EXPERT.location} <br /> Atendimento exclusivo com hora marcada.</span>
              </p>
              <a 
                href={EXPERT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-[#d4af37] hover:underline"
              >
                Ver no Google Maps <Play className="w-3 h-3 fill-current" />
              </a>
            </div>
            <div className="h-[400px] bg-gray-100 rounded-[3rem] overflow-hidden shadow-inner border border-gray-100 relative">
               {/* Embed simple google map placeholder */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14725.64273873468!2d-46.9912066!3d-22.6757134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8e7e171b3e895%3A0x6a053641b072834b!2zSmFndWFyacO6bmEsIFNQ!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-[#0a0a0a] text-white/50 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-10">
            <h3 className="signature text-[#d4af37] text-4xl mb-4">{EXPERT.name}</h3>
            <div className="flex justify-center gap-6">
              <a href={EXPERT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={EXPERT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="w-20 h-[1px] bg-white/10 mx-auto mb-8"></div>
          
          <div className="text-xs tracking-widest space-y-2 uppercase">
            <p>{EXPERT.name} • {EXPERT.profession}</p>
            <p>{EXPERT.location}</p>
            <p className="mt-8 text-[10px] opacity-40">© 2024. Todos os direitos reservados. Design Premium by Expert.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default LandingPage;
