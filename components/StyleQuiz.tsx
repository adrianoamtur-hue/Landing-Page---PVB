
import React from 'react';
import { Icon } from '../constants';

export const StyleQuiz = () => {
  const steps = [
    { num: "1", text: "Responda o diagnóstico (rápido e fácil)." },
    { num: "2", text: "Receba no e-mail seu estilo primário e secundário." },
    { num: "3", text: "Acesse o link recomendado e compre com segurança." },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-secondary/5 rounded-[48px] p-8 lg:p-16 border border-brand-secondary/10 text-center">
          <div className="inline-flex items-center gap-2 text-brand-secondary font-bold text-sm uppercase tracking-widest mb-6">
            <Icon name="psychology" className="text-2xl" />
            Diagnóstico Rápido
          </div>
          
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-title mb-6">
            Não sabe qual guia é pra você? A gente descobre.
          </h2>
          
          <p className="text-lg text-brand-text/70 mb-12 max-w-2xl mx-auto">
            Responda um diagnóstico rápido e receba por e-mail seu estilo primário e secundário + a recomendação exata do(s) Guia(s) ideal(is).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-cta text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {step.num}
                </div>
                <p className="text-brand-text/80 font-medium leading-tight pt-1">
                  {step.text}
                </p>
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
            
            <p className="text-xs text-brand-text/50 uppercase tracking-tighter">
              Se preferir, você pode comprar direto pelo estilo na seção acima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
