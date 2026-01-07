
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-white text-center px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl text-brand-title mb-8">Projeto Vestir Bem</h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-text/60 mb-8">
          <a href="#" className="hover:text-brand-cta">Termos de Uso</a>
          <a href="#" className="hover:text-brand-cta">Privacidade</a>
          <a href="#" className="hover:text-brand-cta">Suporte</a>
        </div>
        <p className="text-xs text-brand-text/40">
          © {new Date().getFullYear()} Projeto Vestir Bem. Todos os direitos reservados.
          <br />
          Esta página não é afiliada ao Facebook ou Instagram.
        </p>
      </div>
    </footer>
  );
};
