
import React from 'react';
import { CONFIG, Icon } from '../constants';

export const Hero = () => {
  const scrollToStyleGrid = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("escolha-seu-estilo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-12 pb-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Icon name="verified" className="text-lg" />
            Projeto Vestir Bem
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-brand-title leading-tight mb-6">
            O Guia de Bolso para você se vestir bem, gastar menos e nunca mais dizer <span className="italic">“não tenho roupa”</span>.
          </h1>
          <p className="text-lg lg:text-xl text-brand-text/80 mb-8 max-w-2xl">
            Um PDF curto e prático para você se vestir com mais clareza, combinar melhor e parar de errar nas compras — de acordo com o seu estilo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="#escolha-seu-estilo" 
              onClick={scrollToStyleGrid}
              className="bg-brand-cta text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-cta/20 hover:scale-105 transition-transform text-center flex items-center justify-center cursor-pointer"
            >
              Já sei meu estilo → escolher meu Guia
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSevnDuHWRHJZAUAucWu9e--sJa-5-pVXA-JC-hlp5Ad6ID8CQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-brand-secondary text-brand-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-secondary/5 transition-colors text-center"
            >
              “Não sei meu estilo → descobrir agora”
            </a>
          </div>

          <p className="text-sm text-brand-text/70 mb-8 italic lg:max-w-xl">
            “Dica rápida: quase toda mulher tem um estilo primário — e muitas têm um secundário. Se você não sabe, o diagnóstico te mostra.”
          </p>
          
          <p className="text-sm text-brand-text/60 flex items-center justify-center lg:justify-start gap-3">
            <span>Acesso imediato</span> • <span>PDF no seu e-mail</span> • <span>Garantia de 7 dias</span>
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-secondary/10">
              <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2 block">Antes</span>
              <p className="text-sm font-semibold text-brand-text">“Compras no impulso e frustração”</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-green-600 mb-2 block">Depois</span>
              <p className="text-sm font-semibold text-brand-text">“Compras com direção e segurança”</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="relative">
            <img src={CONFIG.HERO_IMAGE_URL} alt="Mulher elegante" className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-brand-deep text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[200px]">
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {[1,2,3,4,5].map(i => <Icon key={i} name="star" className="text-sm fill-current" />)}
              </div>
              <p className="text-sm font-medium leading-snug">“Mudou minha forma de encarar o guarda-roupa.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
