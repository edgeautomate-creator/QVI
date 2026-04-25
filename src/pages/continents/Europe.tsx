import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, ArrowRight, ChevronRight } from 'lucide-react';

export default function Europe() {
  const { t, language } = useLanguage();

  const trips = [
    {
      id: 'europe',
      title: language === 'es' ? 'La Europa Dorada' : 'Golden Europe',
      location: language === 'es' ? 'Madrid a Roma' : 'Madrid to Rome',
      duration: language === 'es' ? '18 días' : '18 days',
      price: '€3.270',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1920',
      link: '/europe-tour',
      description: language === 'es'
        ? 'Recorre los tesoros culturales e históricos de Europa en un viaje inolvidable de 18 días desde Madrid hasta Roma'
        : 'Explore the cultural and historical treasures of Europe on an unforgettable 18-day journey from Madrid to Rome'
    },
    {
      id: 'iberian-capitals',
      title: language === 'es' ? 'Capitales Ibéricas' : 'Iberian Capitals',
      location: language === 'es' ? 'Madrid a Oporto / Lisboa' : 'Madrid to Porto / Lisbon',
      duration: language === 'es' ? '8-9 días' : '8-9 days',
      price: '€1.300',
      image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1920',
      link: '/europe/iberian-capitals',
      description: language === 'es'
        ? 'Madrid, Lisboa, Santiago de Compostela, Coimbra y Oporto: lo mejor de la Península Ibérica en un único viaje'
        : 'Madrid, Lisbon, Santiago de Compostela, Coimbra, and Porto: the best of the Iberian Peninsula in one journey'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 43, 92, 0.75), rgba(26, 43, 92, 0.75)), url(https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
            <span className="text-[#ff6b6b]">{t('continents.europe')}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {t('continents.europe')}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">
            {language === 'es'
              ? 'Explora siglos de arte, cultura y arquitectura en el corazón de la civilización occidental'
              : 'Explore centuries of art, culture and architecture in the heart of Western civilization'}
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
              ? '¿Listo para explorar Europa?'
              : 'Ready to explore Europe?'}
          </h3>
          <p className="text-lg mb-8 opacity-90">
            {language === 'es'
              ? 'Contáctenos hoy para obtener más información sobre nuestros viajes a Europa.'
              : 'Contact us today for more information about our trips to Europe.'}
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
