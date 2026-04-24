import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function DueroCruisePortToPort() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'Duero River Cruise',
      titleSub: 'Port-to-Port Formula',
      subtitle: 'An unforgettable journey through the magnificent Duero Valley between Portugal and Spain',
      duration: '8 Days / 7 Nights',
      route: 'Oporto (Round Trip)',
      intro: 'Welcome aboard an unforgettable cruise through the magnificent Duero Valley, where every stop is synonymous with captivating adventure and rewarding discoveries. Prepare to be amazed by its stunning landscapes, cities steeped in history, and unique experiences that will awaken your senses to admire the beauty and culture of this emblematic region. From the bustling city of Oporto to the extraordinary Salamanca, from wine country in Pinhao to the charming fishing village of Afurada.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Ready to Cruise the Duero?',
      ctaText: 'Contact us today to reserve your cabin on this unforgettable 8-day river cruise through Portugal and Spain.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 1,369 \u20ac',
      pricingContact: 'Contact Us for Cabin Pricing',
      pricingNote: 'Multiple cabin categories available. Contact us for detailed pricing, availability, and group rates.',
      showMore: 'Show all excursions',
      showLess: 'Show fewer excursions',
      croisiHighlights: 'CroisiEurope Highlights',
      portToPort: 'Port-to-Port Formula'
    },
    es: {
      featured: 'Crucero Fluvial',
      title: 'Crucero por el Duero',
      titleSub: 'F\u00f3rmula Puerto/Puerto',
      subtitle: 'Un viaje inolvidable por el magn\u00edfico valle del Duero entre Portugal y Espa\u00f1a',
      duration: '8 D\u00edas / 7 Noches',
      route: 'Oporto (Ida y Vuelta)',
      intro: 'Bienvenido a bordo de un crucero inolvidable por el magn\u00edfico valle del Duero, donde cada escala es sin\u00f3nimo de una aventura cautivadora y descubrimientos gratificantes. Prep\u00e1rese para dejarse sorprender por sus impresionantes paisajes, ciudades cargadas de historia y experiencias \u00fanicas que despertar\u00e1n sus sentidos para admirar la belleza y la cultura de esta emblem\u00e1tica regi\u00f3n. Desde la concurrida ciudad de Oporto hasta la extraordinaria Salamanca, desde la tierra del vino en Pinh\u00e3o hasta el encantador barrio pesquero de Afurada.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: '\u00bfListo para Navegar el Duero?',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este inolvidable crucero fluvial de 8 d\u00edas por Portugal y Espa\u00f1a.',
      callNow: 'Cont\u00e1ctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n',
      pricing: 'Precios',
      priceFrom: 'Desde 1.369 \u20ac',
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
      'Navigate through the magnificent Duero Valley to the Spanish border',
      'Discover Oporto, UNESCO World Heritage city famous for its wine',
      'Visit Casa de Mateus, magnificent 18th-century baroque manor, and the Duero Museum',
      'Full-day excursion to Salamanca -- cathedral and university dating to 1218',
      'Porto wine route through the Pinh\u00e3o region',
      'Visit Guimar\u00e3es with its medieval and modern quarters',
      'Explore the typical fishing village of Afurada',
      'All meals and beverages included onboard',
      'Themed evenings: flamenco, gala, fado, and folkloric nights',
      'Exterior cabins with full private bathroom'
    ],
    es: [
      'Navegaci\u00f3n por el magn\u00edfico valle del Duero hasta la frontera espa\u00f1ola',
      'Descubra Oporto, ciudad Patrimonio de la Humanidad famosa por su vino',
      'Visite la Casa de Mateus, magn\u00edfico edificio barroco del siglo XVIII, y el Museo del Duero',
      'Excursi\u00f3n de d\u00eda completo a Salamanca -- catedral y universidad de 1218',
      'Ruta de los vinos de Oporto por la regi\u00f3n de Pinh\u00e3o',
      'Visite Guimar\u00e3es con sus barrios medievales y modernos',
      'Explore el t\u00edpico barrio pesquero de Afurada',
      'Todas las comidas y bebidas incluidas a bordo',
      'Noches tem\u00e1ticas: flamenco, gala, fado y folcl\u00f3rica',
      'Cabinas exteriores con ba\u00f1o completo privado'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'OPORTO - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail, dinner',
        details: 'Embarkation at 5:00 PM. Settle into your cabin. Presentation of the crew and welcome cocktail. Dinner onboard. In the evening, optional bus excursion to see "Illuminated Porto."'
      },
      {
        day: 2,
        title: 'OPORTO - REGUA - UNESCO Heritage City',
        summary: 'Guided tour of Oporto, afternoon navigation',
        details: 'Optional "classic" excursion: guided tour of Oporto. Depart by coach to the city center. Visit the Church of S\u00e3o Francisco (interior), one of the most symbolic religious buildings in Oporto, located near the banks of the Duero. Continue to the Stock Exchange Palace (interior). Then visit a tile workshop -- the magnificent azulejos you will see throughout Portugal are the result of an ancient art form dating back to the Arab occupation of the Iberian Peninsula. A unique opportunity to discover this ancestral art. Return to the ship. Optional "active" excursion (advance booking required): city tour by tram to the mouth of the Duero and the Oporto Tram Museum for a journey through time. Afternoon navigation. Dancing evening or free time in Regua.'
      },
      {
        day: 3,
        title: 'REGUA - VEGA DE TERR\u00d3N - Baroque Treasures',
        summary: 'Casa de Mateus, Duero Museum, flamenco night',
        details: 'Optional excursion to Casa de Mateus and the Duero Museum. Walking visit to the Duero Museum, situated on the riverbank, combining tradition and modernity to reveal the fascinating history of the Duero and its winemaking methods in this precious UNESCO World Heritage region. Continue by coach to Casa de Mateus in Vila Real. This magnificent 18th-century baroque building is the most beautiful and surprising manor house in northern Portugal, belonging to the Albuquerque family. The residence features an elegant blend of white walls and Portuguese granite in rococo style. Stroll through the magnificent gardens with their boxwood parterres and hornbeam "green tunnels." Return to the ship in Pinh\u00e3o. Afternoon navigation. Flamenco evening.'
      },
      {
        day: 4,
        title: 'VEGA DE TERR\u00d3N - SALAMANCA - BARCA D\'ALVA',
        summary: 'Full-day excursion to Salamanca',
        details: 'Optional "classic" excursion: guided tour of Salamanca, its cathedral, and its famous University dating to 1218 -- one of the oldest in the world. Optional "active" excursion (advance booking required): tapas tour through Salamanca. Entertainment evening.'
      },
      {
        day: 5,
        title: 'BARCA D\'ALVA - FERRADOSA - PINH\u00c3O - Wine Country',
        summary: 'Porto wine route, gala dinner',
        details: 'Early morning departure by cruise. Optional excursion: Porto wine route and Pinh\u00e3o. Dinner and gala evening onboard.'
      },
      {
        day: 6,
        title: 'PINH\u00c3O - OPORTO - River Navigation',
        summary: 'Lamego visit, afternoon navigation, fado night',
        details: 'Optional guided excursion of Lamego. Afternoon navigation. Fado evening.'
      },
      {
        day: 7,
        title: 'OPORTO - Cultural Discoveries',
        summary: 'Guimar\u00e3es or Afurada excursion, folkloric night',
        details: 'Free morning in Oporto. In the afternoon, free time or: Optional "classic" excursion: visit to Guimar\u00e3es, a city where medieval and modern quarters blend harmoniously. Optional "active" excursion (advance booking required): the typical neighborhood of Afurada. Depart by coach to the mouth of the Duero. An unusual walk through the characteristic Afurada neighborhood. Visit the heritage interpretation center. Free time in Afurada, a small fishing village brimming with charm that has preserved its essence. Enjoy a seafood tasting. Return to the ship. Folkloric evening.'
      },
      {
        day: 8,
        title: 'OPORTO - Farewell',
        summary: 'Breakfast, disembarkation',
        details: 'Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'OPORTO - Bienvenida a Bordo',
        summary: 'Embarque, c\u00f3ctel de bienvenida, cena',
        details: 'Embarque a las 17:00h. Acomodaci\u00f3n en las cabinas. Presentaci\u00f3n de la tripulaci\u00f3n y c\u00f3ctel de bienvenida. Cena a bordo. Por la noche, excursi\u00f3n opcional en autob\u00fas para ver "Oporto iluminado".'
      },
      {
        day: 2,
        title: 'OPORTO - R\u00c9GUA - Ciudad Patrimonio UNESCO',
        summary: 'Visita guiada de Oporto, tarde de navegaci\u00f3n',
        details: 'Excursi\u00f3n opcional "cl\u00e1sica": visita guiada de Oporto. Salida en autocar hacia el centro de Oporto. Visita a la Iglesia de San Francisco (interior), uno de los edificios religiosos m\u00e1s simb\u00f3licos de Oporto, a un tiro de piedra de las orillas del Duero. Continuaci\u00f3n hacia el Palacio de la Bolsa (interior). A continuaci\u00f3n, visitar\u00e1 un taller de azulejos. Los magn\u00edficos azulejos que ver\u00e1 en Oporto y en todo Portugal son el resultado de una forma de arte con una larga historia que comenz\u00f3 durante la ocupaci\u00f3n \u00e1rabe de la Pen\u00ednsula Ib\u00e9rica. Una oportunidad \u00fanica para descubrir este arte ancestral. Regreso al barco. Excursi\u00f3n opcional "activa" (reserva obligatoria en la agencia de viajes): visita de la ciudad en tranv\u00eda hasta la desembocadura del Duero y el Museo del Tranv\u00eda de Oporto. Tarde de navegaci\u00f3n. Noche de baile o tiempo libre en R\u00e9gua.'
      },
      {
        day: 3,
        title: 'R\u00c9GUA - VEGA DE TERR\u00d3N - Tesoros Barrocos',
        summary: 'Casa de Mateus, Museo del Duero, noche de flamenco',
        details: 'Excursi\u00f3n opcional a la Casa de Mateus y al Museo del Duero. Salida a pie hacia el Museo del Duero. Este museo situado a orillas del r\u00edo combina tradici\u00f3n y modernidad para revelar la fascinante historia del Duero y los m\u00e9todos de elaboraci\u00f3n del vino utilizados en esta preciosa regi\u00f3n, Patrimonio de la Humanidad. Continuaci\u00f3n en autocar hacia la Casa de Mateus en Vila R\u00e9al. Este magn\u00edfico edificio barroco del siglo XVIII es la casa solariega m\u00e1s bonita y sorprendente del norte de Portugal, perteneciente a la familia d\'Albuquerque. La residencia es impresionante, con una inteligente mezcla de paredes blancas y granito portugu\u00e9s, todo en estilo rococ\u00f3. Pasee por el magn\u00edfico jard\u00edn con sus parterres de boj y carpes formando un \u00abt\u00fanel de verdor\u00bb. Regreso al barco en Pinh\u00e3o. Tarde de navegaci\u00f3n. Noche de flamenco.'
      },
      {
        day: 4,
        title: 'VEGA DE TERR\u00d3N - SALAMANCA - BARCA D\'ALVA',
        summary: 'Excursi\u00f3n de d\u00eda completo a Salamanca',
        details: 'Excursi\u00f3n opcional "cl\u00e1sica": visita guiada de Salamanca, de su catedral y su famosa Universidad que data de 1218, una de las m\u00e1s antiguas del mundo. Excursi\u00f3n opcional "activa" (reserva obligatoria en la agencia de viajes): tour de tapas por Salamanca. Noche de animaci\u00f3n.'
      },
      {
        day: 5,
        title: 'BARCA D\'ALVA - FERRADOSA - PINH\u00c3O - Tierra del Vino',
        summary: 'Ruta de vinos de Oporto, cena de gala',
        details: 'Salida a primera hora de la ma\u00f1ana en crucero. Excursi\u00f3n opcional: Ruta del vino de Oporto y Pinh\u00e3o. Cena y noche de gala a bordo.'
      },
      {
        day: 6,
        title: 'PINH\u00c3O - OPORTO - Navegaci\u00f3n Fluvial',
        summary: 'Visita a Lamego, tarde de navegaci\u00f3n, noche de fado',
        details: 'Excursi\u00f3n opcional guiada de Lamego. Tarde de navegaci\u00f3n. Noche de fado.'
      },
      {
        day: 7,
        title: 'OPORTO - Descubrimientos Culturales',
        summary: 'Excursi\u00f3n a Guimar\u00e3es o Afurada, noche folcl\u00f3rica',
        details: 'Ma\u00f1ana libre en Oporto. Por la tarde, tiempo libre o: Excursi\u00f3n opcional "cl\u00e1sica": visita de Guimar\u00e3es, ciudad en la que se aprecian barrios medievales y modernos. Excursi\u00f3n opcional "activa" (reserva obligatoria en la agencia de viajes): el t\u00edpico barrio de Afurada. Salida en autocar hacia la desembocadura del Duero. Un paseo ins\u00f3lito por el caracter\u00edstico barrio de Afurada. Visita al centro de interpretaci\u00f3n del patrimonio. Tiempo libre en Afurada, un peque\u00f1o pueblo de pescadores rebosante de encanto que ha sabido conservar su esencia. Degustaci\u00f3n de productos del mar. Regreso al barco. Noche folcl\u00f3rica.'
      },
      {
        day: 8,
        title: 'OPORTO - Despedida',
        summary: 'Desayuno, desembarque',
        details: 'Desayuno a bordo. Desembarque a las 9:00h. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Full board from dinner on day 1 to breakfast on day 8',
      'Beverages included onboard (except special wine/drink lists)',
      'Double exterior cabin with window and full private bathroom',
      'Onboard entertainment and activities',
      'Onboard assistance throughout the cruise',
      'Welcome cocktail',
      'Gala dinner evening',
      'Flamenco night onboard',
      'Fado night onboard',
      'Folkloric evening',
      'Assistance and repatriation insurance',
      'Port taxes included',
      'Free Wi-Fi onboard',
      'Individual headsets during excursions'
    ],
    es: [
      'Pensi\u00f3n completa desde la cena del primer d\u00eda al desayuno del \u00faltimo',
      'Bebidas incluidas a bordo (excepto cartas especiales)',
      'Cabina doble exterior con ventana y ba\u00f1o completo privado',
      'Animaci\u00f3n y actividades a bordo',
      'Asistencia a bordo durante todo el crucero',
      'C\u00f3ctel de bienvenida',
      'Cena y noche de gala',
      'Noche de flamenco a bordo',
      'Noche de fado a bordo',
      'Noche folcl\u00f3rica',
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
      'Cancellation and luggage insurance',
      'Optional excursions: booking and payment onboard',
      'Transfers to/from the ship'
    ],
    es: [
      'Bebidas que figuran en las cartas especiales',
      'Bebidas durante las excursiones o traslados',
      'Seguro de anulaci\u00f3n/equipajes',
      'Excursiones opcionales: reserva y pago a bordo',
      'Traslados al/desde el barco'
    ]
  };

  const excursionsList = {
    en: [
      { name: 'Illuminated Porto', duration: '1h 15min', type: 'Classic', time: 'Evening', preBook: '\u20ac34', onBoard: '\u20ac38' },
      { name: 'Guided tour of Oporto + tile workshop', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac76', onBoard: '\u20ac84' },
      { name: 'Oporto by tram + Tram Museum', duration: '4h', type: 'Dynamic', time: 'Morning', preBook: '\u20ac119', onBoard: '\u20ac132' },
      { name: 'Casa de Mateus + Duero Museum', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac80', onBoard: '\u20ac89' },
      { name: 'Salamanca tapas tour', duration: '10h 30min', type: 'Dynamic', time: 'Full Day', preBook: '\u20ac144', onBoard: '\u20ac160' },
      { name: 'Full day in Salamanca (lunch included)', duration: '10h 30min', type: 'Classic', time: 'Full Day', preBook: '\u20ac103', onBoard: '\u20ac114' },
      { name: 'Porto wine route + Pinh\u00e3o', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac60', onBoard: '\u20ac67' },
      { name: 'Guided visit of Lamego', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac65', onBoard: '\u20ac72' },
      { name: 'Typical neighborhood of Afurada', duration: '4h', type: 'Dynamic', time: 'Afternoon', preBook: '\u20ac83', onBoard: '\u20ac92' },
      { name: 'Guimar\u00e3es', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac58', onBoard: '\u20ac64' }
    ],
    es: [
      { name: 'Porto iluminado', duration: '1h 15min', type: 'Cl\u00e1sica', time: 'Noche', preBook: '\u20ac34', onBoard: '\u20ac38' },
      { name: 'Visita guiada de Oporto y taller de azulejos', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac76', onBoard: '\u20ac84' },
      { name: 'Oporto en tranv\u00eda y Museo del tranv\u00eda', duration: '4h', type: 'Din\u00e1mica', time: 'Ma\u00f1ana', preBook: '\u20ac119', onBoard: '\u20ac132' },
      { name: 'Casa de Mateus y Museo del Duero', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac80', onBoard: '\u20ac89' },
      { name: 'Tour de tapas por Salamanca', duration: '10h 30min', type: 'Din\u00e1mica', time: 'D\u00eda completo', preBook: '\u20ac144', onBoard: '\u20ac160' },
      { name: 'D\u00eda de excursi\u00f3n en Salamanca (almuerzo incluido)', duration: '10h 30min', type: 'Cl\u00e1sica', time: 'D\u00eda completo', preBook: '\u20ac103', onBoard: '\u20ac114' },
      { name: 'Ruta de los vinos de Oporto y Pinh\u00e3o', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac60', onBoard: '\u20ac67' },
      { name: 'Visita guiada de Lamego', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac65', onBoard: '\u20ac72' },
      { name: 'El t\u00edpico barrio de Afurada', duration: '4h', type: 'Din\u00e1mica', time: 'Tarde', preBook: '\u20ac83', onBoard: '\u20ac92' },
      { name: 'Guimar\u00e3es', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac58', onBoard: '\u20ac64' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons without this being grounds for a claim.',
      'The number of moorings is limited on the Duero; ships may be found docked along the coast.',
      'Arrival times at ports and the order of excursions are subject to change.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.'
    ],
    es: [
      'En caso de crecidas o decrecidas del r\u00edo o cualquier evento de fuerza mayor, el comandante puede verse obligado a modificar el programa por motivos de seguridad sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'El n\u00famero de embarcaderos est\u00e1 limitado en el Duero; los barcos se pueden encontrar amarrados a lo largo de la costa.',
      'Las horas de llegada a las escalas y el orden de las excursiones se pueden cambiar.',
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
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
              {t.title}
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-200 mb-6 font-light">
              {t.titleSub}
            </p>
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
            {['Oporto', 'R\u00e9gua', 'Vega de Terr\u00f3n', 'Barca d\'Alva', 'Ferradosa', 'Pinh\u00e3o', 'Oporto'].map((port, i, arr) => (
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
              {whatsappSvg}
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
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#0c4a6e] mt-1.5 mr-4"></div>
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
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Music, en: 'Themed Evenings', es: 'Noches Tem\u00e1ticas' },
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
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="duero_cruise_port_to_port" />
        </div>
      </section>
    </div>
  );
}
