
import React from 'react';

export const BenefitsGrid = () => {
  const benefits = [
    { title: 'Entender seu estilo na prática', desc: 'Identifique quais peças realmente fazem sentido para sua rotina.' },
    { title: 'Peças-chave que funcionam', desc: 'Saiba exatamente o que comprar para multiplicar suas opções.' },
    { title: 'Combinações prontas', desc: 'Esqueça o estresse de manhã com fórmulas visuais simples.' },
    { title: 'Cores que facilitam compra', desc: 'Aprenda a escolher tons que combinam entre si sem erro.' },
    { title: 'Erros comuns pra evitar', desc: 'Poupe dinheiro parando de comprar o que você nunca vai usar.' },
    { title: 'Checklist de compra inteligente', desc: 'Um passo a passo para levar na bolsa (ou no celular).' },
  ];

  return (
    <section className="py-20 px-6 bg-brand-deep text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl mb-6">O que você vai destravar com o Guia</h2>
          <div className="w-20 h-1 bg-brand-cta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="text-4xl font-bold text-brand-cta/40 font-serif">0{i + 1}</span>
              <h3 className="text-xl font-bold border-l-2 border-brand-cta pl-4">{b.title}</h3>
              <p className="text-white/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
