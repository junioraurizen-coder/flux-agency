import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const handleOrder = () => {
    // Simulating checkout process
    alert(`Redirection vers le paiement sécurisé pour : ${item.title}`);
  };

  return (
    <div className="bg-brand-gray border border-white/5 rounded-2xl p-6 flex flex-col hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] group">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h3>
        <p className="text-gray-400 text-sm h-10 line-clamp-2">{item.description}</p>
      </div>
      
      <div className="my-6 border-t border-white/5 pt-6 flex-grow">
        <ul className="space-y-3">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <Check className="w-4 h-4 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4">
        <span className="text-2xl font-bold text-white">{item.price} €</span>
        <button 
          onClick={handleOrder}
          className="bg-white text-brand-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          Commander <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;