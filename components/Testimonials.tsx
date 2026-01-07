
import React, { useEffect, useRef, useState } from 'react';

// Dados dos depoimentos solicitados
const TESTIMONIALS_DATA = [
  { 
    author: "Marina, SP", 
    antes: "Comprava no impulso e quase não usava metade do que tinha.", 
    depois: "Agora sei exatamente o que vale comprar e parei de jogar dinheiro fora." 
  },
  { 
    author: "Julia, RJ", 
    antes: "Meu guarda-roupa era cheio, mas nada combinava.", 
    depois: "Com o guia, hoje consigo montar looks incríveis só com o que já tenho." 
  },
  { 
    author: "Camila, MG", 
    antes: "Sempre achava que precisava comprar mais pra me sentir bem.", 
    depois: "Aprendi a comprar as peças certas e economizar de verdade." 
  },
  { 
    author: "Beatriz, RS", 
    antes: "Ficava insegura e levava horas tentando me vestir.", 
    depois: "Hoje me visto com mais confiança e muito mais rapidez." 
  },
  { 
    author: "Fernanda, PR", 
    antes: "Tinha peças lindas, mas nunca sabia como usar no dia a dia.", 
    depois: "O guia me deu as combinações prontas pra eu não errar mais." 
  },
  { 
    author: "Aline, SC", 
    antes: "Comprava só porque estava barato, sem critério nenhum.", 
    depois: "Agora compro com direção e cada peça nova combina com tudo." 
  },
];

/**
 * Função para gerar uma imagem de depoimento via SVG.
 * Isso permite "gerar" o conteúdo visual sem precisar de arquivos externos.
 */
const generateTestimonialImage = (antes: string, depois: string, author: string) => {
  const esc = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Helper simples para quebra de linha manual no SVG
  const wrapText = (text: string, maxChars: number) => {
    if (text.length <= maxChars) return [text];
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      if ((currentLine + ' ' + words[i]).length <= maxChars) {
        currentLine += ' ' + words[i];
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const antesLines = wrapText(antes, 45);
  const depoisLines = wrapText(depois, 42);

  const svg = `
    <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="#FDF8F6"/>
      
      <!-- Seção Antes -->
      <text x="30" y="45" fill="#EF4444" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.1em">ANTES</text>
      ${antesLines.map((line, i) => `
        <text x="30" y="${75 + (i * 22)}" fill="#5E2C25" font-family="Inter, sans-serif" font-size="15" font-style="italic">"${esc(line)}"</text>
      `).join('')}

      <!-- Linha divisória discreta -->
      <line x1="30" y1="130" x2="370" y2="130" stroke="#E5E7EB" stroke-width="1" />

      <!-- Seção Depois -->
      <text x="30" y="165" fill="#C67052" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.1em">DEPOIS</text>
      ${depoisLines.map((line, i) => `
        <text x="30" y="${195 + (i * 22)}" fill="#1A1A1A" font-family="Inter, sans-serif" font-size="15" font-weight="600">"${esc(line)}"</text>
      `).join('')}

      <!-- Assinatura/Autor -->
      <text x="30" y="235" fill="#9CA3AF" font-family="Inter, sans-serif" font-size="12" font-weight="500">${esc(author)}</text>
      
      <!-- Detalhe Visual de Checkmark -->
      <circle cx="365" cy="225" r="10" fill="#C67052" fill-opacity="0.1" />
      <path d="M361 225L364 228L369 222" stroke="#C67052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
  
  const base64 = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${base64}`;
};

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mapeamos os dados para as imagens geradas em tempo de execução
  const testimonialImages = TESTIMONIALS_DATA.map(t => generateTestimonialImage(t.antes, t.depois, t.author));

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-title mb-4">Veja quem já transformou seu guarda-roupa</h2>
          <div className="w-20 h-1 bg-brand-cta mx-auto mb-4"></div>
          <p className="text-brand-text/60 italic">Relatos de mulheres que passaram a comprar com mais clareza e se sentir melhor ao se vestir.</p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonialImages.map((img, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[400px] snap-center">
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-brand-secondary/10">
                <img src={img} alt={`Depoimento ${i+1}`} className="w-full h-auto rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-text/40 mt-8">
          Depoimentos ilustrativos (prints). Resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
};
