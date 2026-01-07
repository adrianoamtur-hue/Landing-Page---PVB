
import React from 'react';
import { Icon } from '../constants';

export const SmartWardrobe = () => {
  const benefits = [
    "Menos roupa, mais looks (tudo combina com tudo).",
    "Economiza tempo na hora de se vestir.",
    "Economiza dinheiro com compras mais conscientes.",
  ];

  return (
    <section className="py-24 px-6 bg-brand-deep">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[48px] p-8 lg:p-16 shadow-2xl border border-white/10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Coluna Texto */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-brand-cta font-bold text-sm uppercase tracking-widest mb-6">
                <Icon name="inventory_2" className="text-2xl" />
                Novidade Estratégica
              </div>
              
              <h2 className="font-serif text-3xl lg:text-4xl text-brand-title mb-6">
                Quer simplificar de vez? Conheça o Armário Inteligente (15 peças)
              </h2>
              
              <p className="text-lg text-brand-text/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Uma base estratégica com 15 peças essenciais que cria mais de 150 combinações — para você parar de comprar errado.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-4 mb-12">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-left w-full max-w-md lg:max-w-none">
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

            {/* Coluna Visual Preview */}
            <div className="flex-1 w-full max-w-sm lg:max-w-none order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-cta/10 blur-[60px] rounded-full group-hover:bg-brand-cta/20 transition-colors"></div>
                <div className="relative bg-gray-50 p-4 rounded-[2.5rem] shadow-lg border border-gray-100 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://i.ibb.co/99bP4ch9/BABBE87-B-960-A-4-A73-B830-185641429-F62.png" 
                    alt="Preview do Armário Inteligente" 
                    className="w-full h-auto rounded-[1.8rem] shadow-sm"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
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
