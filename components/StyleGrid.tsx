
import React from 'react';
import { Icon } from '../constants';

export const StyleGrid = () => {
  const styles = [
    { 
      name: "Clássico", 
      desc: "Elegância simples e atemporal. Neutros e cortes retos.", 
      link: "https://payfast.greenn.com.br/126004",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&h=500&fit=crop"
    },
    { 
      name: "Criativo", 
      desc: "Personalidade e autenticidade. Um toque autoral no visual.", 
      link: "https://payfast.greenn.com.br/126012",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=400&h=500&fit=crop"
    },
    { 
      name: "Dramático", 
      desc: "Impacto e modernidade. Looks marcantes e urbanos.", 
      link: "https://payfast.greenn.com.br/126015",
      image: "https://images.unsplash.com/photo-1539109132382-361bd5755a7e?q=80&w=400&h=500&fit=crop"
    },
    { 
      name: "Elegante", 
      desc: "Sofisticação sem esforço. Qualidade acima de quantidade.", 
      link: "https://payfast.greenn.com.br/126008",
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=400&h=500&fit=crop"
    },
    { 
      name: "Esportivo", 
      desc: "Conforto funcional e leve. Praticidade no dia a dia.", 
      link: "https://payfast.greenn.com.br/126005",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&h=500&fit=crop"
    },
    { 
      name: "Natural", 
      desc: "Leveza e simplicidade. Tecidos confortáveis e cores da terra.", 
      link: "https://payfast.greenn.com.br/126014",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&h=500&fit=crop"
    },
    { 
      name: "Romântico", 
      desc: "Delicadeza e feminilidade. Leveza e detalhes suaves.", 
      link: "https://payfast.greenn.com.br/127776",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=400&h=500&fit=crop"
    },
    { 
      name: "Sexy", 
      desc: "Sensualidade com sofisticação. Confiança e presença.", 
      link: "https://payfast.greenn.com.br/125997",
      image: "https://images.unsplash.com/photo-1529139513055-07f9127c5361?q=80&w=400&h=500&fit=crop"
    }
  ];

  return (
    <section id="escolha-seu-estilo" className="py-24 px-6 bg-gray-50/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-title mb-4 italic">Escolha seu Guia pelo seu estilo</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada Guia é um acesso vitalício (pela Greenn), com leitura leve no celular e direção prática para você se vestir com clareza.
          </p>
          <div className="w-20 h-1 bg-brand-cta mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, i) => (
            <div key={i} className="bg-white p-4 pb-8 rounded-[32px] shadow-sm border border-brand-secondary/10 flex flex-col items-center text-center hover:shadow-xl hover:border-brand-cta/20 transition-all group">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={style.image} 
                  alt={`Representação do Estilo ${style.name}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 flex flex-col items-center flex-grow w-full">
                <h3 className="font-serif text-2xl text-brand-title mb-3">Estilo {style.name}</h3>
                <p className="text-brand-text/60 text-sm mb-4 leading-relaxed flex-grow">
                  {style.desc}
                </p>
                <div className="text-brand-cta font-bold text-xs uppercase tracking-widest mb-6">
                  Acesso vitalício • R$ 47
                </div>
                <a 
                  href={style.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl border-2 border-brand-cta text-brand-cta font-bold text-sm hover:bg-brand-cta hover:text-white transition-all inline-flex items-center justify-center gap-2"
                >
                  Ver Guia deste estilo
                  <Icon name="arrow_forward" className="text-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
