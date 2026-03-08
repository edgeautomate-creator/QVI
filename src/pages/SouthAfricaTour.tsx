import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function SouthAfricaTour() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Featured Package',
      title: 'WONDERS OF SOUTH AFRICA',
      subtitle: 'Experience the wild beauty of Africa',
      duration: '7 Days',
      ref: 'Ref: C 3271',
      category: 'Select Category',
      deposit: 'Starting From',
      depositAmount: '€835',
      priceNote: 'Per person in double occupancy. Contact us for complete pricing details and payment plans.',
      intro: 'Discover the magic of South Africa on this incredible 7-day journey. Experience thrilling safaris in Kruger National Park, explore the stunning landscapes of Mpumalanga, and fall in love with the beauty of Cape Town. From wildlife encounters to breathtaking scenery, this adventure offers the perfect blend of nature, culture, and unforgettable memories.',
      highlights: 'Tour Highlights',
      itinerary: 'Daily Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      optional: 'Optional Excursions',
      importantNotes: 'Important Notes',
      cta: 'Ready to Explore South Africa?',
      ctaText: 'Contact us today to reserve your spot on this incredible African adventure.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information'
    },
    es: {
      featured: 'Paquete Destacado',
      title: 'MARAVILLAS DE SUDÁFRICA',
      subtitle: 'Experimenta la belleza salvaje de África',
      duration: '7 Días',
      ref: 'Ref: C 3271',
      category: 'Categoría Select',
      deposit: 'Desde',
      depositAmount: '€835',
      priceNote: 'Por persona en ocupación doble. Contáctenos para detalles completos de precios y planes de pago.',
      intro: 'Descubre la magia de Sudáfrica en este increíble viaje de 7 días. Experimenta emocionantes safaris en el Parque Nacional Kruger, explora los impresionantes paisajes de Mpumalanga y enamórate de la belleza de Ciudad del Cabo. Desde encuentros con la vida silvestre hasta paisajes impresionantes, esta aventura ofrece la combinación perfecta de naturaleza, cultura y recuerdos inolvidables.',
      highlights: 'Destacados del Tour',
      itinerary: 'Itinerario Diario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      optional: 'Excursiones Opcionales',
      importantNotes: 'Notas Importantes',
      cta: 'Reserva Tu Lugar Ya!',
      ctaText: 'Contáctanos hoy para reservar tu lugar en esta increíble aventura africana.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información'
    }
  };

  const highlightsList = {
    en: [
      'Full-day safari in Kruger National Park in open 4x4 vehicle',
      'Spanish-speaking guide throughout the journey',
      'Visit Bourke\'s Luck Potholes and Blyde River Canyon',
      'Explore Mpumalanga\'s stunning landscapes',
      'Panoramic tour of Pretoria including Union Buildings',
      'Two full days to explore Cape Town at your leisure',
      'Optional Peninsula tour to Cape of Good Hope',
      'Optional visit to penguin colony and Seal Island',
      'Optional Cape Town city tour with Bo Kaap district',
      'Optional wine tasting at historic wineries',
      'Accommodation in select category hotels',
      'Perfect mix of wildlife, nature, and culture'
    ],
    es: [
      'Safari de día completo en el Parque Nacional Kruger en vehículo 4x4 abierto',
      'Guía de habla española durante todo el viaje',
      'Visita a Bourke\'s Luck Potholes y el Cañón del Río Blyde',
      'Explora los impresionantes paisajes de Mpumalanga',
      'Tour panorámico de Pretoria incluyendo los Union Buildings',
      'Dos días completos para explorar Ciudad del Cabo a tu ritmo',
      'Tour opcional de la Península hasta el Cabo de Buena Esperanza',
      'Visita opcional a colonia de pingüinos e Isla de las Focas',
      'Tour opcional de Ciudad del Cabo con el barrio Bo Kaap',
      'Cata de vinos opcional en bodegas históricas',
      'Alojamiento en hoteles categoría select',
      'Mezcla perfecta de vida silvestre, naturaleza y cultura'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'JOHANNESBURG - Gateway to Africa',
        summary: 'Arrival in Johannesburg',
        details: 'Arrival at Johannesburg airport and transfer to hotel with Spanish-speaking guide/driver. Rest of the day at leisure. Accommodation.'
      },
      {
        day: 2,
        title: 'JOHANNESBURG - MPUMALANGA - KRUGER PARK AREA',
        summary: 'Journey through scenic Mpumalanga to Kruger',
        details: 'Breakfast. Departure around 7:00 AM towards Kruger Park, crossing Mpumalanga province and visiting places like Bourke\'s Luck Potholes at the Blyde River Canyon (visits subject to time availability and weather conditions). Arrival at the hotel in the afternoon. Dinner and accommodation.'
      },
      {
        day: 3,
        title: 'KRUGER PARK AREA - Full Day Safari',
        summary: 'Full-day game drive in Kruger National Park',
        details: 'Departure from hotel around 5:30 AM with picnic breakfast for a full-day photographic safari (approximately 8 hours) on the roads of Kruger Park, in open 4x4 vehicle with Spanish-speaking guide. The guide will rotate between different vehicles if there are more than 9 people. Lunch is at leisure, with a stop at one of the camps inside the park where you have the option to eat at a restaurant or cafeteria (within Kruger National Park, it is not allowed to leave the roads). Dinner and accommodation.'
      },
      {
        day: 4,
        title: 'KRUGER AREA - PRETORIA - JOHANNESBURG - CAPE TOWN',
        summary: 'Visit Pretoria, fly to Cape Town',
        details: 'Breakfast. Departure to Johannesburg via Pretoria, where we will conduct a panoramic tour of Pretoria, including Church Square and the Union Buildings (exterior visit, does not include entrance fees). Transfer to Johannesburg-JNB airport and departure on flight to Cape Town-CPT (flight not included, must be booked from 7:00 PM onwards). Arrival and transfer to hotel with Spanish-speaking guide/driver. Accommodation.'
      },
      {
        day: 5,
        title: 'CAPE TOWN - Mother City',
        summary: 'Free day to explore Cape Town',
        details: 'Breakfast. Free day for optional activities. Accommodation. Optional: Full-day Peninsula tour. We will reach the Cape of Good Hope, visiting along the way Seal Island and a penguin colony. Lunch at local restaurant and return to hotel in the afternoon.'
      },
      {
        day: 6,
        title: 'CAPE TOWN - Culture and Wine',
        summary: 'Free day with optional city and wine tour',
        details: 'Breakfast. Free day for optional activities. Accommodation. Optional: Full-day tour of the Mother City, the famous "Bo Kaap" neighborhood and its museums, as well as South Africa\'s oldest wineries, where we will enjoy a wine tasting. Lunch at local restaurant and return to hotel in the afternoon.'
      },
      {
        day: 7,
        title: 'CAPE TOWN - DEPARTURE',
        summary: 'Transfer to airport',
        details: 'Breakfast. Transfer to airport with Spanish-speaking guide/driver. End of journey.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'JOHANNESBURGO - Puerta de África',
        summary: 'Llegada a Johannesburgo',
        details: 'Llegada al aeropuerto de Johannesburgo y traslado al hotel con un guía/conductor de habla española. Resto del día libre. Alojamiento.'
      },
      {
        day: 2,
        title: 'JOHANNESBURGO - MPUMALANGA - ÁREA DEL PARQUE KRUGER',
        summary: 'Viaje a través de la pintoresca Mpumalanga hacia Kruger',
        details: 'Desayuno. Salida sobre las 07:00 hrs hacia el Parque Kruger atravesando la provincia de Mpumalanga y visitando lugares como Bourke\'s Luck Potholes en el Cañón del río Blyde (visitas sujetas a disponibilidad de tiempo y condiciones meteorológicas). Llegada por la tarde al hotel. Cena y alojamiento.'
      },
      {
        day: 3,
        title: 'ÁREA DEL PARQUE KRUGER - Safari de Día Completo',
        summary: 'Safari fotográfico de día completo en el Parque Nacional Kruger',
        details: 'Salida del hotel sobre las 05:30 hrs con desayuno pic-nic para realizar un safari fotográfico de día completo (8 hrs aprox) en las carreteras del Parque Kruger, en vehículo abierto 4x4 con guía de habla castellana. El guía se irá turnando entre los distintos vehículos en caso de haber más de 9 personas. El almuerzo es libre, se parará en uno de los campamentos dentro del parque donde tienen la opción de comer en un restaurante o cafetería (dentro del Parque Nacional Kruger no se permite dejar las carreteras). Cena y alojamiento.'
      },
      {
        day: 4,
        title: 'ÁREA DEL PARQUE KRUGER - PRETORIA - JOHANNESBURGO - CIUDAD DEL CABO',
        summary: 'Visita a Pretoria, vuelo a Ciudad del Cabo',
        details: 'Desayuno. Salida hacia Johannesburgo vía Pretoria, donde realizaremos una visita panorámica de Pretoria, incluyendo el Church Square y la Union Buildings (visita exterior, no incluye entradas). Traslado al aeropuerto de Johannesburgo-JNB y salida en vuelo con destino Ciudad del Cabo-CPT (vuelo no incluido, se debe reservar a partir de las 19:00 hrs). Llegada y traslado al hotel con guía/conductor de habla castellana. Alojamiento.'
      },
      {
        day: 5,
        title: 'CIUDAD DEL CABO - Ciudad Madre',
        summary: 'Día libre para explorar Ciudad del Cabo',
        details: 'Desayuno. Día libre para actividades opcionales. Alojamiento. Opcionalmente ofrecemos: Visita de día completo de la Península. Llegaremos hasta el Cabo de Buena Esperanza, visitando por el camino la Isla de las focas y una colonia de pingüinos. Almuerzo en restaurante local y por la tarde regreso al hotel.'
      },
      {
        day: 6,
        title: 'CIUDAD DEL CABO - Cultura y Vino',
        summary: 'Día libre con tour opcional de ciudad y vinos',
        details: 'Desayuno. Día libre para actividades opcionales. Alojamiento. Opcionalmente ofrecemos: Visita de día completo de la Ciudad Madre, el conocido barrio de "Bo Kaap" y sus museos, así como las bodegas de vinos más antiguas de Sudáfrica, donde realizaremos una cata de vinos. Almuerzo en restaurante local y por la tarde regreso al hotel.'
      },
      {
        day: 7,
        title: 'CIUDAD DEL CABO - SALIDA',
        summary: 'Traslado al aeropuerto',
        details: 'Desayuno. Traslado al aeropuerto con guía/conductor de habla española. Fin del viaje.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Accommodation in Select category hotels',
      'Daily breakfast',
      '2 dinners (days 2 and 3)',
      'Airport transfers with Spanish-speaking guide/driver',
      'Full-day safari in Kruger Park in open 4x4 vehicle',
      'Spanish-speaking guide throughout the tour',
      'Panoramic tour of Pretoria',
      'Visit to Bourke\'s Luck Potholes and Blyde River Canyon',
      'All transfers and transportation as per itinerary',
      'Travel insurance'
    ],
    es: [
      'Alojamiento en hoteles categoría Select',
      'Desayuno diario',
      '2 cenas (días 2 y 3)',
      'Traslados aeropuerto con guía/conductor de habla española',
      'Safari de día completo en el Parque Kruger en vehículo 4x4 abierto',
      'Guía de habla española durante todo el recorrido',
      'Visita panorámica de Pretoria',
      'Visita a Bourke\'s Luck Potholes y Cañón del Río Blyde',
      'Todos los traslados y transporte según itinerario',
      'Seguro de viaje'
    ]
  };

  const notIncludedItems = {
    en: [
      'International flights',
      'Domestic flight Johannesburg to Cape Town (must be booked from 7:00 PM)',
      'Meals not specified in the itinerary',
      'Optional excursions',
      'Tips for guides and drivers',
      'Personal expenses',
      'Any service not specified in "What\'s Included"'
    ],
    es: [
      'Vuelos internacionales',
      'Vuelo doméstico Johannesburgo a Ciudad del Cabo (debe reservarse a partir de las 19:00 hrs)',
      'Comidas no especificadas en el itinerario',
      'Excursiones opcionales',
      'Propinas para guías y conductores',
      'Gastos personales',
      'Cualquier servicio no especificado en "Qué Incluye"'
    ]
  };

  const optionalExcursions = {
    en: [
      {
        title: 'Cape Peninsula Full Day Tour',
        description: 'Visit the Cape of Good Hope, Seal Island, and penguin colony. Includes lunch at a local restaurant.'
      },
      {
        title: 'Cape Town City and Wine Tour',
        description: 'Explore the Mother City, Bo Kaap neighborhood, and historic wineries with wine tasting. Includes lunch at a local restaurant.'
      }
    ],
    es: [
      {
        title: 'Tour de Día Completo de la Península del Cabo',
        description: 'Visita al Cabo de Buena Esperanza, Isla de las Focas y colonia de pingüinos. Incluye almuerzo en restaurante local.'
      },
      {
        title: 'Tour de Ciudad del Cabo y Vinos',
        description: 'Explora la Ciudad Madre, el barrio Bo Kaap y bodegas históricas con cata de vinos. Incluye almuerzo en restaurante local.'
      }
    ]
  };

  const importantNotesList = {
    en: [
      'Domestic flight from Johannesburg to Cape Town is NOT included and must be booked from 7:00 PM onwards',
      'Safari departure is very early (5:30 AM) to maximize wildlife viewing opportunities',
      'Within Kruger National Park, it is not permitted to leave the roads',
      'Cape Town days are free for independent exploration or optional excursions',
      'Weather conditions may affect some visits and activities'
    ],
    es: [
      'El vuelo doméstico de Johannesburgo a Ciudad del Cabo NO está incluido y debe reservarse a partir de las 19:00 hrs',
      'La salida del safari es muy temprano (05:30 hrs) para maximizar las oportunidades de avistamiento de fauna',
      'Dentro del Parque Nacional Kruger no se permite dejar las carreteras',
      'Los días en Ciudad del Cabo son libres para exploración independiente o excursiones opcionales',
      'Las condiciones meteorológicas pueden afectar algunas visitas y actividades'
    ]
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const optionalExcursionsList = optionalExcursions[language];
  const importantNotes = importantNotesList[language];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#d4a574] via-[#c89b68] to-[#8b6f47] text-white py-16 md:py-24">
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
                <span>Johannesburg → Cape Town</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              {t.ref} • {t.category}
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
          <h2 className="text-3xl font-bold text-[#8b6f47] mb-8 text-center">
            {t.deposit}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#8b6f47]">
            <div className="text-center mb-6">
              <p className="text-6xl font-bold text-[#8b6f47] mb-4">{t.depositAmount}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {t.priceNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8b6f47] mb-8 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8b6f47] text-white flex items-center justify-center mt-1 mr-3">
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
              <h2 className="text-2xl font-bold text-[#8b6f47] mb-6">
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
              <h2 className="text-2xl font-bold text-[#8b6f47] mb-6">
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
          <h2 className="text-3xl font-bold text-[#8b6f47] mb-8 text-center">
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8b6f47] text-white flex items-center justify-center font-bold">
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
          <h2 className="text-3xl font-bold text-[#8b6f47] mb-8 text-center">
            {t.optional}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {optionalExcursionsList.map((excursion, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#8b6f47]">
                <h3 className="text-xl font-bold text-[#8b6f47] mb-3">{excursion.title}</h3>
                <p className="text-gray-700">{excursion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8b6f47] mb-8 text-center">
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

      <section className="py-12 bg-gradient-to-br from-[#d4a574] to-[#8b6f47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-gray-100">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13057926760"
              className="inline-flex items-center justify-center bg-white text-[#8b6f47] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#8b6f47] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm defaultSubject={t.title} />
        </div>
      </section>
    </div>
  );
}
