import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils, Gift } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function GuadalquivirChristmasCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'Christmas on the Guadalquivir',
      titleSub: 'Bay of C\u00e1diz',
      subtitle: 'Celebrate Christmas discovering the warm cities of Andalusia',
      duration: '6 Days / 5 Nights',
      route: 'Seville (Round Trip)',
      dates: 'December 22 - 27, 2026',
      intro: 'Enjoy a cruise along the Guadalquivir and discover the warm cities of Andalusia while celebrating Christmas. Visit Seville and its most emblematic monuments, a city that radiates joy and entertainment through every street and square of its old town. Celebrate Christmas Eve onboard in a warm atmosphere, discover C\u00e1diz perched on its rock in the sea, and explore the wine capital of Jerez and the historic city of C\u00f3rdoba.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Celebrate Christmas in Andalusia?',
      ctaText: 'Contact us today to reserve your cabin on this magical Christmas cruise along the Guadalquivir.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 955 \u20ac',
      pricingContact: 'Contact Us for Cabin Pricing',
      pricingNote: 'Multiple cabin categories available. Contact us for detailed pricing, availability, and group rates.',
      showMore: 'Show all excursions',
      showLess: 'Show fewer excursions',
      croisiHighlights: 'CroisiEurope Highlights',
      portToPort: 'Port-to-Port Formula'
    },
    es: {
      featured: 'Crucero Fluvial',
      title: 'Navidad en el Guadalquivir',
      titleSub: 'y la Bah\u00eda de C\u00e1diz',
      subtitle: 'Celebre la Navidad descubriendo las c\u00e1lidas ciudades de Andaluc\u00eda',
      duration: '6 D\u00edas / 5 Noches',
      route: 'Sevilla (Ida y Vuelta)',
      dates: '22 - 27 de Diciembre, 2026',
      intro: 'Disfrute de un crucero por el Guadalquivir con el que descubrir las c\u00e1lidas ciudades de Andaluc\u00eda a la vez que se celebra la Navidad. Se visitar\u00e1n Sevilla y sus monumentos m\u00e1s emblem\u00e1ticos, una ciudad que irradia alegr\u00eda y entretenimiento por cada una de las calles y plazas de su casco antiguo. Celebre la Nochebuena a bordo en un ambiente c\u00e1lido, descubra C\u00e1diz sobre el pe\u00f1\u00f3n en el mar y explore la capital del vino de Jerez y la hist\u00f3rica ciudad de C\u00f3rdoba.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: '\u00bfNavidad en Andaluc\u00eda?',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este m\u00e1gico crucero navide\u00f1o por el Guadalquivir.',
      callNow: 'Cont\u00e1ctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n',
      pricing: 'Precios',
      priceFrom: 'Desde 955 \u20ac',
      pricingContact: 'Cont\u00e1ctenos para Precios de Cabinas',
      pricingNote: 'M\u00faltiples categor\u00edas de cabinas disponibles. Cont\u00e1ctenos para precios detallados, disponibilidad y tarifas de grupo.',
      showMore: 'Ver todas las excursiones',
      showLess: 'Ver menos excursiones',
      croisiHighlights: 'Destacados CroisiEurope',
      portToPort: 'F\u00f3rmula Puerto/Puerto'
    }
  };

  const highlightsList = {
    en: [
      'Christmas Eve onboard -- an unforgettable moment in a warm, festive atmosphere',
      'Discover Seville, its Andalusian gardens and its blend of cultures',
      'Explore C\u00e1diz, perched on its rock in the sea',
      'Midnight Mass at El Puerto de Santa Mar\u00eda',
      'Visit Jerez, capital of wine, horses, and birthplace of flamenco',
      'Full-day excursion to C\u00f3rdoba with lunch included',
      'Special Christmas Eve dinner with wines',
      'Christmas gift onboard',
      'All meals and beverages included onboard',
      'Exterior cabins with full private bathroom'
    ],
    es: [
      'Nochebuena a bordo -- un momento inolvidable en un ambiente c\u00e1lido y festivo',
      'Descubra Sevilla, sus jardines andaluces y su mezcla de culturas',
      'Explore C\u00e1diz, sobre el pe\u00f1\u00f3n en el mar',
      'Misa del Gallo en El Puerto de Santa Mar\u00eda',
      'Visite Jerez, capital del vino, del caballo y cuna del cante flamenco',
      'Excursi\u00f3n de d\u00eda completo a C\u00f3rdoba con almuerzo incluido',
      'Cena especial de Nochebuena con vinos',
      'Obsequio de Navidad a bordo',
      'Todas las comidas y bebidas incluidas a bordo',
      'Cabinas exteriores con ba\u00f1o completo privado'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        date: 'Dec 22',
        title: 'SEVILLE - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail',
        details: 'Embarkation at 5:00 PM. Presentation of the crew and welcome cocktail.'
      },
      {
        day: 2,
        date: 'Dec 23',
        title: 'SEVILLE - C\u00c1DIZ - Andalusian Jewel',
        summary: 'Guided tour of Seville, afternoon navigation',
        details: 'Optional guided excursion of Seville. Afternoon navigation toward C\u00e1diz.'
      },
      {
        day: 3,
        date: 'Dec 24',
        title: 'C\u00c1DIZ - EL PUERTO DE SANTA MAR\u00cdA - Christmas Eve',
        summary: 'C\u00e1diz visit, Osborne winery, Christmas Eve dinner, Midnight Mass',
        details: 'Morning dedicated to the optional guided excursion of C\u00e1diz. Cruise departs toward El Puerto de Santa Mar\u00eda. In the afternoon, free time or optional excursion to the Osborne winery with wine tasting. Special Christmas Eve dinner. Midnight Mass at El Puerto de Santa Mar\u00eda.'
      },
      {
        day: 4,
        date: 'Dec 25',
        title: 'EL PUERTO DE SANTA MAR\u00cdA - JEREZ - SEVILLE - Christmas Day',
        summary: 'Jerez excursion, gala night',
        details: 'Morning optional excursion to Jerez, capital of wine, horses, and birthplace of flamenco. Return to the ship and cruise departure. Gala evening.'
      },
      {
        day: 5,
        date: 'Dec 26',
        title: 'SEVILLE - C\u00d3RDOBA - SEVILLE - Historic C\u00f3rdoba',
        summary: 'Full-day excursion to C\u00f3rdoba',
        details: 'Full day dedicated to the optional excursion to C\u00f3rdoba. Free time before returning to Seville, where the ship is moored.'
      },
      {
        day: 6,
        date: 'Dec 27',
        title: 'SEVILLE - Farewell',
        summary: 'Breakfast, disembarkation',
        details: 'Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        date: '22 Dic',
        title: 'SEVILLA - Bienvenida a Bordo',
        summary: 'Embarque, c\u00f3ctel de bienvenida',
        details: 'Embarque a las 17:00h. Presentaci\u00f3n de la tripulaci\u00f3n y c\u00f3ctel de bienvenida.'
      },
      {
        day: 2,
        date: '23 Dic',
        title: 'SEVILLA - C\u00c1DIZ - Joya Andaluza',
        summary: 'Visita guiada de Sevilla, tarde de navegaci\u00f3n',
        details: 'Excursi\u00f3n opcional guiada de Sevilla. Tarde de navegaci\u00f3n hacia C\u00e1diz.'
      },
      {
        day: 3,
        date: '24 Dic',
        title: 'C\u00c1DIZ - EL PUERTO DE SANTA MAR\u00cdA - Nochebuena',
        summary: 'Visita a C\u00e1diz, bodega Osborne, cena de Nochebuena, Misa del Gallo',
        details: 'Ma\u00f1ana dedicada a la excursi\u00f3n guiada opcional de C\u00e1diz. Salida del crucero en direcci\u00f3n a El Puerto de Santa Mar\u00eda. Por la tarde, tiempo libre o excursi\u00f3n opcional a la bodega Osborne con cata de vinos. Cena especial de Nochebuena. Misa del Gallo en El Puerto de Santa Mar\u00eda.'
      },
      {
        day: 4,
        date: '25 Dic',
        title: 'EL PUERTO DE SANTA MAR\u00cdA - JEREZ - SEVILLA - Navidad',
        summary: 'Excursi\u00f3n a Jerez, noche de gala',
        details: 'Por la ma\u00f1ana excursi\u00f3n opcional a Jerez, capital del vino, del caballo y cuna del cante flamenco. Regreso al barco y salida del crucero. Noche de gala.'
      },
      {
        day: 5,
        date: '26 Dic',
        title: 'SEVILLA - C\u00d3RDOBA - SEVILLA - C\u00f3rdoba Hist\u00f3rica',
        summary: 'Excursi\u00f3n de d\u00eda completo a C\u00f3rdoba',
        details: 'Jornada dedicada a la excursi\u00f3n opcional de C\u00f3rdoba. Tiempo libre antes de regresar a Sevilla, donde el barco est\u00e1 amarrado.'
      },
      {
        day: 6,
        date: '27 Dic',
        title: 'SEVILLA - Despedida',
        summary: 'Desayuno, desembarque',
        details: 'Desayuno a bordo. Desembarque a las 9:00h. Fin de nuestros servicios.'
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
      'Special Christmas Eve dinner with wines',
      'Christmas gift',
      'Assistance and repatriation insurance',
      'Port taxes included',
      'Free Wi-Fi onboard',
      'Individual headsets during excursions'
    ],
    es: [
      'Pensi\u00f3n completa desde la cena del primer d\u00eda al desayuno del \u00faltimo',
      'Bebidas incluidas a bordo (excepto cartas especiales)',
      'Cabina doble exterior con ba\u00f1o completo privado',
      'Animaci\u00f3n y actividades a bordo',
      'Asistencia a bordo durante todo el crucero',
      'C\u00f3ctel de bienvenida',
      'Cena y noche de gala',
      'Cena especial de Nochebuena con vinos',
      'Obsequio de Navidad',
      'Seguro de asistencia/repatriaci\u00f3n',
      'Tasas portuarias incluidas',
      'Wi-Fi gratuito a bordo',
      'Auriculares individuales durante las excursiones'
    ]
  };

  const notIncludedItems = {
    en: [
      'Beverages from the special wine/drink lists',
      'Beverages during excursions or transfers',
      'Coach transfer (optional, \u20ac25 per person)',
      'Cancellation and luggage insurance',
      'Optional excursions',
      'Transfers to/from the ship'
    ],
    es: [
      'Bebidas que figuran en las cartas especiales',
      'Bebidas durante las excursiones o traslados',
      'Traslado en autocar (opcional, 25\u20ac por persona)',
      'Seguro de anulaci\u00f3n/equipajes',
      'Excursiones opcionales',
      'Traslados al/desde el barco'
    ]
  };

  const excursionsList = {
    en: [
      { name: 'Guided tour of Seville and Alc\u00e1zar', duration: '4h 30min', type: 'Classic', time: 'Morning', preBook: '\u20ac82', onBoard: '\u20ac91' },
      { name: 'Osborne winery with wine tasting', duration: '1h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac32', onBoard: '\u20ac36' },
      { name: 'Guided tour of C\u00e1diz', duration: '3h', type: 'Classic', time: 'Morning', preBook: '\u20ac37', onBoard: '\u20ac41' },
      { name: 'Guided tour of Jerez', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac65', onBoard: '\u20ac72' },
      { name: 'Full day in C\u00f3rdoba (lunch included)', duration: '10h', type: 'Classic', time: 'Full Day', preBook: '\u20ac126', onBoard: '\u20ac140' }
    ],
    es: [
      { name: 'Visita guiada de Sevilla y Alc\u00e1zar', duration: '4h 30min', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac82', onBoard: '\u20ac91' },
      { name: 'Bodega Osborne con cata de vinos', duration: '1h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac32', onBoard: '\u20ac36' },
      { name: 'Visita guiada de C\u00e1diz', duration: '3h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac37', onBoard: '\u20ac41' },
      { name: 'Visita guiada de Jerez', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac65', onBoard: '\u20ac72' },
      { name: 'D\u00eda de excursi\u00f3n en C\u00f3rdoba (almuerzo incluido)', duration: '10h', type: 'Cl\u00e1sica', time: 'D\u00eda completo', preBook: '\u20ac126', onBoard: '\u20ac140' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons without this being grounds for a claim.',
      'Navigation schedules are approximate and may vary without this being grounds for a claim.',
      'The stop at El Puerto de Santa Mar\u00eda could be replaced by a stop in C\u00e1diz.',
      'The Midnight Mass location may change depending on availability. Optional transfer for \u20ac25 per person, bookable onboard, offered only if the ship is not moored near the place of worship.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.'
    ],
    es: [
      'En caso de crecidas o decrecidas del r\u00edo o cualquier evento de fuerza mayor, el comandante puede verse obligado a modificar el programa por motivos de seguridad sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Los horarios de navegaci\u00f3n son orientativos y pueden sufrir variaciones sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'La escala en El Puerto de Santa Mar\u00eda podr\u00eda reemplazarse por una escala en C\u00e1diz.',
      'El lugar de la Misa del Gallo puede cambiar en funci\u00f3n de las plazas disponibles. Posibilidad de traslado opcional por 25\u20ac por persona, de reserva y pago a bordo. El traslado se propondr\u00e1 \u00fanicamente en caso de que el barco no est\u00e9 amarrado en las proximidades del lugar de culto.',
      'Ni\u00f1os de 2 a 9 a\u00f1os cumplidos. El barco no dispone de cunas; el cliente deber\u00e1 llevar la suya.',
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

  const whatsappSvg = (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#1a2b5c] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-300/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Ship className="w-4 h-4 mr-2" />
              {t.featured} &middot; {t.portToPort}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
              {t.title}
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 mb-6 font-light">
              {t.titleSub}
            </p>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-amber-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Gift className="w-5 h-5 text-amber-300 mr-2" />
                <span>{t.dates}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-amber-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-amber-300 mr-2" />
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
            {['Sevilla', 'C\u00e1diz', 'El Puerto de Santa Mar\u00eda', 'Jerez', 'Sevilla', 'C\u00f3rdoba', 'Sevilla'].map((port, i, arr) => (
              <div key={i} className="flex items-center">
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#991b1b] text-white' : 'bg-white text-[#991b1b] border border-[#991b1b]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#991b1b]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#991b1b] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-gradient-to-br from-[#7f1d1d] to-[#991b1b] rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <Gift className="w-12 h-12 mx-auto mb-4 text-amber-300" />
            <p className="text-4xl md:text-5xl font-bold mb-4">{t.priceFrom}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-red-100 text-lg max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#991b1b] px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              {whatsappSvg}
              {t.callNow}
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#991b1b] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#991b1b] mt-1.5 mr-4"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#991b1b] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Gift, en: 'Christmas Gift', es: 'Obsequio Navide\u00f1o' },
              { icon: Users, en: 'Onboard Staff', es: 'Personal a Bordo' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#991b1b] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#991b1b] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#991b1b]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#7f1d1d] to-[#991b1b] text-white flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] leading-none font-medium text-red-200">{day.date}</span>
                      <span className="font-bold text-sm leading-tight">{language === 'en' ? 'Day' : 'D\u00eda'} {day.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#991b1b] text-white' : 'bg-gray-100 text-gray-400'}`}>
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
          <h2 className="text-3xl font-bold text-[#991b1b] mb-3 text-center">
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
                    <span className="text-lg font-bold text-[#991b1b]">{exc.preBook}</span>
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
                className="text-[#991b1b] font-semibold hover:underline transition-colors"
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
              <h2 className="text-2xl font-bold text-[#991b1b] mb-6 flex items-center">
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
              <h2 className="text-2xl font-bold text-[#991b1b] mb-6 flex items-center">
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
          <h2 className="text-2xl font-bold text-[#991b1b] mb-6 text-center">
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
      <section className="py-16 bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#1a2b5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-16 h-16 mx-auto mb-6 text-amber-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#991b1b] px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors shadow-lg"
            >
              {whatsappSvg}
              {t.callNow}
            </a>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              {whatsappSvg}
              {t.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#991b1b] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="guadalquivir_christmas_cruise" />
        </div>
      </section>
    </div>
  );
}
