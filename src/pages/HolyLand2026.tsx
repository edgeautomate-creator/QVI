import { Phone, MessageCircle, Calendar, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function HolyLand2026() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Holy Land Pilgrimage 2026 - Jerusalem Bethlehem Nazareth',
      title: 'Gran Peregrinación a "Tierra Santa"',
      subtitle: 'Return to the Land of the Lord',
      dates: 'From October 3 to 12, 2026',
      guide: 'Spiritual Guide: Fr. Inocencio Llamas',
      intro: 'Now more than ever, Israel needs our presence, our faith and our prayer. Join us on this profound spiritual journey through the Holy Land, walking in the footsteps of Jesus from Nazareth to Jerusalem, from the Sea of Galilee to Bethlehem.',
      pricing: 'Pricing & Payment Plan',
      deposit: 'Deposit to Reserve',
      depositAmount: '$955',
      priceNote: 'Reserve your spot with a deposit. Payment plan available with 6 additional monthly payments. Contact us for complete pricing details.',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      itinerary: 'Daily Itinerary',
      cta: 'Ready to Walk in the Footsteps of Jesus?',
      ctaText: 'Contact us today to reserve your spot on this life-changing pilgrimage to the Holy Land.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information'
    },
    es: {
      featured: 'Peregrinación Tierra Santa 2026 - Jerusalén Belén Nazaret',
      title: 'Gran Peregrinación a "Tierra Santa"',
      subtitle: 'Volvamos a la Tierra del Señor',
      dates: 'Del 3 al 12 de Octubre, 2026',
      guide: 'Guía Espiritual: P. Inocencio Llamas',
      intro: 'Hoy más que nunca, Israel necesita de nuestra presencia, nuestra fe y nuestra oración. Únete a nosotros en este profundo viaje espiritual por Tierra Santa, caminando en los pasos de Jesús desde Nazareth hasta Jerusalén, desde el Mar de Galilea hasta Belén.',
      pricing: 'Precios y Plan de Pagos',
      deposit: 'Depósito para Reservar',
      depositAmount: '$955',
      priceNote: 'Reserve su lugar con un depósito. Plan de pagos disponible con 6 pagos mensuales adicionales. Contáctenos para detalles completos de precios.',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      itinerary: 'Itinerario Diario',
      cta: 'Reserva Tu Lugar Ya!',
      ctaText: 'Contáctanos hoy para reservar tu lugar en esta peregrinación que cambiará tu vida a Tierra Santa.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información'
    }
  };

  const includedItems = {
    en: [
      'Round-trip airfare Miami-Frankfurt-Tel Aviv-Frankfurt-Miami on Lufthansa Airlines with taxes and airport charges',
      'Airport transfers and assistance in Tel Aviv',
      'Luggage handling: 1 suitcase of 50 lbs and 1 carry-on of 10 lbs',
      'Accommodation in 4-star hotels: 1 night Tel Aviv, 2 nights Nazareth, 1 night Dead Sea, 4 nights Jerusalem',
      'Meals: 8 breakfasts and 8 dinners at hotels, plus 1 lunch at restaurant in Tiberias',
      'Exclusive bus for the group with bilingual guide throughout the tour',
      'All visits described in itinerary including Tel Aviv, Jaffa, Caesarea, Haifa, Mount Carmel, Cana, Tiberias, Sea of Galilee boat ride, Capernaum, Tabgha, Mount of Beatitudes, Magdala, Jordan River, Nazareth, Mount Tabor, Jericho, Dead Sea, Masada, Bethlehem, Jerusalem (Old and New City), Mount of Olives, Gethsemane, Ein Karem, Emmaus',
      'Use of headphones (to be returned on last day)',
      'Hotel porters',
      'Daily Mass'
    ],
    es: [
      'Porción aérea ida y vuelta Miami-Frankfurt-Tel Aviv-Frankfurt-Miami en Lufthansa Airlines con impuestos y cargos de aeropuertos',
      'Traslados y asistencia en aeropuertos de Tel Aviv',
      'Manejo de equipaje: 1 maleta de 50 lbs y 1 maletín de mano de 10 lbs',
      'Alojamiento en hoteles 4 estrellas: 1 noche Tel Aviv, 2 noches Nazareth, 1 noche Mar Muerto, 4 noches Jerusalén',
      'Alimentación: 8 desayunos y 8 cenas en hoteles, más 1 almuerzo en restaurante en Tiberiades',
      'Autobús exclusivo para el grupo con guía bilingüe en todo el recorrido',
      'Todas las visitas descritas en el itinerario incluyendo Tel Aviv, Yafo, Cesarea, Haifa, Monte Carmelo, Caná, Tiberiades, travesía en barca por el Mar de Galilea, Cafarnaún, Tabgha, Monte de las Bienaventuranzas, Magdala, Río Jordán, Nazareth, Monte Tabor, Jericó, Mar Muerto, Masada, Belén, Jerusalén (Ciudad Vieja y Nueva), Monte de los Olivos, Getsemaní, Ein Karem, Emaús',
      'Uso de audífonos (a devolver el último día)',
      'Maleteros en los hoteles',
      'Misa Diaria'
    ]
  };

  const notIncludedItems = {
    en: [
      'Lunches, except the one included at restaurant in Tiberias',
      'Travel insurance (highly recommended)',
      'Tips for drivers, guides and hotel porters',
      'Airport luggage handling',
      'Drinks with meals, except: water, milk, coffee and juice at breakfast',
      'Passport or visa expenses',
      'Airline charges for name changes, date changes, excess baggage, seat purchases, etc.',
      'Any personal expenses not clearly specified in the itinerary',
      'Credit card payment fees (3.95%)'
    ],
    es: [
      'Almuerzos, excepto el incluido en restaurante en Tiberiades',
      'Seguro de Viaje (muy recomendable)',
      'Propinas para choferes, guías y maleteros',
      'Manejo de equipaje en los aeropuertos',
      'Bebidas con las comidas, excepto: agua, leche, café y jugos en el desayuno',
      'Gastos de pasaporte o de visas',
      'Cargos de la línea aérea por cambio de nombre, de fecha, exceso de equipaje, compra de asiento, etc.',
      'Ningún gasto de índole personal que no esté claramente especificado en el itinerario',
      'Cargos por pagos con tarjeta de crédito (3.95%)'
    ]
  };

  const days = {
    en: [
      {
        title: 'Day 1 (Sat, Oct 3): Miami - Frankfurt',
        description: 'Departure from Miami International Airport to Frankfurt, Germany on Lufthansa Airlines.'
      },
      {
        title: 'Day 2 (Sun, Oct 4): Frankfurt - Tel Aviv',
        description: 'Arrival in Frankfurt to connect with direct Lufthansa Airlines flight to Tel Aviv, Israel. Arrival at Ben Gurion International Airport, reception, assistance and transfer to your hotel in Tel Aviv for accommodation and dinner.'
      },
      {
        title: 'Day 3 (Mon, Oct 5): Tel Aviv - Jaffa - Caesarea - Haifa - Cana - Nazareth',
        description: 'Breakfast. We begin our pilgrimage with a brief panoramic visit of Tel Aviv and Jaffa (Joppa), then continue to ancient Caesarea along the Mediterranean coast. Visit the Roman theater, Aqueduct, and Crusader fortress. Continue to Haifa for a panoramic visit including the Persian Bahai Gardens, Mount Carmel and the Stella Maris Church (Carmelites). After lunch, departure to Cana of Galilee where Jesus performed his first public miracle: turning water into wine. We will celebrate Holy Mass where those who wish can renew their marriage vows. Transfer to our hotel in Nazareth for accommodation and dinner.'
      },
      {
        title: 'Day 4 (Tue, Oct 6): Nazareth - Tiberias - Sea of Galilee - Capernaum - Magdala - Jordan River',
        description: 'Breakfast. Departure to Tiberias for our unforgettable boat ride on the Sea of Galilee. Visit Capernaum (city of Jesus), the house of St. Peter and the Synagogue. Tabgha: Church of the Primacy of Peter and the Church of the Multiplication of Loaves and Fishes. Continue to the Mount of Beatitudes where Jesus preached the "Sermon on the Mount" and where we will celebrate Holy Mass. After lunch, depart to Magdala (city of Mary Magdalene) to see the ancient Synagogue and new Church by the shore. Finally visit the Jordan River where we can renew our baptism. Return to our hotel in Nazareth for accommodation and dinner.'
      },
      {
        title: 'Day 5 (Wed, Oct 7): Nazareth - Mount Tabor - Jericho - Dead Sea',
        description: 'Breakfast. Begin our visit to Nazareth with Holy Mass at the Basilica of the Annunciation, then visit St. Joseph\'s carpentry shop and the Virgin\'s fountain. Continue to Mount Tabor, ascending to the summit to visit the Church of the Transfiguration. After lunch, continue through the Jordan Valley to Jericho, the oldest city in the world, where we can see the Mount of Temptation. Continue to the incredible Dead Sea, located 400 meters below sea level, where we can enjoy its therapeutic waters and extraordinary natural beauty. Transfer to hotel for accommodation and dinner. Free time to swim and float in its saltwater pools.'
      },
      {
        title: 'Day 6 (Thu, Oct 8): Dead Sea - Judean Desert - Masada - Jerusalem',
        description: 'Breakfast. Morning departure through the Judean Desert to visit the Roman fortress of Masada, King Herod\'s Palace and last stronghold of Jewish rebels. Free time for lunch in the area. Continue through the Judean Desert where we will observe the Qumran caves where the Dead Sea Scrolls were found (city of the Essenes). Continue through the desert to Jerusalem and make our triumphal entry. Transfer to our hotel for accommodation and dinner.'
      },
      {
        title: 'Day 7 (Fri, Oct 9): Jerusalem - Bethlehem',
        description: 'Breakfast. Begin our day with a panoramic visit from Mount Scopus, the Hebrew University of Jerusalem. Visit the Chapel of the Ascension, the Grotto of the Our Father, descend the Mount of Olives with the most beautiful view of Jerusalem: "The Holy City". Continue to the Church of Dominus Flevit (where the Lord weeps over Jerusalem), visit the Garden of Olives, the Church of Gethsemane, grotto of betrayal and the tomb of the Virgin Mary. After lunch, head to the city of Bethlehem, birthplace of our Lord, where we will visit the Church of the Nativity, the grotto of St. Jerome and the shepherd\'s field. Return to hotel in Jerusalem for accommodation and dinner.'
      },
      {
        title: 'Day 8 (Sat, Oct 10): Jerusalem - Old City',
        description: 'Breakfast. Today we will visit Mount Zion, the Church of the Dormition of the Virgin, the Tomb of King David, the room of the Last Supper, then enter the Old City and visit the Wailing Wall, the Temple Mount, etc. Continue to St. Anne\'s Church, the Bethesda pools, walk through the oriental market streets to make the stations of the Via Dolorosa, visit the chapel of the Flagellation, Praetorium, Ecce Homo, to Golgotha (Calvary), visit the Holy Sepulcher (place of the Tomb and Resurrection). Return to hotel. Dinner.'
      },
      {
        title: 'Day 9 (Sun, Oct 11): Jerusalem - New City - Ein Karem - Emmaus',
        description: 'Panoramic visit of the new city including the Municipal Theater, presidential residence, Central Bank, Supreme Court, Ministry area, Parliament or "Knesset", etc. Visit the Israel Museum where the Shrine of the Book is located and the model of what Jerusalem was like in Jesus\' time 2026 years ago. Visit the picturesque village of Ein Karem (birthplace of St. John the Baptist) to see the Sanctuary of the Visitation and the Church of St. John the Baptist. Continue to the area of Emmaus to dedicate the rest of the day to visiting the area including celebration of Holy Mass in the ruins of the Byzantine Church of Emmaus. Free time for meditation, reflection and prayer. Return to our hotel in Jerusalem for accommodation and our last dinner of this unforgettable pilgrimage.'
      },
      {
        title: 'Day 10 (Mon, Oct 12): Jerusalem - Tel Aviv - Frankfurt - Miami',
        description: 'Breakfast. At the appropriate time, transfer to Ben Gurion Airport in Tel Aviv to take Lufthansa Airlines flight to Frankfurt to connect with direct Lufthansa flight to Miami. Arrival and end of services.'
      }
    ],
    es: [
      {
        title: 'Día 1 (Sáb, 3 Oct): Miami - Frankfurt',
        description: 'Salida del aeropuerto Internacional de Miami hacia Frankfurt, Alemania en vuelo de Lufthansa Airlines.'
      },
      {
        title: 'Día 2 (Dom, 4 Oct): Frankfurt - Tel Aviv',
        description: 'Llegada a Frankfurt para conectar con vuelo directo de Lufthansa Airlines con destino a Tel Aviv, Israel. Llegada al aeropuerto Internacional Ben Gurion, recibimiento, asistencia y traslado a su hotel en Tel Aviv para alojamiento y cena.'
      },
      {
        title: 'Día 3 (Lun, 5 Oct): Tel Aviv - Yafo - Cesarea - Haifa - Caná - Nazareth',
        description: 'Desayuno. Comenzamos nuestro peregrinar con una breve visita panorámica de Tel Aviv y Yafo (Jope), luego continuaremos hacia la antigua Cesarea por la costa del Mar Mediterráneo. Visita del teatro romano, el Acueducto y la fortaleza de los Cruzados. Continuamos hacia Haifa para visita panorámica incluyendo los Jardines Persas de Bahai, el Monte Carmelo y la Iglesia Stella Maris (Carmelitas). Después de almorzar, salida hacia Caná de Galilea donde Jesús realizó su primer milagro público: convirtiendo el agua en vino. Celebraremos la Santa Misa donde los que deseen podrán renovar sus votos matrimoniales. Traslado a nuestro hotel en Nazareth para alojamiento y cena.'
      },
      {
        title: 'Día 4 (Mar, 6 Oct): Nazareth - Tiberiades - Mar de Galilea - Cafarnaún - Magdala - Río Jordán',
        description: 'Desayuno. Salida hacia Tiberiades para realizar nuestra inolvidable travesía en barca por el Mar de Galilea. Visitaremos Cafarnaún (ciudad de Jesús), la casa de San Pedro y la Sinagoga. Tabgha: Iglesia del Primado de Pedro y la Iglesia de la Multiplicación de los Panes y los Peces. Continuación hacia el Monte de las Bienaventuranzas donde Jesús predicó el Sermón de la Montaña y donde celebraremos la Santa Misa. Después de almorzar, saldremos hacia Magdala (ciudad de María Magdalena) para conocer la antigua Sinagoga y la nueva Iglesia ubicada a la orilla del mar. Finalizaremos visitando el Río Jordán donde podremos renovar nuestro bautismo. Regreso a nuestro hotel en Nazareth para alojamiento y cena.'
      },
      {
        title: 'Día 5 (Mié, 7 Oct): Nazareth - Monte Tabor - Jericó - Mar Muerto',
        description: 'Desayuno. Comenzamos nuestra visita de Nazareth con la Santa Misa en la Basílica de la Anunciación, luego visitaremos la carpintería de San José y la fuente de la Virgen. Continuaremos hasta el Monte Tabor, subiremos a la cima de la montaña para visitar la Iglesia de la Transfiguración. Después de almorzar seguiremos por el Valle del Jordán hasta llegar a Jericó, la ciudad más antigua del mundo, donde podremos observar el Monte de las Tentaciones. Continuación hasta llegar al increíble Mar Muerto situado 400 mts bajo el nivel del mar, donde podremos disfrutar de sus aguas terapéuticas. Traslado al hotel para alojamiento y cena. Resto del día libre para nadar y flotar en sus piscinas de agua salada.'
      },
      {
        title: 'Día 6 (Jue, 8 Oct): Mar Muerto - Desierto de Judea - Masada - Jerusalén',
        description: 'Desayuno. Por la mañana salida a través del Desierto de Judea para visitar la fortaleza romana de Masada, Palacio del rey Herodes y último baluarte de los rebeldes Judíos. Tiempo libre para almorzar en el área. Continuaremos por el desierto de Judea donde observaremos las grutas de Qumrán donde se encontraron los Manuscritos del Mar Muerto (ciudad de los Esenios). Continuamos nuestro recorrido hasta llegar a Jerusalén y hacer nuestra entrada triunfal. Traslado a nuestro hotel para alojamiento y cena.'
      },
      {
        title: 'Día 7 (Vie, 9 Oct): Jerusalén - Belén',
        description: 'Desayuno. Comenzaremos nuestro día con una visita panorámica desde el Monte Scopus, la Universidad Hebrea de Jerusalén. Visitaremos la Capilla de la Ascensión del Señor, la Gruta del Padre Nuestro, bajaremos por el Monte de los Olivos con la más hermosa vista de Jerusalén: "La Ciudad Santa". Continuación hacia la Iglesia del Dominus Flevit (donde el Señor llora por Jerusalén), visita al Huerto de los Olivos, la Iglesia de Getsemaní, gruta de la Traición y la tumba de la Virgen María. Después de almorzar nos dirigiremos hacia Belén, lugar de nacimiento de nuestro Señor, donde visitaremos la Iglesia de la Natividad, la gruta de San Gerónimo y el campo de los pastorcitos. Regreso al hotel en Jerusalén para alojamiento y cena.'
      },
      {
        title: 'Día 8 (Sáb, 10 Oct): Jerusalén - Ciudad Antigua',
        description: 'Desayuno. Este día visitaremos el Monte de Sion, la Iglesia de la Dormición de la Virgen, la Tumba del Rey David, la sala de la última cena, para luego entrar a la Ciudad Vieja y visitar el Muro de los Lamentos, el Monte del Templo, etc. Continuación hacia la Iglesia de Santa Ana, piscina probática de Betesda, caminaremos por las callejuelas del mercado oriental para hacer las estaciones de la Vía Dolorosa, visitaremos la capilla de la Flagelación, Pretorio, Ecce Homo, hasta el Gólgota (El Calvario), visita del Santo Sepulcro (lugar de la Tumba y Resurrección). Regreso al hotel. Cena.'
      },
      {
        title: 'Día 9 (Dom, 11 Oct): Jerusalén - Ciudad Nueva - Ein Karem - Emaús',
        description: 'Visita panorámica de la ciudad nueva incluyendo el Teatro Municipal, la residencia presidencial, el Banco Central, la Suprema Corte, la zona de los Ministerios, el Parlamento o "Knesset", etc. Visitaremos el museo de Israel donde se encuentra el Templo del libro y la maqueta de cómo era Jerusalén en la época de Jesús hace 2026 años. Visitaremos el pintoresco pueblito de Ein Karem (lugar de nacimiento de San Juan Bautista) para conocer el Santuario de la Visitación y la Iglesia de San Juan Bautista. Continuamos hasta Emaús para dedicarnos el resto del día a visitar el área que incluye celebración de la Santa Misa en las ruinas de la Iglesia Bizantina de Emaús. Tiempo libre para meditación, reflexión y oración. Regreso a nuestro hotel en Jerusalén para alojamiento y realizar la última cena de nuestra inolvidable peregrinación.'
      },
      {
        title: 'Día 10 (Lun, 12 Oct): Jerusalén - Tel Aviv - Frankfurt - Miami',
        description: 'Desayuno. A la hora conveniente traslado al aeropuerto Ben Gurion en Tel Aviv para tomar vuelo de Lufthansa Airlines con destino a Frankfurt para hacer conexión con vuelo directo hacia Miami. Llegada y fin de los servicios.'
      }
    ]
  };

  const t = content[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const itineraryDays = days[language];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#2c5530] via-[#3a6e3f] to-[#2c5530] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Picture1.png)', opacity: 0.3 }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#ff6b6b] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t.featured}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {t.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg mb-4">
              <Calendar className="w-6 h-6 text-[#ff6b6b]" />
              <span>{t.dates}</span>
            </div>
            <p className="text-lg text-gray-200 italic">
              {t.guide}
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
          <h2 className="text-3xl font-bold text-[#2c5530] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#2c5530]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#2c5530] mb-4">
                {t.deposit}
              </h3>
              <p className="text-6xl font-bold text-[#ff6b6b] mb-4">{t.depositAmount}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {t.priceNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2c5530] mb-8 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-3">
            {itineraryDays.map((day, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleDay(index + 1)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center text-left flex-1">
                    <h3 className="text-lg font-semibold text-[#2c5530]">
                      {day.title}
                    </h3>
                  </div>
                  {expandedDay === index + 1 ? (
                    <ChevronUp className="w-5 h-5 text-[#ff6b6b] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#ff6b6b] flex-shrink-0" />
                  )}
                </button>
                {expandedDay === index + 1 && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2c5530] mb-6 flex items-center">
                <Check className="w-6 h-6 text-[#ff6b6b] mr-2" />
                {t.included}
              </h3>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#ff6b6b] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2c5530] mb-6 flex items-center">
                <X className="w-6 h-6 text-red-600 mr-2" />
                {t.notIncluded}
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2c5530] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.cta}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t.ctaText}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13052740453"
              className="flex items-center space-x-2 bg-[#ff6b6b] text-white px-8 py-4 rounded-lg hover:bg-[#ff5252] transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>{t.callNow}</span>
            </a>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2c5530] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="holyland_2026" />
        </div>
      </section>
    </div>
  );
}
