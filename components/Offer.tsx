
import React from 'react';
import { CONFIG, Icon } from '../constants';

export const Offer = () => {
  return (
    <section id="ofertas" className="py-24 px-6 bg-brand-deep">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl lg:text-5xl text-white mb-16">Escolha a melhor opção para você</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Plan 1 */}
          <div className="bg-white p-10 rounded-[40px] shadow-xl flex flex-col items-center">
            <h3 className="text-brand-title text-2xl font-bold mb-2">1 Guia de Bolso</h3>
            <p className="text-brand-text/60 mb-6 font-medium">Ideal se você já sabe seu estilo.</p>
            <div className="mb-8">
              <div className="text-4xl font-serif text-brand-title font-bold">R$ 47,00 à vista</div>
              <div className="text-lg text-brand-text/60">ou 12x de R$ 4,83</div>
            </div>
            <ul className="text-left space-y-4 mb-10 w-full">
              {[
                "1 Guia do seu Estilo Primário",
                "Direção prática: peças-chave + combinações",
                "Checklist de compras inteligentes",
                "Garantia de 7 dias",
                "Perfeito para começar com clareza."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-text/80">
                  <span className="shrink-0"><Icon name="check" className="text-brand-cta font-bold" /></span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={CONFIG.CHECKOUT_1_GUIA} className="w-full py-5 rounded-2xl border-2 border-brand-cta text-brand-cta font-bold text-lg hover:bg-brand-cta hover:text-white transition-all text-center">
              Quero só 1 Guia
            </a>
          </div>

          {/* Plan Combo */}
          <div className="bg-white p-10 rounded-[40px] shadow-2xl flex flex-col items-center relative scale-105 border-4 border-brand-cta">
            <div className="absolute -top-6 bg-brand-cta text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
              Mais Indicado
            </div>
            <h3 className="text-brand-title text-2xl font-bold mb-2">Combo Vestir Bem</h3>
            <p className="text-brand-text/60 mb-6 font-medium">Mais indicado para quem tem dúvida entre 2 estilos.</p>
            <div className="mb-8 text-center">
              <div className="text-4xl font-serif text-brand-cta font-bold">R$ 67,00 à vista</div>
              <div className="text-lg text-brand-text/60">ou 12x de R$ 6,89</div>
            </div>
            <ul className="text-left space-y-4 mb-10 w-full">
              {[
                "Guia do Estilo Primário + Estilo Secundário",
                "Você aprende como misturar os 2 estilos na prática.",
                "Mais combinações prontas (com super desconto)",
                "Checklist de compras inteligentes",
                "Garantia de 7 dias"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-text/80 font-semibold">
                  <span className="shrink-0"><Icon name="verified" className="text-brand-cta" /></span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={CONFIG.CHECKOUT_COMBO} className="w-full py-5 rounded-2xl bg-brand-cta text-white font-bold text-xl shadow-xl shadow-brand-cta/30 hover:scale-[1.02] transition-transform text-center">
              Quero o Combo (Primário + Secundário)
            </a>
            <p className="text-xs text-brand-text/40 mt-6 flex items-center gap-2">
              <Icon name="lock" className="text-sm" /> Pagamento Seguro via Green
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-white/80 text-sm lg:text-base">
            Não sabe seu estilo? <a href="https://docs.google.com/forms/d/e/1FAIpQLSevnDuHWRHJZAUAucWu9e--sJa-5-pVXA-JC-hlp5Ad6ID8CQ/viewform" target="_blank" rel="noopener noreferrer" className="text-brand-cta font-bold underline hover:text-brand-cta/80">Faça o diagnóstico aqui e receba a recomendação.</a>
          </p>
          <div className="text-white/40 text-xs">
            Acesso imediato • PDF no seu e-mail • Garantia de 7 dias
          </div>
        </div>
      </div>
    </section>
  );
};