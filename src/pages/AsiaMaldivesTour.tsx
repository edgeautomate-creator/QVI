import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Phone, Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function AsiaMaldivesTour() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Custom Journey',
      title: 'SINGAPORE, BANGKOK & MALDIVES',
      subtitle: 'Urban culture meets tropical paradise',
      duration: '11 Days',
      ref: 'Ref: C 3333',
      deposit: 'Starting From',
      depositAmount: '$4,845',
      priceNote: 'Per person in double occupancy. Contact us for complete pricing details and payment plans.',
      intro: 'Experience the perfect blend of vibrant Asian cities and paradise islands. Explore Singapore\'s modern marvels, discover Bangkok\'s ancient temples and grand palaces, then relax in the pristine beauty of the Maldives with all-inclusive luxury.',
      highlights: 'Journey Highlights',
      itinerary: 'Daily Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      hotels: 'Accommodations',
      pricing: 'Pricing',
      importantNotes: 'Important Notes',
      cta: 'Ready for Your Dream Journey?',
      ctaText: 'Contact us today to customize this itinerary to your preferences.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      honeymoon: 'Honeymoon Special',
      honeymoonPerks: 'Room upgrade and welcome amenity upon arrival (subject to availability)',
      dailyDepartures: 'Daily Departures Available',
      season: 'Season'
    },
    es: {
      featured: 'Viaje a tu Medida',
      title: 'SINGAPUR, BANGKOK Y MALDIVAS',
      subtitle: 'Cultura urbana se encuentra con el paraíso tropical',
      duration: '11 Días',
      ref: 'Ref: C 3333',
      deposit: 'Desde',
      depositAmount: '$4,845',
      priceNote: 'Por persona en ocupación doble. Contáctenos para detalles completos de precios y planes de pago.',
      intro: 'Experimenta la combinación perfecta de vibrantes ciudades asiáticas e islas paradisíacas. Explora las maravillas modernas de Singapur, descubre los antiguos templos y grandes palacios de Bangkok, luego relájate en la prístina belleza de las Maldivas con lujo todo incluido.',
      highlights: 'Destacados del Viaje',
      itinerary: 'Itinerario Diario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      hotels: 'Alojamientos',
      pricing: 'Precios',
      importantNotes: 'Notas Importantes',
      cta: 'Reserva Tu Lugar Ya!',
      ctaText: 'Contáctanos hoy para personalizar este itinerario según tus preferencias.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información',
      honeymoon: 'Especial Novios',
      honeymoonPerks: 'Upgrade de habitación y detalle de bienvenida a la llegada (sujeto a disponibilidad)',
      dailyDepartures: 'Salidas Diarias Disponibles',
      season: 'Temporada'
    }
  };

  const highlightsList = {
    en: [
      'Daily departures from April 2026 to March 2027',
      'Visit Singapore\'s iconic Merlion Park with Marina Bay views',
      'Explore Thian Hock Keng Temple, one of Singapore\'s oldest Buddhist temples',
      'Walk through Singapore\'s vibrant Chinatown',
      'Access Sands Sky Park, an engineering marvel',
      'Discover Bangkok\'s Grand Palace with exquisite Thai Renaissance decoration',
      'See the Golden Buddha at Wat Traimit (5 tons of solid gold)',
      'Visit Wat Pho\'s Reclining Buddha (46 meters long)',
      'Explore Wat Phra Kaew, the Emerald Buddha Temple',
      'Experience Bangkok\'s bustling Chinatown district',
      '4 nights in Maldives with all-inclusive luxury',
      'Hydroplane transfers in the Maldives',
      'Stays in 4-5 star accommodations throughout',
      'Spanish-speaking guides in Singapore and Bangkok',
      'Perfect for honeymoons with special upgrades available'
    ],
    es: [
      'Salidas diarias del 1 de Abril, 2026 al 31 de Marzo, 2027',
      'Visita al icónico Parque Merlion de Singapur con vistas a Marina Bay',
      'Explora el Templo Thian Hock Keng, uno de los templos budistas más antiguos de Singapur',
      'Pasea por el vibrante barrio de Chinatown en Singapur',
      'Acceso al Sands Sky Park, una maravilla de la ingeniería',
      'Descubre el Gran Palacio de Bangkok con exquisita decoración renacentista tailandesa',
      'Ve el Buda de Oro en Wat Traimit (5 toneladas de oro macizo)',
      'Visita el Buda Reclinado de Wat Pho (46 metros de longitud)',
      'Explora Wat Phra Kaew, el Templo del Buda de Esmeralda',
      'Experimenta el bullicioso barrio de Chinatown en Bangkok',
      '4 noches en Maldivas con lujo todo incluido',
      'Traslados en hidroavión en las Maldivas',
      'Alojamiento en hoteles de 4-5 estrellas durante todo el viaje',
      'Guías de habla española en Singapur y Bangkok',
      'Perfecto para luna de miel con mejoras especiales disponibles'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'SINGAPORE - Arrival',
        summary: 'Arrival and transfer to hotel',
        details: 'Arrival and transfer to hotel. Accommodation. (Rooms available from 2:00 PM).'
      },
      {
        day: 2,
        title: 'SINGAPORE - The Garden City',
        summary: 'Full city tour with iconic landmarks',
        details: 'Breakfast. City tour passing around the Civic District, Padang, Cricket Club, Parliament House, Supreme Court, and City Hall. Next, we will make a stop at Merlion Park while enjoying the breathtaking views of Marina Bay. At Merlion Park, we find a mythological creature that is half lion and half fish. We will visit Thian Hock Keng Temple, one of Singapore\'s oldest Buddhist temples. Walking tour of Chinatown. Finally, visit to Sands Sky Park, an impressive marvel of engineering. Accommodation.'
      },
      {
        day: 3,
        title: 'SINGAPORE - Free Day',
        summary: 'Day at leisure to explore',
        details: 'Breakfast. Free day at guests\' disposal. Accommodation.'
      },
      {
        day: 4,
        title: 'SINGAPORE - BANGKOK',
        summary: 'Fly to the City of Angels',
        details: 'Breakfast. Transfer to the airport to take the flight (not included). Arrival and transfer to hotel. Accommodation.'
      },
      {
        day: 5,
        title: 'BANGKOK - Temples and Palaces',
        summary: 'Free days with included city tour',
        details: 'Breakfast. Free day in the city. Accommodation. During your stay, you will be informed of the exact day for the "City and Temples Tour with Grand Palace": Departure by bus from the hotel after breakfast for a tour of Bangkok\'s main avenues to reach the bustling Chinatown district where we will make our first stop: Wat Traimit temple, better known as the Golden Buddha Temple, which houses a 5-ton solid gold Buddha image full of history. The next stop will be Wat Pho Temple or the Reclining Buddha Temple, one of the world\'s largest at 46 meters long. Next, the impressive Grand Palace complex, one of the most beautiful in the world for its exquisite decoration mixing traditional Thai style with Renaissance influences. During the Grand Palace visit, we include a visit to Wat Phra Kaew or the Emerald Buddha Temple, the most important in all of Thailand. On the way back to the hotel, visit to the state gemstone factory. NOTE: For the Grand Palace visit, you must wear long pants to the ankles, long-sleeved shirt or to the elbow.'
      },
      {
        day: 6,
        title: 'BANGKOK - City of Angels',
        summary: 'Additional free day to explore',
        details: 'Breakfast. Free day in the city. Accommodation.'
      },
      {
        day: 7,
        title: 'BANGKOK - MALDIVES',
        summary: 'Fly to tropical paradise',
        details: 'Breakfast. Transfer to the airport to take the flight (not included) to Malé. Arrival and transfer to hotel. All-inclusive regime. Accommodation.'
      },
      {
        day: 8,
        title: 'MALDIVES - Paradise Found',
        summary: 'Free days in paradise',
        details: 'Free days at guests\' complete disposal. All-inclusive regime. Accommodation.'
      },
      {
        day: 9,
        title: 'MALDIVES - Island Bliss',
        summary: 'Continued relaxation',
        details: 'Free days at guests\' complete disposal. All-inclusive regime. Accommodation.'
      },
      {
        day: 10,
        title: 'MALDIVES - Tropical Dreams',
        summary: 'Final full day in paradise',
        details: 'Free days at guests\' complete disposal. All-inclusive regime. Accommodation.'
      },
      {
        day: 11,
        title: 'MALDIVES - DEPARTURE',
        summary: 'Transfer to airport',
        details: 'Breakfast. Free time until transfer to airport. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'SINGAPUR - Llegada',
        summary: 'Llegada y traslado al hotel',
        details: 'Llegada y traslado al hotel. Alojamiento. (Habitaciones disponibles a partir de las 14:00h).'
      },
      {
        day: 2,
        title: 'SINGAPUR - La Ciudad Jardín',
        summary: 'Tour completo de la ciudad con lugares icónicos',
        details: 'Desayuno. Visita de la ciudad pasando alrededor del Barrio Cívico, Padang, Cricket Club, Casa del Parlamento, Corte Suprema y Ayuntamiento. A continuación, realizaremos una parada en el Parque Merlion mientras disfrutamos de las impresionantes vistas de Marina Bay. En el Parque Merlion encontramos una criatura mitológica que es mitad león y mitad pez. Visitaremos el Templo de Thian Hock Keng, uno de los templos budistas más antiguos de Singapur. Recorrido a pie por Chinatown. Finalmente, visita al Sands Sky Park, una impresionante maravilla de la ingeniería. Alojamiento.'
      },
      {
        day: 3,
        title: 'SINGAPUR - Día Libre',
        summary: 'Día libre para explorar',
        details: 'Desayuno. Día libre a disposición de los clientes. Alojamiento.'
      },
      {
        day: 4,
        title: 'SINGAPUR - BANGKOK',
        summary: 'Vuelo a la Ciudad de los Ángeles',
        details: 'Desayuno. Traslado al aeropuerto para tomar el vuelo (no incluido). Llegada y traslado al hotel. Alojamiento.'
      },
      {
        day: 5,
        title: 'BANGKOK - Templos y Palacios',
        summary: 'Días libres con tour de ciudad incluido',
        details: 'Desayuno. Días libres en la ciudad. Alojamiento. En destino se le informará del día exacto de la "Visita de la ciudad y sus templos con Gran Palacio": salida en bus del hotel después del desayuno para realizar un recorrido por las principales avenidas de Bangkok hasta llegar al bullicioso barrio de Chinatown donde realizaremos nuestra primera parada: el templo de Wat Traimit, más conocido como Templo del Buda de Oro, que alberga una imagen de Buda de 5 toneladas de oro macizo cargada de historia. La siguiente parada será el Templo de Wat Pho o Templo del Buda Reclinado, uno de los más grandes del mundo con 46 metros de longitud. A continuación, el impresionante complejo del Gran Palacio, uno de los más bellos del mundo por su exquisita decoración mezclando el estilo tradicional tailandés con influencias renacentistas. Durante la visita al Gran Palacio se incluye la visita del Wat Phra Kaew o Templo del Buda de Esmeralda, el más importante de toda Tailandia. De regreso al hotel visita a la fábrica de piedras preciosas estatal. NOTA: Para la visita al Gran Palacio deberán llevar pantalón largo hasta los tobillos, camisa/camiseta de manga larga o hasta el codo.'
      },
      {
        day: 6,
        title: 'BANGKOK - Ciudad de los Ángeles',
        summary: 'Día libre adicional para explorar',
        details: 'Desayuno. Día libre en la ciudad. Alojamiento.'
      },
      {
        day: 7,
        title: 'BANGKOK - MALDIVAS',
        summary: 'Vuelo al paraíso tropical',
        details: 'Desayuno. Traslado al aeropuerto para tomar el vuelo (no incluido) con destino Malé. Llegada y traslado al hotel. Régimen de todo incluido. Alojamiento.'
      },
      {
        day: 8,
        title: 'MALDIVAS - Paraíso Encontrado',
        summary: 'Días libres en el paraíso',
        details: 'Días libres a plena disposición de los clientes. Régimen de todo incluido. Alojamiento.'
      },
      {
        day: 9,
        title: 'MALDIVAS - Felicidad Isleña',
        summary: 'Relajación continua',
        details: 'Días libres a plena disposición de los clientes. Régimen de todo incluido. Alojamiento.'
      },
      {
        day: 10,
        title: 'MALDIVAS - Sueños Tropicales',
        summary: 'Último día completo en el paraíso',
        details: 'Días libres a plena disposición de los clientes. Régimen de todo incluido. Alojamiento.'
      },
      {
        day: 11,
        title: 'MALDIVAS - SALIDA',
        summary: 'Traslado al aeropuerto',
        details: 'Desayuno. Tiempo libre hasta el traslado al aeropuerto. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: {
      singapore: [
        '3 nights with breakfast',
        'Arrival and departure transfers without guide',
        'City tour including Sands Sky Park with Spanish-speaking guide',
        'Travel insurance'
      ],
      bangkok: [
        '3 nights with breakfast',
        'Arrival and departure transfers',
        'City and temples tour with Spanish-speaking guide',
        'Travel insurance'
      ],
      maldives: [
        'Hydroplane arrival and departure transfers',
        '4 nights all-inclusive',
        'Travel insurance'
      ]
    },
    es: {
      singapore: [
        '3 noches en régimen de alojamiento y desayuno',
        'Traslados de llegada y salida sin guía',
        'Visita de la ciudad incluyendo Sands Sky Park con guía de habla española',
        'Seguro de viaje'
      ],
      bangkok: [
        '3 noches en régimen de alojamiento y desayuno',
        'Traslados de llegada y salida',
        'Visita ciudad y templos con guía de habla española',
        'Seguro de viaje'
      ],
      maldives: [
        'Traslados de llegada y salida en hidroavión',
        '4 noches en régimen de todo incluido',
        'Seguro de viaje'
      ]
    }
  };

  const notIncludedItems = {
    en: [
      'Christmas Eve and New Year\'s Eve gala dinners',
      'Visas',
      'Flights Singapore/Bangkok + Bangkok/Malé',
      'Personal expenses, tips',
      'Drinks in Singapore and Bangkok',
      'Any other service not specified in "What\'s Included"',
      'Supplement during holiday periods'
    ],
    es: [
      'Cenas de gala de Navidad y fin de año',
      'Visados',
      'Vuelos Singapur/Bangkok + Bangkok/Malé',
      'Gastos personales, propinas',
      'Bebidas en Singapur y Bangkok',
      'Cualquier otro servicio no especificado en "El Precio Incluye"',
      'Suplemento durante períodos festivos'
    ]
  };

  const hotels = {
    en: {
      firstClass: {
        singapore: 'Orchid Singapore 4*',
        bangkok: 'Holiday Inn 4*',
        maldives: 'Cocoon Maldives 5* (Beach Villa)'
      },
      firstClassSup: {
        singapore: 'Concorde 4* Superior',
        bangkok: 'Pullman G 5*',
        maldives: 'Cocoon Maldives 5* (Beach Villa)'
      }
    },
    es: {
      firstClass: {
        singapore: 'Orchid Singapore 4*',
        bangkok: 'Holiday Inn 4*',
        maldives: 'Cocoon Maldives 5* (Beach Villa)'
      },
      firstClassSup: {
        singapore: 'Concorde 4* Superior',
        bangkok: 'Pullman G 5*',
        maldives: 'Cocoon Maldives 5* (Beach Villa)'
      }
    }
  };

  const pricing = {
    en: {
      firstClass: {
        aprOct: '$4,845',
        novMar: '$5,225'
      },
      firstClassSup: {
        aprOct: '$5,450',
        novMar: '$5,760'
      }
    },
    es: {
      firstClass: {
        aprOct: '$4,845',
        novMar: '$5,225'
      },
      firstClassSup: {
        aprOct: '$5,450',
        novMar: '$5,760'
      }
    }
  };

  const importantNotesList = {
    en: [
      'Flights between Singapore/Bangkok and Bangkok/Maldives are NOT included',
      'For Grand Palace visit, long pants to ankles and long-sleeved shirt required',
      'Hotel rooms available from 2:00 PM on arrival day',
      'Prices not valid during Singapore Formula 1 Grand Prix (Oct 7-11, 2026)',
      'Due to constant price changes in Maldives hotels, prices may vary',
      'Cancellation fees: More than 31 days - no charges; 30 days to tour start - 100% charges',
      'Minimum 2 passengers for guaranteed departures'
    ],
    es: [
      'Los vuelos entre Singapur/Bangkok y Bangkok/Maldivas NO están incluidos',
      'Para la visita al Gran Palacio se requiere pantalón largo hasta los tobillos y camisa de manga larga',
      'Habitaciones disponibles desde las 14:00h el día de llegada',
      'Precios NO válidos durante el Gran Premio de Fórmula 1 en Singapur (07-11/Oct/2026)',
      'Debido a los constantes cambios de precios en hoteles de Maldivas, los precios pueden variar',
      'Gastos de cancelación: Más de 31 días sin gastos; de 30 días al inicio del tour 100% de gastos',
      'Salidas garantizadas con mínimo 2 pasajeros'
    ]
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const hotelInfo = hotels[language];
  const priceInfo = pricing[language];
  const importantNotes = importantNotesList[language];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0a7ea4] via-[#0d9fc9] to-[#14b8a6] text-white py-16 md:py-24">
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
                <span>Singapore → Bangkok → Maldives</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              {t.ref}
            </p>
            <p className="text-sm text-gray-200 font-semibold">
              {t.dailyDepartures}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
            {t.deposit}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#0a7ea4]">
            <div className="text-center mb-6">
              <p className="text-6xl font-bold text-[#0a7ea4] mb-4">{t.depositAmount}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {t.priceNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-300 rounded-xl p-6 mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-pink-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{t.honeymoon}</h3>
            </div>
            <p className="text-center text-gray-700 text-lg">
              {t.honeymoonPerks}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0a7ea4] text-white flex items-center justify-center mt-1 mr-3">
                  <span className="text-xs">✓</span>
                </div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
            {t.included}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Singapore</h3>
              <ul className="space-y-2">
                {included.singapore.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bangkok</h3>
              <ul className="space-y-2">
                {included.bangkok.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maldives</h3>
              <ul className="space-y-2">
                {included.maldives.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.notIncluded}</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a7ea4] text-white flex items-center justify-center font-bold">
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

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
            {t.hotels}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'en' ? 'First Class' : 'Primera Categoría'}</h3>
              <ul className="space-y-3">
                <li className="border-l-4 border-[#0a7ea4] pl-4">
                  <p className="font-semibold text-gray-900">Singapore</p>
                  <p className="text-gray-700">{hotelInfo.firstClass.singapore}</p>
                </li>
                <li className="border-l-4 border-[#0a7ea4] pl-4">
                  <p className="font-semibold text-gray-900">Bangkok</p>
                  <p className="text-gray-700">{hotelInfo.firstClass.bangkok}</p>
                </li>
                <li className="border-l-4 border-[#0a7ea4] pl-4">
                  <p className="font-semibold text-gray-900">Maldives</p>
                  <p className="text-gray-700">{hotelInfo.firstClass.maldives}</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'en' ? 'First Class Superior' : 'Primera Categoría Superior'}</h3>
              <ul className="space-y-3">
                <li className="border-l-4 border-[#14b8a6] pl-4">
                  <p className="font-semibold text-gray-900">Singapore</p>
                  <p className="text-gray-700">{hotelInfo.firstClassSup.singapore}</p>
                </li>
                <li className="border-l-4 border-[#14b8a6] pl-4">
                  <p className="font-semibold text-gray-900">Bangkok</p>
                  <p className="text-gray-700">{hotelInfo.firstClassSup.bangkok}</p>
                </li>
                <li className="border-l-4 border-[#14b8a6] pl-4">
                  <p className="font-semibold text-gray-900">Maldives</p>
                  <p className="text-gray-700">{hotelInfo.firstClassSup.maldives}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-6 border-2 border-[#0a7ea4]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'en' ? 'First Class' : 'Primera Categoría'}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-700 font-semibold">{language === 'en' ? 'Apr-Oct' : 'Abr-Oct'}</span>
                  <span className="text-2xl font-bold text-[#0a7ea4]">{priceInfo.firstClass.aprOct}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{language === 'en' ? 'Nov-Mar' : 'Nov-Mar'}</span>
                  <span className="text-2xl font-bold text-[#0a7ea4]">{priceInfo.firstClass.novMar}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg shadow-lg p-6 border-2 border-[#14b8a6]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'en' ? 'First Class Superior' : 'Primera Categoría Superior'}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-700 font-semibold">{language === 'en' ? 'Apr-Oct' : 'Abr-Oct'}</span>
                  <span className="text-2xl font-bold text-[#14b8a6]">{priceInfo.firstClassSup.aprOct}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{language === 'en' ? 'Nov-Mar' : 'Nov-Mar'}</span>
                  <span className="text-2xl font-bold text-[#14b8a6]">{priceInfo.firstClassSup.novMar}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            {language === 'en' ? 'Per person in double occupancy' : 'Por persona en ocupación doble'}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
            {t.importantNotes}
          </h2>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
            <ul className="space-y-3">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">•</span>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#0a7ea4] to-[#14b8a6] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-gray-100">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13057926760"
              className="inline-flex items-center justify-center bg-white text-[#0a7ea4] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm defaultSubject={t.title} />
        </div>
      </section>
    </div>
  );
}
