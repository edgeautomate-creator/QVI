import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Viajes() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Custom Travel',
      subtitle: 'Personalized journeys tailored to your dreams',
      featuredJourney: 'Featured Journey',
      asiaTitle: 'SINGAPORE, BANGKOK & MALDIVES',
      asiaSubtitle: 'Urban culture meets tropical paradise',
      asiaDescription: 'Experience the perfect blend of vibrant Asian cities and paradise islands. Explore Singapore\'s modern marvels, discover Bangkok\'s ancient temples, then relax in the pristine beauty of the Maldives with all-inclusive luxury.',
      duration: '11 Days',
      startingFrom: 'Starting from',
      viewDetails: 'View Journey Details',
      moreJourneys: 'More custom journeys coming soon...'
    },
    es: {
      title: 'Viajes a tu Medida',
      subtitle: 'Viajes personalizados adaptados a tus sueños',
      featuredJourney: 'Viaje Destacado',
      asiaTitle: 'SINGAPUR, BANGKOK Y MALDIVAS',
      asiaSubtitle: 'Cultura urbana se encuentra con el paraíso tropical',
      asiaDescription: 'Experimenta la combinación perfecta de vibrantes ciudades asiáticas e islas paradisíacas. Explora las maravillas modernas de Singapur, descubre los antiguos templos de Bangkok, luego relájate en la prístina belleza de las Maldivas con lujo todo incluido.',
      duration: '11 Días',
      startingFrom: 'Desde',
      viewDetails: 'Ver Detalles del Viaje',
      moreJourneys: 'Más viajes personalizados próximamente...'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0a7ea4] via-[#0d9fc9] to-[#14b8a6] text-white py-16 md:py-24">
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
          {t.featuredJourney}
        </div>

        <div className="mb-12">
          <Link to="/asia-maldives-tour" className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Maldives tropical paradise with crystal clear water"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">{t.asiaTitle}</h2>
                    <p className="text-lg text-gray-200 drop-shadow">{t.asiaSubtitle}</p>
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
                    <span className="font-semibold">Singapore → Bangkok → Maldives</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t.asiaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{t.startingFrom}</p>
                    <p className="text-3xl font-bold text-[#0a7ea4]">$4,845</p>
                  </div>
                  <span className="inline-flex items-center text-[#0a7ea4] font-semibold group-hover:text-[#085a73] transition-colors">
                    {t.viewDetails}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center text-gray-500 text-lg mt-16">
          {t.moreJourneys}
        </div>
      </div>
    </div>
  );
}
