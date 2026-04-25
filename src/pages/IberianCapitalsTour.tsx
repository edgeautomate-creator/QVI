import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Phone, Building } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function IberianCapitalsTour() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Featured Tour',
      title: 'IBERIAN CAPITALS',
      subtitle: 'From Madrid to Porto & Lisbon — history, culture and stunning Atlantic landscapes',
      duration: '8 or 9 Days',
      route: 'Madrid → Porto / Lisbon',
      deposit: 'Starting From',
      depositAmount: '€1,300',
      priceNote: 'Per person in double occupancy. Single supplement from €445.',
      intro: 'Discover the most fascinating capitals of the Iberian Peninsula on a journey that combines the grandeur of Madrid, the mysticism of Santiago de Compostela, the medieval charm of Óbidos and Coimbra, and the Atlantic beauty of Lisbon and Porto. A complete route through Spain and Portugal, enriched with a world-renowned wine tasting, a boat ride along the Douro River, and visits to UNESCO-listed monuments.',
      highlights: 'Tour Highlights',
      itinerary: 'Daily Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      dates: 'Available Dates 2026',
      cta: 'Reserve Your Spot Today',
      ctaText: 'Contact us to book your place on this unforgettable journey through the Iberian Peninsula.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      extensions: 'Optional Extension',
      extensionTitle: '9-Day Extension: Lisbon Finale',
      extensionDesc: 'Instead of ending in Porto, continue to Aveiro (the "Venice of Portugal"), visit the Sanctuary of Fátima, and finish with a free morning in Lisbon before transfer to the airport. Price from €1,430 per person in double occupancy (single supplement €490).',
      hotels: 'Planned Hotels',
      importantNotes: 'Important Notes',
      pricing8: '8-Day Route (Madrid/Porto)',
      pricing9: '9-Day Route (Madrid/Lisbon)',
      priceDbl: 'Double per person',
      priceSgl: 'Single supplement',
      valueAdded: 'Value-Added Services: €115'
    },
    es: {
      featured: 'Tour Destacado',
      title: 'CAPITALES IBÉRICAS',
      subtitle: 'De Madrid a Oporto y Lisboa — historia, cultura y paisajes atlánticos',
      duration: '8 o 9 Días',
      route: 'Madrid → Oporto / Lisboa',
      deposit: 'Desde',
      depositAmount: '€1.300',
      priceNote: 'Por persona en habitación doble. Suplemento individual desde €445.',
      intro: 'Descubra las capitales más fascinantes de la Península Ibérica en un recorrido que combina la grandeza de Madrid, el misticismo de Santiago de Compostela, el encanto medieval de Óbidos y Coimbra, y la belleza atlántica de Lisboa y Oporto. Una ruta completa por España y Portugal, enriquecida con una cata de vino de fama mundial, un paseo en barco por el río Duero y visitas a monumentos declarados Patrimonio de la Humanidad.',
      highlights: 'Destacados del Tour',
      itinerary: 'Itinerario Diario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      dates: 'Fechas Disponibles 2026',
      cta: '¡Reserve Su Lugar Hoy!',
      ctaText: 'Contáctenos para reservar su lugar en este inolvidable viaje por la Península Ibérica.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información',
      extensions: 'Extensión Opcional',
      extensionTitle: 'Extensión 9 Días: Final en Lisboa',
      extensionDesc: 'En lugar de terminar en Oporto, continúe hasta Aveiro (la "Venecia de Portugal"), visite el Santuario de Fátima y termine con una mañana libre en Lisboa antes del traslado al aeropuerto. Precio desde €1.430 por persona en doble (suplemento individual €490).',
      hotels: 'Hoteles Previstos',
      importantNotes: 'Notas Importantes',
      pricing8: 'Recorrido 8 días (Madrid/Oporto)',
      pricing9: 'Recorrido 9 días (Madrid/Lisboa)',
      priceDbl: 'Doble por persona',
      priceSgl: 'Suplemento individual',
      valueAdded: 'Servicios de Valor Añadido: €115'
    }
  };

  const highlightsList = {
    en: [
      'Panoramic tour of Madrid: Royal Palace, Museo del Prado, Puerta del Sol, and Gran Vía',
      'Guided visit to Santiago de Compostela Cathedral on the famous Plaza del Obradoiro',
      'Return via Ponte de Lima, one of Portugal\'s most beautiful medieval bridges',
      'Panoramic visit to Braga and the Bom Jesus do Monte Sanctuary',
      'Interior visit to the Palace of the Dukes of Bragança in Guimarães',
      'Walking tour of Guimarães historic city center (UNESCO World Heritage)',
      'Guided visit to the ancient University of Coimbra (UNESCO World Heritage)',
      'Stroll through Óbidos, a charming walled medieval village',
      'Guided tour of Porto: Palácio da Bolsa with its stunning Arab Room',
      'Boat ride along the Douro River in Porto',
      'Visit to a renowned Porto wine cellar with tasting included',
      'Panoramic tour of Lisbon: Torre de Belém, Jerónimos Monastery, Belém district',
      'Coastal excursion through Cascais, Estoril, and the Portuguese Riviera',
      'Optional typical dinner with Portuguese popular music (fado)'
    ],
    es: [
      'Tour panorámico de Madrid: Palacio Real, Museo del Prado, Puerta del Sol y Gran Vía',
      'Visita guiada a la Catedral de Santiago de Compostela en la famosa Plaza del Obradoiro',
      'Regreso por Ponte de Lima, uno de los puentes medievales más bellos de Portugal',
      'Visita panorámica de Braga y el Santuario do Bom Jesús do Monte',
      'Visita al interior del Palacio de los Duques de Bragança en Guimarães',
      'Recorrido a pie por el centro histórico de Guimarães (Patrimonio de la Humanidad)',
      'Visita guiada a la antigua y prestigiosa Universidad de Coimbra (Patrimonio UNESCO)',
      'Paseo por Óbidos, encantadora villa medieval amurallada',
      'Visita guiada a Oporto: Palacio de la Bolsa con su magnífico Salón Árabe',
      'Paseo en barco por el río Duero en Oporto',
      'Visita a unas famosas bodegas de vino de Oporto con cata incluida',
      'Tour panorámico de Lisboa: Torre de Belém, Monasterio de los Jerónimos, Belém',
      'Excursión costera por Cascáis, Estoril y la Riviera portuguesa',
      'Cena típica opcional con música popular portuguesa (fado)'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'MADRID - Gateway to the Peninsula',
        summary: 'Arrival in Madrid, welcome meeting',
        details: 'Arrival at Madrid airport and transfer to hotel. Accommodation. At 7:30 PM, meeting with the tour guide at the hotel reception to meet fellow travelers.'
      },
      {
        day: 2,
        title: 'MADRID - LISBON - Through Extremadura and Alentejo',
        summary: 'Panoramic tour of Madrid, departure to Lisbon',
        details: 'Breakfast. Panoramic tour of Madrid: Royal Palace, Museo del Prado, Museo Thyssen, Paseo de la Castellana, Plaza de Castilla (exteriors). Free time to stroll through Plaza Mayor, Puerta del Sol, and Gran Vía. Departure crossing Spanish Extremadura and the Alentejo region of Portugal to arrive in Lisbon. Accommodation.'
      },
      {
        day: 3,
        title: 'LISBON - SINTRA - LISBON - Palaces and Atlantic Coast',
        summary: 'Excursion to Sintra, Cascais, Estoril, and Lisbon panoramic tour',
        details: 'Breakfast. Departure to Sintra for free time. Panoramic tour of the Costa del Sol through Cascais and Estoril, returning via the Portuguese Riviera to Lisbon. Panoramic tour of the city: Torre de Belém, Jerónimos Monastery with time to try the famous Belém pastries (optional). Return to hotel. Accommodation.'
      },
      {
        day: 4,
        title: 'LISBON - ÓBIDOS - COIMBRA - BRAGA - Medieval Charm',
        summary: 'Visit Óbidos, panoramic Coimbra, University visit, arrival in Braga',
        details: 'Breakfast. Departure to visit Óbidos, a charming walled medieval village. Continue to the historic city of Coimbra for a panoramic tour: Mondego River, Santa Clara convents, the Old Cathedral, and the Church of Santa Cruz. Guided visit to the ancient and prestigious University of Coimbra. Continue to Braga, city of archbishops and capital of the Minho region. Accommodation.'
      },
      {
        day: 5,
        title: 'BRAGA - SANTIAGO DE COMPOSTELA - BRAGA - The Pilgrim\'s Path',
        summary: 'Guided visit to Santiago de Compostela Cathedral and Obradoiro Square',
        details: 'Breakfast. Departure to Santiago de Compostela. Guided visit with a local guide to the historic, tourist, and religious city center, highlighting the Cathedral located on the Plaza del Obradoiro, where countless pilgrims from the famous "Caminos de Santiago" arrive daily. Return to Braga via Ponte de Lima with time for shopping. Arrival and accommodation.'
      },
      {
        day: 6,
        title: 'BRAGA - GUIMARÃES - PORTO - Cradle of Portugal',
        summary: 'Bom Jesus Sanctuary, Guimarães Palace, Port wine tasting, arrival in Porto',
        details: 'Breakfast. Panoramic visit of Braga: exterior of Portugal\'s oldest Cathedral and visit to the Bom Jesus do Monte Sanctuary. Continue to Guimarães to visit the interior of the Palace of the Dukes of Bragança and take a walking tour of the historic city center with free time for shopping. Departure to Porto with a visit to a renowned wine cellar and a tasting of the famous Port wine included. Arrival at the hotel. Accommodation.'
      },
      {
        day: 7,
        title: 'PORTO - Pearl of the Douro',
        summary: 'Panoramic tour, Palácio da Bolsa, Douro River boat ride, free afternoon',
        details: 'Breakfast. Day dedicated to Portugal\'s second largest city. Panoramic tour of Porto, Gaia, and the Douro River. Visit to the Palácio da Bolsa, with its magnificent Arab Room. Boat ride along the Douro River. Free afternoon for personal visits or shopping. Accommodation. In the evening, we suggest an optional typical dinner with Portuguese popular music.'
      },
      {
        day: 8,
        title: 'PORTO - DEPARTURE - Farewell',
        summary: 'Breakfast, free time, transfer to airport',
        details: 'Breakfast and free time until transfer to the airport. End of our services. (For guests on the 9-day extension, the itinerary continues -- see below.)'
      }
    ],
    es: [
      {
        day: 1,
        title: 'MADRID - Puerta de la Península',
        summary: 'Llegada a Madrid, reunión de bienvenida',
        details: 'Llegada al aeropuerto de Madrid y traslado al hotel. Alojamiento. A las 19.30 hrs, reunión con el guía en la recepción del hotel donde conoceremos al resto de los participantes.'
      },
      {
        day: 2,
        title: 'MADRID – LISBOA - Por Extremadura y el Alentejo',
        summary: 'Visita panorámica de Madrid, salida hacia Lisboa',
        details: 'Desayuno. Visita panorámica de Madrid conociendo exteriormente: Palacio Real, Museo del Prado, Museo Thyssen, Paseo de la Castellana, Plaza de Castilla. Tiempo libre para pasear por la Plaza Mayor, Puerta del Sol y Gran Vía. Salida cruzando la Extremadura española y la región del Alentejo en Portugal hasta llegar a Lisboa. Alojamiento.'
      },
      {
        day: 3,
        title: 'LISBOA – SINTRA – LISBOA - Palacios y Costa Atlántica',
        summary: 'Excursión a Sintra, Cascáis, Estoril y tour panorámico de Lisboa',
        details: 'Desayuno. Salida hacia Sintra. Tiempo libre y a continuación visita panorámica de la Costa del Sol por Cascáis y Estoril regresando por la Riviera portuguesa a Lisboa. Llegada y visita panorámica de la ciudad conociendo el exterior de los principales monumentos como la Torre de Belém, Monasterio de los Jerónimos con tiempo para degustar los famosos pasteles de Belém (opcionalmente). Regreso al hotel. Alojamiento.'
      },
      {
        day: 4,
        title: 'LISBOA – ÓBIDOS – COIMBRA – BRAGA - Encanto Medieval',
        summary: 'Visita a Óbidos, Coimbra panorámica, Universidad, llegada a Braga',
        details: 'Desayuno. Salida para visita a Óbidos, encantadora villa medieval amurallada. Continuamos hacia la histórica y monumental ciudad de Coimbra con visita panorámica para observar el río Mondego, los conventos de Santa Clara, la Catedral vieja y la Iglesia de Santa Cruz entre muchos otros puntos turísticos. Visita a la antigua y prestigiosa Universidad de Coimbra. Continuación a Braga, ciudad de los arzobispos y capital del Miño. Alojamiento.'
      },
      {
        day: 5,
        title: 'BRAGA – SANTIAGO DE COMPOSTELA – BRAGA - El Camino del Peregrino',
        summary: 'Visita guiada a la Catedral de Santiago y la Plaza del Obradoiro',
        details: 'Desayuno. Salida a Santiago de Compostela. Visita con guía local al centro histórico, turístico y religioso, destacando su Catedral ubicada en la Plaza del Obradoiro, donde llegan diariamente numerosos peregrinos de los famosos "Caminos de Santiago". Regreso a Braga por Ponte de Lima con tiempo para compras. Llegada y alojamiento.'
      },
      {
        day: 6,
        title: 'BRAGA – GUIMARÃES – OPORTO - Cuna de Portugal',
        summary: 'Santuario Bom Jesús, Palacio Duques de Bragança, cata de vino de Oporto',
        details: 'Desayuno. Visita panorámica de la ciudad destacando el exterior de la Catedral más antigua de Portugal y visita al Santuario do Bom Jesús. Continuación a Guimarães para visitar el interior del Palacio de los Duques de Bragança y hacer un recorrido a pie por el centro histórico de la ciudad con tiempo libre para compras. Salida hacia Oporto con visita en ruta a unas bodegas con cata del famoso Vino de Oporto incluida. Llegada al hotel y alojamiento.'
      },
      {
        day: 7,
        title: 'OPORTO - Perla del Duero',
        summary: 'Tour panorámico, Palacio de la Bolsa, paseo en barco por el Duero, tarde libre',
        details: 'Desayuno. Día dedicado a la segunda ciudad más grande de Portugal. Visita panorámica de la ciudad, Gaia y el río Duero. Visita al Palacio de la Bolsa, destacando su magnífico Salón Árabe. Paseo en barco por el río Duero. Tarde libre para visitas o compras a gusto personal. Alojamiento. Por la noche, sugerimos opcionalmente, cena típica con música popular portuguesa.'
      },
      {
        day: 8,
        title: 'OPORTO – CIUDAD DE ORIGEN - Despedida',
        summary: 'Desayuno, tiempo libre, traslado al aeropuerto',
        details: 'Desayuno y tiempo libre hasta la hora del traslado al aeropuerto. Fin de nuestros servicios. (Para los clientes de la extensión de 9 días, el itinerario continúa — ver a continuación.)'
      }
    ]
  };

  const extensionDays = {
    en: [
      {
        day: '8★',
        title: 'PORTO - AVEIRO - FÁTIMA - LISBON',
        summary: 'Aveiro canals, Fátima Sanctuary, return to Lisbon',
        details: 'Breakfast. Departure to Aveiro, the fantastic city of canals and the delicious "ovos-moles" (regional sweets). Continue to Fátima to visit the Sanctuary, the small Chapel of the Apparitions, and the Basilica where the tombs of Lucia, Francisco, and Jacinta are found. Time for religious visits and shopping. Return to Lisbon. Accommodation.'
      },
      {
        day: '9★',
        title: 'LISBON - DEPARTURE',
        summary: 'Free morning, transfer to airport',
        details: 'Breakfast and free time until transfer to the airport. End of our services.'
      }
    ],
    es: [
      {
        day: '8★',
        title: 'OPORTO – AVEIRO – FÁTIMA – LISBOA',
        summary: 'Canales de Aveiro, Santuario de Fátima, regreso a Lisboa',
        details: 'Desayuno. Salida para Aveiro, la fantástica ciudad de los canales y los deliciosos "ovos-moles", apreciados dulces regionales. Continuación a Fátima con visita al Santuario, la pequeña Capilla de las Apariciones y la Basílica donde se encuentran las tumbas de Lucía, Francisco y Jacinta. Tiempo para citas religiosas y compras. Regreso a Lisboa. Alojamiento.'
      },
      {
        day: '9★',
        title: 'LISBOA – CIUDAD DE ORIGEN',
        summary: 'Mañana libre, traslado al aeropuerto',
        details: 'Desayuno y tiempo libre hasta la hora del traslado al aeropuerto. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Transport by coach with bilingual guide (Portuguese-Spanish)',
      'Arrival and departure transfers',
      'Accommodation in planned hotels with breakfast included',
      'Guided city tours in Madrid (day 2), Santiago de Compostela (day 5), and Porto (day 7)',
      'Excursion to Lisbon, Estoril, Cascais, and Sintra with local guide (day 3)',
      'Visit to the University of Coimbra (day 4)',
      'Visit to a renowned Porto wine cellar with tasting (day 6)',
      'Visit to the Ducal Palace in Guimarães (day 6)',
      'Visit to the Palácio da Bolsa in Porto (day 7)',
      'Boat ride along the Douro River (day 7)',
      'Hotel taxes',
      'Note: Local guided visits may be in Portuguese only; bilingual guide assists with translation'
    ],
    es: [
      'Transporte en bus con guía acompañante (bilingüe Portugués-Español)',
      'Traslados de llegada y salida',
      'Alojamiento en los hoteles previstos o similares con desayuno incluido',
      'Visitas guiadas en: Madrid (día 2), Santiago de Compostela (día 5) y Oporto (día 7)',
      'Excursión Lisboa, Estoril, Cascais y Sintra con guía local (día 3)',
      'Visita a la Universidad de Coímbra (día 4)',
      'Visita a unas famosas bodegas de vino en Oporto con cata (día 6)',
      'Visita al Palacio Ducal en Guimarães (día 6)',
      'Visita al Palacio de la Bolsa en Oporto (día 7)',
      'Paseo en barco por el río Duero (día 7)',
      'Tasas hoteleras',
      'Nota: Las visitas con guía local pueden ser solo en idioma portugués. Guía acompañante ayuda con la traducción'
    ]
  };

  const notIncludedItems = {
    en: [
      'Cancellation and luggage insurance',
      'Optional excursions',
      'Transfers not specified in the program',
      'Tips for drivers and guides',
      'Any service not listed in "Price Includes"'
    ],
    es: [
      'Seguro de anulación/equipajes',
      'Excursiones opcionales o facultativas',
      'Traslados no especificados en el programa',
      'Propinas para conductores y guías',
      'Cualquier servicio no especificado en "El precio incluye"'
    ]
  };

  const availableDates = {
    en: {
      '2026': {
        'April': '26',
        'May': '10, 24, 31',
        'June': '14, 28',
        'July': '12, 26',
        'August': '09, 23',
        'September': '06, 20, 27',
        'October': '11, 25',
        'November': '08'
      }
    },
    es: {
      '2026': {
        'Abril': '26',
        'Mayo': '10, 24, 31',
        'Junio': '14, 28',
        'Julio': '12, 26',
        'Agosto': '09, 23',
        'Septiembre': '06, 20, 27',
        'Octubre': '11, 25',
        'Noviembre': '08'
      }
    }
  };

  const hotels = [
    {
      city: language === 'es' ? 'Madrid' : 'Madrid',
      hotel: 'Exe Plaza **** / Exe Moncloa ****',
      location: language === 'es' ? 'Ciudad' : 'City'
    },
    {
      city: language === 'es' ? 'Lisboa' : 'Lisbon',
      hotel: 'Roma ***',
      location: language === 'es' ? 'Ciudad' : 'City'
    },
    {
      city: 'Braga',
      hotel: 'Mercure Braga Centro ****',
      location: language === 'es' ? 'Centro' : 'Center'
    },
    {
      city: language === 'es' ? 'Oporto' : 'Porto',
      hotel: 'Vila Galé Porto **** / Holiday Inn Porto Gaia ****',
      location: language === 'es' ? 'Centro / Gaia' : 'Center / Gaia'
    }
  ];

  const importantNotesList = {
    en: [
      'Access to the Palácio da Bolsa is limited. If a visit is not possible, it will be replaced by the Romantic Museum of Porto.',
      'There are traffic restrictions in Porto city center; the panoramic tour will be adjusted to local authority limitations in effect throughout the season.',
      'Due to trade fairs, conferences, or special events, hotels may be substituted with another of the same category, including in a different location.',
      'Departure dates listed are for the standard 8-day route (Madrid/Porto). The same dates apply for the 9-day Lisbon extension.'
    ],
    es: [
      'La visita al Palacio de la Bolsa tiene accesos limitados. En el caso de no ser posible esta visita se sustituirá por el Museo Romántico de Oporto.',
      'Existen restricciones al tráfico en el centro de Oporto, por lo que la vista panorámica de la ciudad se ajustará a las limitaciones que informará el ayuntamiento local durante toda la temporada.',
      'Debido a la celebración de ferias y congresos, o algún evento especial, podemos sustituir alguno de los hoteles previstos por otro de la misma categoría, incluso en localización diferente.',
      'Las fechas de inicio indicadas corresponden al recorrido estándar de 8 días (Madrid/Oporto). Las mismas fechas aplican para la extensión de 9 días a Lisboa.'
    ]
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const extDays = extensionDays[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
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
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg mb-4">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-white mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-white mr-2" />
                <span>{t.route}</span>
              </div>
            </div>
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
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#1e3a5f]">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">{t.pricing8}</h3>
              <p className="text-5xl font-bold text-[#1e3a5f] mb-2">€1.300</p>
              <p className="text-sm text-gray-500 mb-1">{t.priceDbl}</p>
              <p className="text-base text-gray-700">{t.priceSgl}: <span className="font-semibold">€445</span></p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">{t.pricing9}</h3>
              <p className="text-5xl font-bold text-[#1e3a5f] mb-2">€1.430</p>
              <p className="text-sm text-gray-500 mb-1">{t.priceDbl}</p>
              <p className="text-base text-gray-700">{t.priceSgl}: <span className="font-semibold">€490</span></p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm">{t.valueAdded}</p>
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
                    <span className="text-green-600 mr-2 mt-0.5">✓</span>
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
                    <span className="text-red-600 mr-2 mt-0.5">✗</span>
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

      {/* Optional Extension */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4 text-center">
            {t.extensions}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#1e3a5f] mb-6">
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{t.extensionTitle}</h3>
            <p className="text-gray-700 mb-6">{t.extensionDesc}</p>
            <div className="space-y-4">
              {extDays.map((day, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#1e3a5f]">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {day.day}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900">{day.title}</h4>
                      <p className="text-sm text-gray-500">{day.summary}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 pl-13">{day.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.hotels}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {hotels.map((h, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-5 flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{h.city}</h4>
                  <p className="text-gray-700 text-sm">{h.hotel}</p>
                  <p className="text-gray-400 text-xs mt-1">{h.location}</p>
                </div>
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
          <p className="text-xl mb-8 text-gray-100">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13052740453"
              className="inline-flex items-center justify-center bg-white text-[#1e3a5f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.callNow}
            </a>
            <a
              href="https://wa.me/13052740453"
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
