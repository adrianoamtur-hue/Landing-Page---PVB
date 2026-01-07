
import React from 'react';
import { CONFIG, Icon } from '../constants';

interface FeatureProps {
  title: string;
  image: string;
  reverse?: boolean;
  bullets: string[];
}

const Feature = ({ title, image, reverse, bullets }: FeatureProps) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-24 last:mb-0`}>
    <div className="flex-1">
      <img src={image} alt={title} className="rounded-3xl shadow-xl w-full aspect-video lg:aspect-square object-cover" />
    </div>
    <div className="flex-1">
      <h3 className="font-serif text-3xl text-brand-title mb-6">{title}</h3>
      <ul className="space-y-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <Icon name="check_circle" className="text-brand-cta mt-0.5" />
            <span className="text-brand-text/80 font-medium">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const FeatureSection = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <Feature 
        title="Guia Principal (PDF)"
        image={CONFIG.MOCKUP_GUIA_PRINCIPAL_URL}
        bullets={[
          "Identificação do seu estilo sem rótulos técnicos",
          "Lista de peças essenciais para o guarda-roupa básico",
          "Como combinar cores e estampas sem medo",
          "Guia visual de caimento e modelagem",
          "Checklist para levar no shopping"
        ]}
      />
      <Feature 
        title="Guia Secundário (Complemento)"
        image={CONFIG.MOCKUP_GUIA_SECUNDARIO_URL}
        reverse
        bullets={[
          "Variações de looks para diferentes ocasiões",
          "Dicas de ajustes rápidos em costureira",
          "Como usar acessórios para mudar o visual",
          "Guia de compras inteligentes por estação"
        ]}
      />
      <Feature 
        title="Por que o Combo é o mais indicado"
        image={CONFIG.MOCKUP_COMBO_URL}
        bullets={[
          "Acesso completo a todo o método",
          "Economia significativa comparado ao avulso",
          "Maior repertório de combinações prontas",
          "Segurança total na hora de montar seus looks"
        ]}
      />
    </section>
  );
};
