import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function JapanExpressTour() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Classic Circuit',
      title: 'JAPAN EXPRESS',
      subtitle: 'Ancient temples, bullet trains & iconic cities',
      duration: '7 Days',
      ref: 'Ref: C 3058',
      deposit: 'Starting From',
      depositAmount: '$2,835',
      priceNote: 'Per person in double occupancy, standard category. Contact us for complete pricing by category and season.',
      intro: 'Discover the essence of Japan in 7 unforgettable days. From the ancient capital of Osaka and the sacred deer of Nara, through Kyoto\'s golden temples and Shinto shrines, to the dramatic landscapes of Hakone with views of Mount Fuji, culminating in the electric energy of Tokyo.',
      highlights: 'Journey Highlights',
      itinerary: 'Daily Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      hotels: 'Accommodations',
      pricing: 'Pricing',
      dates: 'Departure Dates',
      importantNotes: 'Important Notes',
      cta: 'Ready for Your Japan Adventure?',
      ctaText: 'Contact us today to book your spot or customize your journey.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      guaranteedDep: 'Guaranteed departures with minimum 2 passengers',
      hotelNote: 'Note: In Japan, hotels are not classified by stars as in other countries. The equivalent in stars is approximately 4* for Standard and 4*sup/5* for Superior/Luxury categories.',
      upgradeRyokan: 'Ryokan Upgrade (Hakone)',
      nightOsaka: 'Extra night in Osaka (Pre-tour)',
      nightTokio: 'Extra night in Tokyo (Post-tour)',
      nightFlightArr: 'Night flight supplement (arr. 22:00–06:30h)',
      nightFlightDep: 'Night flight supplement (dep. 01:00–10:30h)',
      perPerson: 'Per person',
      perCar: 'Total per car (1–3 pax)',
      dbl: 'Double/Triple',
      sgl: 'Sgl Suppl.',
      included_na: 'Included',
      not_avail: 'N/A',
    },
    es: {
      featured: 'Circuito Clásico',
      title: 'JAPÓN EXPRESS',
      subtitle: 'Templos milenarios, tren bala y ciudades icónicas',
      duration: '7 Días',
      ref: 'Ref: C 3058',
      deposit: 'Desde',
      depositAmount: '$2,835',
      priceNote: 'Por persona en ocupación doble, categoría estándar. Contáctenos para precios completos por categoría y temporada.',
      intro: 'Descubre la esencia de Japón en 7 días inolvidables. Desde la antigua capital de Osaka y los ciervos sagrados de Nara, pasando por los templos dorados y santuarios sintoístas de Kioto, hasta los paisajes dramáticos de Hakone con vistas al Monte Fuji, culminando en la energía eléctrica de Tokio.',
      highlights: 'Destacados del Viaje',
      itinerary: 'Itinerario Diario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      hotels: 'Alojamientos',
      pricing: 'Precios',
      dates: 'Fechas de Salida',
      importantNotes: 'Notas Importantes',
      cta: '¿Listo para tu Aventura en Japón?',
      ctaText: 'Contáctanos hoy para reservar tu lugar o personalizar tu viaje.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información',
      guaranteedDep: 'Salidas garantizadas con mínimo 2 pasajeros',
      hotelNote: 'Nota: En Japón los hoteles no se clasifican por estrellas como en otros países. La equivalencia en estrellas puede ser 4* para la cat. Estándar y 4*sup/5* para las cat. Superior/Lujo.',
      upgradeRyokan: 'Upgrade a Ryokan (Hakone)',
      nightOsaka: 'Noche extra en Osaka (Pre-tour)',
      nightTokio: 'Noche extra en Tokio (Post-tour)',
      nightFlightArr: 'Supl. vuelos llegando 22:00–06:30h',
      nightFlightDep: 'Supl. vuelos saliendo 01:00–10:30h',
      perPerson: 'Por persona',
      perCar: 'Total por coche (1–3 pax)',
      dbl: 'Doble/Triple',
      sgl: 'Supl. Sgl',
      included_na: 'Incluido',
      not_avail: 'No disp.',
    }
  };

  const highlightsList = {
    en: [
      'Osaka Castle — one of Japan\'s most iconic landmarks',
      'Todaiji Temple and the Sacred Deer Park in Nara',
      'Fushimi Inari Shinto Shrine with its famous torii gates',
      'Kyoto city tour: Nijo Castle, Kinkakuji (Golden Pavilion)',
      'Heian Shinto Shrine in Kyoto',
      'JR "Hikari" Shinkansen bullet train (Kyoto → Odawara)',
      'Hakone National Park: minicruise on Lake Ashi',
      'Cable car ride in Hakone with panoramic views',
      'Panoramic views of Mount Fuji (weather permitting)',
      'Traditional Japanese dinner at a Ryokan (Luxury) or hotel',
      'Meiji Shinto Shrine in Tokyo',
      'Tokyo Tower and surrounding skyline',
      'Asakusa Kannon Temple and Nakamise shopping arcade',
      'Spanish-speaking guides throughout the entire circuit',
      '6 nights accommodation, 6 breakfasts, 4 lunches, 1 dinner'
    ],
    es: [
      'Castillo de Osaka — uno de los monumentos más icónicos de Japón',
      'Templo Todaiji y el Parque de los Ciervos Sagrados en Nara',
      'Santuario Sintoísta de Fushimi Inari con sus famosas puertas torii',
      'Visita de Kioto: Castillo de Nijo, Templo Kinkakuji (Pabellón Dorado)',
      'Santuario Sintoísta de Heian en Kioto',
      'Tren Bala JR "Hikari" clase turista (Kioto → Odawara)',
      'Parque Nacional de Hakone: minicrucero por el Lago Ashi',
      'Subida en teleférico en Hakone con vistas panorámicas',
      'Vistas panorámicas del Monte Fuji (según meteorología)',
      'Cena típica japonesa en Ryokan (Cat. Lujo) u hotel',
      'Santuario Sintoísta de Meiji en Tokio',
      'Torre de Tokio y el skyline de la ciudad',
      'Templo Asakusa Kannon y arcada comercial de Nakamise',
      'Guías de habla española durante todo el circuito',
      '6 noches de alojamiento, 6 desayunos, 4 almuerzos, 1 cena'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'OSAKA — Arrival',
        summary: 'Arrive at Osaka International Airport, transfer to hotel',
        details: 'Arrival at Osaka/Kansai International Airport (or Itami). After immigration and customs formalities, reception by a Spanish-speaking assistant and transfer to the hotel in regular service with assistant. Rest of the day at leisure. Accommodation.'
      },
      {
        day: 2,
        title: 'OSAKA – NARA – KYOTO',
        summary: 'Osaka Castle, sacred deer in Nara, Fushimi Inari in Kyoto',
        details: 'Breakfast and visit to Osaka Castle. Departure to Nara to discover the Todaiji Temple and the Sacred Deer Park. Lunch. In the afternoon, departure to Kyoto. En-route visit to the Fushimi Inari Shinto Shrine. Transfer to hotel. Accommodation.'
      },
      {
        day: 3,
        title: 'KYOTO',
        summary: 'Nijo Castle, Kinkakuji Temple, Heian Shrine',
        details: 'Breakfast. City tour including Nijo Castle, Kinkakuji Temple (Golden Pavilion) and Heian Shinto Shrine (garden entrance not included). Lunch. Free time. Return to hotel at passengers\' own expense. Accommodation.'
      },
      {
        day: 4,
        title: 'KYOTO – HAKONE',
        summary: 'Bullet train to Odawara, Lake Ashi cruise, cable car, Ryokan dinner',
        details: 'Luggage will be transported directly to the hotel in Tokyo. Passengers must prepare a carry-on bag (max. 10kg) for 1 night in Hakone.\n\nBreakfast. Transfer to Kyoto station by public transport with Spanish-speaking assistance. Departure to Odawara on the JR "Hikari" Shinkansen bullet train. Arrival at Odawara. Excursion to Hakone National Park with a Spanish-speaking guide, including a minicruise (*) on Lake Ashi and cable car ride (*). Lunch. Transfer to hotel. Traditional Japanese dinner and accommodation at the Ryokan (Luxury category) or dinner and accommodation at the hotel (Standard or Superior category).\n\n(*) Note: Depending on weather conditions, visits may be substituted by museums and/or temples. The panoramic view of Mount Fuji also depends on the weather. It is very difficult to see Mount Fuji at any time of year, especially in summer when it tends to be overcast.'
      },
      {
        day: 5,
        title: 'HAKONE – TOKYO',
        summary: 'Meiji Shrine, Tokyo Tower, Asakusa Kannon Temple',
        details: 'Breakfast and departure to Tokyo. Guided tour with Spanish-speaking guide to visit the Meiji Shinto Shrine, Tokyo Tower and Asakusa Kannon Temple with its Nakamise shopping arcade. Lunch. Return to hotel. Accommodation.'
      },
      {
        day: 6,
        title: 'TOKYO — Free Day',
        summary: 'Full day at leisure for personal activities',
        details: 'Breakfast. Free day for personal activities. Accommodation.'
      },
      {
        day: 7,
        title: 'TOKYO — DEPARTURE',
        summary: 'Transfer to Narita or Haneda Airport, end of services',
        details: 'Breakfast. Transfer to Narita International Airport (or Haneda) in regular service with Spanish-speaking assistant. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'OSAKA — Llegada',
        summary: 'Llegada al aeropuerto Internacional de Osaka, traslado al hotel',
        details: 'Llegada al aeropuerto Internacional de Osaka/Kansai (o Itami). Tras el trámite de inmigración y aduana, recepción por asistente de habla española y traslado al hotel en servicio regular con asistente. Resto del día libre. Alojamiento.'
      },
      {
        day: 2,
        title: 'OSAKA – NARA – KIOTO',
        summary: 'Castillo de Osaka, ciervos sagrados en Nara, Fushimi Inari en Kioto',
        details: 'Desayuno y visita del Castillo de Osaka. Salida hacia Nara para conocer el Templo Todaiji y el Parque de los Ciervos Sagrados. Almuerzo. Por la tarde, salida hacia Kioto. Visita en ruta del Santuario Sintoísta de Fushimi Inari. Traslado a su hotel. Alojamiento.'
      },
      {
        day: 3,
        title: 'KIOTO',
        summary: 'Castillo de Nijo, Templo Kinkakuji, Santuario de Heian',
        details: 'Desayuno. Visita de la ciudad con el Castillo de Nijo, el Templo Kinkakuji y el Santuario Sintoísta de Heian (sin entrada al jardín). Almuerzo. Tiempo libre. Regreso al hotel por cuenta de los pasajeros. Alojamiento.'
      },
      {
        day: 4,
        title: 'KIOTO – HAKONE',
        summary: 'Tren bala a Odawara, crucero Lago Ashi, teleférico, cena en Ryokan',
        details: 'Las maletas se llevarán directamente al hotel en Tokio. Deben preparar equipaje de mano (máx. 10 kg) para 1 noche en Hakone.\n\nDesayuno. Traslado a la estación de Kioto en transporte público con asistencia de habla española. Salida hacia Odawara en tren bala JR "Hikari". Llegada a Odawara. Excursión al Parque Nacional de Hakone con guía de habla española incluyendo un minicrucero (*) por el Lago Ashi y subida en teleférico (*). Almuerzo. Traslado al hotel. Cena típica japonesa y alojamiento en el Ryokan (Cat. Lujo) o cena y alojamiento en el hotel (Cat. Estándar o Superior).\n\n(*) Nota: Según las condiciones climatológicas, las visitas pueden ser sustituidas por otras como museos y/o templos. Respecto a la vista panorámica del Monte Fuji también dependerá de la meteorología. Es muy difícil ver el Monte Fuji en cualquier época del año y sobre todo en verano porque suele estar nebuloso.'
      },
      {
        day: 5,
        title: 'HAKONE – TOKIO',
        summary: 'Santuario Meiji, Torre de Tokio, Templo Asakusa Kannon',
        details: 'Desayuno y salida hacia Tokio. Visita con guía de habla española para conocer el Santuario Sintoísta de Meiji, La Torre de Tokio y el Templo Asakusa Kannon con su arcada comercial de Nakamise. Almuerzo. Regreso al hotel y alojamiento.'
      },
      {
        day: 6,
        title: 'TOKIO — Día Libre',
        summary: 'Día completo libre para actividades personales',
        details: 'Desayuno. Día libre para actividades personales. Alojamiento.'
      },
      {
        day: 7,
        title: 'TOKIO — SALIDA',
        summary: 'Traslado al aeropuerto de Narita o Haneda, fin de servicios',
        details: 'Desayuno. Traslado al aeropuerto Internacional de Narita (o Haneda) en servicio regular con asistente de habla española. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: {
      osaka: [
        '1 night accommodation',
        'Transfer from airport with Spanish-speaking assistant',
      ],
      kyotoHakone: [
        '2 nights in Kyoto',
        '1 night in Hakone (Ryokan in Luxury / hotel in Std-Sup)',
        'JR "Hikari" Shinkansen bullet train ticket (Kyoto–Odawara), Tourist class',
        'Hakone National Park excursion: Lake Ashi minicruise & cable car',
        'Traditional Japanese dinner in Hakone',
      ],
      tokyo: [
        '2 nights accommodation in Tokyo',
        '6 breakfasts, 4 lunches, 1 dinner (no drinks)',
        'Guided visits per programme (bus, minibus, private car or taxi)',
        'Monument entrance fees included',
        'Spanish-speaking guides throughout (except Shinkansen & free days)',
        'Highway tolls, parking and necessary taxes',
        'Travel insurance',
      ]
    },
    es: {
      osaka: [
        '1 noche de alojamiento',
        'Traslado desde aeropuerto con asistente de habla española',
      ],
      kyotoHakone: [
        '2 noches en Kioto',
        '1 noche en Hakone (Ryokan en Cat. Lujo / hotel en Cat. Std-Sup)',
        'Billete Tren Bala JR "Hikari" clase turista (Kioto–Odawara)',
        'Excursión Parque Nacional de Hakone: minicrucero Lago Ashi y teleférico',
        'Cena típica japonesa en Hakone',
      ],
      tokyo: [
        '2 noches de alojamiento en Tokio',
        '6 desayunos, 4 almuerzos y 1 cena (sin bebidas)',
        'Visitas según programa en bus, minibús, coche privado o taxi',
        'Entradas a los monumentos visitados',
        'Guías de habla española durante todo el recorrido (excepto tren bala y días libres)',
        'Peaje de autopistas, aparcamientos e impuestos necesarios',
        'Seguro de viaje',
      ]
    }
  };

  const notIncludedItems = {
    en: [
      'Visas',
      'Tips for guides and drivers (voluntary)',
      'Drinks with meals',
      'Anything not specified in "Price Includes"',
    ],
    es: [
      'Visados',
      'Propinas a guías y chóferes (voluntarias)',
      'Bebidas en las comidas',
      'En general, todo lo que no esté indicado en "El Precio Incluye"',
    ]
  };

  const hotels = {
    en: {
      standard: {
        osaka: 'Miyako City Osaka Hommachi (23m²) / Monterey Osaka (24m²)',
        kyoto: 'Vischio Kyoto (21m²) / Miyaiko Hachijo (21–26m²)',
        hakone: 'Yumoto Fujiya Hotel – Std (23m²) / Hakone Hotel – Moderate (34m²) / Hakone Kowakien (30m²) / Sengokuhara Prince Hotel (28m²) / Hakone Yutowa (30m²)',
        tokyo: 'Sunshine City Prince – City Floor (20m²) / Monterey Hanzomon (19m²) / Toschi Center (23m²)',
      },
      superior: {
        osaka: 'Voco Osaka Central – Premium (30m²)',
        kyoto: 'Kyoto Century Hotel (30m²)',
        hakone: 'Yumoto Fujiya Hotel (48m²) / Hakone Hotel – Sup (38m²) / Hotel de Yama (30m²) / Sengokuhara Prince – Premium (50m²)',
        tokyo: 'Sunshine City Prince – Sunshine Floor (29m²) / Tokyo Dome (33m²)',
      },
      luxury: {
        osaka: 'Voco Osaka Central – Grand (36m²)',
        kyoto: 'The Thousand Kyoto (37m²)',
        hakone: 'Ryuguden (Japanese-style room)',
        tokyo: 'Sunshine City Prince – Sunshine Floor (37m²) / Tokyo Dome – Executive Suites (51–66m²)',
      }
    },
    es: {
      standard: {
        osaka: 'Miyako City Osaka Hommachi (23m²) / Monterey Osaka (24m²)',
        kyoto: 'Vischio Kyoto (21m²) / Miyaiko Hachijo (21–26m²)',
        hakone: 'Yumoto Fujiya Hotel – Std (23m²) / Hakone Hotel – Moderate (34m²) / Hakone Kowakien (30m²) / Sengokuhara Prince Hotel (28m²) / Hakone Yutowa (30m²)',
        tokyo: 'Sunshine City Prince – Planta City (20m²) / Monterey Hanzomon (19m²) / Toschi Center (23m²)',
      },
      superior: {
        osaka: 'Voco Osaka Central – Premium (30m²)',
        kyoto: 'Kyoto Century Hotel (30m²)',
        hakone: 'Yumoto Fujiya Hotel (48m²) / Hakone Hotel – Sup (38m²) / Hotel de Yama (30m²) / Sengokuhara Prince – Premium (50m²)',
        tokyo: 'Sunshine City Prince – Planta Sunshine (29m²) / Tokyo Dome (33m²)',
      },
      luxury: {
        osaka: 'Voco Osaka Central – Grand (36m²)',
        kyoto: 'The Thousand Kyoto (37m²)',
        hakone: 'Ryuguden (habitación japonesa)',
        tokyo: 'Sunshine City Prince – Planta Sunshine (37m²) / Tokyo Dome – Executive Suites (51–66m²)',
      }
    }
  };

  const departureDates = {
    en: {
      '2026': {
        'Apr': ['07', '14', '21', '28'],
        'May': ['05', '12', '19', '26'],
        'Jun': ['02', '09', '16', '23', '30'],
        'Jul': ['07', '14', '21', '28'],
        'Aug': ['04', '11', '18', '25'],
        'Sep': ['01', '08', '15', '22', '29'],
        'Oct': ['06', '13', '20', '27'],
        'Nov': ['03', '10', '17', '24'],
        'Dec': ['08', '22'],
      },
      '2027': {
        'Jan': ['12', '26'],
        'Feb': ['09', '23'],
        'Mar': ['02', '09', '16', '23', '30'],
      }
    },
    es: {
      '2026': {
        'Abr': ['07', '14', '21', '28'],
        'May': ['05', '12', '19', '26'],
        'Jun': ['02', '09', '16', '23', '30'],
        'Jul': ['07', '14', '21', '28'],
        'Ago': ['04', '11', '18', '25'],
        'Sep': ['01', '08', '15', '22', '29'],
        'Oct': ['06', '13', '20', '27'],
        'Nov': ['03', '10', '17', '24'],
        'Dic': ['08', '22'],
      },
      '2027': {
        'Ene': ['12', '26'],
        'Feb': ['09', '23'],
        'Mar': ['02', '09', '16', '23', '30'],
      }
    }
  };

  const importantNotesList = {
    en: [
      'Check-in at hotels from 15:00h and check-out before 10:00h.',
      'For flights departing Tokyo before 11:30h, there may not be time for breakfast and no Breakfast box or refund is possible.',
      'We need a copy of the passport to confirm the reservation.',
      'Rooms are usually Twin (2 beds). A double/queen bed is not guaranteed.',
      'In Standard category, a double bed is not available.',
      'Triple rooms will be twin + extra bed. The 3rd bed may be smaller or a sofa bed. Not recommended for adults.',
      'Only 1 suitcase per person allowed (max. 23 kg). There is a supplement for each additional bag paid directly in Japan.',
      'Guests will spend one night in Hakone without their main luggage. Please prepare a carry-on bag (max. 10kg) for that night. Luggage will be transported directly from Kyoto to Tokyo.',
      'Some accommodations (for cultural reasons) may restrict access to onsen (hot springs) for guests with tattoos.',
      'If you have a connecting flight in Japan, allow at least 3 hours between the international and domestic flight from the same airport. In most cases passengers must collect their bags and re-check in. For different airports, allow at least 5 hours. Verify with your agency and/or airline.',
      'Booking deadline for the programme and/or additional services: 21 days before arrival in Japan (Japan time). After this date, any change or added service will incur an urgent management fee of USD 175 total per change. Confirmation of these changes or new services cannot be guaranteed after the booking deadline.',
      'Cancellation fees: 21–15 days before: 20%; 14–9 days: 40%; 8–5 days: 60%; 4 days to tour start: 100%.',
      'For groups under 10 passengers, tour is operated using public transport.',
    ],
    es: [
      'Check in en los hoteles desde las 15:00h y Check out antes de las 10:00h.',
      'Vuelos con salida desde Tokio antes de las 11:30h es posible que no haya tiempo para el desayuno y no es posible Breakfast box ni reembolso.',
      'Necesitamos copia del pasaporte para la confirmación de la reserva.',
      'Las habitaciones suelen ser Twin (2 camas). No se garantiza cama matrimonial.',
      'En la categoría estándar la cama matrimonial no está disponible.',
      'La habitación triple será twin + cama extra. La 3ª cama puede ser más pequeña o sofá cama. No se recomienda para adultos.',
      'Solo permitido 1 maleta por persona (máx. 23 kg). Existe suplemento por cada maleta adicional que será de pago directo en Japón.',
      'Los clientes pasarán una noche en Hakone sin sus maletas, por lo que se ruega preparar equipaje de mano (máx. 10 kg) para esa noche. Las maletas se transportarán directamente de Kioto a Tokio.',
      'Algunos alojamientos (por motivos culturales) pueden restringir el acceso a personas con tatuajes en los onsen (aguas termales).',
      'Si realiza una escala en Japón, dejen al menos 3 horas de diferencia entre el vuelo internacional y el vuelo doméstico desde el mismo aeropuerto. En la mayoría de los casos es necesario recoger las maletas y hacer check-in de nuevo. En caso de aeropuertos diferentes, rogamos dejen al menos 5 horas. Revise con su agencia y/o la aerolínea.',
      'Fecha límite para reservas del programa y/o servicios adicionales: 21 días antes de la llegada a Japón en horario japonés. Pasada esa fecha, cualquier cambio o servicio añadido conllevará un suplemento por gestión de urgencia de USD 175 total por cada cambio. La confirmación no se puede garantizar después de la fecha límite.',
      'Gastos de cancelación: de 21 a 15 días 20%; de 14 a 9 días 40%; de 8 a 5 días 60%; de 4 días al inicio del tour 100%.',
      'Para grupos de menos de 10 pasajeros, el tour se opera en transporte público.',
    ]
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const hotelInfo = hotels[language];
  const dates = departureDates[language];
  const importantNotes = importantNotesList[language];

  const cityLabel = (key: string) => {
    const labels: Record<string, { en: string; es: string }> = {
      osaka: { en: 'Osaka', es: 'Osaka' },
      kyotoHakone: { en: 'Kyoto + Hakone', es: 'Kioto + Hakone' },
      tokyo: { en: 'Tokyo + General', es: 'Tokio + General' },
      kyoto: { en: 'Kyoto', es: 'Kioto' },
      hakone: { en: 'Hakone', es: 'Hakone' },
    };
    return labels[key]?.[language] ?? key;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a7ea4] via-[#0d9fc9] to-[#14b8a6] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#c41e3a] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t.featured}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200 mb-6">{t.subtitle}</p>
            <div className="flex items-center justify-center space-x-6 text-lg mb-4">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-white mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-white mr-2" />
                <span>Osaka → Nara → {language === 'es' ? 'Kioto' : 'Kyoto'} → Hakone → {language === 'es' ? 'Tokio' : 'Tokyo'}</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2">{t.ref}</p>
            <p className="text-sm text-gray-200 font-semibold">{t.guaranteedDep}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">{t.intro}</p>
        </div>
      </section>

      {/* Starting Price */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.deposit}</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#0a7ea4]">
            <div className="text-center mb-6">
              <p className="text-6xl font-bold text-[#0a7ea4] mb-4">{t.depositAmount}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.priceNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.highlights}</h2>
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

      {/* Included / Not Included */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.included}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {(['osaka', 'kyotoHakone', 'tokyo'] as const).map((city) => (
              <div key={city} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cityLabel(city)}</h3>
                <ul className="space-y-2">
                  {included[city].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
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

      {/* Itinerary */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.itinerary}</h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
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
                    <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedDay === day.day && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    {day.details.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.hotels}</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Standard */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'en' ? 'Standard' : 'Estándar'}</h3>
              <ul className="space-y-3">
                {(['osaka', 'kyoto', 'hakone', 'tokyo'] as const).map((city) => (
                  <li key={city} className="border-l-4 border-[#0a7ea4] pl-4">
                    <p className="font-semibold text-gray-900 capitalize">{cityLabel(city)}</p>
                    <p className="text-gray-600 text-sm">{hotelInfo.standard[city]}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Superior */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Superior</h3>
              <ul className="space-y-3">
                {(['osaka', 'kyoto', 'hakone', 'tokyo'] as const).map((city) => (
                  <li key={city} className="border-l-4 border-[#0d9fc9] pl-4">
                    <p className="font-semibold text-gray-900 capitalize">{cityLabel(city)}</p>
                    <p className="text-gray-600 text-sm">{hotelInfo.superior[city]}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Luxury */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'en' ? 'Luxury' : 'Lujo'}</h3>
              <ul className="space-y-3">
                {(['osaka', 'kyoto', 'hakone', 'tokyo'] as const).map((city) => (
                  <li key={city} className="border-l-4 border-[#14b8a6] pl-4">
                    <p className="font-semibold text-gray-900 capitalize">{cityLabel(city)}</p>
                    <p className="text-gray-600 text-sm">{hotelInfo.luxury[city]}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">{t.hotelNote}</p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.pricing}</h2>

          {/* Main pricing grid */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0a7ea4] text-white">
                  <th className="px-4 py-3 text-left font-semibold">{language === 'en' ? 'Season' : 'Temporada'}</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>{language === 'en' ? 'Standard' : 'Estándar'}</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>Superior</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>{language === 'en' ? 'Luxury' : 'Lujo'}</th>
                </tr>
                <tr className="bg-[#0d9fc9] text-white text-xs">
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 text-center">{t.dbl}</th>
                  <th className="px-4 py-2 text-center">{t.sgl}</th>
                  <th className="px-4 py-2 text-center">{t.dbl}</th>
                  <th className="px-4 py-2 text-center">{t.sgl}</th>
                  <th className="px-4 py-2 text-center">{t.dbl}</th>
                  <th className="px-4 py-2 text-center">{t.sgl}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: language === 'en' ? 'Low Season' : 'Temporada Baja',
                    std: ['$2,835', '$810'],
                    sup: ['$3,155', '$1,170'],
                    lux: ['$3,960', '$1,830'],
                  },
                  {
                    label: language === 'en' ? 'Mid Season' : 'Temporada Media',
                    std: ['$2,915', '$890'],
                    sup: ['$3,235', '$1,325'],
                    lux: ['$4,045', '$1,975'],
                  },
                  {
                    label: language === 'en' ? 'High Season' : 'Temporada Alta',
                    std: ['$2,995', '$995'],
                    sup: ['$3,315', '$1,435'],
                    lux: ['$4,125', '$2,315'],
                  },
                  {
                    label: language === 'en' ? 'Special Season' : 'Temporada Especial',
                    std: ['$3,235', '$1,170'],
                    sup: ['$3,560', '$1,640'],
                    lux: ['$4,285', '$2,510'],
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-800">{row.label}</td>
                    <td className="px-4 py-3 text-center font-bold text-[#0a7ea4]">{row.std[0]}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.std[1]}</td>
                    <td className="px-4 py-3 text-center font-bold text-[#0d9fc9]">{row.sup[0]}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.sup[1]}</td>
                    <td className="px-4 py-3 text-center font-bold text-[#14b8a6]">{row.lux[0]}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.lux[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Supplements table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-3 text-left font-semibold">{language === 'en' ? 'Supplements & Extras' : 'Suplementos y Extras'}</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>{language === 'en' ? 'Standard' : 'Estándar'}</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>Superior</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>{language === 'en' ? 'Luxury' : 'Lujo'}</th>
                </tr>
                <tr className="bg-gray-100 text-gray-600 text-xs">
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 text-center">{t.dbl}</th>
                  <th className="px-4 py-2 text-center">{t.sgl}</th>
                  <th className="px-4 py-2 text-center">{t.dbl}</th>
                  <th className="px-4 py-2 text-center">{t.sgl}</th>
                  <th className="px-4 py-2 text-center">{t.dbl}</th>
                  <th className="px-4 py-2 text-center">{t.sgl}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3 text-gray-800">{t.nightOsaka} <span className="text-xs text-gray-500">({language === 'en' ? 'per person, breakfast incl.' : 'por persona, desayuno incl.'})</span></td>
                  <td className="px-4 py-3 text-center text-gray-700">$180</td>
                  <td className="px-4 py-3 text-center text-gray-700">$130</td>
                  <td className="px-4 py-3 text-center text-gray-700">$230</td>
                  <td className="px-4 py-3 text-center text-gray-700">$170</td>
                  <td className="px-4 py-3 text-center text-gray-700">$365</td>
                  <td className="px-4 py-3 text-center text-gray-700">$275</td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3 text-gray-800">{t.nightTokio} <span className="text-xs text-gray-500">({language === 'en' ? 'per person, breakfast incl.' : 'por persona, desayuno incl.'})</span></td>
                  <td className="px-4 py-3 text-center text-gray-700">$205</td>
                  <td className="px-4 py-3 text-center text-gray-700">$165</td>
                  <td className="px-4 py-3 text-center text-gray-700">$245</td>
                  <td className="px-4 py-3 text-center text-gray-700">$195</td>
                  <td className="px-4 py-3 text-center text-gray-700">$310</td>
                  <td className="px-4 py-3 text-center text-gray-700">$250</td>
                </tr>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3 text-gray-800">{t.upgradeRyokan}</td>
                  <td className="px-4 py-3 text-center text-gray-700">$365</td>
                  <td className="px-4 py-3 text-center text-gray-700">$325</td>
                  <td className="px-4 py-3 text-center text-gray-700">$310</td>
                  <td className="px-4 py-3 text-center text-gray-700">$250</td>
                  <td className="px-4 py-3 text-center text-[#14b8a6] font-semibold" colSpan={2}>{t.included_na}</td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3 text-gray-800">{t.nightFlightArr}</td>
                  <td className="px-4 py-3 text-center text-gray-600 text-xs" colSpan={6}>$160 — {t.perCar}</td>
                </tr>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3 text-gray-800">{t.nightFlightDep}</td>
                  <td className="px-4 py-3 text-center text-gray-600 text-xs" colSpan={6}>$160 — {t.perCar}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {language === 'en'
              ? '(1) No triple rooms in Luxury category. All prices in USD per person.'
              : '(1) No hay triple en cat. Lujo. Todos los precios en USD por persona.'}
          </p>
        </div>
      </section>

      {/* Departure Dates */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.dates}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(dates).map(([year, months]) => (
              <div key={year} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-2xl font-bold text-[#0a7ea4] mb-5 border-b border-gray-200 pb-3">{year}</h3>
                <div className="space-y-3">
                  {Object.entries(months).map(([month, days]) => (
                    <div key={month} className="flex items-start border-l-4 border-[#14b8a6] pl-4">
                      <span className="font-semibold text-gray-800 w-12 flex-shrink-0">{month}</span>
                      <span className="text-gray-600 text-sm">{(days as string[]).join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.importantNotes}</h2>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
            <ul className="space-y-3">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold mt-0.5">•</span>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-[#0a7ea4] to-[#14b8a6] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-gray-100">{t.ctaText}</p>
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a7ea4] mb-8 text-center">{t.formTitle}</h2>
          <ContactForm defaultSubject={t.title} />
        </div>
      </section>
    </div>
  );
}
