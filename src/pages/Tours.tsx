import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Tours() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Tours Around the World',
      subtitle: 'Discover amazing destinations across the globe',
      featuredTours: 'Featured Tours',
      japanTitle: 'THE ORIGIN OF THE SUN',
      japanSubtitle: 'Discover the essence of Japan',
      japanDescription: 'Embark on an unforgettable 10-day journey through Japan, from the vibrant streets of Osaka to the serene temples of Kyoto, the historic villages of the Nakasendo Trail, and the majestic beauty of Mount Fuji.',
      japanDuration: '10 Days',
      europeTitle: 'GOLDEN EUROPE',
      europeSubtitle: 'Experience the best of European culture',
      europeDescription: 'Discover 18 days of European splendor from Madrid to Rome. Visit iconic cities including Paris, London, Amsterdam, Venice, and Florence. Experience Gothic cathedrals, Renaissance art, and timeless beauty.',
      europeDuration: '18 Days',
      startingFrom: 'Starting from',
      viewDetails: 'View Tour Details',
      moreTours: 'More exciting tours coming soon...'
    },
    es: {
      title: 'Tours Alrededor del Mundo',
      subtitle: 'Descubre destinos increíbles alrededor del globo',
      featuredTours: 'Tours Destacados',
      japanTitle: 'EL ORIGEN DEL SOL',
      japanSubtitle: 'Descubre la esencia de Japón',
      japanDescription: 'Embárquese en un viaje inolvidable de 10 días por Japón, desde las vibrantes calles de Osaka hasta los serenos templos de Kioto, los pueblos históricos del Camino Nakasendo y la majestuosa belleza del Monte Fuji.',
      japanDuration: '10 Días',
      europeTitle: 'EUROPA DE ORO',
      europeSubtitle: 'Experimenta lo mejor de la cultura europea',
      europeDescription: 'Descubre 18 días de esplendor europeo desde Madrid hasta Roma. Visita ciudades icónicas incluyendo París, Londres, Ámsterdam, Venecia y Florencia. Experimenta catedrales góticas, arte renacentista y belleza atemporal.',
      europeDuration: '18 Días',
      startingFrom: 'Desde',
      viewDetails: 'Ver Detalles del Tour',
      moreTours: 'Más tours emocionantes próximamente...'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-200">
            {t.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="inline-block bg-[#c41e3a] text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
          {t.featuredTours}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link to="/japan-tour" className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Japanese garden with traditional castle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-2">{t.japanTitle}</h2>
                    <p className="text-base text-gray-200 drop-shadow">{t.japanSubtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{t.japanDuration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Osaka → Tokyo</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  {t.japanDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{t.startingFrom}</p>
                    <p className="text-2xl font-bold text-[#c41e3a]">$3,640</p>
                  </div>
                  <span className="inline-flex items-center text-[#c41e3a] font-semibold group-hover:text-[#a01628] transition-colors">
                    {t.viewDetails}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/europe-tour" className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="European architecture and river"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-2">{t.europeTitle}</h2>
                    <p className="text-base text-gray-200 drop-shadow">{t.europeSubtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{t.europeDuration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Madrid → Rome</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  {t.europeDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{t.startingFrom}</p>
                    <p className="text-2xl font-bold text-[#1e3a5f]">€3,270</p>
                  </div>
                  <span className="inline-flex items-center text-[#1e3a5f] font-semibold group-hover:text-[#0f1e3a] transition-colors">
                    {t.viewDetails}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center text-gray-500 text-lg mt-8">
          {t.moreTours}
        </div>
      </div>
    </div>
  );
}
