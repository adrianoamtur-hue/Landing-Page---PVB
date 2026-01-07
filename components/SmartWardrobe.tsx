
import React from 'react';
import { Icon } from '../constants';

export const SmartWardrobe = () => {
  const benefits = [
    "Menos roupa, mais looks (tudo combina com tudo).",
    "Economiza tempo na hora de se vestir.",
    "Economiza dinheiro com compras mais conscientes.",
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-[48px] p-8 lg:p-16 border border-brand-secondary/10 text-center">
          <div className="inline-flex items-center gap-2 text-brand-cta font-bold text-sm uppercase tracking-widest mb-6">
            <Icon name="inventory_2" className="text-2xl" />
            Novidade Estratégica
          </div>
          
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-title mb-6">
            Quer simplificar de vez? Conheça o Armário Inteligente (15 peças)
          </h2>
          
          <p className="text-lg text-brand-text/70 mb-10 max-w-2xl mx-auto">
            Uma base estratégica com 15 peças essenciais que cria mais de 150 combinações — para você parar de comprar errado.
          </p>

          <div className="flex flex-col items-center gap-4 mb-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-left w-full max-w-md">
                <Icon name="check_circle" className="text-brand-cta shrink-0" />
                <span className="text-brand-text/80 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <a 
              href="https://payfast.greenn.com.br/149233" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-cta text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform"
            >
              Quero meu Armário Inteligente
              <Icon name="arrow_forward" className="text-2xl" />
            </a>
            
            <p className="text-xs text-brand-text/50 uppercase tracking-tighter">
              Funciona para qualquer estilo — é uma base inteligente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
