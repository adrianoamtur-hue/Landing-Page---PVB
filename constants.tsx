
import React from 'react';

export const CONFIG = {
  CHECKOUT_1_GUIA: "https://SEU_CHECKOUT_1_GUIA_AQUI",
  CHECKOUT_COMBO: "https://SEU_CHECKOUT_COMBO_AQUI",
  PRECO_1_GUIA: "R$ 47,00",
  PRECO_COMBO: "R$ 67,00",
  FOTO_PAULA_URL: "https://i.ibb.co/gMFHV7QK/Design-sem-nome-1.png",
  HERO_IMAGE_URL: "https://i.ibb.co/wZStFx9b/07686ed3-a6c9-4e7f-810b-4a2b3b3c907b.png",
  LOGO_URL: "https://i.ibb.co/n8CJ54Dq/Imagem-do-Whats-App-de-2025-11-14-s-23-22-28-458846d9.jpg",
  MOCKUP_GUIA_PRINCIPAL_URL: "https://picsum.photos/seed/guide1/600/800",
  MOCKUP_GUIA_SECUNDARIO_URL: "https://picsum.photos/seed/guide2/600/800",
  MOCKUP_COMBO_URL: "https://picsum.photos/seed/combo/800/600",
  DEPOIMENTO_IMAGES: [
    "https://picsum.photos/seed/dep1/400/250",
    "https://picsum.photos/seed/dep2/400/250",
    "https://picsum.photos/seed/dep3/400/250",
    "https://picsum.photos/seed/dep4/400/250",
    "https://picsum.photos/seed/dep5/400/250",
    "https://picsum.photos/seed/dep6/400/250"
  ]
};

// Fix: Added explicit props type including optional key to fix TS error in Hero.tsx map()
export const Icon = ({ name, className = "" }: { name: string; className?: string; key?: React.Key }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);
