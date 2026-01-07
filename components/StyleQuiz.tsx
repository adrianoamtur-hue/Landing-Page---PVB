
import React from 'react';
import { Icon } from '../constants';

export const StyleQuiz = () => {
  const steps = [
    "Responda o diagnóstico (rápido e fácil)",
    "Receba seu estilo primário + secundário por e-mail",
    "Acesse os links recomendados e compre com segurança",
  ];

  return (
    <section className="py-24 px-6 bg-brand-deep">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[48px] p-8 lg:p-16 shadow-2xl border border-white/10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Coluna Texto */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-brand-secondary font-bold text-sm uppercase tracking-widest mb-6">
                <Icon name="psychology" className="text-2xl" />
                DIAGNÓSTICO RÁPIDO
              </div>
              
              <h2 className="font-serif text-3xl lg:text-4xl text-brand-title mb-6">
                Não sabe qual guia é pra você? A gente descobre.
              </h2>
              
              <p className="text-lg text-brand-text/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Responda 2 min e receba por e-mail seu estilo primário + secundário e a recomendação exata do(s) Guia(s) ideal(is).
              </p>

              <div className="flex flex-col items-center lg:items-start gap-4 mb-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-left w-full max-w-md lg:max-w-none">
                    <Icon name="check_circle" className="text-brand-cta shrink-0" />
                    <span className="text-brand-text/80 font-medium">{step}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSevnDuHWRHJZAUAucWu9e--sJa-5-pVXA-JC-hlp5Ad6ID8CQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-cta text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform"
                >
                  Descobrir meu estilo agora
                  <Icon name="arrow_forward" className="text-2xl" />
                </a>
                
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-brand-text/60 font-medium uppercase tracking-tighter">
                    Gratuito. Você recebe a recomendação no e-mail.
                  </p>
                  <p className="text-[10px] text-brand-text/40 uppercase tracking-tighter">
                    Se você já sabe seu estilo, pode comprar direto na seção acima.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Visual Preview */}
            <div className="flex-1 w-full max-w-sm lg:max-w-none">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-cta/10 blur-[60px] rounded-full group-hover:bg-brand-cta/20 transition-colors"></div>
                <div className="relative bg-gray-50 p-4 rounded-[2.5rem] shadow-lg border border-gray-100 transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://i.ibb.co/tptMhN5X/Chat-GPT-Image-7-de-jan-de-2026-18-08-21.png" 
                    alt="Exemplo do Diagnóstico" 
                    className="w-full h-auto rounded-[1.8rem] shadow-sm"
                  />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                    <p className="text-[10px] font-bold text-brand-title uppercase tracking-widest">Exemplo real do Guia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
