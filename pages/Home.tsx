import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Target, ShieldCheck } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3); // Show top 3 services

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] -z-10 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Nouvelle méthode disponible
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            Des assets marketing conçus pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">convertir</span>.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Flux Agency accompagne les marques e-commerce avec des services optimisés par l’IA et pilotés par une stratégie humaine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-brand-accent text-white rounded-full font-semibold hover:bg-brand-accentHover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Découvrir les offres <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/process" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Comment ça marche
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 bg-brand-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500">
                <TrendingUp className="w-8 h-8 rotate-180" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Trafic sans ventes</h3>
              <p className="text-gray-400">Vous attirez des visiteurs, mais ils repartent sans acheter. Votre taux de conversion stagne.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-500">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pubs inefficaces</h3>
              <p className="text-gray-400">Vos coûts d'acquisition explosent car vos créas ne captent pas l'attention assez vite.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Branding faible</h3>
              <p className="text-gray-400">Votre marque manque de crédibilité face aux géants du secteur. L'identité est floue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos services phares</h2>
            <p className="text-gray-400">Des solutions prêtes à l'emploi pour scaler votre boutique.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} item={service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="text-brand-accent hover:text-white font-medium inline-flex items-center gap-2 transition-colors">
              Voir toutes les offres <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-brand-gray/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simple. Rapide. Efficace.</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Nous avons supprimé les réunions inutiles et les délais à rallonge. Commandez vos assets comme vous commandez un produit.
              </p>
              <ul className="space-y-6">
                {[
                  { title: '1. Commande', desc: 'Sélectionnez votre pack et validez la commande.' },
                  { title: '2. Brief', desc: 'Remplissez un formulaire simple pour nous guider.' },
                  { title: '3. Livraison', desc: 'Recevez vos assets sous 48h à 72h.' }
                ].map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{step.title}</h4>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full"></div>
              <div className="relative bg-brand-black border border-white/10 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                  <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Livraison confirmée</div>
                    <div className="text-gray-500 text-sm">Il y a 2 minutes</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à faire décoller vos ventes ?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Rejoignez les marques qui font confiance à Flux Agency pour leur croissance.
          </p>
          <Link 
            to="/services" 
            className="px-10 py-4 bg-white text-brand-black rounded-full font-bold text-lg hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-lg shadow-brand-accent/20"
          >
            Lancer mon projet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;