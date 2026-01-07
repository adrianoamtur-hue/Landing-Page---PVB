
import React, { useState } from 'react';
import { Icon } from '../constants';

export const InsidePreview = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const previews = [
    "https://i.ibb.co/CKdrSbhH/DEED2-DEB-945-A-490-C-8-C20-42-F8-C24-F6-BF9.png",
    "https://i.ibb.co/99bP4ch9/BABBE87-B-960-A-4-A73-B830-185641429-F62.png",
    "https://i.ibb.co/pvp2DrRp/C6657363-3-B16-4-C27-81-AE-9-EB991883-EF7.png"
  ];

  return (
    <section className="py-24 px-6 bg-brand-deep relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-4">Veja por dentro do Guia</h2>
          <p className="text-white/70 text-lg lg:text-xl italic">3 páginas reais pra você sentir o nível do material.</p>
        </div>

        {/* Desktop Grid / Mobile Carousel */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 lg:gap-10 pb-8 lg:pb-0 no-scrollbar snap-x">
          {previews.map((img, i) => (
            <div 
              key={i} 
              className="min-w-[85%] sm:min-w-[60%] lg:min-w-0 snap-center cursor-zoom-in group"
              onClick={() => setSelectedImage(img)}
            >
              <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                <img 
                  src={img} 
                  alt={`Preview do Guia ${i + 1}`} 
                  className="w-full h-auto rounded-[1.8rem] border border-gray-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-brand-cta text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <Icon name="zoom_in" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm lg:text-base font-medium">
            PDF leve, leitura rápida, feito pra consultar no espelho ou na loja.
          </p>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-10 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="close" className="text-3xl" />
          </button>
          
          <div className="max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Preview ampliado" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Decoração */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};
