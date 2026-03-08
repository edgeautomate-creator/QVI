import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2b5c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/QVILogo-new.png"
                alt="QVI Travel Group"
                className="h-20 w-auto"
              />
            </div>
            <h3 className="font-semibold mb-2 text-[#ff6b6b]">{t('footer.about')}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{t('footer.aboutText')}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#ff6b6b]">{t('footer.quick')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/peregrinaciones" className="text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors">
                  {t('nav.peregrinaciones')}
                </Link>
              </li>
              <li>
                <Link to="/viajes-especiales" className="text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors">
                  {t('nav.viajesEspeciales')}
                </Link>
              </li>
              <li>
                <Link to="/cruceros" className="text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors">
                  {t('nav.cruceros')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#ff6b6b]">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+13052740453"
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(305) 274-0453</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Reservations@qvitravel.miami"
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-[#ff6b6b] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>Reservations@qvitravel.miami</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} QVI Travel Group, Inc. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
