import React from 'react';
import { Zap, Brain, Heart, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">L'agence digitale du futur.</h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Flux Agency est née d'un constat simple : les agences traditionnelles sont trop lentes et trop chères pour les marques e-commerce modernes.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-brand-gray p-8 rounded-2xl border border-white/5">
          <Brain className="w-10 h-10 text-brand-accent mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">L'Intelligence Artificielle</h3>
          <p className="text-gray-400">
            Nous utilisons les meilleurs modèles LLM et outils génératifs pour accélérer la recherche, structurer les idées et produire des bases solides. Cela réduit les coûts et les délais.
          </p>
        </div>
        <div className="bg-brand-gray p-8 rounded-2xl border border-white/5">
          <Heart className="w-10 h-10 text-brand-accent mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">La Stratégie Humaine</h3>
          <p className="text-gray-400">
            L'IA ne comprend pas l'émotion humaine comme nous. Nos stratèges seniors repassent sur chaque livrable pour y injecter de la psychologie de vente, de l'empathie et une identité de marque unique.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-brand-accent" />
              <h4 className="text-xl font-bold text-white">Vitesse</h4>
            </div>
            <p className="text-gray-400 text-sm">Le e-commerce n'attend pas. Nous livrons vite pour que vous puissiez tester vite.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-brand-accent" />
              <h4 className="text-xl font-bold text-white">Transparence</h4>
            </div>
            <p className="text-gray-400 text-sm">Pas de devis obscurs. Nos prix sont affichés, nos process sont clairs.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-brand-accent" />
              <h4 className="text-xl font-bold text-white">Performance</h4>
            </div>
            <p className="text-gray-400 text-sm">Nous ne créons pas pour faire "joli", nous créons pour vendre.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;