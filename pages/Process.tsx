import React from 'react';
import { ShoppingCart, FileText, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Comment ça marche ?</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Nous avons simplifié le processus d'agence traditionnelle pour qu'il soit aussi fluide qu'un achat e-commerce.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent z-0 opacity-30"></div>

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-brand-gray border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <ShoppingCart className="w-10 h-10 text-brand-accent" />
          </div>
          <div className="bg-brand-black px-4 py-1 rounded-full border border-white/10 text-xs font-mono text-gray-400 mb-4">ÉTAPE 01</div>
          <h3 className="text-2xl font-bold text-white mb-4">Choisissez votre service</h3>
          <p className="text-gray-400 leading-relaxed">
            Parcourez notre catalogue d'offres et sélectionnez celle qui correspond à votre besoin immédiat. Ajoutez au panier et réglez en toute sécurité.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-brand-gray border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <FileText className="w-10 h-10 text-brand-accent" />
          </div>
          <div className="bg-brand-black px-4 py-1 rounded-full border border-white/10 text-xs font-mono text-gray-400 mb-4">ÉTAPE 02</div>
          <h3 className="text-2xl font-bold text-white mb-4">Remplissez le brief</h3>
          <p className="text-gray-400 leading-relaxed">
            Immédiatement après le paiement, vous recevez un formulaire simple. C'est ici que vous nous donnez les infos clés (produit, cible, ton).
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-brand-gray border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Gift className="w-10 h-10 text-brand-accent" />
          </div>
          <div className="bg-brand-black px-4 py-1 rounded-full border border-white/10 text-xs font-mono text-gray-400 mb-4">ÉTAPE 03</div>
          <h3 className="text-2xl font-bold text-white mb-4">Livraison sous 48h-72h</h3>
          <p className="text-gray-400 leading-relaxed">
            Notre équipe (IA + Humain) se met au travail. Vous recevez vos assets par email prêts à être utilisés ou diffusés.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link 
          to="/services" 
          className="bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2"
        >
          Commencer maintenant <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Process;