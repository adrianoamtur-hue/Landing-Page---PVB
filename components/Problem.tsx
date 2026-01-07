
import React from 'react';
import { Icon } from '../constants';

export const Problem = () => {
  const problems = [
    { icon: 'shopping_bag', text: 'Compra por impulso e depois percebe que não era ‘você’.' },
    { icon: 'checkroom', text: 'Guarda-roupa cheio… e mesmo assim nada parece combinar.' },
    { icon: 'styler', text: 'Perde tempo provando e sai sem se sentir confiante.' },
    { icon: 'refresh', text: 'Repete as mesmas peças por falta de direção.' },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-brand-title mb-4">Você se reconhece em alguma dessas situações?</h2>
        <div className="w-20 h-1 bg-brand-cta mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-secondary/5 hover:border-brand-cta/20 transition-colors group">
              <div className="w-14 h-14 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-cta group-hover:text-white transition-colors">
                <Icon name={p.icon} className="text-3xl" />
              </div>
              <p className="text-brand-text font-medium leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
