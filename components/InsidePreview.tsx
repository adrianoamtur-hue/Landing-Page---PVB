
import React, { useState } from 'react';
import { Icon } from '../constants';

export const InsidePreview = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const stylePreviews = [
    { 
      tag: "ESTILO CLÁSSICO", 
      title: "Base Clássica",
      desc: "Elegância atemporal com peças neutras e versáteis que funcionam em qualquer ocasião.",
      img: "https://i.ibb.co/ZR35N4gh/2-BAE2705-5024-4-EF6-8-CC2-CE15117-B6208.png" 
    },
    { 
      tag: "ESTILO CRIATIVO", 
      title: "Expressão Visual",
      desc: "Combinações cheias de personalidade, autenticidade e informação de moda.",
      img: "https://i.ibb.co/JX02Rt2/1-F073-D00-ECDD-40-DB-8-CD7-A8-D2203-EF34-D.png" 
    },
    { 
      tag: "ESTILO DRAMÁTICO", 
      title: "Impacto",
      desc: "Looks marcantes, contraste forte e presença visual que se impõe.",
      img: "https://i.ibb.co/20f49NVf/CAD5-AB58-BE30-4-CBA-9-FE5-B21515480-A8-C.png" 
    },
    { 
      tag: "ESTILO ELEGANTE", 
      title: "Sofisticação",
      desc: "Linhas refinadas, tecidos nobres e acabamento impecável.",
      img: "https://i.ibb.co/HLdwQJpP/65-A226-A6-65-F6-436-A-A8-F0-CCF9-C935-F1-D8.png" 
    },
    { 
      tag: "ESTILO ESPORTIVO", 
      title: "Conforto Funcional",
      desc: "Praticidade, mobilidade e roupas que acompanham o ritmo do dia a dia.",
      img: "https://i.ibb.co/BVKyDwyg/50-C63565-821-C-403-C-90-C3-89983-A5-FDE6-E.png" 
    },
    { 
      tag: "ESTILO NATURAL", 
      title: "Leveza Natural",
      desc: "Tecidos confortáveis, cores suaves e conexão com a simplicidade.",
      img: "https://i.ibb.co/Z12w4RpT/4-D00637-C-9-E4-D-45-EE-9-BFA-DBC49-DF9-F2-FA.png" 
    },
    { 
      tag: "ESTILO ROMÂNTICO", 
      title: "Delicadeza",
      desc: "Feminilidade, movimento e detalhes suaves que criam harmonia.",
      img: "https://i.ibb.co/Lzt1tx77/5476-FE95-8246-4105-8350-1-BF923-CA1-FA9.png" 
    },
    { 
      tag: "ESTILO SEXY", 
      title: "Presença",
      desc: "Sensualidade elegante, confiança e valorização do corpo sem exageros.",
      img: "https://i.ibb.co/pvp2DrRp/C6657363-3-B16-4-C27-81-AE-9-EB991883-EF7.png" 
    }
  ];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % stylePreviews.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + stylePreviews.length) % stylePreviews.length);
    }
  };

  return (
    <section className="py-24 px-6 bg-brand-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-4">Veja por dentro dos Guias</h2>
          <p className="text-white/70 text-lg lg:text-xl italic max-w-2xl mx-auto">
            Imagens reais retiradas dos Guias de Bolso — pra você sentir o nível do material.
          </p>
        </div>

        {/* Grid para Desktop/Tablet e Carrossel para Mobile */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:gap-8 pb-8 lg:pb-0 no-scrollbar snap-x">
          {stylePreviews.map((style, i) => (
            <div 
              key={i} 
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-0 snap-center cursor-zoom-in group relative"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="bg-white p-4 lg:p-6 rounded-[2rem] shadow-xl transition-all duration-500 group-hover:scale-[1.02] flex flex-col h-full border border-white/10">
                {/* Tag Superior */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-brand-secondary bg-brand-secondary/5 px-3 py-1 rounded-full uppercase">
                    {style.tag}
                  </span>
                </div>

                {/* Imagem Preview */}
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-50 mb-6 border border-gray-100 relative">
                  <img 
                    src={style.img} 
                    alt={`Preview Guia ${style.tag}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Overlay sutil de zoom ao passar o mouse */}
                  <div className="absolute inset-0 bg-brand-deep/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon name="zoom_in" className="text-brand-deep/30 text-3xl" />
                  </div>
                </div>

                {/* Conteúdo Textual */}
                <div className="flex flex-col flex-grow text-left">
                  <h3 className="font-serif text-xl text-brand-title mb-2">
                    {style.title}
                  </h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed">
                    {style.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm lg:text-base font-medium tracking-wide">
            PDF leve, leitura rápida, feito para consultar no espelho ou na loja.
          </p>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Botões de Navegação e Fechar */}
          <button 
            className="absolute top-6 right-6 z-[110] text-white bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <Icon name="close" className="text-3xl" />
          </button>

          <button 
            className="absolute left-4 lg:left-10 z-[110] text-white bg-white/5 w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors hidden sm:flex"
            onClick={prevImage}
          >
            <Icon name="chevron_left" className="text-4xl" />
          </button>

          <button 
            className="absolute right-4 lg:right-10 z-[110] text-white bg-white/5 w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors hidden sm:flex"
            onClick={nextImage}
          >
            <Icon name="chevron_right" className="text-4xl" />
          </button>
          
          <div className="max-w-[95vw] max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={stylePreviews[selectedIndex].img} 
              alt={`Preview ampliado ${stylePreviews[selectedIndex].tag}`} 
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/5"
            />
            <div className="mt-8 text-white text-center max-w-xl px-6">
              <span className="text-xs font-bold tracking-widest text-brand-cta mb-2 block uppercase">{stylePreviews[selectedIndex].tag}</span>
              <h3 className="font-serif text-2xl mb-2 italic">{stylePreviews[selectedIndex].title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{stylePreviews[selectedIndex].desc}</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Página {selectedIndex + 1} de {stylePreviews.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Decoração */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cta/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cta/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};
