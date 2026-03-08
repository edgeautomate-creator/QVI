import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Paquetes() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Special Packages',
      subtitle: 'Curated travel experiences designed for unforgettable memories',
      featuredPackage: 'Featured Package',
      polynesiaTitle: 'POLYNESIA - MOOREA & BORA BORA',
      polynesiaSubtitle: 'Paradise islands in the South Pacific',
      polynesiaDescription: 'Experience the ultimate tropical paradise with 8 days exploring the stunning islands of French Polynesia. Relax on pristine beaches in Moorea and discover the turquoise lagoons of Bora Bora.',
      southAfricaTitle: 'WONDERS OF SOUTH AFRICA',
      southAfricaSubtitle: 'Experience the wild beauty of Africa',
      southAfricaDescription: 'Discover the magic of South Africa on this incredible 7-day journey. Experience thrilling safaris in Kruger National Park, explore stunning Mpumalanga landscapes, and fall in love with the beauty of Cape Town.',
      duration: '7 Days',
      duration8: '8 Days',
      startingFrom: 'Starting from',
      viewDetails: 'View Package Details',
      morePackages: 'More special packages coming soon...'
    },
    es: {
      title: 'Paquetes Especiales',
      subtitle: 'Experiencias de viaje curadas diseñadas para recuerdos inolvidables',
      featuredPackage: 'Paquete Destacado',
      polynesiaTitle: 'POLINESIA - MOOREA & BORA BORA',
      polynesiaSubtitle: 'Islas paradisíacas del Pacífico Sur',
      polynesiaDescription: 'Experimenta el paraíso tropical definitivo con 8 días explorando las impresionantes islas de la Polinesia Francesa. Relájate en playas prístinas en Moorea y descubre las lagunas turquesas de Bora Bora.',
      southAfricaTitle: 'MARAVILLAS DE SUDÁFRICA',
      southAfricaSubtitle: 'Experimenta la belleza salvaje de África',
      southAfricaDescription: 'Descubre la magia de Sudáfrica en este increíble viaje de 7 días. Experimenta emocionantes safaris en el Parque Nacional Kruger, explora los impresionantes paisajes de Mpumalanga y enamórate de la belleza de Ciudad del Cabo.',
      duration: '7 Días',
      duration8: '8 Días',
      startingFrom: 'Desde',
      viewDetails: 'Ver Detalles del Paquete',
      morePackages: 'Más paquetes especiales próximamente...'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#d4a574] via-[#c89b68] to-[#8b6f47] text-white py-16 md:py-24">
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
          {t.featuredPackage}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link to="/polynesia-tour" className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1920"
                  alt="Bora Bora tropical paradise lagoon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">{t.polynesiaTitle}</h2>
                    <p className="text-lg text-gray-200 drop-shadow">{t.polynesiaSubtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{t.duration8}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Tahiti → Moorea → Bora Bora</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t.polynesiaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{t.startingFrom}</p>
                    <p className="text-3xl font-bold text-[#00b4d8]">€1,395</p>
                  </div>
                  <span className="inline-flex items-center text-[#00b4d8] font-semibold group-hover:text-[#0096c7] transition-colors">
                    {t.viewDetails}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/south-africa-tour" className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="African safari with elephants at sunset"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">{t.southAfricaTitle}</h2>
                    <p className="text-lg text-gray-200 drop-shadow">{t.southAfricaSubtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{t.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Johannesburg → Cape Town</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t.southAfricaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{t.startingFrom}</p>
                    <p className="text-3xl font-bold text-[#8b6f47]">€835</p>
                  </div>
                  <span className="inline-flex items-center text-[#8b6f47] font-semibold group-hover:text-[#6b5437] transition-colors">
                    {t.viewDetails}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center text-gray-500 text-lg mt-16">
          {t.morePackages}
        </div>
      </div>
    </div>
  );
}
