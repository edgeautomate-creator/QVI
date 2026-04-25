import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ViennaToDubrovnikTour() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Featured Tour',
      title: 'FROM VIENNA TO DUBROVNIK',
      subtitle: 'A grand journey through Austria, Slovenia, Croatia, and Bosnia-Herzegovina',
      duration: '10 or 11 Days',
      ref: 'Ref: E 4042',
      deposit: 'Starting From',
      depositAmount: '€2,250',
      priceNote: 'Per person in double occupancy (low season). High season from €2,305. Single supplement €885. Optional 11-day extension (Kotor or Korcula) from €2,545 / €2,600.',
      intro: 'Set off on an unforgettable 10-day journey from the imperial grandeur of Vienna, through the elegant Slovenian capital Ljubljana, the vibrant Croatian cities of Zagreb, Zadar, Split, and the spiritual towns of Bosnia-Herzegovina, arriving at the crown jewel of the Adriatic: the medieval walled city of Dubrovnik. An optional one-day extension takes you to the stunning Bay of Kotor in Montenegro or the enchanting island of Korčula.',
      highlights: 'Tour Highlights',
      itinerary: 'Daily Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      dates: 'Available Dates',
      cta: 'Ready to Explore the Adriatic?',
      ctaText: 'Contact us today to reserve your spot on this spectacular journey from Vienna to Dubrovnik.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      extensions: 'Optional Extension',
      importantNotes: 'Important Notes'
    },
    es: {
      featured: 'Tour Destacado',
      title: 'DE VIENA A DUBROVNIK',
      subtitle: 'Un gran recorrido por Austria, Eslovenia, Croacia y Bosnia-Herzegovina',
      duration: '10 o 11 Días',
      ref: 'Ref: E 4042',
      deposit: 'Desde',
      depositAmount: '€2.250',
      priceNote: 'Por persona en doble (temporada baja). Temporada alta desde €2.305. Suplemento individual €885. Extensión opcional 11 días (Kotor o Korcula) desde €2.545 / €2.600.',
      intro: 'Embárquese en un inolvidable recorrido de 10 días desde la grandeza imperial de Viena, pasando por la elegante capital eslovena Ljubljana, las vibrantes ciudades croatas de Zagreb, Zadar y Split, y los espirituales pueblos de Bosnia-Herzegovina, hasta llegar a la joya del Adriático: la ciudad medieval amurallada de Dubrovnik. Una extensión opcional de un día le lleva a la impresionante Bahía de Kotor en Montenegro o a la encantadora isla de Korčula.',
      highlights: 'Destacados del Tour',
      itinerary: 'Itinerario Diario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      dates: 'Fechas Disponibles',
      cta: '¡Reserve Su Lugar Hoy!',
      ctaText: 'Contáctenos hoy para reservar su lugar en este espectacular viaje de Viena a Dubrovnik.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información',
      extensions: 'Extensión Opcional',
      importantNotes: 'Notas Importantes'
    }
  };

  const highlightsList = {
    en: [
      'Panoramic tour of Vienna\'s Ring Avenue: Opera, Museum of Fine Arts, Parliament, City Hall, Belvedere Palace, and Prater Ferris Wheel',
      'Walking tour of Vienna\'s historic pedestrian center up to St. Stephen\'s Cathedral',
      'Optional: Vienna Artistic (Schönbrunn Palace with audio guide & gardens) and/or Classical Music Concert in a Viennese Palace',
      'Panoramic tour of Ljubljana: Dragon Bridge, Cathedral, and modernist buildings by Jože Plečnik',
      'Panoramic tour of Zagreb: Cathedral, St. Mark\'s Church, Croatian National Theatre, and charming Upper Town',
      'Plitvice Lakes National Park (UNESCO World Heritage): walking trail and boat ride on Lake Kozjak',
      'Walking tour of Zadar with entry to St. Donatus Church and St. Anastasia Cathedral',
      'Šibenik Cathedral of St. James (UNESCO) and free time in Trogir (UNESCO World Heritage)',
      'Walking tour of Split with entries to Diocletian\'s Palace cellars, Temple of Jupiter, and Cathedral',
      'Visit to Medjugorje, major pilgrimage center of the Balkans',
      'Panoramic tour of Mostar with its iconic Stari Most medieval bridge and the Koski Mehmed-Pasha minaret',
      'Walking tour of Dubrovnik\'s medieval center: Franciscan Monastery with Pharmacy, Dominican Monastery, Rector\'s Palace, and Cathedral',
      'Optional extension: Kotor (Montenegro) — UNESCO-listed walled city, or Korčula island (Croatia)'
    ],
    es: [
      'Visita panorámica por la Avenida del Ring de Viena: Ópera, Museo de Bellas Artes, Parlamento, Ayuntamiento, Palacio Belvedere y Noria del Prater',
      'Paseo por el centro histórico peatonal de Viena hasta la Catedral de San Esteban',
      'Opcional: Viena Artística (Palacio de Schoenbrunn con audioguía y Jardines) y/o Concierto de Música Clásica en un Palacio Vienés',
      'Visita panorámica de Ljubljana: Puente de los Dragones, Catedral y edificios modernistas de Jože Plečnik',
      'Visita panorámica de Zagreb: Catedral, Iglesia de San Marcos, Teatro Nacional de Croacia y el encantador barrio de la Ciudad Alta',
      'Parque Nacional de los Lagos de Plitvice (Patrimonio de la Humanidad): recorrido a pie y paseo en barco por el lago Kozjak',
      'Visita a pie de Zadar con entradas a la Iglesia de San Donato y la Catedral de Santa Anastasia',
      'Catedral de Santiago en Sibenik (Patrimonio UNESCO) y tiempo libre en Trogir (Patrimonio UNESCO)',
      'Visita a pie de Split con entradas a los Sótanos del Palacio de Diocleciano, el Templo de Júpiter y la Catedral',
      'Visita a Medjugorje, el mayor centro de peregrinación de los Balcanes',
      'Visita panorámica de Mostar con el emblemático Stari Most y el alminar de Koski Mehmed-Pasha',
      'Visita a pie del centro medieval de Dubrovnik: Monasterio Franciscano con Farmacia, Monasterio Dominico, Palacio del Rector y la Catedral',
      'Extensión opcional: Kotor (Montenegro) — ciudad amurallada declarada Patrimonio UNESCO, o isla de Korčula (Croacia)'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'VIENNA — We Arrive in Europe',
        summary: 'Arrival, panoramic tour of the Ring, welcome meeting',
        details: 'Arrival at the airport and transfer to hotel. Accommodation. Around 3:00 PM, panoramic tour along the Ring Avenue: Opera, Museum of Fine Arts, Parliament, City Hall, University, Belvedere Palace, etc., passing through the Prater for a photo of its famous Ferris Wheel. We finish with an included walking tour of the historic pedestrian center up to St. Stephen\'s Cathedral. At 7:00 PM, meeting with the guide at the hotel reception to meet fellow participants.'
      },
      {
        day: 2,
        title: 'VIENNA — Blue Danube and Green Wine',
        summary: 'Free day or optional visits',
        details: 'Breakfast. Free day or possibility of optional visit: Vienna Artistic (Schönbrunn Palace with audio guide and Gardens) and/or Classical Music Concert in a Viennese Palace. Accommodation.'
      },
      {
        day: 3,
        title: 'VIENNA — LJUBLJANA — Towards the Slovenian Capital',
        summary: 'Departure to Ljubljana, free afternoon',
        details: 'Breakfast. Early morning departure by coach towards the capital of Slovenia: Ljubljana. Arrival in the early afternoon. Free time to stroll through the center of this interesting city. Accommodation.'
      },
      {
        day: 4,
        title: 'LJUBLJANA — ZAGREB — Towards the Croatian Capital',
        summary: 'Panoramic Ljubljana, then travel to Zagreb',
        details: 'Breakfast. Morning panoramic tour of the city: walking tour of the historic center — Cathedral, Dragon Bridge, etc. — as well as the ensemble of modernist buildings by Jože Plečnik. Free time for lunch, then early afternoon departure by coach to the capital of Croatia: Zagreb. Accommodation.'
      },
      {
        day: 5,
        title: 'ZAGREB — The Croatian Capital',
        summary: 'Panoramic tour of Zagreb, free afternoon',
        details: 'Breakfast and panoramic tour highlighting the Cathedral with the Bishop\'s Palace, the Church of St. Mark, the Croatian National Theatre, and the baroque charm of the Upper Town with its picturesque open-air markets. The historic center is made up of three parts: Kaptol (center of the Catholic Church), Gradec (Parliament and administrative center), and the Lower Town (commercial heart). Free afternoon. Accommodation.'
      },
      {
        day: 6,
        title: 'ZAGREB — PLITVICE — ZADAR — Paradise of the Waters',
        summary: 'Plitvice Lakes UNESCO park, walking tour of Zadar',
        details: 'Breakfast. Departure to Plitvice National Park: walking trail and boat ride on Lake Kozjak. The park has been declared a UNESCO World Heritage Site. In the afternoon arrival in Zadar. Walking tour of the city: St. Donatus Church (interior), St. Anastasia Cathedral (exterior); the tour ends at the Well Square. Dinner and accommodation.'
      },
      {
        day: 7,
        title: 'ZADAR — ŠIBENIK — TROGIR — SPLIT — Heritage Cities',
        summary: 'Three UNESCO cities, Diocletian\'s Palace entries',
        details: 'Breakfast and departure towards Šibenik, where the Cathedral of St. James stands out, and Trogir, a UNESCO World Heritage city, with free time to visit its cathedral. In the afternoon, arrival in Split. Walking tour of the city, which developed within the walls of Diocletian\'s Palace. Includes entry to the Palace cellars, the Temple of Jupiter, and the Cathedral. Dinner and accommodation.'
      },
      {
        day: 8,
        title: 'SPLIT — MEDJUGORJE — MOSTAR — DUBROVNIK — Bosnia-Herzegovina',
        summary: 'Medjugorje pilgrimage site, Mostar\'s Stari Most, arrival in Dubrovnik',
        details: 'Breakfast. Departure towards Bosnia-Herzegovina. We arrive in Medjugorje, the largest pilgrimage center in the Balkans. Brief free time. Continuation to Mostar, known for its iconic Stari Most, a single-arch medieval bridge rebuilt after the war. Panoramic tour of the city with its lanes full of shops and stalls, the Old Bridge Museum, and the Koski Mehmed-Pasha minaret, from which panoramic views of the city can be enjoyed. Free time, then continuation to Dubrovnik. Accommodation.'
      },
      {
        day: 9,
        title: 'DUBROVNIK — Pearl of the Adriatic',
        summary: 'Walking tour of the medieval center, monument entries included',
        details: 'Breakfast and walking tour of the city with its medieval center dating from the early 14th century, including entries to the Franciscan Monastery with its Pharmacy, Dominican Monastery, Rector\'s Palace, and the Cathedral. Free afternoon. Accommodation.'
      },
      {
        day: 10,
        title: 'DUBROVNIK — DEPARTURE — Back Home',
        summary: 'Transfer to airport (or day 10 of extension — see below)',
        details: 'Breakfast and transfer to the airport. End of our services. (Guests on the optional 11-day extension continue — see the Extension section below.)'
      }
    ],
    es: [
      {
        day: 1,
        title: 'VIENA — Llegamos a Europa',
        summary: 'Llegada, visita panorámica del Ring, reunión de bienvenida',
        details: 'Llegada al aeropuerto y traslado al hotel. Alojamiento. Sobre las 15.00 hrs, visita panorámica recorriendo la Avenida del Ring con la Ópera, Museo de Bellas Artes, Parlamento, Ayuntamiento, Universidad, Palacio Belvedere, etc., pasando por el Prater para hacer una foto a su Noria. Finalizaremos con un paseo incluido por el centro histórico peatonal hasta la Catedral de San Esteban. A las 19.00 hrs, reunión con el guía en la recepción del hotel donde conoceremos al resto de participantes.'
      },
      {
        day: 2,
        title: 'VIENA — Danubio Azul y vino verde',
        summary: 'Día libre o visitas opcionales',
        details: 'Desayuno. Día libre o posibilidad de realizar Visita opcional: Viena Artística (Palacio de Schoenbrunn con audioguía y Jardines) y/o Concierto de Música Clásica en un Palacio Vienés. Alojamiento.'
      },
      {
        day: 3,
        title: 'VIENA — LJUBLJANA — Hacia la capital de Eslovenia',
        summary: 'Salida hacia Ljubljana, tarde libre',
        details: 'Desayuno. A primera hora, salida en autocar hacia la capital de Eslovenia: Ljubljana. Llegada a primera hora de la tarde. Tarde libre para pasear por el centro de esta interesante ciudad. Alojamiento.'
      },
      {
        day: 4,
        title: 'LJUBLJANA — ZAGREB — Hacia la capital croata',
        summary: 'Ljubljana panorámica, luego viaje a Zagreb',
        details: 'Desayuno. Por la mañana visita panorámica de la ciudad: recorrido a pie por el centro histórico — Catedral, Puente de los Dragones, etc. — así como el conjunto de edificios modernistas realizados por Joze Plecnik. Tiempo libre para almorzar y, a primera hora de la tarde, desplazamiento en nuestro autocar hasta la capital de Croacia: Zagreb. Alojamiento.'
      },
      {
        day: 5,
        title: 'ZAGREB — La capital Croata',
        summary: 'Visita panorámica de Zagreb, tarde libre',
        details: 'Desayuno y visita panorámica destacando la Catedral con el Palacio del Obispo, la Iglesia de San Marcos, el Teatro Nacional de Croacia y el encanto barroco de la Ciudad Alta con sus pintorescos mercados al aire libre. El centro histórico lo componen tres partes: Kaptol (centro de la Iglesia Católica), Gradec (Parlamento y centro administrativo) y la Ciudad Baja (corazón comercial). Tarde libre. Alojamiento.'
      },
      {
        day: 6,
        title: 'ZAGREB — PLITVICE — ZADAR — El paraíso de las aguas',
        summary: 'Parque de Plitvice UNESCO, visita a pie de Zadar',
        details: 'Desayuno. Salida hacia el Parque de Plitvice, recorrido a pie y paseo en barco por el lago Kojiak. El parque ha sido declarado Patrimonio de la Humanidad. Por la tarde llegada a Zadar. Visita a pie de la ciudad: Iglesia de San Donato (interior), Catedral de Santa Anastasia (exterior); la visita termina en la Plaza de los Pozos. Cena y alojamiento.'
      },
      {
        day: 7,
        title: 'ZADAR — SIBENIK — TROGIR — SPLIT — Ciudades patrimonio',
        summary: 'Tres ciudades Patrimonio UNESCO, entradas al Palacio de Diocleciano',
        details: 'Desayuno y salida hacia Sibenik, donde destaca la Catedral de Santiago, y Trogir, ciudad Patrimonio de la Humanidad, con tiempo libre para visitar su catedral. Por la tarde llegada a Split. Visita a pie de la ciudad, que se desarrolló dentro de las murallas del Palacio de Diocleciano. Incluye entradas a los sótanos del Palacio, el Templo de Júpiter y la Catedral. Cena y alojamiento.'
      },
      {
        day: 8,
        title: 'SPLIT — MEDJUGORJE — MOSTAR — DUBROVNIK — Bosnia Herzegovina',
        summary: 'Medjugorje, Stari Most de Mostar, llegada a Dubrovnik',
        details: 'Desayuno. Salida hacia Bosnia Herzegovina. Llegaremos a Medjugorje, el mayor centro de peregrinación de la región de los Balcanes. Breve tiempo libre. Continuación hasta Mostar, conocida por el emblemático Stari Most, un puente medieval de un solo arco que fue reconstruido después de la guerra. Visita panorámica de la ciudad con sus callejuelas repletas de tiendas y puestos, el Museo del Puente Viejo y el alminar de Koski Mehmed-Pasha, desde donde es posible disfrutar de vistas panorámicas de la ciudad. Tiempo libre y continuación hacia Dubrovnik. Alojamiento.'
      },
      {
        day: 9,
        title: 'DUBROVNIK — La perla del Adriático',
        summary: 'Visita a pie del centro medieval, entradas a monumentos incluidas',
        details: 'Desayuno y visita a pie de la ciudad con su centro medieval de inicios del siglo XIV, con entradas al Monasterio Franciscano con la Farmacia, Monasterio Dominico, Palacio del Rector y la Catedral. Tarde libre. Alojamiento.'
      },
      {
        day: 10,
        title: 'DUBROVNIK — CIUDAD DE ORIGEN — Vuelta a casa',
        summary: 'Traslado al aeropuerto (o día 10 de la extensión — ver abajo)',
        details: 'Desayuno y traslado al aeropuerto. Fin de nuestros servicios. (Los clientes de la extensión opcional de 11 días continúan — ver la sección de Extensión a continuación.)'
      }
    ]
  };

  const includedItems = {
    en: [
      'Accommodation with buffet breakfast throughout',
      '2 dinners included: 1 in Zadar (day 6) and 1 in Split (day 7)',
      'Luxury bus throughout the entire route',
      'Arrival and departure transfers',
      'Professional tour guide throughout the bus journey, regardless of group size',
      'Panoramic tours with local guides in Vienna, Ljubljana, Zagreb, Split, Mostar, Dubrovnik, and many more with courier guide',
      'Walking tour of Vienna\'s historic center',
      'Entries to Plitvice National Park with boat ride on Lake Kozjak',
      'Entry to St. Donatus Church in Zadar',
      'Entries to Franciscan Monastery with Pharmacy, Dominican Monastery, Rector\'s Palace, and Cathedral in Dubrovnik',
      'Entries to Diocletian\'s Palace cellars, Temple of Jupiter, and Cathedral in Split',
      'Visit to Kotor (Montenegro) or Korčula island (Croatia) for guests on the extension, depending on date',
      'Tourist insurance',
      'City taxes'
    ],
    es: [
      'Estancia en régimen de alojamiento y desayuno buffet',
      '2 cenas incluidas: 1 en Zadar (día 6) y 1 en Split (día 7)',
      'Bus de lujo durante todo el recorrido',
      'Traslados de llegada y salida',
      'Guía acompañante profesional durante todo el recorrido en bus, independientemente del número de pasajeros',
      'Visitas panorámicas con guía local en Viena, Ljubljana, Zagreb, Split, Mostar, Dubrovnik y multitud de visitas con guía correo',
      'Paseo por el centro histórico de Viena',
      'Entradas al Parque Nacional de los Lagos de Plitvice con paseo en barco por lago Kojiak',
      'Entradas a la Iglesia de San Donato en Zadar',
      'Entradas al Monasterio Franciscano con Farmacia, Monasterio Dominico, Palacio del Rector y Catedral en Dubrovnik',
      'Entradas al Palacio de Diocleciano, Templo de Júpiter y Catedral en Split',
      'Visita, dependiendo de la fecha, de Kotor (Montenegro) o la isla de Korcula (Croacia) para los que toman la extensión',
      'Seguro turístico',
      'Tasas de estancia'
    ]
  };

  const notIncludedItems = {
    en: [
      'Tips for drivers and guides',
      'Any service not specified in the itinerary or in "Price Includes"'
    ],
    es: [
      'Propinas para conductores y guías',
      'Cualquier servicio no especificado en el itinerario o en "El precio incluye"'
    ]
  };

  const optionalExtensions = {
    en: [
      {
        title: 'Kotor Extension (Montenegro)',
        subtitle: 'Available on departures May 1 – Jul 10 and Sep 4 – Oct 2',
        description: 'Day 10: Breakfast. Departure towards Montenegro. Along the fjord we arrive in Kotor, the most monumental city in the bay — a walled city steeped in tradition and history, declared a UNESCO World Heritage Site. We visit the main monuments including St. Trifon\'s Cathedral (San Trifón), one of the oldest in Europe. Despite multiple reconstructions, it remains a magnificent example of Romanesque architecture; its facade and towers were rebuilt in baroque style after the catastrophic 1667 earthquake. Its interior preserves many original architectural features and 14th-century frescoes. Return to Dubrovnik. Accommodation.\n\nDay 11: Breakfast and transfer to the airport. End of our services.'
      },
      {
        title: 'Korčula Island Extension (Croatia)',
        subtitle: 'Available on departures Jul 31 and Aug 14',
        description: 'Day 10: Breakfast. We head to the small village of Ston, known for its rich oysters and mussels. It preserves a fortified enclosure considered the longest and best-preserved in Europe — the most important of Ragusa, with 5 km of great wall — and is a location featured in the famous Game of Thrones series. We continue north to take the ferry to the island of Korčula, set in the Dalmatian coast archipelago. The island enchants with its green landscapes full of vineyards and olive trees and above all its coastline full of beaches and coves bathed in turquoise waters. Visit to its Cathedral. Its capital, Korčula, is known as the "little Dubrovnik." At the end of the visit, we return to Dubrovnik. Accommodation.\n\nDay 11: Breakfast and transfer to the airport. End of our services.'
      }
    ],
    es: [
      {
        title: 'Extensión Kotor (Montenegro)',
        subtitle: 'Disponible en salidas del 01/May al 10/Jul y del 04/Sep al 02/Oct',
        description: 'Día 10: Desayuno. Salida hacia Montenegro. A lo largo del fiordo se llegará a Kotor, la ciudad más monumental de la bahía — ciudad amurallada impregnada de tradición e historia, declarada Patrimonio de la Humanidad. Conoceremos los principales monumentos y visitaremos la Catedral de San Trifón, una de las más antiguas de Europa. La Catedral sigue siendo un magnífico ejemplo de arquitectura románica, a pesar de las múltiples reconstrucciones; la fachada y las torres fueron reconstruidas en estilo barroco después del catastrófico terremoto de 1667. Su interior conserva muchas características arquitectónicas originales y frescos del siglo XIV. Regreso a Dubrovnik. Alojamiento.\n\nDía 11: Desayuno y traslado al aeropuerto. Fin de nuestros servicios.'
      },
      {
        title: 'Extensión Isla de Korcula (Croacia)',
        subtitle: 'Disponible en salidas del 31/Jul y 14/Ago',
        description: 'Día 10: Desayuno. Nos dirigiremos hacia el pequeño pueblo de Ston, conocido por sus ricas ostras y mejillones. Conserva un recinto fortificado considerado el más largo y mejor conservado de Europa — el más importante de Ragusa, con 5 km de longitud de su gran muralla — y escenario protagonista de la conocida serie Juego de Tronos. Seguimos hacia el norte para tomar el ferry a la isla de Korcula, en el archipiélago de la costa dálmata. Esta isla enamora por sus paisajes verdes llenos de viñedos y olivos y sobre todo por su litoral repleto de playas y calas de aguas turquesas. Visita de su Catedral. Su capital, Korcula, es conocida como la pequeña Dubrovnik. Al término de la visita, regresaremos a Dubrovnik. Alojamiento.\n\nDía 11: Desayuno y traslado al aeropuerto. Fin de nuestros servicios.'
      }
    ]
  };

  const availableDates = {
    en: {
      '2026': {
        'May': '01, 15, 29',
        'June': '12, 26',
        'July': '10, 31',
        'August': '14',
        'September': '04, 11, 18, 25',
        'October': '02'
      }
    },
    es: {
      '2026': {
        'Mayo': '01, 15, 29',
        'Junio': '12, 26',
        'Julio': '10, 31',
        'Agosto': '14',
        'Septiembre': '04, 11, 18, 25',
        'Octubre': '02'
      }
    }
  };

  const importantNotesList = {
    en: [
      'To take part in the panoramic tour on day 1 of the itinerary, it is necessary to arrive in Vienna on flights landing before 1:00 PM. Otherwise we cannot guarantee the tour and it will not be refundable.',
      'For entry into Bosnia-Herzegovina (day 8 of the itinerary), some nationalities may require a Schengen visa with "MULTIPLE" entry. Please check in each case, as otherwise entry into the country will be denied.'
    ],
    es: [
      'Para poder realizar la visita panorámica del día 1 del itinerario es necesario llegar a Viena en vuelos antes de las 13.00 hrs. Caso contrario no podremos garantizar la visita y no será reembolsable.',
      'Para la entrada en Bosnia Herzegovina (día 08 del itinerario) algunas nacionalidades pueden necesitar Visa Schengen con entrada "MULTIPLE". Por favor, consulten en cada caso porque de lo contrario les denegarán la entrada en dicho país.'
    ]
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const extensions = optionalExtensions[language];
  const dates = availableDates[language];
  const importantNotes = importantNotesList[language];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#c41e3a] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t.featured}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {t.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-6 text-lg mb-4">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-white mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-white mr-2" />
                <span>Vienna → Dubrovnik</span>
              </div>
            </div>
            <p className="text-sm text-gray-300">{t.ref}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.deposit}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#1e3a5f]">
            <div className="text-center mb-6">
              <p className="text-6xl font-bold text-[#1e3a5f] mb-4">{t.depositAmount}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {t.priceNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mt-1 mr-3">
                  <span className="text-xs">✓</span>
                </div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / Not Included */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                {t.included}
              </h2>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                {t.notIncluded}
              </h2>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-600">{day.summary}</p>
                    </div>
                  </div>
                  {expandedDay === day.day ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {expandedDay === day.day && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-700 leading-relaxed">{day.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Extensions */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.extensions}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {extensions.map((ext, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#1e3a5f]">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-1">{ext.title}</h3>
                <p className="text-sm text-gray-500 mb-3 italic">{ext.subtitle}</p>
                <p className="text-gray-700 whitespace-pre-line">{ext.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Dates */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.dates}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {Object.entries(dates).map(([year, months]) => (
              <div key={year} className="mb-8 last:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{year}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(months as Record<string, string>).map(([month, daysList]) => (
                    <div key={month} className="border-l-4 border-[#1e3a5f] pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">{month}</h4>
                      <p className="text-gray-700 text-sm">{daysList}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.importantNotes}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              {importantNotes.map((note, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#1e3a5f] mt-2 mr-4"></span>
                  <p className="text-gray-700">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-gray-100">{t.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13057926760"
              className="inline-flex items-center justify-center bg-white text-[#1e3a5f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.callNow}
            </a>
            <a
              href="https://wa.me/13057926760"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
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
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm defaultSubject={t.title} />
        </div>
      </section>
    </div>
  );
}
