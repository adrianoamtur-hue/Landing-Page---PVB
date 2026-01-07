
import React from 'react';
import { Icon } from '../constants';

export const SpeechBubbles = () => {
  const bubbles = [
    { text: "Quero praticidade.", pos: "top-0 left-4" },
    { text: "Quero gastar menos.", pos: "top-12 right-0" },
    { text: "Quero parar de errar.", pos: "bottom-12 left-0" },
    { text: "Quero me sentir bem.", pos: "bottom-0 right-4" },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative py-20 flex justify-center">
          {/* Central Card */}
          <div className="relative z-10 bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl border border-brand-secondary/10 max-w-lg text-center">
            <Icon name="check_circle" className="text-brand-cta text-5xl mb-6" />
            <p className="text-xl lg:text-2xl text-brand-title font-serif italic mb-4 leading-relaxed">
              “Chega de abrir o guarda-roupa e sentir que não tem nada pra usar.”
            </p>
            <p className="text-brand-text/60">O Guia de Bolso traz a clareza que você precisa para destravar seu estilo.</p>
          </div>

          {/* Floating Bubbles - Desktop only for specific positioning, stack on mobile */}
          <div className="hidden lg:block absolute inset-0">
            {bubbles.map((b, i) => (
              <div key={i} className={`absolute ${b.pos} bg-brand-secondary text-white px-6 py-3 rounded-full shadow-lg font-semibold animate-pulse`} style={{ animationDelay: `${i * 0.5}s` }}>
                {b.text}
              </div>
            ))}
          </div>

          {/* Mobile Bubbles list */}
          <div className="lg:hidden flex flex-wrap justify-center gap-3 mt-8">
            {bubbles.map((b, i) => (
              <span key={i} className="bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {b.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
