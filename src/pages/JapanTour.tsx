import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function JapanTour() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Featured Tour',
      title: 'THE ORIGIN OF THE SUN',
      subtitle: 'Discover the essence of Japan',
      duration: '10 Days',
      ref: 'Ref: C 3057',
      deposit: 'Starting From',
      depositAmount: '$3,640',
      priceNote: 'Per person in double/triple occupancy. Contact us for complete pricing details and payment plans.',
      intro: 'Embark on an unforgettable journey through Japan, from the vibrant streets of Osaka to the serene temples of Kyoto, the historic villages of the Nakasendo Trail, and the majestic beauty of Mount Fuji.',
      highlights: 'Tour Highlights',
      itinerary: 'Daily Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      dates: 'Available Dates',
      cta: 'Ready to Explore Japan?',
      ctaText: 'Contact us today to reserve your spot on this incredible journey through the Land of the Rising Sun.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information'
    },
    es: {
      featured: 'Tour Destacado',
      title: 'EL ORIGEN DEL SOL',
      subtitle: 'Descubre la esencia de Japón',
      duration: '10 Días',
      ref: 'Ref: C 3057',
      deposit: 'Desde',
      depositAmount: '$3,640',
      priceNote: 'Por persona en ocupación doble/triple. Contáctenos para detalles completos de precios y planes de pago.',
      intro: 'Embárquese en un viaje inolvidable por Japón, desde las vibrantes calles de Osaka hasta los serenos templos de Kioto, los pueblos históricos del Camino Nakasendo y la majestuosa belleza del Monte Fuji.',
      highlights: 'Destacados del Tour',
      itinerary: 'Itinerario Diario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      dates: 'Fechas Disponibles',
      cta: 'Reserva Tu Lugar Ya!',
      ctaText: 'Contáctanos hoy para reservar tu lugar en este increíble viaje por la Tierra del Sol Naciente.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información'
    }
  };

  const highlightsList = {
    en: [
      'Visit Osaka Castle and explore the historic fortress',
      'Discover Nara\'s Todaiji Temple with its giant Buddha statue',
      'Walk among the Sacred Deer in Nara Park',
      'Explore Kyoto\'s Golden Pavilion (Kinkakuji Temple)',
      'Visit the iconic Fushimi Inari Shrine with its thousands of red torii gates',
      'Experience traditional post towns of Magome and Tsumago',
      'Stay in Takayama and explore ancient streets',
      'Visit the UNESCO World Heritage site of Shirakawago',
      'Relax in a traditional Ryokan with hot springs (onsen)',
      'Cruise on Lake Ashi with views of Mount Fuji',
      'Explore Tokyo\'s Asakusa Temple and Meiji Shrine',
      'Bullet train (Shinkansen) experience',
      'Traditional Japanese tea ceremony option'
    ],
    es: [
      'Visita al Castillo de Osaka y explora la fortaleza histórica',
      'Descubre el Templo Todaiji de Nara con su estatua gigante de Buda',
      'Camina entre los Ciervos Sagrados en el Parque de Nara',
      'Explora el Pabellón Dorado de Kioto (Templo Kinkakuji)',
      'Visita el icónico Santuario Fushimi Inari con sus miles de torii rojos',
      'Experimenta los pueblos de posta tradicionales de Magome y Tsumago',
      'Hospédate en Takayama y explora las calles antiguas',
      'Visita el sitio Patrimonio de la Humanidad de Shirakawago',
      'Relájate en un Ryokan tradicional con aguas termales (onsen)',
      'Crucero por el Lago Ashi con vistas al Monte Fuji',
      'Explora el Templo Asakusa y el Santuario Meiji en Tokio',
      'Experiencia en tren bala (Shinkansen)',
      'Opción de ceremonia del té tradicional japonesa'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'OSAKA',
        summary: 'Arrival at Osaka International Airport, transfer to hotel',
        details: 'Arrival at Osaka/Kansai (or Itami) International Airport. After immigration and customs procedures, reception by Spanish-speaking assistant and transfer to hotel in regular service. Rest of the day at leisure. Accommodation.'
      },
      {
        day: 2,
        title: 'OSAKA - NARA - KYOTO',
        summary: 'Visit Osaka Castle, Nara\'s Todaiji Temple, and Fushimi Inari Shrine',
        details: 'Breakfast and visit to Osaka Castle. Then departure to Nara to discover Todaiji Temple with its enormous Buddha image and the Sacred Deer Park. Lunch. Departure to Kyoto in the afternoon. On the way, we will visit the Fushimi Inari Shinto Shrine. Arrival at hotel. Accommodation.'
      },
      {
        day: 3,
        title: 'KYOTO',
        summary: 'Full day exploring Kyoto\'s temples and gardens',
        details: 'Breakfast. City tour including Nijo Castle, Kinkakuji Temple (Golden Pavilion), and Heian Shrine with entrance to the garden. Lunch, then free time and return to hotel on your own. This afternoon you could optionally attend the tea ceremony. Accommodation.'
      },
      {
        day: 4,
        title: 'KYOTO',
        summary: 'Free day with optional excursion to Hiroshima and Miyajima',
        details: 'Breakfast and free day to take the optional excursion to Hiroshima and Miyajima. Accommodation.'
      },
      {
        day: 5,
        title: 'KYOTO - NAGOYA - MAGOME - TSUMAGO - TAKAYAMA',
        summary: 'Bullet train to Nagoya, visit historic post towns',
        details: 'Luggage will be sent directly to Tokyo hotel. Please prepare hand luggage for the next 2 nights. Breakfast and transfer to station to depart by bullet train to Nagoya. Arrival and visit to the post towns of Magome and Tsumago on the old Nakasendo Highway. In Magome we will take a walk and in Tsumago we will visit "Waki Honjin", an old samurai inn. Departure to Takayama. Arrival and city tour including the old Kami Sannomachi street. Transfer to hotel. Traditional Japanese dinner and accommodation in Luxury and Superior categories. Dinner and accommodation in Standard category.'
      },
      {
        day: 6,
        title: 'TAKAYAMA - SHIRAKAWAGO - NAGOYA - HAKONE',
        summary: 'Visit UNESCO site Shirakawago, transfer to Hakone',
        details: 'Breakfast. Departure to Shirakawago for its visit. We will visit one of the traditional "Gassho-zukuri" houses. Lunch. Transfer to Nagoya station to depart by bullet train to Odawara. Arrival and transfer to Hakone. Dinner and accommodation in Ryokan (Luxury Cat.) or dinner and accommodation in Western-style hotel (Standard and Superior Cat.).'
      },
      {
        day: 7,
        title: 'HAKONE - TOKYO',
        summary: 'Explore Hakone National Park, cruise Lake Ashi',
        details: 'Breakfast and visit to Hakone National Park to see Lake Ashi by mini-cruise (*) and cable car (*) to enjoy the panoramic view of Hakone and Mount Fuji. Lunch. Departure to Tokyo. Arrival and visit to Tokyo Tower. Transfer to hotel. Accommodation. (*) Note: Depending on weather conditions, visits may be substituted by others such as museums and/or temples. Regarding the panoramic view of Mount Fuji, it also depends on the weather. It is very difficult to see Mount Fuji at any time of year and especially in summer because it is usually foggy.'
      },
      {
        day: 8,
        title: 'TOKYO',
        summary: 'Full day Tokyo city tour',
        details: 'Breakfast. City tour including Asakusa Kannon Temple with its Nakamise shopping arcade, Meiji Shrine, and the Ginza district. Lunch, then free time and return to hotel on your own. Accommodation.'
      },
      {
        day: 9,
        title: 'TOKYO',
        summary: 'Free day with optional excursion to Nikko',
        details: 'Breakfast and free day with the opportunity to take an optional excursion to Nikko. Accommodation.'
      },
      {
        day: 10,
        title: 'TOKYO - DEPARTURE',
        summary: 'Transfer to airport for departure',
        details: 'Breakfast. At the indicated time, transfer to Narita (or Haneda) International Airport in regular service with Spanish-speaking assistant. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'OSAKA',
        summary: 'Llegada al Aeropuerto Internacional de Osaka, traslado al hotel',
        details: 'Llegada al aeropuerto Internacional de Osaka/Kansai (o Itami). Después del trámite de inmigración y aduana, recepción por asistente de habla española y traslado al hotel en servicio regular. Resto del día libre. Alojamiento.'
      },
      {
        day: 2,
        title: 'OSAKA - NARA - KIOTO',
        summary: 'Visita al Castillo de Osaka, Templo Todaiji de Nara y Santuario Fushimi Inari',
        details: 'Desayuno y visita del Castillo de Osaka. Después, salida hacia Nara para conocer el Templo Todaji con su enorme imagen de Buda y el Parque de los Ciervos Sagrados. Almuerzo. Salida hacia Kioto por la tarde. En camino, visitaremos el Santuario Shintoísta de Fushimi Inari. Llegada al hotel. Alojamiento.'
      },
      {
        day: 3,
        title: 'KIOTO',
        summary: 'Día completo explorando templos y jardines de Kioto',
        details: 'Desayuno. Visita de la ciudad que incluye el Castillo de Nijo, el Templo Kinkakuji y el Santuario de Heian con entrada al jardín. Almuerzo, y después, tiempo libre y regreso al hotel por cuenta del cliente. Esta tarde podríamos asistir de manera opcional a la ceremonia del té. Alojamiento.'
      },
      {
        day: 4,
        title: 'KIOTO',
        summary: 'Día libre con excursión opcional a Hiroshima y Miyajima',
        details: 'Desayuno y día libre para realizar la excursión opcional a Hiroshima y Miyajima. Alojamiento.'
      },
      {
        day: 5,
        title: 'KIOTO - NAGOYA - MAGOME - TSUMAGO - TAKAYAMA',
        summary: 'Tren bala a Nagoya, visita a pueblos de posta históricos',
        details: 'Las maletas se llevarán directamente al hotel en Tokio. Deben preparar equipaje de mano para las 2 próximas noches. Desayuno y traslado a la estación para salir en tren bala con destino a Nagoya. Llegada y visita de los pueblos de posta, Magome y Tsumago, en la antigua carretera Nakasendo. En Magome daremos un paseo y en Tsumago visitaremos "Waki Honjin", una antigua hospedería de los samuráis. Salida hacia Takayama. Llegada y comienzo de la visita de la ciudad que incluye la calle antigua de Kami Sannomachi. Traslado al hotel. Cena típica japonesa y alojamiento en cat. Lujo y Superior. Cena y alojamiento en cat. Estandar.'
      },
      {
        day: 6,
        title: 'TAKAYAMA - SHIRAKAWAGO - NAGOYA - HAKONE',
        summary: 'Visita al sitio UNESCO de Shirakawago, traslado a Hakone',
        details: 'Desayuno. Salida hacia Shirakawago para su visita. Conoceremos una de las casas tradicionales "Gassho-zukuri". Almuerzo. Traslado a la estación de Nagoya para salir en tren bala con destino Odawara. Llegada y traslado a Hakone. Cena y alojamiento en Ryokan (Cat. Lujo) o cena y alojamiento en hotel tipo occidental (Cat. Estándar y Superior).'
      },
      {
        day: 7,
        title: 'HAKONE - TOKIO',
        summary: 'Exploración del Parque Nacional de Hakone, crucero por el Lago Ashi',
        details: 'Desayuno y visita al parque Nacional de Hakone para conocer el Lago Ashi en minicrucero (*) y el teleférico (*) para disfrutar de la vista panorámica de Hakone y el Monte Fuji. Almuerzo. Salida con destino Tokio. Llegada y visita de la Torre de Tokio. Traslado al hotel. Alojamiento. (*) Nota: Según las condiciones climatológicas, las visitas pueden ser sustituidas por otras como museos y/o templos. Respecto a la vista panorámica del Monte Fuji también dependerá de la meteorología. Es muy difícil ver el Monte Fuji en cualquier época del año y sobre todo en verano porque suele estar nebuloso.'
      },
      {
        day: 8,
        title: 'TOKIO',
        summary: 'Tour completo de la ciudad de Tokio',
        details: 'Desayuno. Visita de la ciudad incluyendo el Templo de Asakusa Kannon con su arcada comercial de Nakamise y el Santuario Meiji y el barrio Ginza. Almuerzo, y después, tiempo libre y regreso al hotel por cuenta del cliente. Alojamiento.'
      },
      {
        day: 9,
        title: 'TOKIO',
        summary: 'Día libre con excursión opcional a Nikko',
        details: 'Desayuno y día libre con la oportunidad de realizar una excursión opcional a Nikko. Alojamiento.'
      },
      {
        day: 10,
        title: 'TOKIO - CIUDAD DE ORIGEN',
        summary: 'Traslado al aeropuerto para salida',
        details: 'Desayuno. A la hora indicada, traslado al aeropuerto Internacional de Narita (o Haneda) en servicio regular con asistente de habla española. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      '9 nights accommodation in the planned hotels or similar',
      'Transfers in regular service with Spanish-speaking assistance',
      '9 breakfasts, 5 lunches and 2 dinners (without drinks)',
      'Bullet Train (Shinkansen) transfers for Kyoto/Nagoya and Nagoya/Odawara routes',
      'Visits according to program by bus, minibus, private car or taxi depending on number of passengers',
      'Spanish-speaking guide/assistant during the tour',
      'Entrance fees to visited monuments',
      'Necessary taxes, highway tolls and parking',
      'Travel insurance'
    ],
    es: [
      '9 noches de alojamiento en los hoteles previstos o similares',
      'Traslados en servicio regular con asistencia de habla española',
      '9 desayunos, 5 almuerzos y 2 cenas (sin bebidas)',
      'Traslados en tren Bala (Shinkansen) para los trayectos Kyoto/Nagoya y Nagoya/Odawara',
      'Visitas según programa en bus, minibús, coche privado o taxi en función del número de pasajeros',
      'Guía/Asistente de habla española durante el circuito',
      'Entradas a los monumentos visitados',
      'Impuestos necesarios, peaje de autopistas y aparcamientos',
      'Seguro de viaje'
    ]
  };

  const notIncludedItems = {
    en: [
      'Visas',
      'Tips for guides and drivers (voluntary)',
      'Drinks with meals',
      'International flights',
      'Optional excursions',
      'Anything not indicated in "What\'s Included"'
    ],
    es: [
      'Visados',
      'Propinas a guías y chóferes (voluntarias)',
      'Bebidas en las comidas',
      'Vuelos internacionales',
      'Excursiones opcionales',
      'En general, todo lo que no esté indicado en "Qué Incluye"'
    ]
  };

  const availableDates = {
    en: {
      '2026': {
        'April': '01, 03, 07, 08, 10, 14, 15, 17, 21, 22, 24, 28, 29',
        'May': '01, 05, 06, 08, 12, 13, 15, 19, 20, 22, 26, 27, 29',
        'June': '02, 03, 09, 10, 16, 17, 23, 24, 30',
        'July': '01, 03, 07, 08, 10, 14, 15, 17, 21, 22, 24, 28, 29, 31',
        'August': '04, 05, 07, 11, 12, 14, 18, 19, 21, 25, 26, 28',
        'September': '01, 02, 04, 08, 09, 11, 15, 16, 18, 22, 23, 25, 29, 30',
        'October': '02, 06, 07, 09, 13, 14, 16, 20, 21, 23, 27, 28, 30',
        'November': '03, 04, 10, 11, 17, 18, 24, 25',
        'December': '01, 08, 15, 22, 29'
      },
      '2027': {
        'January': '05, 12, 19, 26',
        'February': '02, 09, 16, 23',
        'March': '02, 03, 05, 09, 10, 12, 16, 17, 19, 23, 24, 26, 30, 31'
      }
    },
    es: {
      '2026': {
        'Abril': '01, 03, 07, 08, 10, 14, 15, 17, 21, 22, 24, 28, 29',
        'Mayo': '01, 05, 06, 08, 12, 13, 15, 19, 20, 22, 26, 27, 29',
        'Junio': '02, 03, 09, 10, 16, 17, 23, 24, 30',
        'Julio': '01, 03, 07, 08, 10, 14, 15, 17, 21, 22, 24, 28, 29, 31',
        'Agosto': '04, 05, 07, 11, 12, 14, 18, 19, 21, 25, 26, 28',
        'Septiembre': '01, 02, 04, 08, 09, 11, 15, 16, 18, 22, 23, 25, 29, 30',
        'Octubre': '02, 06, 07, 09, 13, 14, 16, 20, 21, 23, 27, 28, 30',
        'Noviembre': '03, 04, 10, 11, 17, 18, 24, 25',
        'Diciembre': '01, 08, 15, 22, 29'
      },
      '2027': {
        'Enero': '05, 12, 19, 26',
        'Febrero': '02, 09, 16, 23',
        'Marzo': '02, 03, 05, 09, 10, 12, 16, 17, 19, 23, 24, 26, 30, 31'
      }
    }
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const dates = availableDates[language];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#c41e3a] via-[#d63447] to-[#c41e3a] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-white text-[#c41e3a] px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
                <span>Osaka → Tokyo</span>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              {t.ref}
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
          <h2 className="text-3xl font-bold text-[#c41e3a] mb-8 text-center">
            {t.deposit}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#c41e3a]">
            <div className="text-center mb-6">
              <p className="text-6xl font-bold text-[#c41e3a] mb-4">{t.depositAmount}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {t.priceNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#c41e3a] mb-8 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c41e3a] text-white flex items-center justify-center mt-1 mr-3">
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
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#c41e3a] mb-6">
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
              <h2 className="text-2xl font-bold text-[#c41e3a] mb-6">
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

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#c41e3a] mb-8 text-center">
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c41e3a] text-white flex items-center justify-center font-bold">
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
          <h2 className="text-3xl font-bold text-[#c41e3a] mb-8 text-center">
            {t.dates}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {Object.entries(dates).map(([year, months]) => (
              <div key={year} className="mb-8 last:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{year}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(months as Record<string, string>).map(([month, days]) => (
                    <div key={month} className="border-l-4 border-[#c41e3a] pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">{month}</h4>
                      <p className="text-gray-700 text-sm">{days}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#c41e3a] to-[#d63447] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-gray-100">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13057926760"
              className="inline-flex items-center justify-center bg-white text-[#c41e3a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#c41e3a] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm defaultSubject={t.title} />
        </div>
      </section>
    </div>
  );
}
