import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function EuropeTour() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Featured Tour',
      title: 'GOLDEN EUROPE',
      subtitle: 'Experience the best of European culture and history',
      duration: '18 Days',
      ref: 'Ref: E 4062',
      deposit: 'Starting From',
      depositAmount: '€3,270',
      priceNote: 'Per person in double occupancy. Contact us for complete pricing details and payment plans.',
      intro: 'Embark on an extraordinary 18-day journey through Europe\'s most iconic cities. From the vibrant streets of Madrid to the romantic canals of Venice, experience the rich history, stunning architecture, and diverse cultures that make Europe unforgettable.',
      highlights: 'Tour Highlights',
      itinerary: 'Daily Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      dates: 'Available Dates',
      cta: 'Ready to Explore Europe?',
      ctaText: 'Contact us today to reserve your spot on this incredible journey through the heart of Europe.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      extensions: 'Optional Extensions',
      valueAdded: 'Value-Added Services Available'
    },
    es: {
      featured: 'Tour Destacado',
      title: 'EUROPA DE ORO',
      subtitle: 'Experimenta lo mejor de la cultura e historia europea',
      duration: '18 Días',
      ref: 'Ref: E 4062',
      deposit: 'Desde',
      depositAmount: '€3,270',
      priceNote: 'Por persona en ocupación doble. Contáctenos para detalles completos de precios y planes de pago.',
      intro: 'Embárquese en un extraordinario viaje de 18 días por las ciudades más icónicas de Europa. Desde las vibrantes calles de Madrid hasta los románticos canales de Venecia, experimente la rica historia, arquitectura impresionante y culturas diversas que hacen de Europa un destino inolvidable.',
      highlights: 'Destacados del Tour',
      itinerary: 'Itinerario Diario',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      dates: 'Fechas Disponibles',
      cta: 'Reserva Tu Lugar Ya!',
      ctaText: 'Contáctanos hoy para reservar tu lugar en este increíble viaje por el corazón de Europa.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información',
      extensions: 'Extensiones Opcionales',
      valueAdded: 'Servicios de Valor Añadido Disponibles'
    }
  };

  const highlightsList = {
    en: [
      'Panoramic tours of Madrid, Paris, London, Amsterdam, Florence, and Rome',
      'Visit Burgos Gothic Cathedral, a UNESCO World Heritage site',
      'Explore the magnificent Loire Valley castles',
      'See iconic landmarks: Eiffel Tower, Big Ben, Colosseum',
      'Cross the English Channel by ferry',
      'Scenic Rhine River cruise from Boppard to St. Goar',
      'Canal cruise through Amsterdam\'s UNESCO-listed waterways',
      'Visit Rothenburg, jewel of the Romantic Road',
      'See Neuschwanstein Castle, inspiration for Disney\'s Sleeping Beauty Castle',
      'Explore Innsbruck\'s Golden Roof and historic center',
      'Boat ride to Venice\'s St. Mark\'s Square',
      'Visit Pisa\'s famous Leaning Tower',
      'Discover Florence\'s Renaissance treasures',
      'Tour Rome\'s ancient sites including the Colosseum area',
      'Walk through Rome\'s charming Trastevere district',
      'Optional extensions to Amalfi Coast and French Riviera'
    ],
    es: [
      'Tours panorámicos de Madrid, París, Londres, Ámsterdam, Florencia y Roma',
      'Visita a la Catedral Gótica de Burgos, Patrimonio de la Humanidad',
      'Explora los magníficos castillos del Valle del Loira',
      'Ve monumentos icónicos: Torre Eiffel, Big Ben, Coliseo',
      'Cruza el Canal de la Mancha en ferry',
      'Crucero escénico por el Río Rin de Boppard a St. Goar',
      'Crucero por los canales de Ámsterdam declarados Patrimonio de la Humanidad',
      'Visita Rotemburgo, joya de la Ruta Romántica',
      'Ve el Castillo de Neuschwanstein, inspiración del castillo de Disney',
      'Explora el Tejadito de Oro de Innsbruck y su centro histórico',
      'Paseo en barco a la Plaza de San Marcos en Venecia',
      'Visita la famosa Torre Inclinada de Pisa',
      'Descubre los tesoros renacentistas de Florencia',
      'Recorre los sitios antiguos de Roma incluyendo el área del Coliseo',
      'Pasea por el encantador barrio del Trastevere en Roma',
      'Extensiones opcionales a la Costa Amalfitana y Costa Azul'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'MADRID - Gateway to Europe',
        summary: 'Arrival in Madrid, meet and greet',
        details: 'Arrival and transfer to hotel. At 5:00 PM meeting with Surland staff at the hotel reception to meet fellow participants. Accommodation.'
      },
      {
        day: 2,
        title: 'MADRID - Allow Yourself Some Tapas',
        summary: 'Panoramic city tour of Madrid',
        details: 'Breakfast. Morning panoramic tour of the city: Plaza de Oriente, Royal Palace, Plaza de España, Puerta del Sol, etc. Free afternoon with possibility of optional visits: Toledo Half Day PM and/or Flamenco Show with Drink. Accommodation.'
      },
      {
        day: 3,
        title: 'MADRID - BURGOS - BORDEAUX - Gothic Splendor',
        summary: 'Visit Burgos Cathedral, continue to Bordeaux',
        details: 'Breakfast. Departure to Burgos with stop to visit its Gothic Cathedral. Continue to Bordeaux. Accommodation.'
      },
      {
        day: 4,
        title: 'BORDEAUX - LOIRE CASTLES - PARIS',
        summary: 'Vineyards and castles on the way to Paris',
        details: 'Breakfast. Departure to the Loire Valley with free time to admire Amboise Castle. Arrival in Paris. In the evening, possibility of optional visit: Paris Illuminations. Accommodation.'
      },
      {
        day: 5,
        title: 'PARIS - The City of Light',
        summary: 'Full panoramic tour of Paris',
        details: 'Breakfast. Panoramic city tour: Champs-Élysées, Place de la Concorde, Arc de Triomphe, Opera, Latin Quarter, Sorbonne, Pantheon, Les Invalides, Military School, Champ de Mars, etc. Free afternoon with possibility of optional visit: Seine River Cruise on Bateaux Mouche + Montmartre, or attend one of Paris\' nighttime cabarets. Accommodation.'
      },
      {
        day: 6,
        title: 'PARIS - Boutiques and Champagne',
        summary: 'Free day in Paris',
        details: 'Breakfast. Free day. Possibility of optional visit, normally in the morning: Palace and Gardens of Versailles. Accommodation.'
      },
      {
        day: 7,
        title: 'PARIS - CALAIS - DOVER - LONDON',
        summary: 'Cross the Channel to England',
        details: 'Breakfast. Departure to Calais to board ferry crossing the English Channel to Dover. Arrival and continuation by bus to London. Optional Visit: Historic London with pub. Accommodation.'
      },
      {
        day: 8,
        title: 'LONDON - The West End and the City',
        summary: 'Panoramic tour of London',
        details: 'Breakfast. Morning panoramic city tour with brief stop to admire Parliament with Big Ben and Westminster Abbey. Continue our route through Trafalgar Square, Piccadilly Circus, Regent Street, etc. Free afternoon or Optional Visit: Windsor Castle. Accommodation.'
      },
      {
        day: 9,
        title: 'LONDON - CALAIS - BRUGES - AMSTERDAM',
        summary: 'Return to continent via Bruges',
        details: 'Breakfast. Departure to Dover to board ferry crossing the English Channel to Calais. Continue journey to Bruges with brief stop. Arrival in Amsterdam. Accommodation.'
      },
      {
        day: 10,
        title: 'AMSTERDAM - Diamonds, Tulips and Bicycles',
        summary: 'City tour and canal cruise',
        details: 'Breakfast. Panoramic bus tour of the outer ring of the center, passing through the Jewish quarter, maritime museum, the port. Then we will begin a boat ride through Amsterdam\'s canals, declared World Heritage Site, passing by landmarks such as the Rijksmuseum, the mythical canal belt, the Amstel river and its locks, the golden curve, the famous Magere Brug, and part of the Jewish quarter to the old port and Heineken brewery. Free time. Optional Visits: Marken + Volendam + Zaanse Schans Windmills. Accommodation.'
      },
      {
        day: 11,
        title: 'AMSTERDAM - BOPPARD - RHINE CRUISE - ST. GOAR - FRANKFURT',
        summary: 'Enchanting Rhine River cruise',
        details: 'Breakfast. Departure to arrive in Boppard, where we will board a cruise to St. Goar with time to stroll. Continue to Rommer Plaza in Frankfurt to visit. Accommodation.'
      },
      {
        day: 12,
        title: 'FRANKFURT - ROTHENBURG - FÜSSEN - INNSBRUCK',
        summary: 'The Romantic Road',
        details: 'Breakfast and departure to Rothenburg for an orientation tour of the jewel of Germany\'s Romantic Road. Continue to Füssen with brief stop to view Neuschwanstein Castle. Continue to Innsbruck. Accommodation.'
      },
      {
        day: 13,
        title: 'INNSBRUCK - PADUA - VENICE',
        summary: 'Through the Alps to the Veneto',
        details: 'Breakfast. Morning panoramic tour of the historic center including its Golden Roof. Continue to Padua, where we can enter and visit St. Anthony\'s Basilica, then departure to Venice. Accommodation. In the evening, possibility of optional visit: Venice by Night + Motorboat Ride.'
      },
      {
        day: 14,
        title: 'VENICE - PISA - FLORENCE',
        summary: 'From Carnival to the Renaissance',
        details: 'Breakfast. Take a boat to St. Mark\'s Square where we will do an orientation tour highlighting the Basilica, the Campanile, the Doge\'s Palace, etc., with possibility of visiting a furnace where they will demonstrate the art of Murano glass. Optional Visit: Gondola Ride. Then departure to Pisa to see its famous "Leaning Tower". Continue to Florence. Dinner and Accommodation.'
      },
      {
        day: 15,
        title: 'FLORENCE - ROME - Tuscany, Umbria and Lazio',
        summary: 'Explore Florence, travel to Rome',
        details: 'Breakfast and walking panoramic tour with Piazza della Signoria, the Duomo, the impressive Santa Maria dei Fiore, the Baptistery, Santa Croce, Ponte Vecchio, etc. Free time and in the afternoon continuation to Rome. Arrival and Accommodation. Optional Visits: Baroque Rome and/or Special Dinner with music.'
      },
      {
        day: 16,
        title: 'ROME - The Eternal, the Imperial, the Christian',
        summary: 'Full day exploring Rome',
        details: 'Breakfast. Early morning optional visit: Vatican Museums and Sistine Chapel. Then, everyone will take the panoramic tour where we will see St. Peter\'s Square, Via della Conciliazione and continue walking through the Trastevere district. From our bus we will see Tiber Island, the temples of Hercules and Portunus, the Mouth of Truth, etc. We will tour some of the seven historic hills on which Rome was founded: Aventine, Palatine, Celio, and arrive at Circus Maximus and the Baths of Emperor Caracalla, the most beautiful in Rome. We will see some important churches, like St. John Lateran to end with the symbol of Ancient Rome: the Colosseum. Free afternoon. Optional Visit: Colosseum and Roman Forums. Accommodation.'
      },
      {
        day: 17,
        title: 'ROME (NAPLES - CAPRI) - Vesuvius and Pizza',
        summary: 'Free day with optional excursion',
        details: 'Breakfast. Free day in this city. Optional Visit: Naples and Capri. Accommodation.'
      },
      {
        day: 18,
        title: 'ROME - DEPARTURE - Back Home',
        summary: 'Transfer to airport',
        details: 'Breakfast and transfer to airport. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'MADRID - Puerta de Europa',
        summary: 'Llegada a Madrid, bienvenida',
        details: 'Llegada y traslado al hotel. A las 17:00 hrs reunión con el personal de Surland en la recepción del hotel para conocer al resto de participantes. Alojamiento.'
      },
      {
        day: 2,
        title: 'MADRID - Permítase unas tapas',
        summary: 'Visita panorámica de Madrid',
        details: 'Desayuno. Por la mañana, Visita panorámica de la ciudad: Plaza de Oriente, Palacio Real, Plaza de España, Puerta del Sol, etc. Tarde libre en la que podremos realizar la siguiente Visita Opcional: Toledo Medio día PM y/o Show Flamenco con Copa. Alojamiento.'
      },
      {
        day: 3,
        title: 'MADRID - BURGOS - BURDEOS - Esplendor gótico',
        summary: 'Visita a la Catedral de Burgos, continuación a Burdeos',
        details: 'Desayuno. Salida hacia Burgos y parada para visitar su Catedral Gótica. Continuación a Burdeos. Alojamiento.'
      },
      {
        day: 4,
        title: 'BURDEOS - CASTILLOS DEL LOIRA - PARÍS',
        summary: 'De viñedos y castillos camino a París',
        details: 'Desayuno. Salida al Valle del Loira con tiempo libre para admirar el Castillo de Amboise. Llegada a París. Por la noche, posibilidad de realizar la Visita Opcional: Iluminaciones de París. Alojamiento.'
      },
      {
        day: 5,
        title: 'PARÍS - La ciudad luz',
        summary: 'Tour panorámico completo de París',
        details: 'Desayuno. Visita panorámica de la ciudad: Campos Elíseos, Plaza de la Concorde, Arco del Triunfo, Ópera, Barrio Latino, Sorbona, Panteón, Inválidos, Escuela Militar, Campo de Marte, etc. Tarde libre donde tendremos la posibilidad de realizar la Visita Opcional del Crucero por el Sena en Bateaux Mouche + Montmartre, o de asistir a alguno de los Cabarets nocturnos de París. Alojamiento.'
      },
      {
        day: 6,
        title: 'PARÍS - Boutiques y champagne',
        summary: 'Día libre en París',
        details: 'Desayuno. Día libre. Posibilidad de realizar, normalmente por la mañana, la Visita Opcional del Palacio y Jardines de Versalles. Alojamiento.'
      },
      {
        day: 7,
        title: 'PARÍS - CALAIS - DOVER - LONDRES',
        summary: 'Cruce del Canal hacia Inglaterra',
        details: 'Desayuno. Salida hacia Calais para embarcar en ferry cruzando el Canal de la Mancha hasta Dover. Llegada y continuación en bus hasta Londres. Visita Opcional: Londres histórico con pub. Alojamiento.'
      },
      {
        day: 8,
        title: 'LONDRES - El West End y la City',
        summary: 'Visita panorámica de Londres',
        details: 'Desayuno. Por la mañana visita panorámica de la ciudad con breve parada para admirar el Parlamento con el Big Ben y la Abadía de Westminster. Seguiremos nuestro recorrido por Trafalgar Square, Picadilly Circus, Regent Street, etc. Tarde libre o Visita Opcional: Castillo de Windsor. Alojamiento.'
      },
      {
        day: 9,
        title: 'LONDRES - CALAIS - BRUJAS - ÁMSTERDAM',
        summary: 'Regreso al continente vía Brujas',
        details: 'Desayuno. Salida hacia Dover para embarcar en ferry cruzando el Canal de la Mancha hasta Calais. Continuación del viaje hasta Brujas con breve parada. Llegada a Ámsterdam. Alojamiento.'
      },
      {
        day: 10,
        title: 'ÁMSTERDAM - Diamantes, tulipanes y bicicletas',
        summary: 'Tour de la ciudad y crucero por canales',
        details: 'Desayuno. Visita panorámica en bus por el anillo exterior del centro, pasando por barrio judío, museo marítimo, el puerto. Seguidamente iniciaremos un paseo en barco por los canales de Ámsterdam declarados Patrimonio de la Humanidad, pasando por los puntos emblemáticos de la ciudad tales como el Rijksmuseum, el mítico cinturón de canales, el rio Amstel y sus esclusas, la curva de oro, el famoso Magere Brug, y parte del barrio judío hasta el antiguo puerto y la fábrica de cerveza Heineken. Tiempo Libre. Visitas Opcionales: Marken + Volendam + Molinos de Zaanse Schans. Alojamiento.'
      },
      {
        day: 11,
        title: 'ÁMSTERDAM - BOPPARD - CRUCERO RHIN - ST. GOAR - FRANKFURT',
        summary: 'Encantador crucero por el Río Rin',
        details: 'Desayuno. Salida para llegar a Boppard, donde embarcaremos en un crucero hasta St. Goar con tiempo para pasear. Continuaremos hasta la Plaza Rommer en Frankfurt para visitarla. Alojamiento.'
      },
      {
        day: 12,
        title: 'FRANKFURT - ROTEMBURGO - FÜSSEN - INNSBRUCK',
        summary: 'La Ruta Romántica',
        details: 'Desayuno y salida a Rotemburgo para efectuar un tour de orientación a la Joya de la ruta romántica Alemana. Continuación a Fussen con breve parada para contemplar el castillo de Neuschwanstein. Continuación a Innsbruck. Alojamiento.'
      },
      {
        day: 13,
        title: 'INNSBRUCK - PADUA - VENECIA',
        summary: 'Por los Alpes al Véneto',
        details: 'Desayuno. Por la mañana visita panorámica del centro histórico incluyendo su tejadito de Oro. Continuaremos hacia Padua, donde podremos entrar a visitar la Basílica de San Antonio, y a continuación, salida a Venecia. Alojamiento. Por la noche, posibilidad de realizar la siguiente Visita Opcional: Venecia de Noche + Paseo en lancha.'
      },
      {
        day: 14,
        title: 'VENECIA - PISA - FLORENCIA',
        summary: 'Del carnaval al Renacimiento',
        details: 'Desayuno. Tomaremos un barco hasta la Plaza de San Marcos donde haremos un tour de orientación destacando la Basílica, el Campanile, el Palacio Ducal etc., con posibilidad de visitar un horno donde nos harán una demostración del arte del cristal de Murano. Visita Opcional: Paseo en góndola. Después salida a Pisa para conocer su famosa "Torre Inclinada". Continuación a Florencia. Cena y Alojamiento.'
      },
      {
        day: 15,
        title: 'FLORENCIA - ROMA - Toscana, Umbria y Lazio',
        summary: 'Explora Florencia, viaje a Roma',
        details: 'Desayuno y visita panorámica a pie con la Plaza de la Signoria, el Duomo, la impresionante Santa María dei Fiore, el Baptisterio, la Santa Croce, el Ponte Vecchio, etc. Tiempo libre y por la tarde continuación a Roma. Llegada y Alojamiento. Visitas Opcionales: Roma Barroca y/o Cena Especial con música.'
      },
      {
        day: 16,
        title: 'ROMA - La eterna, la imperial, la cristiana',
        summary: 'Día completo explorando Roma',
        details: 'Desayuno. A primera hora podremos realizar la Visita Opcional: Museos Vaticanos y Capilla Sixtina. Después, todos realizaremos la Visita panorámica donde conoceremos la plaza de San Pedro, la vía de la Conciliazione y continuaremos paseando por el barrio del Trastevere. Desde nuestro autocar veremos la Isla Tiberina, los templos de Hércules y de Portunus, la Boca de la Verdad, etc. Recorreremos algunas de las siete colinas históricas en las que fue fundada Roma: Aventino, Palatino, Celio, y llegaremos al Circo Máximo y a las Termas del emperador Caracalla, las más bellas de Roma. Veremos algunas importantes iglesias, como San Juan de Letrán para terminar con el símbolo de la Roma Antigua: el Coliseo. Tarde libre. Visita Opcional: Coliseo y Foros Romanos. Alojamiento.'
      },
      {
        day: 17,
        title: 'ROMA (NÁPOLES - CAPRI) - Vesubio y pizza',
        summary: 'Día libre con excursión opcional',
        details: 'Desayuno. Día libre en esta ciudad. Visita Opcional: Nápoles y Capri. Alojamiento.'
      },
      {
        day: 18,
        title: 'ROMA - CIUDAD DE ORIGEN - Vuelta a casa',
        summary: 'Traslado al aeropuerto',
        details: 'Desayuno y traslado al aeropuerto. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Accommodation with buffet breakfast for 17 nights',
      '1 dinner in Florence on day 14',
      'Luxury bus throughout the entire route',
      'Arrival and departure transfers',
      'Professional tour guide throughout the bus journey',
      'Panoramic tours with local guides in Madrid, Paris, London, Amsterdam, Innsbruck, Florence, Rome',
      'English Channel crossing by ferry (Calais/Dover/Calais)',
      'Amsterdam Canal Cruise',
      'Rhine River cruise (approximately 1 hour) between Boppard and St. Goar',
      'Walk through Rome\'s Trastevere district',
      'Boat in Venice with cruise through the lagoon islands',
      'Tourist insurance',
      'City taxes included'
    ],
    es: [
      'Estancia en régimen de alojamiento y desayuno buffet',
      '1 cena en Florencia el día 14 del itinerario',
      'Bus de lujo durante todo el recorrido',
      'Traslados de llegada y salida',
      'Guía acompañante profesional durante todo el recorrido en bus',
      'Visitas panorámicas con guía local en Madrid, París, Londres, Ámsterdam, Innsbruck, Florencia, Roma',
      'Cruce del Canal de la Mancha Calais/Dover/Calais en Ferry',
      'Crucero por los Canales de Ámsterdam',
      'Crucero por el Rhin de 1 hora aproximadamente, entre Boppard y St. Goar',
      'Paseo por el barrio del Trastevere en Roma',
      'Barco en Venecia con crucero por las islas de la laguna',
      'Seguro turístico',
      'Tasas de estancia'
    ]
  };

  const notIncludedItems = {
    en: [
      'Tips for drivers and guides',
      'International flights',
      'Optional excursions',
      'Meals not specified',
      'Any service not specified in the itinerary or in "What\'s Included"'
    ],
    es: [
      'Propinas para conductores y guías',
      'Vuelos internacionales',
      'Excursiones opcionales',
      'Comidas no especificadas',
      'Cualquier servicio no especificado en el itinerario o en "El precio incluye"'
    ]
  };

  const optionalExtensions = {
    en: [
      {
        title: 'French Riviera and Spain Extension',
        description: 'Extend your journey from Rome through the French Riviera and Barcelona back to Madrid'
      },
      {
        title: 'Amalfi Coast Extension',
        description: 'Discover the stunning Amalfi Coast with its dramatic cliffs and charming coastal towns'
      }
    ],
    es: [
      {
        title: 'Extensión Costa Azul y España',
        description: 'Amplía tu viaje desde Roma por la Costa Azul y Barcelona de regreso a Madrid'
      },
      {
        title: 'Extensión Costa Amalfitana',
        description: 'Descubre la impresionante Costa Amalfitana con sus acantilados dramáticos y pueblos costeros encantadores'
      }
    ]
  };

  const availableDates = {
    en: {
      '2026': {
        'April': '02, 16, 30',
        'May': '14, 28',
        'June': '04, 11, 25',
        'July': '02, 09, 23',
        'August': '06, 20',
        'September': '03, 10, 17',
        'October': '01, 08, 15, 29',
        'November': '12, 26',
        'December': '10, 17, 24'
      },
      '2027': {
        'January': '07, 21',
        'February': '04, 18',
        'March': '04, 18, 25'
      }
    },
    es: {
      '2026': {
        'Abril': '02, 16, 30',
        'Mayo': '14, 28',
        'Junio': '04, 11, 25',
        'Julio': '02, 09, 23',
        'Agosto': '06, 20',
        'Septiembre': '03, 10, 17',
        'Octubre': '01, 08, 15, 29',
        'Noviembre': '12, 26',
        'Diciembre': '10, 17, 24'
      },
      '2027': {
        'Enero': '07, 21',
        'Febrero': '04, 18',
        'Marzo': '04, 18, 25'
      }
    }
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const dates = availableDates[language];
  const extensions = optionalExtensions[language];

  return (
    <div className="min-h-screen">
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
                <span>Madrid → Rome</span>
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

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {t.extensions}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {extensions.map((ext, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#1e3a5f]">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{ext.title}</h3>
                <p className="text-gray-700">{ext.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  {Object.entries(months as Record<string, string>).map(([month, days]) => (
                    <div key={month} className="border-l-4 border-[#1e3a5f] pl-4">
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

      <section className="py-12 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-gray-100">
            {t.ctaText}
          </p>
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
