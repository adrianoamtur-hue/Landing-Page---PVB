
import React from 'react';
import { Icon } from '../constants';

export const ComparisonTable = () => {
  const rows = [
    "Compras por impulso",
    "Peças paradas com etiqueta",
    "Dificuldade de combinar",
    "Gastos desnecessários",
    "Clareza do que vale comprar",
    "Combinações prontas e rápidas",
    "Clareza do seu estilo (o que combina com você)",
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="font-serif text-3xl lg:text-4xl text-brand-title text-center mb-12">Comprar sem direção vs. Comprar com clareza</h2>
      
      <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-brand-secondary/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-deep text-white">
              <th className="p-6 font-serif text-lg">Critério</th>
              <th className="p-6 text-center font-bold">Sem o Guia</th>
              <th className="p-6 text-center font-bold bg-brand-cta/20">Com o Guia</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-medium text-brand-text">{row}</td>
                <td className="p-6 text-center">
                  <Icon name="close" className="text-red-400" />
                </td>
                <td className="p-6 text-center bg-brand-cta/5">
                  <Icon name="check" className="text-green-600 font-bold" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center mt-8 text-brand-text/60 italic text-sm lg:text-base">
        “Quando você sabe seu estilo, tudo fica mais fácil: combinar, comprar e se sentir bem.”
      </p>
    </section>
  );
};
