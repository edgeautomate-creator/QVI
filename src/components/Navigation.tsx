import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const isPereaActive = () => {
    return location.pathname === '/peregrinaciones' ||
           location.pathname.startsWith('/egypt') ||
           location.pathname.startsWith('/mexico') ||
           location.pathname.startsWith('/holyland');
  };

  const isViajesEspecialesActive = () => {
    return location.pathname.startsWith('/viajes-especiales');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/QVILogo-new.png"
              alt="QVI Travel Group"
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-[#ff6b6b]' : 'text-gray-700 hover:text-[#1a2b5c]'
              }`}
            >
              {t('nav.home')}
            </Link>

            <Link
              to="/peregrinaciones"
              className={`text-sm font-medium transition-colors ${
                isPereaActive() ? 'text-[#ff6b6b]' : 'text-gray-700 hover:text-[#1a2b5c]'
              }`}
            >
              {t('nav.peregrinaciones')}
            </Link>

            <Link
              to="/viajes-especiales"
              className={`text-sm font-medium transition-colors ${
                isViajesEspecialesActive() ? 'text-[#ff6b6b]' : 'text-gray-700 hover:text-[#1a2b5c]'
              }`}
            >
              {t('nav.viajesEspeciales')}
            </Link>

            <Link
              to="/cruceros"
              className={`text-sm font-medium transition-colors ${
                isActive('/cruceros') ? 'text-[#ff6b6b]' : 'text-gray-700 hover:text-[#1a2b5c]'
              }`}
            >
              {t('nav.cruceros')}
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-[#ff6b6b]' : 'text-gray-700 hover:text-[#1a2b5c]'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-[#ff6b6b]' : 'text-gray-700 hover:text-[#1a2b5c]'
              }`}
            >
              {t('nav.contact')}
            </Link>

            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#1a2b5c] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <a
              href="tel:+13052740453"
              className="flex items-center space-x-2 bg-[#1a2b5c] text-white px-4 py-2 rounded-lg hover:bg-[#243a75] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(305) 274-0453</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#1a2b5c]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium py-2 ${
                isActive('/') ? 'text-[#ff6b6b]' : 'text-gray-700'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/peregrinaciones"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium py-2 ${
                isPereaActive() ? 'text-[#ff6b6b]' : 'text-gray-700'
              }`}
            >
              {t('nav.peregrinaciones')}
            </Link>
            <Link
              to="/viajes-especiales"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium py-2 ${
                location.pathname.startsWith('/viajes-especiales') ? 'text-[#ff6b6b]' : 'text-gray-700'
              }`}
            >
              {t('nav.viajesEspeciales')}
            </Link>
            <Link
              to="/cruceros"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium py-2 ${
                isActive('/cruceros') ? 'text-[#ff6b6b]' : 'text-gray-700'
              }`}
            >
              {t('nav.cruceros')}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium py-2 ${
                isActive('/about') ? 'text-[#ff6b6b]' : 'text-gray-700'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium py-2 ${
                isActive('/contact') ? 'text-[#ff6b6b]' : 'text-gray-700'
              }`}
            >
              {t('nav.contact')}
            </Link>

            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-2 text-base font-medium text-gray-700 py-2"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'es' ? 'English' : 'Español'}</span>
            </button>

            <a
              href="tel:+13052740453"
              className="flex items-center justify-center space-x-2 bg-[#1a2b5c] text-white px-4 py-3 rounded-lg hover:bg-[#243a75] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-base font-medium">(305) 274-0453</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
