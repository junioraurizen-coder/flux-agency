import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-white text-center mb-16">Questions Fréquentes</h1>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-brand-gray' : 'bg-transparent hover:bg-brand-gray/50'}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-white">{item.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-brand-accent flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-brand-gray/30 p-8 rounded-2xl border border-white/5">
        <p className="text-gray-300 mb-4">Vous n'avez pas trouvé votre réponse ?</p>
        <a href="mailto:hello@fluxagency.fr" className="text-brand-accent hover:text-white font-medium underline underline-offset-4 decoration-brand-accent">
          Contactez notre support
        </a>
      </div>
    </div>
  );
};

export default FAQ;