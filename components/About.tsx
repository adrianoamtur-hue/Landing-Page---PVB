
import React from 'react';
import { CONFIG } from '../constants';

export const About = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <img 
            src={CONFIG.FOTO_PAULA_URL} 
            alt="Foto da Paula — Consultora de Imagem (Projeto Vestir Bem)" 
            className="rounded-[60px] shadow-2xl w-full aspect-[4/5] object-cover" 
          />
        </div>
        <div className="flex-1">
          <div className="inline-block bg-brand-cta/10 text-brand-cta px-4 py-1 rounded-full text-sm font-bold mb-6">A Criadora</div>
          <h2 className="font-serif text-4xl text-brand-title mb-6 italic">Sou a Paula, sua guia nessa jornada de estilo.</h2>
          <p className="text-lg text-brand-text/80 leading-relaxed mb-6">
            Comissária de bordo há anos, aprendi na prática o poder da presença e da imagem — sempre com elegância, simplicidade e confiança. Hoje, como consultora de imagem, transformo isso em orientação clara para você se vestir bem no dia a dia, sem complicação.
          </p>
          <p className="text-lg text-brand-text/80 leading-relaxed mb-8">
            Criei o Projeto Vestir Bem com um único objetivo: deixar a moda mais simples, prática e possível para a mulher real, no dia a dia. Sem termos técnicos complicados, apenas o que funciona de verdade.
          </p>
          <div className="w-20 h-1 bg-brand-cta"></div>
        </div>
      </div>
    </section>
  );
};
