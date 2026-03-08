import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, ArrowRight, ChevronRight } from 'lucide-react';

export default function Oceania() {
  const { t, language } = useLanguage();

  const trips = [
    {
      id: 'polynesia',
      title: language === 'es' ? 'Polinesia - Moorea & Bora Bora' : 'Polynesia - Moorea & Bora Bora',
      location: language === 'es' ? 'Polinesia Francesa' : 'French Polynesia',
      duration: language === 'es' ? '9 días' : '9 days',
      price: '$4,699',
      image: 'https://images.pexels.com/photos/3571576/pexels-photo-3571576.jpeg?auto=compress&cs=tinysrgb&w=1920',
      link: '/polynesia-tour',
      description: language === 'es'
        ? 'Descubre el paraíso tropical en las islas más hermosas del Pacífico Sur'
        : 'Discover tropical paradise in the most beautiful islands of the South Pacific'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 43, 92, 0.75), rgba(26, 43, 92, 0.75)), url(https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <nav className="absolute top-8 left-8 flex items-center space-x-2 text-sm">
            <Link to="/" className="hover:text-[#ff6b6b] transition-colors">
              {t('continents.breadcrumb.home')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/viajes-especiales" className="hover:text-[#ff6b6b] transition-colors">
              {t('continents.breadcrumb.viajesEspeciales')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#ff6b6b]">{t('continents.oceania')}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {t('continents.oceania')}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">
            {language === 'es'
              ? 'Escapa al paraíso con playas cristalinas y cultura isleña única'
              : 'Escape to paradise with crystal-clear beaches and unique island culture'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b5c] mb-4">
            {language === 'es' ? 'Viajes Disponibles' : 'Available Trips'}
          </h2>
          <p className="text-lg text-gray-600">
            {trips.length} {t('continents.tripsAvailable')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#ff6b6b] text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  {language === 'es' ? 'Desde' : 'From'} {trip.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a2b5c] mb-3">
                  {trip.title}
                </h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-[#ff6b6b] mr-2" />
                    <span>{trip.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 text-[#ff6b6b] mr-2" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-5 h-5 text-[#ff6b6b] mr-2" />
                    <span>{language === 'es' ? 'Desde' : 'From'} {trip.price}</span>
                  </div>
                </div>

                <Link
                  to={trip.link}
                  className="flex items-center justify-center space-x-2 w-full bg-[#1a2b5c] text-white py-3 rounded-lg hover:bg-[#243a75] transition-all duration-300 font-semibold"
                >
                  <span>{language === 'es' ? 'Ver Detalles' : 'View Details'}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1a2b5c] to-[#243a75] rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            {language === 'es'
              ? '¿Listo para explorar Oceanía?'
              : 'Ready to explore Oceania?'}
          </h3>
          <p className="text-lg mb-8 opacity-90">
            {language === 'es'
              ? 'Contáctenos hoy para obtener más información sobre nuestros viajes a Oceanía.'
              : 'Contact us today for more information about our trips to Oceania.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13052740453"
              className="bg-[#ff6b6b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ff5252] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('hero.callNow')}
            </a>
            <Link
              to="/contact"
              className="bg-white text-[#1a2b5c] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
