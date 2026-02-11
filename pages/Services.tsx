import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Offres</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Des solutions claires, tarifées à l'avance et conçues pour la performance.
          Choisissez le pack adapté à vos besoins actuels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;