import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Anchor, Ship, Calendar, MapPin, ArrowRight, Phone, Mail, Waves, Gift, Compass } from 'lucide-react';

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
      dueroP2PTitle: 'Duero River Cruise (Port-to-Port)',
      dueroP2PDuration: '8 Days / 7 Nights',
      dueroP2PDesc: 'An extended 8-day journey through the magnificent Duero Valley. From Oporto to Salamanca, discover Guimar\u00e3es, the charming Afurada fishing village, and the Porto wine region. Enjoy flamenco, fado, and gala evenings with all meals and beverages included.',
      dueroP2PHighlights: ['8 Days / 7 Nights', 'Guimar\u00e3es & Afurada', 'Fado & Flamenco Nights', 'All-Inclusive Onboard'],
      christmasTitle: 'Christmas on the Guadalquivir & Bay of C\u00e1diz',
      christmasDuration: '6 Days / 5 Nights',
      christmasDates: 'Dec 22 - 27, 2026',
      christmasRoute: 'Seville (Round Trip)',
      christmasDesc: 'Celebrate Christmas cruising along the Guadalquivir through Andalusia. Enjoy Christmas Eve onboard, visit Seville, C\u00e1diz, Jerez, and C\u00f3rdoba. Special Christmas dinner with wines, Midnight Mass, and a Christmas gift. All meals and beverages included.',
      christmasHighlights: ['Christmas Cruise', 'Seville & C\u00e1diz', 'C\u00f3rdoba Excursion', 'All-Inclusive Onboard'],
      croatiaTitle: 'Croatia & Montenegro (Port-to-Port)',
      croatiaDuration: '8 Days / 7 Nights',
      croatiaDates: '2026 Season',
      croatiaRoute: 'Dubrovnik (Round Trip)',
      croatiaDesc: 'A unique journey through Croatia and Montenegro at the heart of the Dalmatian Coast. Discover Dubrovnik, the "Pearl of the Adriatic", the islands of Mljet, Korcula, and Hvar, the waterfalls of Krka National Park, and the splendor of the Bay of Kotor. All meals and beverages included onboard.',
      croatiaHighlights: ['Dalmatian Coast', 'Bay of Kotor', 'Krka National Park', 'All-Inclusive Onboard'],
      rhineTitle: 'Treasures of the Rhine (Port-to-Port)',
      rhineDuration: '8 Days / 7 Nights',
      rhineRoute: 'Amsterdam \u2192 Basel',
      rhineDesc: 'From Amsterdam to Basel, a cruise rich in history. Discover Amsterdam\u2019s canals, the Keukenhof floral park, the open-air museum of Arnhem, Cologne\u2019s Gothic cathedral, the most beautiful stretch of the Rhine, Strasbourg, and the Alsatian wine capital of Colmar. All meals and beverages included onboard.',
      rhineHighlights: ['Amsterdam & Keukenhof', 'Cologne Cathedral', 'Strasbourg & Colmar', 'All-Inclusive Onboard'],
      moreComing: 'More cruises coming soon',
      moreComingDesc: 'We are working on adding more cruise options. Contact us to be the first to know.',
      introDesc: 'We offer two types of cruises designed to provide unique and memorable experiences:',
      riverCruiseTitle: 'River Cruise',
      riverCruiseDesc: 'An elegant and relaxed way to explore destinations along iconic rivers, with direct access to cities full of history, culture, and charm.',
      oceanCruiseTitle: 'Ocean Cruise',
      oceanCruiseDesc: 'A luxury experience on the high seas, where the journey becomes a destination in itself, with world-class entertainment, diverse cuisine, and stops at spectacular locations.',
      contactTitle: 'Questions About Our Cruises?',
      contactDesc: 'Our travel specialists are ready to help you find the perfect cruise.'
    },
    es: {
      heroTitle: 'Cruceros',
      heroSubtitle: 'Descubra el mundo desde el agua con nuestras experiencias en cruceros fluviales y oceánicos',
      featured: 'Crucero Destacado',
      availableCruises: 'Cruceros Disponibles',
      viewCruise: 'Ver Itinerario Completo',
      duration: '6 Días / 5 Noches',
      route: 'Oporto (Ida y Vuelta)',
      operator: 'CroisiEurope',
      dueroTitle: 'El Valle del Duero y Salamanca',
      dueroDesc: 'Navegue por el impresionante valle del Duero entre Portugal y España. Visite Oporto, Patrimonio de la Humanidad, la magnífica Casa de Mateus y la ciudad dorada de Salamanca con su catedral y universidad ancestral. Todas las comidas y bebidas incluidas a bordo.',
      dueroHighlights: ['Navegación Valle del Duero', 'Excursión a Salamanca', 'Región Vinícola de Oporto', 'Todo Incluido a Bordo'],
      dueroP2PTitle: 'Crucero por el Duero (Puerto/Puerto)',
      dueroP2PDuration: '8 D\u00edas / 7 Noches',
      dueroP2PDesc: 'Un viaje extendido de 8 d\u00edas por el magn\u00edfico valle del Duero. Desde Oporto hasta Salamanca, descubra Guimar\u00e3es, el encantador barrio pesquero de Afurada y la regi\u00f3n vin\u00edcola de Oporto. Disfrute de noches de flamenco, fado y gala con todas las comidas y bebidas incluidas.',
      dueroP2PHighlights: ['8 D\u00edas / 7 Noches', 'Guimar\u00e3es y Afurada', 'Noches de Fado y Flamenco', 'Todo Incluido a Bordo'],
      christmasTitle: 'Navidad en el Guadalquivir y la Bah\u00eda de C\u00e1diz',
      christmasDuration: '6 D\u00edas / 5 Noches',
      christmasDates: '22 - 27 Dic, 2026',
      christmasRoute: 'Sevilla (Ida y Vuelta)',
      christmasDesc: 'Celebre la Navidad navegando por el Guadalquivir a trav\u00e9s de Andaluc\u00eda. Disfrute de la Nochebuena a bordo, visite Sevilla, C\u00e1diz, Jerez y C\u00f3rdoba. Cena especial de Nochebuena con vinos, Misa del Gallo y obsequio de Navidad. Todas las comidas y bebidas incluidas.',
      christmasHighlights: ['Crucero Navide\u00f1o', 'Sevilla y C\u00e1diz', 'Excursi\u00f3n a C\u00f3rdoba', 'Todo Incluido a Bordo'],
      croatiaTitle: 'Croacia y Montenegro (Puerto/Puerto)',
      croatiaDuration: '8 D\u00edas / 7 Noches',
      croatiaDates: 'Temporada 2026',
      croatiaRoute: 'Dubrovnik (Ida y Vuelta)',
      croatiaDesc: 'Un viaje \u00fanico por Croacia y Montenegro en el coraz\u00f3n de la costa D\u00e1lmata. Descubra Dubrovnik, la "perla del Adri\u00e1tico", las islas de Mljet, Korcula y Hvar, las cascadas del Parque Nacional de Krka y el esplendor de las Bocas de Kotor. Todas las comidas y bebidas incluidas a bordo.',
      croatiaHighlights: ['Costa D\u00e1lmata', 'Bocas de Kotor', 'Parque Nacional Krka', 'Todo Incluido a Bordo'],
      rhineTitle: 'Los Tesoros del Rin (Puerto/Puerto)',
      rhineDuration: '8 D\u00edas / 7 Noches',
      rhineRoute: '\u00c1msterdam \u2192 Basilea',
      rhineDesc: 'De \u00c1msterdam a Basilea, un crucero rico en historia. Descubra los canales de \u00c1msterdam, el parque floral del Keukenhof, el museo al aire libre de Arnhem, la catedral g\u00f3tica de Colonia, el tramo m\u00e1s bello del Rin, Estrasburgo y la capital de los vinos alsacianos, Colmar. Todas las comidas y bebidas incluidas a bordo.',
      rhineHighlights: ['\u00c1msterdam y Keukenhof', 'Catedral de Colonia', 'Estrasburgo y Colmar', 'Todo Incluido a Bordo'],
      moreComing: 'M\u00e1s cruceros pr\u00f3ximamente',
      moreComingDesc: 'Estamos trabajando en agregar m\u00e1s opciones de cruceros. Cont\u00e1ctenos para ser el primero en enterarse.',
      introDesc: 'Contamos con dos tipos de cruceros dise\u00f1ados para ofrecer experiencias \u00fanicas y memorables:',
      riverCruiseTitle: 'Crucero fluvial',
      riverCruiseDesc: 'Una forma elegante y relajada de explorar destinos a lo largo de ríos icónicos, con acceso directo a ciudades llenas de historia, cultura y encanto.',
      oceanCruiseTitle: 'Crucero oceánico',
      oceanCruiseDesc: 'Una experiencia de lujo en alta mar, donde el viaje se convierte en un destino en sí mismo, con entretenimiento de primer nivel, gastronomía variada y paradas en lugares espectaculares.',
      contactTitle: '¿Preguntas Sobre Nuestros Cruceros?',
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
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.45)), url(/D1A30B24-407E-4BC6-818F-F600BF1E0A87.PNG)',
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

      {/* Cruise Types Introduction */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            {c.introDesc}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0c4a6e]/10 rounded-xl flex items-center justify-center mb-5">
                <Ship className="w-6 h-6 text-[#0c4a6e]" />
              </div>
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-3">
                {c.riverCruiseTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {c.riverCruiseDesc}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0c4a6e]/10 rounded-xl flex items-center justify-center mb-5">
                <Waves className="w-6 h-6 text-[#0c4a6e]" />
              </div>
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-3">
                {c.oceanCruiseTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {c.oceanCruiseDesc}
              </p>
            </div>
          </div>
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

        {/* Duero Port-to-Port Cruise Card */}
        <Link
          to="/cruceros/duero-port-to-port"
          className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0c4a6e]/20 mb-12"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-[#155e75] via-[#0c4a6e] to-[#164e63] p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Ship className="w-32 h-32" />
              </div>
              <div className="relative">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                  {c.featured}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {c.dueroP2PTitle}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {c.dueroP2PDuration}
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
                {c.dueroP2PDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.dueroP2PHighlights.map((h, i) => (
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

        {/* Guadalquivir Christmas Cruise Card */}
        <Link
          to="/cruceros/guadalquivir-christmas"
          className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#991b1b]/20 mb-12"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#1a2b5c] p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Gift className="w-32 h-32" />
              </div>
              <div className="relative">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                  {c.christmasDates}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {c.christmasTitle}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {c.christmasDuration}
                  </span>
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {c.christmasRoute}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed mb-6">
                {c.christmasDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.christmasHighlights.map((h, i) => (
                  <span key={i} className="bg-red-50 text-[#991b1b] text-sm font-medium px-3 py-1.5 rounded-full border border-red-100">
                    {h}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{c.operator}</span>
                <span className="inline-flex items-center text-[#991b1b] font-semibold group-hover:translate-x-1 transition-transform">
                  {c.viewCruise}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Croatia & Montenegro Cruise Card */}
        <Link
          to="/cruceros/croatia-montenegro"
          className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0e7490]/20 mb-12"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-[#164e63] via-[#0e7490] to-[#1a2b5c] p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Compass className="w-32 h-32" />
              </div>
              <div className="relative">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                  {c.croatiaDates}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {c.croatiaTitle}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {c.croatiaDuration}
                  </span>
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {c.croatiaRoute}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed mb-6">
                {c.croatiaDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.croatiaHighlights.map((h, i) => (
                  <span key={i} className="bg-cyan-50 text-[#0e7490] text-sm font-medium px-3 py-1.5 rounded-full border border-cyan-100">
                    {h}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{c.operator}</span>
                <span className="inline-flex items-center text-[#0e7490] font-semibold group-hover:translate-x-1 transition-transform">
                  {c.viewCruise}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Rhine Cruise Card */}
        <Link
          to="/cruceros/rhine-treasures"
          className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#92400e]/20 mb-12"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-[#78350f] via-[#92400e] to-[#1a2b5c] p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Ship className="w-32 h-32" />
              </div>
              <div className="relative">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                  {c.featured}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {c.rhineTitle}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {c.rhineDuration}
                  </span>
                  <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {c.rhineRoute}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed mb-6">
                {c.rhineDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.rhineHighlights.map((h, i) => (
                  <span key={i} className="bg-amber-50 text-[#92400e] text-sm font-medium px-3 py-1.5 rounded-full border border-amber-100">
                    {h}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{c.operator}</span>
                <span className="inline-flex items-center text-[#92400e] font-semibold group-hover:translate-x-1 transition-transform">
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
