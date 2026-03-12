import { Phone, MessageCircle, Calendar, Check, Plane, Users, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import TripSearchBar from '../components/TripSearchBar';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1a2b5c] via-[#243a75] to-[#1a2b5c] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <Plane className="w-16 h-16 text-[#ff6b6b] mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13052740453"
              className="flex items-center space-x-2 bg-[#ff6b6b] text-white px-8 py-4 rounded-lg hover:bg-[#ff5252] transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>{t('hero.callNow')}</span>
            </a>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('hero.whatsapp')}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b5c] mb-3">
              {t('search.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('search.subtitle')}
            </p>
          </div>
          <TripSearchBar />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/peregrinaciones" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
              <img
                src="/angelpic.jpg"
                alt="Peregrinaciones - Holy Family in Egypt"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('services.peregrinaciones')}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t('services.peregrinacionesDesc')}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/viajes-especiales" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
              <img
                src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Viajes Especiales"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('services.viajesEspeciales')}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t('services.viajesEspecialesDesc')}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/cruceros" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
              <img
                src="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Cruceros"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('services.cruceros')}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t('services.crucerosDesc')}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2b5c] mb-12">
            {t('trust.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Award className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2b5c] mb-2">
                {t('trust.experience')}
              </h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Plane className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2b5c] mb-2">
                {t('trust.specialists')}
              </h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Heart className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2b5c] mb-2">
                {t('trust.personalized')}
              </h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Users className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2b5c] mb-2">
                {t('trust.spiritual')}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a2b5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('egypt.cta')}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {t('egypt.ctaText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13052740453"
              className="flex items-center space-x-2 bg-[#ff6b6b] text-white px-8 py-4 rounded-lg hover:bg-[#ff5252] transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>{t('hero.callNow')}</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-white text-[#1a2b5c] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <span>{t('featured.requestInfo')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
