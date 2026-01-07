
import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { DarkBand } from './components/DarkBand';
import { VisualGuide } from './components/VisualGuide';
import { InsidePreview } from './components/InsidePreview';
import { StyleGrid } from './components/StyleGrid';
import { StyleQuiz } from './components/StyleQuiz';
import { Testimonials } from './components/Testimonials';
import { ComparisonTable } from './components/ComparisonTable';
import { SmartWardrobe } from './components/SmartWardrobe';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  const scrollToGuias = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("guias");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <About />
      <DarkBand />
      <VisualGuide />
      <InsidePreview />
      <StyleGrid />
      <StyleQuiz />
      <Testimonials />
      <ComparisonTable />
      <SmartWardrobe />
      <TrustBar />
      <FAQ />
      
      {/* Final CTA Strip */}
      <section className="py-24 bg-brand-cta text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-5xl mb-8 leading-tight">Pronta para se vestir bem com mais clareza?</h2>
          <div className="flex flex-col items-center gap-4">
            <a 
              href="#guias" 
              onClick={scrollToGuias}
              className="inline-block bg-white text-brand-cta px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform"
            >
              Escolher meu Guia por estilo
            </a>
            <p className="text-xs text-white/90 font-medium tracking-wide uppercase">
              Acesso imediato pela Greenn • PDF vitalício • Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
