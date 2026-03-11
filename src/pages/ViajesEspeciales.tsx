import { useLanguage } from '../contexts/LanguageContext';
import { Globe as Globe2, MapPin } from 'lucide-react';
import WorldMap from '../components/WorldMap';

export default function ViajesEspeciales() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 43, 92, 0.85), rgba(26, 43, 92, 0.85)), url(https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <Globe2 className="w-16 h-16 mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {t('nav.viajesEspeciales')}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">
            {t('continents.exploreDest')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MapPin className="w-8 h-8 text-[#ff6b6b]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b5c]">
              {t('continents.selectContinent')}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Haz clic en cualquier continente para explorar nuestros viajes especiales'
              : 'Click on any continent to explore our special trips'}
          </p>
        </div>

        {/* <WorldMap /> */}
        <div className="mt-24 bg-gradient-to-r from-[#1a2b5c] to-[#243a75] rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            {language === 'es'
              ? '¿Listo para tu próxima aventura?'
              : 'Ready for your next adventure?'}
          </h3>
          <p className="text-lg mb-8 opacity-90">
            {language === 'es'
              ? 'Selecciona un continente y descubre experiencias únicas diseñadas para crear recuerdos inolvidables.'
              : 'Select a continent and discover unique experiences designed to create unforgettable memories.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13052740453"
              className="bg-[#ff6b6b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ff5252] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {language === 'es' ? 'Llamar Ahora' : 'Call Now'}
            </a>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1a2b5c] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
