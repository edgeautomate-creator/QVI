import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MessageCircle } from 'lucide-react';

export default function LatinAmerica() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 43, 92, 0.75), rgba(26, 43, 92, 0.75)), url(https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
            <span className="text-[#ff6b6b]">{t('continents.latinAmerica')}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {t('continents.latinAmerica')}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">
            {language === 'es'
              ? 'Descubre la riqueza cultural, historia vibrante y belleza natural de América Latina'
              : 'Discover the cultural richness, vibrant history and natural beauty of Latin America'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-[#e8f4f8] rounded-full mb-6">
              <MessageCircle className="w-16 h-16 text-[#1a2b5c]" />
            </div>
            <h2 className="text-4xl font-bold text-[#1a2b5c] mb-4">
              {t('continents.comingSoon')}
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              {t('continents.comingSoonDesc')}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-[#1a2b5c] mb-6">
              {t('continents.interested')}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {t('continents.contactUs')}
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
                <span className="font-semibold">{language === 'es' ? 'Enviar Email' : 'Send Email'}</span>
              </a>
            </div>

            <Link
              to="/contact"
              className="inline-block bg-white text-[#1a2b5c] border-2 border-[#1a2b5c] px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2b5c] hover:text-white transition-all duration-300"
            >
              {language === 'es' ? 'Formulario de Contacto' : 'Contact Form'}
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/viajes-especiales"
            className="inline-flex items-center space-x-2 text-[#1a2b5c] hover:text-[#ff6b6b] transition-colors font-semibold"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>{language === 'es' ? 'Volver a Viajes Especiales' : 'Back to Special Trips'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
