
import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { DarkBand } from './components/DarkBand';
import { VisualGuide } from './components/VisualGuide';
import { StyleGrid } from './components/StyleGrid';
import { StyleQuiz } from './components/StyleQuiz';
import { Testimonials } from './components/Testimonials';
import { ComparisonTable } from './components/ComparisonTable';
import { Offer } from './components/Offer';
import { SmartWardrobe } from './components/SmartWardrobe';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <About />
      <DarkBand />
      <VisualGuide />
      <StyleGrid />
      <StyleQuiz />
      <Testimonials />
      <ComparisonTable />
      <Offer />
      <SmartWardrobe />
      <TrustBar />
      <FAQ />
      
      {/* Final CTA Strip */}
      <section className="py-20 bg-brand-cta text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-5xl mb-8">Pronta para se vestir bem com mais clareza?</h2>
          <a href="#escolha-seu-estilo" className="inline-block bg-white text-brand-cta px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform">
            Escolher meu Guia por estilo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
