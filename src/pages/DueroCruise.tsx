import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function DueroCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'The Duero Valley & Salamanca',
      subtitle: 'Immerse yourself in the festive atmosphere of Portugal and Spain',
      duration: '6 Days / 5 Nights',
      route: 'Oporto (Round Trip)',
      intro: 'Dive into the festive spirit of Portugal and Spain, where you will discover their characteristic way of life. Visit Oporto, a subtle blend of modernity and history, famous for its wine, and Salamanca with its cathedral -- the "golden city" of Spain, rich in architecture, religious culture, and gastronomy.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Ready to Sail the Duero?',
      ctaText: 'Contact us today to reserve your cabin on this unforgettable river cruise through Portugal and Spain.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 1,225 €',
      pricingContact: 'Contact Us for Cabin Pricing',
      pricingNote: 'Multiple cabin categories available. Contact us for detailed pricing, availability, and group rates.',
      showMore: 'Show all excursions',
      showLess: 'Show fewer excursions',
      croisiHighlights: 'CroisiEurope Highlights',
      portToPort: 'Port-to-Port Formula'
    },
    es: {
      featured: 'Crucero Fluvial',
      title: 'El Valle del Duero y Salamanca',
      subtitle: 'Sumérjase en el ambiente festivo de Portugal y España',
      duration: '6 Días / 5 Noches',
      route: 'Oporto (Ida y Vuelta)',
      intro: 'Sumérjase en el ambiente festivo de Portugal y España donde descubrirá su característico estilo de vida. Visite Oporto, una mezcla sutil de modernidad e historia, famoso por su vino, además de Salamanca con su catedral, la "ciudad de oro" de España, rica en arquitectura, cultura religiosa y gastronomía.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario Día a Día',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Información Importante',
      cta: 'Listo para Navegar el Duero?',
      ctaText: 'Contáctenos hoy para reservar su cabina en este inolvidable crucero fluvial por Portugal y España.',
      callNow: 'Contáctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información',
      pricing: 'Precios',
      priceFrom: 'Desde 1,225 €',
      pricingContact: 'Contáctenos para Precios de Cabinas',
      pricingNote: 'Múltiples categorías de cabinas disponibles. Contáctenos para precios detallados, disponibilidad y tarifas de grupo.',
      showMore: 'Ver todas las excursiones',
      showLess: 'Ver menos excursiones',
      croisiHighlights: 'Destacados CroisiEurope',
      portToPort: 'Fórmula Puerto/Puerto'
    }
  };

  const highlightsList = {
    en: [
      'Navigate through the stunning Duero Valley to the Spanish border',
      'Discover Oporto, UNESCO World Heritage city famous for its wine',
      'Visit Casa de Mateus, a magnificent 18th-century baroque manor house',
      'Explore the Duero Museum in Regua, blending tradition and modernity',
      'Full-day excursion to Salamanca -- cathedral and university dating to 1218',
      'Porto wine route through the Pinhao region',
      'All meals and beverages included onboard',
      'Themed entertainment: flamenco night, gala night, and folkloric night',
      'Enjoy dramatic gorges and wild landscapes along the river',
      'Exterior cabins with full private bathroom'
    ],
    es: [
      'Navegación por el impresionante valle del Duero hasta la frontera española',
      'Descubra Oporto, ciudad Patrimonio de la Humanidad famosa por su vino',
      'Visite la Casa de Mateus, magnífico edificio barroco del siglo XVIII',
      'Explore el Museo del Duero en Régua, mezcla de tradición y modernidad',
      'Excursión de día completo a Salamanca -- catedral y universidad de 1218',
      'Ruta de los vinos de Oporto por la región de Pinhão',
      'Todas las comidas y bebidas incluidas a bordo',
      'Entretenimiento temático: noche de flamenco, noche de gala y noche folclórica',
      'Disfrute de impresionantes desfiladeros y paisajes salvajes a lo largo del río',
      'Cabinas exteriores con baño completo privado'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'OPORTO - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail, dinner',
        details: 'Embarkation at 5:00 PM. Presentation of the crew and welcome cocktail. Dinner onboard. In the evening, optional excursion of illuminated Oporto.'
      },
      {
        day: 2,
        title: 'OPORTO - REGUA - UNESCO Heritage City',
        summary: 'Guided tour of Oporto, afternoon navigation',
        details: 'Optional "classic" excursion: guided tour of Oporto, one of the oldest cities in Europe, whose historic center is a UNESCO World Heritage Site. Optional "active" excursion (advance booking required): city tour by tram to the mouth of the Duero and the Oporto Tram Museum for a journey through time. Afternoon navigation to Regua. Entertainment evening.'
      },
      {
        day: 3,
        title: 'REGUA - VEGA DE TERRON - Baroque Treasures',
        summary: 'Casa de Mateus, Duero Museum, flamenco night',
        details: 'Optional excursion to Casa de Mateus and the Duero Museum. Walking visit to the Duero Museum, situated on the riverbank, combining tradition and modernity to reveal the fascinating history of the Duero and its winemaking methods in this precious UNESCO World Heritage region. Continue by coach to Casa de Mateus in Vila Real -- this magnificent 18th-century baroque building is the most beautiful and surprising manor house in northern Portugal. The residence features an elegant blend of white walls and Portuguese granite in rococo style. Stroll through the magnificent gardens with their boxwood parterres and hornbeam "green tunnels." Return to the ship in Pinhao. Afternoon navigation. Flamenco evening.'
      },
      {
        day: 4,
        title: 'VEGA DE TERRON - SALAMANCA - The Golden City',
        summary: 'Full-day excursion to Salamanca, gala night',
        details: 'Full day dedicated to the optional excursion to Salamanca. "Classic" excursion: guided tour of Salamanca, its cathedral, and its famous University dating to 1218 -- one of the oldest in the world. "Active" excursion (advance booking required): tapas tour through Salamanca. Gala evening. Note: For departures May through August, return to the ship in Barca d\'Alva in the late afternoon. Gala dinner onboard followed by a dancing evening. No stop at Senhora da Ribeira.'
      },
      {
        day: 5,
        title: 'SENHORA DA RIBEIRA - LEVERINHO - Wine Country',
        summary: 'Porto wine route, dramatic gorges, folkloric night',
        details: 'Optional excursion of the Porto wine route and Pinhao. Afternoon navigation toward Leverinho. Throughout the journey, enjoy wild landscapes and impressive gorges carved by the river. Folkloric evening.'
      },
      {
        day: 6,
        title: 'LEVERINHO - OPORTO - Farewell',
        summary: 'Navigation back, breakfast, disembarkation',
        details: 'Navigation toward Oporto. Breakfast onboard. Arrival around 9:00 AM. Disembarkation and end of services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'OPORTO - Bienvenida a Bordo',
        summary: 'Embarque, cóctel de bienvenida, cena',
        details: 'Embarque a las 17:00h. Presentación de la tripulación y cóctel de bienvenida. Cena a bordo. Por la noche excursión opcional de Oporto iluminado.'
      },
      {
        day: 2,
        title: 'OPORTO - RÉGUA - Ciudad Patrimonio UNESCO',
        summary: 'Visita guiada de Oporto, tarde de navegación',
        details: 'Excursión opcional "clásica": visita guiada de Oporto. Se trata de una de las ciudades más antiguas de Europa, cuyo casco antiguo está declarado Patrimonio Mundial por la UNESCO. Excursión opcional "activa" (reserva obligatoria en la agencia de viajes): visita de la ciudad en tranvía hasta la desembocadura del Duero y hasta el Museo del Tranvía de Oporto para realizar un viaje en el tiempo. Tarde de navegación hasta Régua. Noche de animación.'
      },
      {
        day: 3,
        title: 'RÉGUA - VEGA DE TERRÓN - Tesoros Barrocos',
        summary: 'Casa de Mateus, Museo del Duero, noche de flamenco',
        details: 'Excursión opcional a la Casa de Mateus y al Museo del Duero. Salida a pie hacia el Museo del Duero, situado a orillas del río, que combina tradición y modernidad para revelar la fascinante historia del Duero y los métodos de elaboración del vino en esta preciosa región Patrimonio de la Humanidad. Continuación en autocar hacia la Casa de Mateus en Vila Real. Este magnífico edificio barroco del siglo XVIII es la casa solariega más bonita y sorprendente del norte de Portugal. La residencia presenta una elegante mezcla de paredes blancas y granito portugués en estilo rococó. Pasee por el magnífico jardín con sus parterres de boj y carpes formando un "túnel de verdor." Regreso al barco en Pinhão. Tarde de navegación. Noche de flamenco.'
      },
      {
        day: 4,
        title: 'VEGA DE TERRÓN - SALAMANCA - La Ciudad Dorada',
        summary: 'Excursión de día completo a Salamanca, noche de gala',
        details: 'Jornada dedicada a la excursión opcional de Salamanca. Excursión "clásica": visita guiada de Salamanca, de su catedral y su famosa Universidad que data de 1218, una de las más antiguas del mundo. Excursión "activa" (reserva obligatoria en la agencia de viajes): tour de tapas por Salamanca. Noche de gala. Nota: En las salidas de mayo a agosto, regreso al barco en Barca d\'Alva al final de la tarde. Cena de gala a bordo seguida de una noche de baile. No se hace escala en Senhora da Ribeira.'
      },
      {
        day: 5,
        title: 'SENHORA DA RIBEIRA - LEVERINHO - Tierra del Vino',
        summary: 'Ruta de vinos de Oporto, desfiladeros, noche folclórica',
        details: 'Excursión opcional de la ruta de los vinos de Oporto y Pinhão. Tarde de navegación hacia Leverinho. Durante todo el recorrido se disfruta de paisajes salvajes e impresionantes desfiladeros. Noche folclórica.'
      },
      {
        day: 6,
        title: 'LEVERINHO - OPORTO - Despedida',
        summary: 'Navegación de regreso, desayuno, desembarque',
        details: 'Navegación hacia Oporto. Desayuno a bordo. Llegada sobre las 9:00h. Desembarque y fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Full board from dinner on day 1 to breakfast on day 6',
      'Beverages included onboard (except special wine/drink lists)',
      'Double exterior cabin with full private bathroom',
      'Onboard entertainment and activities',
      'Onboard assistance throughout the cruise',
      'Welcome cocktail',
      'Gala dinner evening',
      'Spanish themed evening',
      'Folkloric evening',
      'Assistance and repatriation insurance',
      'Port taxes included',
      'Free Wi-Fi onboard',
      'Individual headsets during excursions'
    ],
    es: [
      'Pensión completa desde la cena del primer día al desayuno del último',
      'Bebidas incluidas a bordo (excepto cartas especiales)',
      'Cabina doble exterior con baño completo privado',
      'Animación y actividades a bordo',
      'Asistencia a bordo durante todo el crucero',
      'Cóctel de bienvenida',
      'Cena y noche de gala',
      'Noche temática española',
      'Noche folclórica',
      'Seguro de asistencia/repatriación',
      'Tasas portuarias incluidas',
      'Wi-Fi gratuito a bordo',
      'Auriculares individuales durante las excursiones'
    ]
  };

  const notIncludedItems = {
    en: [
      'Beverages from the special wine/drink lists',
      'Beverages during excursions or transfers',
      'Cancellation and luggage insurance',
      'Optional excursions',
      'Transfers to/from the ship'
    ],
    es: [
      'Bebidas que figuran en las cartas especiales',
      'Bebidas durante las excursiones o traslados',
      'Seguro de anulación/equipajes',
      'Excursiones opcionales',
      'Traslados al/desde el barco'
    ]
  };

  const excursionsList = {
    en: [
      { name: 'Illuminated Porto', duration: '1h 15min', type: 'Classic', time: 'Evening', preBook: '€34', onBoard: '€38' },
      { name: 'Guided tour of Oporto + tile workshop', duration: '4h', type: 'Classic', time: 'Morning', preBook: '€76', onBoard: '€84' },
      { name: 'Oporto by tram + Tram Museum', duration: '4h', type: 'Dynamic', time: 'Morning', preBook: '€119', onBoard: '€132' },
      { name: 'Casa de Mateus + Duero Museum', duration: '4h', type: 'Classic', time: 'Morning', preBook: '€80', onBoard: '€89' },
      { name: 'Salamanca tapas tour', duration: '10h 30min', type: 'Dynamic', time: 'Full Day', preBook: '€144', onBoard: '€160' },
      { name: 'Full day in Salamanca (lunch included)', duration: '10h 30min', type: 'Classic', time: 'Full Day', preBook: '€103', onBoard: '€114' },
      { name: 'Porto wine route + Pinhao', duration: '4h', type: 'Classic', time: 'Morning', preBook: '€60', onBoard: '€67' }
    ],
    es: [
      { name: 'Porto iluminado', duration: '1h 15min', type: 'Clásica', time: 'Noche', preBook: '€34', onBoard: '€38' },
      { name: 'Visita guiada de Oporto y taller de azulejos', duration: '4h', type: 'Clásica', time: 'Mañana', preBook: '€76', onBoard: '€84' },
      { name: 'Oporto en tranvía y Museo del tranvía', duration: '4h', type: 'Dinámica', time: 'Mañana', preBook: '€119', onBoard: '€132' },
      { name: 'Casa de Mateus y Museo del Duero', duration: '4h', type: 'Clásica', time: 'Mañana', preBook: '€80', onBoard: '€89' },
      { name: 'Tour de tapas por Salamanca', duration: '10h 30min', type: 'Dinámica', time: 'Día completo', preBook: '€144', onBoard: '€160' },
      { name: 'Día de excursión en Salamanca (almuerzo incluido)', duration: '10h 30min', type: 'Clásica', time: 'Día completo', preBook: '€103', onBoard: '€114' },
      { name: 'Ruta de los vinos de Oporto y Pinhão', duration: '4h', type: 'Clásica', time: 'Mañana', preBook: '€60', onBoard: '€67' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons.',
      'Navigation schedules are approximate and may vary.',
      'Moorings on the Duero are limited; ships may dock along the riverbank.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.'
    ],
    es: [
      'En caso de crecidas, decrecidas del río o cualquier evento de fuerza mayor, el comandante puede modificar el programa por motivos de seguridad.',
      'Los horarios de navegación son orientativos y pueden sufrir variaciones.',
      'El número de embarcaderos está limitado en el Duero; los barcos se pueden encontrar amarrados a lo largo de la costa.',
      'Niños de 2 a 9 años cumplidos. El barco no dispone de cunas; el cliente deberá llevar la suya.',
      'Documento nacional de identidad o pasaporte en vigor obligatorio. Los residentes fuera de la UE deben consultar con su embajada o consulado.'
    ]
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const excursions = excursionsList[language];
  const importantInfo = importantInfoList[language];

  const visibleExcursions = showAllExcursions ? excursions : excursions.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0c4a6e] via-[#155e75] to-[#1a2b5c] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Ship className="w-4 h-4 mr-2" />
              {t.featured} &middot; {t.portToPort}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-cyan-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-cyan-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-cyan-300 mr-2" />
                <span>CroisiEurope</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Route visual */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
            {['Oporto', 'Regua', 'Vega de Terrón', 'Salamanca', 'Senhora da Ribeira', 'Leverinho', 'Oporto'].map((port, i, arr) => (
              <div key={i} className="flex items-center">
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#0c4a6e] text-white' : 'bg-white text-[#0c4a6e] border border-[#0c4a6e]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#0c4a6e]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-gradient-to-br from-[#0c4a6e] to-[#155e75] rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <Ship className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
            <p className="text-4xl md:text-5xl font-bold mb-4">{t.priceFrom}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-cyan-100 text-lg max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#0c4a6e] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t.callNow}
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c4a6e] text-white flex items-center justify-center mt-0.5 mr-4">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#0c4a6e] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensión Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Music, en: 'Themed Evenings', es: 'Noches Temáticas' },
              { icon: Users, en: 'Onboard Staff', es: 'Personal a Bordo' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#0c4a6e] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#0c4a6e]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0c4a6e] to-[#155e75] text-white flex items-center justify-center font-bold shadow-sm">
                      {day.day}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#0c4a6e] text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {expandedDay === day.day ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                {expandedDay === day.day && (
                  <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{day.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Excursions */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3 text-center">
            {t.excursions}
          </h2>
          <p className="text-gray-500 text-center mb-10">{t.excursionsNote}</p>
          <div className="space-y-3">
            {visibleExcursions.map((exc, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-gray-100/80 transition-colors">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{exc.name}</h4>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {exc.duration}
                    </span>
                    <span className="px-2 py-0.5 bg-white rounded-full text-xs font-medium border border-gray-200">{exc.type}</span>
                    <span>{exc.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs uppercase tracking-wide">{t.preBook}</span>
                    <span className="text-lg font-bold text-[#0c4a6e]">{exc.preBook}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs uppercase tracking-wide">{t.onBoard}</span>
                    <span className="text-lg font-semibold text-gray-600">{exc.onBoard}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {excursions.length > 4 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllExcursions(!showAllExcursions)}
                className="text-[#0c4a6e] font-semibold hover:underline transition-colors"
              >
                {showAllExcursions ? t.showLess : t.showMore}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Included / Not Included */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">+</span>
                </div>
                {t.included}
              </h2>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1 font-bold">&#10003;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">-</span>
                </div>
                {t.notIncluded}
              </h2>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1 font-bold">&#10007;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6 text-center">
            {t.importantInfo}
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <ul className="space-y-3">
              {importantInfo.map((info, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-amber-500 mr-3 mt-1 flex-shrink-0 font-bold">&bull;</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0c4a6e] via-[#155e75] to-[#1a2b5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Ship className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#0c4a6e] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t.callNow}
            </a>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="duero_cruise" />
        </div>
      </section>
    </div>
  );
}
