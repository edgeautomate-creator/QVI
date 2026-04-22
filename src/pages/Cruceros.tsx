import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Anchor, Ship, Calendar, MapPin, ArrowRight, Phone, Mail } from 'lucide-react';

export default function Cruceros() {
  const { language, t } = useLanguage();

  const content = {
    en: {
      heroTitle: 'Cruises',
      heroSubtitle: 'Discover the world from the water with our curated river and ocean cruise experiences',
      featured: 'Featured Cruise',
      availableCruises: 'Available Cruises',
      viewCruise: 'View Full Itinerary',
      duration: '6 Days / 5 Nights',
      route: 'Oporto (Round Trip)',
      operator: 'CroisiEurope',
      dueroTitle: 'The Duero Valley & Salamanca',
      dueroDesc: 'Sail through the stunning Duero Valley between Portugal and Spain. Visit UNESCO World Heritage Oporto, the magnificent Casa de Mateus, and the golden city of Salamanca with its cathedral and ancient university. All meals and beverages included onboard.',
      dueroHighlights: ['Duero Valley Navigation', 'Salamanca Excursion', 'Porto Wine Region', 'All-Inclusive Onboard'],
      moreComing: 'More cruises coming soon',
      moreComingDesc: 'We are working on adding more cruise options. Contact us to be the first to know.',
      contactTitle: 'Questions About Our Cruises?',
      contactDesc: 'Our travel specialists are ready to help you find the perfect cruise.'
    },
    es: {
      heroTitle: 'Cruceros',
      heroSubtitle: 'Descubra el mundo desde el agua con nuestras experiencias de crucero fluvial y oceánico',
      featured: 'Crucero Destacado',
      availableCruises: 'Cruceros Disponibles',
      viewCruise: 'Ver Itinerario Completo',
      duration: '6 Días / 5 Noches',
      route: 'Oporto (Ida y Vuelta)',
      operator: 'CroisiEurope',
      dueroTitle: 'El Valle del Duero y Salamanca',
      dueroDesc: 'Navegue por el impresionante valle del Duero entre Portugal y España. Visite Oporto, Patrimonio de la Humanidad, la magnífica Casa de Mateus y la ciudad dorada de Salamanca con su catedral y universidad ancestral. Todas las comidas y bebidas incluidas a bordo.',
      dueroHighlights: ['Navegación Valle del Duero', 'Excursión a Salamanca', 'Región Vinícola de Oporto', 'Todo Incluido a Bordo'],
      moreComing: 'Más cruceros próximamente',
      moreComingDesc: 'Estamos trabajando en agregar más opciones de cruceros. Contáctenos para ser el primero en enterarse.',
      contactTitle: 'Preguntas Sobre Nuestros Cruceros?',
      contactDesc: 'Nuestros especialistas de viaje están listos para ayudarle a encontrar el crucero perfecto.'
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative h-[420px] md:h-[480px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(12, 74, 110, 0.45), rgba(26, 43, 92, 0.55)), url(/pexels-vinicius-dattwyler-721533-1561273.jpg)',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <div className="inline-flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Ship className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">QVI Travel Group</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-tight">
            {c.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl text-cyan-100">
            {c.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Cruise Listing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#0c4a6e] mb-10 text-center">
          {c.availableCruises}
        </h2>

        {/* Duero Cruise Card */}
        <Link
          to="/cruceros/duero-valley"
          className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0c4a6e]/20 mb-12"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-[#0c4a6e] via-[#155e75] to-[#1a2b5c] p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Anchor className="w-32 h-32" />
              </div>
              <div className="relative">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                  {c.featured}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {c.dueroTitle}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {c.duration}
                  </span>
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {c.route}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed mb-6">
                {c.dueroDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.dueroHighlights.map((h, i) => (
                  <span key={i} className="bg-cyan-50 text-[#0c4a6e] text-sm font-medium px-3 py-1.5 rounded-full border border-cyan-100">
                    {h}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{c.operator}</span>
                <span className="inline-flex items-center text-[#0c4a6e] font-semibold group-hover:translate-x-1 transition-transform">
                  {c.viewCruise}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* More Coming Soon */}
        <div className="text-center py-10 border-t border-gray-100">
          <Anchor className="w-10 h-10 text-gray-300 mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-500 mb-2">{c.moreComing}</p>
          <p className="text-gray-400 max-w-lg mx-auto">{c.moreComingDesc}</p>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mt-8">
          <h3 className="text-2xl font-bold text-[#0c4a6e] mb-3 text-center">
            {c.contactTitle}
          </h3>
          <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
            {c.contactDesc}
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="tel:+13052740453"
              className="flex items-center justify-center space-x-3 bg-[#0c4a6e] text-white px-6 py-4 rounded-xl hover:bg-[#155e75] transition-colors shadow-sm"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(305) 274-0453</span>
            </a>
            <a
              href="mailto:info@qvitravelgroup.com"
              className="flex items-center justify-center space-x-3 bg-white text-[#0c4a6e] px-6 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">{t('cruceros.sendEmail')}</span>
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-[#0c4a6e] hover:text-[#155e75] transition-colors font-semibold"
          >
            {t('cruceros.backHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
