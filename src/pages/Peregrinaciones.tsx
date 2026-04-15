import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Peregrinaciones() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Pilgrimages',
      subtitle: 'Spiritual journeys that strengthen your faith',
      featured: 'Featured Pilgrimages',
      egyptTitle: 'Egypt 2026',
      egyptDescription: 'Experience the ancient land where Moses led his people to freedom',
      mexicoTitle: 'Mexico 2026',
      mexicoDescription: 'Visit the most sacred sites of Mexican Catholicism including the Basilica of Our Lady of Guadalupe',
      holylandTitle: 'Holy Land 2026',
      holylandDescription: 'Walk in the footsteps of Jesus through Jerusalem, Nazareth, Bethlehem and the Sea of Galilee',
      viewDetails: 'View Details',
      organizeTitle: 'Organize Your Own Pilgrimage',
      organizeSubtitle: 'We design customized pilgrimages for your group, parish, or diocese. Contact us and we will create a unique spiritual journey tailored to your needs.',
      organizeButton: 'Click Here to Email Us'
    },
    es: {
      title: 'Peregrinaciones',
      subtitle: 'Viajes espirituales que fortalecen tu fe',
      featured: 'Peregrinaciones Destacadas',
      egyptTitle: 'Egipto 2026',
      egyptDescription: 'Experimenta la tierra antigua donde Moisés guió a su pueblo hacia la libertad',
      mexicoTitle: 'México 2026',
      mexicoDescription: 'Visita los sitios más sagrados del catolicismo mexicano incluyendo la Basílica de Nuestra Señora de Guadalupe',
      holylandTitle: 'Tierra Santa 2026',
      holylandDescription: 'Camina en los pasos de Jesús por Jerusalén, Nazareth, Belén y el Mar de Galilea',
      viewDetails: 'Ver Detalles',
      organizeTitle: 'Organiza tu propia peregrinación',
      organizeSubtitle: 'Diseñamos peregrinaciones a medida para tu grupo, parroquia o diócesis. Contáctanos y crearemos un viaje espiritual único adaptado a tus necesidades.',
      organizeButton: 'Haz clic aquí para escribirnos'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.featured}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Link to="/egypt2026" className="block group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/angelpic.jpg"
                    alt="Holy Family in Egypt with pyramids"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{t.egyptTitle}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{t.egyptDescription}</p>
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    {t.viewDetails}
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/mexico2026" className="block group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Basilica of Our Lady of Guadalupe, Mexico City"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{t.mexicoTitle}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{t.mexicoDescription}</p>
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    {t.viewDetails}
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/holyland2026" className="block group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/Picture1.png"
                    alt="Dome of the Rock, Jerusalem, Holy Land"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{t.holylandTitle}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{t.holylandDescription}</p>
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    {t.viewDetails}
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-10 md:p-14 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.organizeTitle}
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.organizeSubtitle}
          </p>
          <a
            href="mailto:Reservations@qvitravel.miami?subject=Consulta%3A%20Organizar%20Peregrinaci%C3%B3n"
            className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            {t.organizeButton}
          </a>
        </div>
      </div>
    </div>
  );
}
