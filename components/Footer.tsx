import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-brand-accent" fill="currentColor" />
              <span className="text-white font-bold text-xl">Flux Agency</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              L'agence digitale nouvelle génération pour les marques e-commerce ambitieuses. Stratégie humaine, puissance de l'IA.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@fluxagency.fr" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-brand-accent">UGC & Ads</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent">Copywriting</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent">Branding</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent">Email Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-accent">À propos</Link></li>
              <li><Link to="/process" className="hover:text-brand-accent">Comment ça marche</Link></li>
              <li><Link to="/faq" className="hover:text-brand-accent">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/legal" className="hover:text-brand-accent">Mentions Légales</Link></li>
              <li><Link to="/legal" className="hover:text-brand-accent">Politique de Confidentialité</Link></li>
              <li><Link to="/legal" className="hover:text-brand-accent">CGV</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Flux Agency. Tous droits réservés. Paris, France.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;