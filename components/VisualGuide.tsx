
import React from 'react';
import { CONFIG, Icon } from '../constants';

export const VisualGuide = () => {
  const items = [
    { icon: 'auto_awesome', text: 'Combinações prontas pro seu dia a dia (sem travar na frente do espelho).' },
    { icon: 'style', text: 'Compras mais inteligentes: você para de errar e começa a acertar.' },
    { icon: 'shopping_bag', text: 'Clareza sobre o que te valoriza — de acordo com seu estilo.' },
    { icon: 'import_contacts', text: 'Leitura leve e prática pra consultar em casa ou na loja.' },
  ];

  // Imagens fornecidas pelo usuário
  const USAGE_IMAGE_URL = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800";
  const LOGO_PROJETO_URL = "https://i.ibb.co/B2pHFxrc/6e866b07a8a9c7a549cb200a1cd3aa06.jpg";
  const CONSULTORIA_CONTEUDO_URL = "https://i.ibb.co/Ld0vq8MM/476cc0f983df776f6a0c9ada2053949f.jpg";

  return (
    <section className="py-24 px-6 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Coluna da Esquerda: Composição de Uso Real + Conteúdo */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Imagem de Fundo: Mulher no Espelho/Guarda-roupa */}
            <img 
              src={USAGE_IMAGE_URL} 
              alt="Mulher usando o Guia de Bolso" 
              className="w-full aspect-[4/5] object-cover"
            />
            
            {/* Overlay: Celular com a Logomarca na tela */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] border-[4px] border-brand-deep bg-brand-deep overflow-hidden transform rotate-2">
              <img 
                src={LOGO_PROJETO_URL} 
                alt="Logomarca Projeto Vestir Bem na tela do celular" 
                className="w-full aspect-[9/16] object-cover"
              />
            </div>

            {/* Páginas Flutuantes (Saindo do Celular) */}
            <div className="absolute top-1/4 -right-12 lg:-right-20 w-32 lg:w-44 shadow-2xl rounded-lg overflow-hidden transform rotate-3 bg-white border border-gray-100 hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="bg-brand-cta/10 py-1 text-[8px] lg:text-[10px] text-center font-bold uppercase tracking-tighter text-brand-cta">Combinações</div>
              <img src={CONSULTORIA_CONTEUDO_URL} alt="Página de Combinações" className="w-full h-auto" />
            </div>

            <div className="absolute bottom-1/4 -left-12 lg:-left-20 w-32 lg:w-44 shadow-2xl rounded-lg overflow-hidden transform -rotate-6 bg-white border border-gray-100 hidden sm:block animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="bg-brand-title/10 py-1 text-[8px] lg:text-[10px] text-center font-bold uppercase tracking-tighter text-brand-title">Peças-chave</div>
              <img src={CONSULTORIA_CONTEUDO_URL} alt="Página de Conteúdo Consultoria" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-cta/5 rounded-full blur-[100px] -z-10"></div>
        </div>

        {/* Coluna da Direita: Conteúdo e Texto */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-title mb-10 leading-tight">
            Imagine abrir o guarda-roupa <br className="hidden lg:block" /> e saber exatamente o que vestir
          </h2>
          
          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-cta/10 text-brand-cta flex items-center justify-center shrink-0 group-hover:bg-brand-cta group-hover:text-white transition-all">
                  <Icon name={item.icon} className="text-xl leading-none" />
                </div>
                <span className="text-lg lg:text-xl font-medium text-brand-text/80">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-gray-100">
            <p className="text-brand-text/60 italic max-w-sm">
              Para consultar em frente ao espelho ou na loja.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
