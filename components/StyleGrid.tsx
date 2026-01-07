
import React from 'react';
import { Icon } from '../constants';

export const StyleGrid = () => {
  const styles = [
    { 
      name: "Clássico", 
      desc: "Elegância simples e atemporal. Neutros e cortes retos.", 
      link: "https://payfast.greenn.com.br/126004",
      image: "https://i.ibb.co/WvvWwSKZ/1-Estilo-dram-tico-T-tulo.png"
    },
    { 
      name: "Criativo", 
      desc: "Personalidade e autenticidade. Um toque autoral no visual.", 
      link: "https://payfast.greenn.com.br/126012",
      image: "https://i.ibb.co/ZpHFW80v/1-Estilo-Criativo.png"
    },
    { 
      name: "Dramático", 
      desc: "Impacto e modernidade. Looks marcantes e urbanos.", 
      link: "https://payfast.greenn.com.br/126015",
      image: "https://i.ibb.co/zTpK3Xxg/1-Estilo-dram-tico-T-tulo.png"
    },
    { 
      name: "Elegante", 
      desc: "Sofisticação sem esforço. Qualidade acima de quantidade.", 
      link: "https://payfast.greenn.com.br/126008",
      image: "https://i.ibb.co/0yf6ZXx7/1-Estilo-dram-tico-T-tulo.png"
    },
    { 
      name: "Esportivo", 
      desc: "Conforto funcional e leve. Praticidade no dia a dia.", 
      link: "https://payfast.greenn.com.br/126005",
      image: "https://i.ibb.co/PZ6N5W24/1-Estilo-dram-tico-T-tulo.png"
    },
    { 
      name: "Natural", 
      desc: "Leveza e simplicidade. Tecidos confortáveis e cores da terra.", 
      link: "https://payfast.greenn.com.br/126014",
      image: "https://i.ibb.co/NgpCMnFB/1-Estilo-dram-tico-T-tulo.png"
    },
    { 
      name: "Romântico", 
      desc: "Delicadeza e feminilidade. Leveza e detalhes suaves.", 
      link: "https://payfast.greenn.com.br/127776",
      image: "https://i.ibb.co/k668ydcf/1-Estilo-dram-tico-T-tulo.png"
    },
    { 
      name: "Sexy", 
      desc: "Sensualidade com sofisticação. Confiança e presença.", 
      link: "https://payfast.greenn.com.br/125997",
      image: "https://i.ibb.co/4gnb4L1N/1-Estilo-dram-tico-T-tulo.png"
    }
  ];

  return (
    <section id="escolha-seu-estilo" className="py-24 px-6 bg-gray-50/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-title mb-4 italic">Escolha seu Guia pelo seu estilo</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada Guia é um PDF prático com acesso vitalício (pela Greenn) — feito para ler no celular e consultar na hora de se vestir ou comprar.
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
                  ACESSO VITALÍCIO • R$ 47
                </div>
                <a 
                  href={style.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl border-2 border-brand-cta text-brand-cta font-bold text-sm hover:bg-brand-cta hover:text-white transition-all inline-flex items-center justify-center gap-2"
                >
                  Comprar guia deste estilo
                  <Icon name="arrow_forward" className="text-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-brand-text/40 text-[10px] lg:text-xs italic max-w-2xl mx-auto">
            Dica rápida: muitas mulheres têm 1 estilo principal e 1 secundário. Se estiver em dúvida, faça o diagnóstico e receba a recomendação exata por e-mail.
          </p>
        </div>
      </div>
    </section>
  );
};
