
import React from 'react';
import { Icon } from '../constants';

export const TrustBar = () => {
  const items = [
    { icon: 'lock', text: 'Compra 100% Segura' },
    { icon: 'bolt', text: 'Acesso Imediato' },
    { icon: 'picture_as_pdf', text: 'PDF de Fácil Leitura' },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <Icon name={item.icon} className="text-brand-secondary text-3xl" />
              <span className="text-sm font-bold text-brand-title uppercase tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
