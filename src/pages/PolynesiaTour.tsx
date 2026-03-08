import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Check, Plane, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PolynesiaTour() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'POLYNESIA - MOOREA & BORA BORA',
      subtitle: '8 Days in Paradise',
      startingFrom: 'Starting from',
      perPerson: 'per person',
      category: 'Tourist Category',
      season: '2026-2027 Season',
      availability: 'Daily Departures',
      availabilityDate: 'From April 1, 2026 to March 31, 2027',
      itinerary: 'Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      notes: 'Important Notes',
      bookNow: 'Request Information',
      day1Title: 'Day 01 - Papeete (Tahiti)',
      day1Desc: 'Arrival at the capital of French Polynesia. Traditional welcome with a floral or shell necklace. Transfer to the hotel. Accommodation.',
      day2Title: 'Day 02 - Papeete - Moorea',
      day2Desc: 'Breakfast. Transfer to the port to take the catamaran (included) to Moorea. Arrival and transfer to hotel. Accommodation.',
      day3Title: 'Day 03 - Moorea',
      day3Desc: 'Free day on this paradisiacal South Pacific island for clients to relax on the beach or do optional activities. Accommodation and breakfast.',
      day4Title: 'Day 04 - Moorea',
      day4Desc: 'Free day on this paradisiacal South Pacific island for clients to relax on the beach or do optional activities. Accommodation and breakfast.',
      day5Title: 'Day 05 - Moorea - Bora Bora',
      day5Desc: 'Breakfast. Transfer to the airport to take the flight (not included) to Bora Bora. Arrival and transfer to hotel. Accommodation.',
      day6Title: 'Day 06 - Bora Bora',
      day6Desc: 'Free day in Bora Bora, an island in a turquoise lagoon protected by coral reef. You can relax on the beach or do optional activities. Accommodation and breakfast.',
      day7Title: 'Day 07 - Bora Bora',
      day7Desc: 'Free day in Bora Bora, an island in a turquoise lagoon protected by coral reef. You can relax on the beach or do optional activities. Accommodation and breakfast.',
      day8Title: 'Day 08 - Bora Bora - Papeete (Tahiti)',
      day8Desc: 'Breakfast. Transfer to the airport to take the flight (not included) to Papeete. End of services.',
      includedItems: [
        'All transfers',
        'Arrival assistance and welcome with flower or shell necklace',
        '1 night accommodation and breakfast in Papeete (Tahiti)',
        '3 nights accommodation and breakfast in Moorea',
        '3 nights accommodation and breakfast in Bora Bora',
        'Catamaran ticket Papeete / Moorea',
        'Travel insurance'
      ],
      notIncludedItems: [
        'Visas',
        'Local accommodation tax (Approx. €1.70 per person, per day, paid directly at hotels)',
        'Internal flights between islands',
        'Everything not indicated in "What\'s Included" section'
      ],
      notesItems: [
        'The night in Papeete (Tahiti) can be at the beginning or end of the itinerary, adapting to international flights',
        'The BOB/PPT flight adapts to the international flight schedule. If the flight leaves very early, the night at the beginning in PPT will move to the end',
        'Consult possibility of UPGRADE to OVERWATER rooms in Moorea and Bora Bora with corresponding supplement',
        'Minimum 2 passengers - Guaranteed departures'
      ]
    },
    es: {
      title: 'POLINESIA - MOOREA & BORA BORA',
      subtitle: '8 Días en el Paraíso',
      startingFrom: 'Desde',
      perPerson: 'por persona',
      category: 'Categoría Turista',
      season: 'Temporada 2026-2027',
      availability: 'Salidas Diarias',
      availabilityDate: 'Del 1 de Abril, 2026 al 31 de Marzo, 2027',
      itinerary: 'Itinerario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      notes: 'Notas Importantes',
      bookNow: 'Solicitar Información',
      day1Title: 'Día 01 - Papeete (Tahití)',
      day1Desc: 'Llegada a la capital de la Polinesia Francesa. Bienvenida tradicional con un collar floral o de conchitas. Traslado al hotel. Alojamiento.',
      day2Title: 'Día 02 - Papeete - Moorea',
      day2Desc: 'Desayuno. Traslado al puerto para tomar el catamarán (incluido) con destino Moorea. Llegada y traslado al hotel. Alojamiento.',
      day3Title: 'Día 03 - Moorea',
      day3Desc: 'Días libres en esta paradisiaca isla del Pacífico Sur a disposición de los clientes para descansar en la playa o realizar alguna actividad opcional. Alojamiento y desayuno.',
      day4Title: 'Día 04 - Moorea',
      day4Desc: 'Días libres en esta paradisiaca isla del Pacífico Sur a disposición de los clientes para descansar en la playa o realizar alguna actividad opcional. Alojamiento y desayuno.',
      day5Title: 'Día 05 - Moorea - Bora Bora',
      day5Desc: 'Desayuno. Traslado al aeropuerto para tomar el vuelo (no incluido) con destino Bora Bora. Llegada y traslado al hotel. Alojamiento.',
      day6Title: 'Día 06 - Bora Bora',
      day6Desc: 'Días libres en Bora Bora, una isla en una laguna turquesa protegida por arrecife de coral. Podrán descansar en la playa o realizar alguna actividad opcional. Alojamiento y desayuno.',
      day7Title: 'Día 07 - Bora Bora',
      day7Desc: 'Días libres en Bora Bora, una isla en una laguna turquesa protegida por arrecife de coral. Podrán descansar en la playa o realizar alguna actividad opcional. Alojamiento y desayuno.',
      day8Title: 'Día 08 - Bora Bora - Papeete (Tahití)',
      day8Desc: 'Desayuno. Traslado al aeropuerto para tomar el vuelo (no incluido) con destino Papeete. Fin de los servicios.',
      includedItems: [
        'Todos los traslados',
        'Asistencia a la llegada y bienvenida con collar de flores o conchitas',
        '1 noche en régimen de alojamiento y desayuno en Papeete (Tahití)',
        '3 noches en régimen de alojamiento y desayuno en Moorea',
        '3 noches en régimen de alojamiento y desayuno en Bora Bora',
        'TKT de catamarán Papeete / Moorea',
        'Seguro de viaje'
      ],
      notIncludedItems: [
        'Visados',
        'Tasa local de alojamiento (Aprox. 1,70€ por persona, por día, pago directo en los hoteles)',
        'Vuelos internos entre islas',
        'Todo lo que no está indicado en el apartado de "el precio incluye"'
      ],
      notesItems: [
        'La noche en Papeete (Tahití) puede ser al comienzo o al final del itinerario, adaptándose a los vuelos internacionales',
        'El vuelo BOB/PPT se adapta al horario del vuelo internacional. Si el vuelo sale muy temprano, la noche del comienzo en PPT pasará al final',
        'Consulten posibilidad de UPGRADE a habitaciones OVERWATER en Moorea y Bora Bora con el suplemento correspondiente',
        'Salidas garantizadas mínimo 2 pasajeros'
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1920"
          alt="Bora Bora paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#00b4d8] to-[#0096c7] text-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-2 opacity-90">{t.startingFrom}</p>
              <p className="text-5xl font-bold mb-2">€1,395</p>
              <p className="text-lg opacity-90">{t.perPerson}</p>
              <p className="mt-4 text-sm">{t.category}</p>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <span>{t.availability}</span>
              </div>
              <div className="flex items-center">
                <Plane className="w-5 h-5 mr-3" />
                <span>{t.availabilityDate}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Papeete → Moorea → Bora Bora</span>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-8 w-full bg-white text-[#00b4d8] py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block text-center"
          >
            {t.bookNow}
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Calendar className="w-8 h-8 mr-3 text-[#00b4d8]" />
            {t.itinerary}
          </h2>

          <div className="space-y-6">
            {[
              { title: t.day1Title, desc: t.day1Desc },
              { title: t.day2Title, desc: t.day2Desc },
              { title: t.day3Title, desc: t.day3Desc },
              { title: t.day4Title, desc: t.day4Desc },
              { title: t.day5Title, desc: t.day5Desc },
              { title: t.day6Title, desc: t.day6Desc },
              { title: t.day7Title, desc: t.day7Desc },
              { title: t.day8Title, desc: t.day8Desc }
            ].map((day, index) => (
              <div key={index} className="border-l-4 border-[#00b4d8] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                <p className="text-gray-700 leading-relaxed">{day.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Check className="w-7 h-7 mr-3 text-green-600" />
              {t.included}
            </h2>
            <ul className="space-y-3">
              {t.includedItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="w-7 h-7 mr-3 text-orange-600" />
              {t.notIncluded}
            </h2>
            <ul className="space-y-3">
              {t.notIncludedItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-600 mr-3 flex-shrink-0">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#00b4d8] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Info className="w-7 h-7 mr-3 text-[#00b4d8]" />
            {t.notes}
          </h2>
          <ul className="space-y-3">
            {t.notesItems.map((note, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00b4d8] font-bold mr-3 flex-shrink-0">{index + 1}.</span>
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#00b4d8] text-white py-4 px-12 rounded-lg font-semibold text-lg hover:bg-[#0096c7] transition-colors shadow-lg hover:shadow-xl"
          >
            {t.bookNow}
          </Link>
        </div>
      </div>
    </div>
  );
}
