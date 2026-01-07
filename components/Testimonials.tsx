
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Camila",
    location: "MG",
    style: "Estilo Natural",
    image: "https://i.ibb.co/3mHfJ3Zh/Camila-oriental.png",
    antes: "Eu priorizava conforto, mas acabava me sentindo desleixada.",
    depois: "Aprendi que dá pra ser confortável e bonita ao mesmo tempo."
  },
  {
    name: "Júlia",
    location: "RJ",
    style: "Estilo Criativo",
    image: "https://i.ibb.co/tT0N55Mw/julia-criativo-29-anos.png",
    antes: "Comprava por impulso e meu guarda-roupa não tinha identidade.",
    depois: "Hoje sei exatamente o que combina comigo."
  },
  {
    name: "Marina",
    location: "PR",
    style: "Estilo Clássico",
    image: "https://i.ibb.co/4n2t5tLf/marina-sorrindo.png",
    antes: "Tinha roupas boas, mas nunca sabia como usar no dia a dia.",
    depois: "Agora me visto com segurança e elegância."
  },
  {
    name: "Fernanda",
    location: "SP",
    style: "Estilo Sexy",
    image: "https://i.ibb.co/tM0MQffy/Fernanda-Sexy-37-anos.png",
    antes: "Eu não sabia dosar sensualidade e elegância.",
    depois: "Hoje me visto com presença e confiança."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#FDF8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-title mb-4">
            Veja quem já transformou seu guarda-roupa
          </h2>
          <p className="text-brand-text/60 text-lg lg:text-xl italic max-w-3xl mx-auto leading-relaxed">
            Relatos de mulheres que passaram a comprar com mais clareza e se sentir melhor ao se vestir.
          </p>
        </div>

        {/* Grid para Desktop e Carrossel para Mobile */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 lg:gap-8 pb-8 lg:pb-0 no-scrollbar snap-x">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-0 snap-center group"
            >
              <div className="bg-white p-5 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-brand-secondary/5 flex flex-col">
                {/* Foto */}
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-inner bg-gray-100">
                  <img 
                    src={t.image} 
                    alt={`${t.name} - ${t.style}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Bloco Antes */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">Antes</span>
                  <p className="text-brand-text/60 text-sm italic leading-relaxed">
                    "{t.antes}"
                  </p>
                </div>

                {/* Bloco Depois */}
                <div className="mb-6 flex-grow">
                  <span className="text-[10px] font-bold text-brand-cta uppercase tracking-widest block mb-1">Depois</span>
                  <p className="text-brand-text font-semibold text-base leading-relaxed">
                    "{t.depois}"
                  </p>
                </div>

                {/* Assinatura */}
                <div className="pt-4 border-t border-gray-50">
                  <p className="text-sm font-bold text-brand-title">
                    {t.name}, <span className="text-brand-text/40 font-normal">{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
