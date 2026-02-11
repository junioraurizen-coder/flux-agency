import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 hover:text-brand-accent ${
      isActive ? 'text-brand-accent' : 'text-gray-300'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium ${
      isActive ? 'bg-brand-gray text-brand-accent' : 'text-gray-300 hover:bg-brand-gray hover:text-white'
    }`;

  return (
    <nav className="fixed w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                <Zap className="w-5 h-5 text-white group-hover:text-brand-accent" fill="currentColor" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Flux Agency</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION.map((item) => (
                <NavLink key={item.path} to={item.path} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/services"
              className="bg-white text-brand-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent hover:text-white transition-all duration-300"
            >
              Lancer mon projet
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-brand-gray inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-black border-b border-white/10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;