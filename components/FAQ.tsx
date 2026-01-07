
import React, { useState } from 'react';
import { Icon } from '../constants';

// Fix: Defined FAQItem as React.FC to properly handle React internal props like 'key' in lists
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <span className="text-lg font-bold text-brand-title">{question}</span>
        <Icon name={isOpen ? 'remove' : 'add'} className="text-brand-cta transition-transform" />
      </button>
      {isOpen && (
        <div className="mt-4 text-brand-text/70 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const questions = [
    { 
      q: "Qual guia é pra mim?", 
      a: "Se você já sabe seu estilo, compre direto na seção ‘Escolha seu estilo’. Se não sabe, faça o diagnóstico e receba seu estilo primário e secundário por e-mail." 
    },
    { 
      q: "Como funciona o diagnóstico (anamnese)?", 
      a: "Você responde um formulário rápido e recebe por e-mail seu estilo primário e secundário + recomendação de compra." 
    },
    { 
      q: "Quando eu recebo o guia?", 
      a: "Após a confirmação do pagamento, o acesso é liberado pela Greenn." 
    },
    { 
      q: "Em que formato vem?", 
      a: "PDF, feito para ler no celular e consultar na loja." 
    },
    { 
      q: "E se eu comprar o estilo errado?", 
      a: "Recomendamos o diagnóstico se tiver dúvida. Se você já sabe seu estilo, o guia certo te dá direção imediata." 
    },
    { 
      q: "Qual a diferença entre 1 guia e o combo?", 
      a: "1 guia é para quem já sabe o estilo. O combo é ideal para quem tem estilo primário + secundário e quer aprender a misturar." 
    },
    { 
      q: "Tem garantia?", 
      a: "Sim, garantia conforme o checkout." 
    },
    { 
      q: "O Armário Inteligente serve para qualquer estilo?", 
      a: "Sim. Ele é uma base estratégica que funciona com qualquer estilo." 
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl lg:text-4xl text-brand-title text-center mb-16">Dúvidas Frequentes</h2>
        <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-sm">
          {questions.map((q, i) => (
            <FAQItem key={i} question={q.q} answer={q.a} />
          ))}
        </div>
      </div>
    </section>
  );
};
