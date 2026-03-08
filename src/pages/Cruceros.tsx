import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Anchor, Mail, Phone, Waves } from 'lucide-react';

export default function Cruceros() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 43, 92, 0.8), rgba(26, 43, 92, 0.8)), url(https://images.pexels.com/photos/164998/pexels-photo-164998.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <Anchor className="w-20 h-20 mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {t('nav.cruceros')}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-4">
            {t('cruceros.hero')}
          </p>
          <div className="flex items-center space-x-2 text-lg">
            <Waves className="w-6 h-6" />
            <span className="font-semibold">{t('continents.comingSoon')}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#1a2b5c] to-[#243a75] p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              {t('cruceros.title')}
            </h2>
            <p className="text-xl opacity-90">
              {t('cruceros.subtitle')}
            </p>
          </div>

          <div className="p-12">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-[#e8f4f8] rounded-full mb-6">
                <Anchor className="w-16 h-16 text-[#1a2b5c]" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {t('cruceros.description')}
              </p>
            </div>

            <div className="bg-[#e8f4f8] rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#1a2b5c] mb-4 text-center">
                {t('cruceros.whatToExpect')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-4xl mb-3">🚢</div>
                    <h4 className="font-bold text-[#1a2b5c] mb-2">
                      {t('cruceros.luxury')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('cruceros.luxuryDesc')}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-4xl mb-3">🌊</div>
                    <h4 className="font-bold text-[#1a2b5c] mb-2">
                      {t('cruceros.destinations')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('cruceros.destinationsDesc')}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-4xl mb-3">⭐</div>
                    <h4 className="font-bold text-[#1a2b5c] mb-2">
                      {t('cruceros.allInclusive')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('cruceros.allInclusiveDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-[#1a2b5c] mb-6 text-center">
                {t('continents.interested')}
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                {t('cruceros.contactFirst')}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a
                  href="tel:+13052740453"
                  className="flex items-center justify-center space-x-3 bg-[#1a2b5c] text-white px-6 py-4 rounded-lg hover:bg-[#243a75] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(305) 274-0453</span>
                </a>
                <a
                  href="mailto:info@qvitravelgroup.com"
                  className="flex items-center justify-center space-x-3 bg-[#ff6b6b] text-white px-6 py-4 rounded-lg hover:bg-[#ff5252] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">{t('cruceros.sendEmail')}</span>
                </a>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-[#1a2b5c] border-2 border-[#1a2b5c] px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2b5c] hover:text-white transition-all duration-300"
                >
                  {t('cruceros.contactForm')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-[#1a2b5c] hover:text-[#ff6b6b] transition-colors font-semibold"
          >
            {t('cruceros.backHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
