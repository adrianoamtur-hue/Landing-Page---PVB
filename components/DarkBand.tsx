
import React from 'react';

export const DarkBand = () => {
  return (
    <section className="bg-brand-deep py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-8 leading-tight">
            Se vestir bem não é dom. É método.
          </h2>
          <p className="text-white/80 text-xl lg:text-2xl font-light mb-10 leading-relaxed">
            E método dá pra aprender sem complicação com um guia simples e aplicável.
          </p>
          <div className="w-16 h-px bg-brand-cta/50 mx-auto mb-10"></div>
          
          <p className="text-brand-cta text-2xl lg:text-3xl font-serif italic leading-relaxed mb-4">
            “Você não precisa de mais roupa. Precisa de direção. E direção começa por saber seu estilo.”
          </p>
          
          <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
            Se você não sabe seu estilo, faça o diagnóstico e receba a recomendação certa.
          </p>
        </div>
      </div>
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
};
