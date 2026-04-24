import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function BerlinPragueCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'Berlin to Prague',
      titleSub: 'Along the Elbe River',
      subtitle: 'Historic capitals and timeless landscapes from Germany to the Czech Republic',
      duration: '9 Days / 8 Nights',
      route: 'Berlin \u2192 Prague',
      ref: 'Ref. BPG_PPES',
      intro: 'From Berlin to Prague, between historic monuments and traditions, a journey through the cities of Germany and the Czech Republic, marked by their past and cultural diversity -- Berlin, Potsdam, Dresden, and Prague, authentic and full of charm. Through excursions you will visit emblematic places such as the gardens of Sanssouci Palace and the Elbe Sandstone Mountains, the Elbsandsteingebirge.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Ready to Sail from Berlin to Prague?',
      ctaText: 'Contact us today to reserve your cabin on this unforgettable 9-day river cruise along the Elbe through Germany and the Czech Republic.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 2,045 \u20ac',
      pricingContact: 'Contact Us for Cabin Pricing',
      pricingNote: 'Multiple cabin categories available. Contact us for detailed pricing, availability, and group rates.',
      showMore: 'Show all excursions',
      showLess: 'Show fewer excursions',
      croisiHighlights: 'CroisiEurope Highlights',
      portToPort: 'Port-to-Port Formula',
      cabinTitle: 'Double Exterior Cabin',
      cabinDesc: 'All cabins are exterior with full private bathroom, air conditioning, and river views.'
    },
    es: {
      featured: 'Crucero Fluvial',
      title: 'De Berl\u00edn a Praga',
      titleSub: 'Por el R\u00edo Elba',
      subtitle: 'Capitales hist\u00f3ricas y paisajes eternos de Alemania a la Rep\u00fablica Checa',
      duration: '9 D\u00edas / 8 Noches',
      route: 'Berl\u00edn \u2192 Praga',
      ref: 'R\u00e9f. BPG_PPES',
      intro: 'De Berl\u00edn a Praga, entre monumentos hist\u00f3ricos y tradiciones, un recorrido por las ciudades de Alemania y la Rep\u00fablica Checa, marcadas por su pasado y diversidad cultural como Berl\u00edn, Potsdam, Dresde y Praga, aut\u00e9nticas y llenas de encanto. Mediante excursiones se podr\u00e1n visitar algunos lugares emblem\u00e1ticos como los jardines del palacio de Sans Souci o el macizo de roca arenisca del Elba, el Elbsandsteingebirge.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: '\u00bfListo para Navegar de Berl\u00edn a Praga?',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este inolvidable crucero fluvial de 9 d\u00edas por el Elba a trav\u00e9s de Alemania y la Rep\u00fablica Checa.',
      callNow: 'Cont\u00e1ctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n',
      pricing: 'Precios',
      priceFrom: 'Desde 2.045 \u20ac',
      pricingContact: 'Cont\u00e1ctenos para Precios de Cabinas',
      pricingNote: 'M\u00faltiples categor\u00edas de cabinas disponibles. Cont\u00e1ctenos para precios detallados, disponibilidad y tarifas de grupo.',
      showMore: 'Ver todas las excursiones',
      showLess: 'Ver menos excursiones',
      croisiHighlights: 'Destacados CroisiEurope',
      portToPort: 'F\u00f3rmula Puerto/Puerto',
      cabinTitle: 'Cabina Doble Exterior',
      cabinDesc: 'Todas las cabinas son exteriores con ba\u00f1o completo privado, aire acondicionado y vistas al r\u00edo.'
    }
  };

  const highlightsList = {
    en: [
      'Berlin, iconic capital and witness to the division of the world',
      'Potsdam and the magnificent gardens of Sanssouci Palace, designed under Frederick the Great',
      'Magdeburg, on the Middle Elbe and the Romanesque Route -- one of Germany\'s great Gothic cathedrals',
      'Wittenberg, Luther\'s city and UNESCO World Heritage -- the Reformation Museum',
      'Meissen and its world-famous porcelain factory',
      'Dresden, the "Florence of the Elbe" -- 700 years of ducal and royal residence',
      'Elbsandsteingebirge (Saxon Switzerland) and Königstein Fortress',
      'Litom\u011b\u0159ice, one of the oldest cities in Bohemia',
      'Prague -- the Old Town, Jewish Quarter, astronomical clock, and Prague Castle',
      'All meals and beverages included onboard'
    ],
    es: [
      'Berl\u00edn, capital emblem\u00e1tica y testigo de la divisi\u00f3n del mundo',
      'Potsdam y los magn\u00edficos jardines del Palacio de Sanssouci, dise\u00f1ados bajo Federico el Grande',
      'Magdeburgo, en el curso medio del Elba y la "Ruta del Rom\u00e1nico" -- catedral g\u00f3tica de Alemania',
      'Wittenberg, la ciudad de Lutero y Patrimonio de la Humanidad -- el Museo de la Reforma',
      'Meissen y su c\u00e9lebre f\u00e1brica de porcelana',
      'Dresde, la "Florencia del Elba" -- 700 a\u00f1os de residencia de duques y reyes',
      'Elbsandsteingebirge (Suiza sajona) y la fortaleza de Koenigstein',
      'Litom\u011b\u0159ice, una de las ciudades m\u00e1s antiguas de Bohemia',
      'Praga -- casco antiguo, barrio jud\u00edo, reloj astron\u00f3mico y el Castillo de Praga',
      'Todas las comidas y bebidas incluidas a bordo'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'BERLIN - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail, dinner',
        details: 'Embarkation at 6:00 PM in Berlin and settling into cabins. Crew presentation and welcome cocktail. Dinner onboard.'
      },
      {
        day: 2,
        title: 'POTSDAM - W\u00dcSTERWITZ - Sanssouci Gardens',
        summary: 'Berlin guided tour, Sanssouci Palace gardens, entertainment night',
        details: 'Optional guided excursion of Berlin, a young capital that once embodied the division of the world. Return onboard. Discover the idyllic charm of the Havel lakes; skirt the Peacock Island and admire the historic buildings. Departure for the optional excursion to the gardens of Sanssouci Palace, a magnificent park of beautiful gardens designed during the reign of Frederick the Great. Return onboard. Departure toward W\u00fcsterwitz. Entertainment night onboard.'
      },
      {
        day: 3,
        title: 'W\u00dcSTERWITZ - MAGDEBURG - Gothic Masterpiece',
        summary: 'Morning navigation, Magdeburg guided tour, dance night',
        details: 'The ship departs early morning toward Magdeburg. A perfect morning of navigation to admire the landscape or join onboard activities. Arrival in Magdeburg in the early afternoon. Optional excursion of the city, located on the Middle Elbe and the "Romanesque Route." The cathedral is one of the most important Gothic buildings in Germany. Return onboard and departure. Dance night onboard. Night navigation.'
      },
      {
        day: 4,
        title: 'WITTENBERG - The Reformation City',
        summary: 'Luther\'s City guided tour, Luther House Museum, quiz night',
        details: 'Arrival in Wittenberg and departure for the optional guided tour of Luther\'s City. Discover the old town and its beautiful Renaissance-style patrician houses. Visit Luther\'s House, originally an Augustinian monastery and now home to the world\'s largest Reformation Museum, a UNESCO World Heritage Site. Return onboard. Afternoon navigation. Quiz competition night onboard. Night navigation.'
      },
      {
        day: 5,
        title: 'MEISSEN - DRESDEN - Florence of the Elbe',
        summary: 'Meissen porcelain factory, Dresden guided tour, dance night',
        details: 'Arrival in Meissen and optional excursion of the city and its famous porcelain factory. Discover the manufacturing process of "hard-paste" porcelain and admire the magnificent pieces displayed in the museum. Continue the visit admiring Albrechtsburg Castle (exterior) and the cathedral (exterior). Return onboard in Dresden. In the afternoon, optional excursion of the "Florence of the Elbe." Of Slavic origin and Germanized in the 12th century by the Margraves of Meissen, the city was the residence of dukes and kings for 700 years. Its impressive architectural and artistic heritage makes it one of Germany\'s most important tourist centers. Dance night onboard.'
      },
      {
        day: 6,
        title: 'BAD SCHANDAU - LITOM\u011a\u0158ICE - Saxon Switzerland',
        summary: 'Elbsandsteingebirge and Königstein Fortress, Saxon Switzerland scenery',
        details: 'Departure for the optional excursion to the Elbsandsteingebirge (Elbe sandstone massif in Saxon Switzerland). Discover K\u00f6nigstein Fortress rising above a rocky Elbe mountain. Built in the 13th century and remodeled over the years, this magnificent construction served as both refuge and prison. Return onboard and continuation of navigation through the magnificent Saxon Switzerland region, alternating meadows, forests, lakes, vineyards, and castles. Entertainment night onboard.'
      },
      {
        day: 7,
        title: 'LITOM\u011a\u0158ICE - MELNIK - Into Bohemia',
        summary: 'Litom\u011b\u0159ice guided tour, deck games, crew evening',
        details: 'Optional guided excursion of Litom\u011b\u0159ice, a royal city and one of the oldest in Bohemia, founded in the 13th century, whose historic center is a protected monument. The arcaded houses around the central square, the many typical churches, and galleries tell the story of its historic vicissitudes. Return onboard at Roudnice and afternoon navigation toward Kralupy. Afternoon deck games and onboard activities. Early evening arrival at the Czech capital. Evening with the crew.'
      },
      {
        day: 8,
        title: 'MELNIK - PRAGUE - The Golden City',
        summary: 'Prague Old Town, Prague Castle quarter, gala night',
        details: 'Optional guided tour of Prague\'s Old Town ("Star\u00e9 M\u011bsto"), a quarter whose origins date back over 1,000 years and one of the principal historic sites of Bohemia. Walking through the city\'s narrow streets, discover the Jewish Quarter, the Town Hall with its famous astronomical clock, and the Church of Our Lady of T\u00fdn. Optional excursion of the Castle Quarter: palaces, churches, and convents harmoniously surround the castle that dominates the capital. Also discover St. Vitus Cathedral, the largest religious building in the country and one of the most prestigious Gothic cathedrals in Europe, the Old Royal Palace, and the Golden Lane. Gala night onboard.'
      },
      {
        day: 9,
        title: 'PRAGUE - Farewell',
        summary: 'Breakfast, disembarkation',
        details: 'Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'BERL\u00cdN - Bienvenida a Bordo',
        summary: 'Embarque, c\u00f3ctel de bienvenida, cena',
        details: 'Embarque a las 18:00h en Berl\u00edn y acomodaci\u00f3n en los camarotes. Presentaci\u00f3n de la tripulaci\u00f3n y c\u00f3ctel de bienvenida. Cena a bordo.'
      },
      {
        day: 2,
        title: 'POTSDAM - W\u00dcSTERWITZ - Jardines de Sanssouci',
        summary: 'Excursi\u00f3n de Berl\u00edn, jardines del Palacio de Sanssouci, noche de animaci\u00f3n',
        details: 'Excursi\u00f3n guiada opcional de Berl\u00edn, capital joven que protagoniz\u00f3 la divisi\u00f3n del mundo en dos partes. Regreso a bordo. Se podr\u00e1 descubrir el encanto id\u00edlico de los lagos de Havel; se bordear\u00e1 la isla de los pavos reales y se podr\u00e1n admirar los edificios hist\u00f3ricos. Salida para la excursi\u00f3n opcional de los jardines del Palacio de Sanssouci, magn\u00edfico parque de hermosos jardines dise\u00f1ado durante el reinado de Federico el Grande. Regreso a bordo. Salida del crucero a Wusterwitz. Noche de animaci\u00f3n a bordo.'
      },
      {
        day: 3,
        title: 'W\u00dcSTERWITZ - MAGDEBURGO - Obra Maestra G\u00f3tica',
        summary: 'Ma\u00f1ana de navegaci\u00f3n, visita guiada de Magdeburgo, noche de baile',
        details: 'Salida del barco a primera hora de la ma\u00f1ana en direcci\u00f3n a Magdeburgo. Ma\u00f1ana de navegaci\u00f3n perfecta para admirar el paisaje o para participar de la animaci\u00f3n a bordo. Llegada a Magdeburgo a primera hora de la tarde y salida para la excursi\u00f3n opcional de la ciudad, situada en el curso medio del r\u00edo Elba y de la "Ruta del Rom\u00e1nico." La catedral es uno de los edificios g\u00f3ticos m\u00e1s importantes de Alemania. Regreso a bordo y salida del crucero. Noche de baile a bordo. Navegaci\u00f3n nocturna.'
      },
      {
        day: 4,
        title: 'WITTENBERG - La Ciudad de Lutero',
        summary: 'Visita guiada de Wittenberg, Casa de Lutero, noche de concurso',
        details: 'Llegada a Wittenberg y salida para la excursi\u00f3n guiada opcional de la ciudad de Lutero. Se podr\u00e1 descubrir el casco antiguo y sus preciosas casas patricias de estilo renacentista. Visita de la casa de Lutero que originalmente fue un monasterio agustino y que alberga actualmente el museo de la Reforma m\u00e1s grande del mundo, declarado Patrimonio de la Humanidad por la UNESCO. Regreso a bordo. Tarde de navegaci\u00f3n. Noche de concurso a bordo. Navegaci\u00f3n de noche.'
      },
      {
        day: 5,
        title: 'MEISSEN - DRESDE - La Florencia del Elba',
        summary: 'F\u00e1brica de porcelana de Meissen, visita guiada de Dresde, noche de baile',
        details: 'Llegada a Meissen y salida para la excursi\u00f3n opcional de la ciudad y de su c\u00e9lebre f\u00e1brica de porcelana. Aqu\u00ed se podr\u00e1 descubrir el proceso de fabricaci\u00f3n de la porcelana "dura" y admirar las magn\u00edficas piezas expuestas en el museo. Continuaci\u00f3n de la visita donde se podr\u00e1 admirar el castillo Albrecht (exteriores) y la catedral (exteriores). Regreso a bordo en Dresde. Por la tarde, excursi\u00f3n opcional de la "Florencia del Elba." De origen eslavo y germanizada despu\u00e9s en el siglo XII por los margraves de Meissen, la ciudad fue la residencia de duques y reyes durante 700 a\u00f1os. Su impresionante patrimonio arquitect\u00f3nico y art\u00edstico la convierten en uno de los centros tur\u00edsticos m\u00e1s importantes de Alemania. Noche de baile a bordo.'
      },
      {
        day: 6,
        title: 'BAD SCHANDAU - LITOM\u011a\u0158ICE - Suiza Sajona',
        summary: 'Elbsandsteingebirge y fortaleza de Koenigstein, paisajes de la Suiza sajona',
        details: 'Salida para la excursi\u00f3n opcional al Elbsandsteingebirge (macizo de piedra arenisca del Elba en la Suiza sajona). Se podr\u00e1 descubrir la fortaleza de Koenigstein que se levanta sobre una monta\u00f1a rocosa del Elba. Construida en el siglo XIII y remodelada a lo largo de los a\u00f1os, esta magn\u00edfica construcci\u00f3n fue utilizada como refugio y prisi\u00f3n. Regreso a bordo y continuaci\u00f3n de la navegaci\u00f3n por la magn\u00edfica regi\u00f3n de la Suiza sajona donde alternan prados, bosques, lagos, vi\u00f1edos y castillos. Noche de animaci\u00f3n a bordo.'
      },
      {
        day: 7,
        title: 'LITOM\u011a\u0158ICE - MELNIK - Hacia Bohemia',
        summary: 'Visita guiada de Litom\u011b\u0159ice, juegos en cubierta, noche con la tripulaci\u00f3n',
        details: 'Excursi\u00f3n guiada opcional de Litom\u011b\u0159ice, ciudad real, una de las m\u00e1s antiguas de Bohemia, fundada en el siglo XIII y cuyo casco antiguo fue declarado monumento hist\u00f3rico. Las casas con arcadas dispuestas alrededor de la plaza central, las numerosas iglesias t\u00edpicas y otras galer\u00edas son una gran fuente de informaci\u00f3n de sus vicisitudes hist\u00f3ricas. Regreso a bordo en Roudnice y tarde navegaci\u00f3n hacia Kralupy. Por la tarde, juegos en cubierta y animaci\u00f3n a bordo. A primera hora de la noche, llegada a la capital checa. Noche con la tripulaci\u00f3n.'
      },
      {
        day: 8,
        title: 'MELNIK - PRAGA - La Ciudad Dorada',
        summary: 'Casco antiguo de Praga, barrio del Castillo, noche de gala',
        details: 'Excursi\u00f3n guiada opcional del casco antiguo de Praga. "Stare Mesto", este barrio cuyo origen se remonta a m\u00e1s de 1000 a\u00f1os, es uno de los principales lugares hist\u00f3ricos de Bohemia. Al pasear por las callejuelas de la ciudad se podr\u00e1n descubrir entre otros, el barrio jud\u00edo, el ayuntamiento y su famoso reloj astron\u00f3mico y la iglesia de Nuestra Se\u00f1ora de Tyn. Excursi\u00f3n opcional del barrio del Castillo: palacios, iglesias y conventos rodean en armon\u00eda el castillo que domina la capital. Se podr\u00e1 descubrir tambi\u00e9n la catedral de San Vito, el edificio religioso m\u00e1s grande del pa\u00eds y una de las catedrales g\u00f3ticas m\u00e1s prestigiosas de Europa, el antiguo Palacio real y la Calle de oro. Noche de gala a bordo.'
      },
      {
        day: 9,
        title: 'PRAGA - Despedida',
        summary: 'Desayuno, desembarque',
        details: 'Desayuno a bordo. Desembarque a las 9:00h. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Full board from dinner on day 1 to breakfast on day 9',
      'Beverages included onboard (except special wine/drink lists)',
      'Double exterior cabin with full private bathroom',
      'Onboard entertainment and activities',
      'Onboard assistance throughout the cruise',
      'Welcome cocktail',
      'Gala dinner evening',
      'Dance and quiz nights',
      'Refined French cuisine',
      'Assistance and repatriation insurance',
      'Port taxes included',
      'Free Wi-Fi onboard',
      'Individual headsets during excursions'
    ],
    es: [
      'Pensi\u00f3n completa desde la cena del primer d\u00eda al desayuno del \u00faltimo',
      'Bebidas incluidas a bordo (excepto cartas especiales)',
      'Cabina doble exterior con ba\u00f1o completo privado',
      'Animaci\u00f3n y actividades a bordo',
      'Asistencia a bordo durante todo el crucero',
      'C\u00f3ctel de bienvenida',
      'Cena y noche de gala',
      'Noches de baile y concurso',
      'Refinada cocina francesa',
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
      'Optional excursions',
      'Transfers'
    ],
    es: [
      'Bebidas que figuran en las cartas especiales',
      'Bebidas durante las excursiones o traslados',
      'Seguro de anulaci\u00f3n/equipajes',
      'Excursiones opcionales',
      'Traslados'
    ]
  };

  const excursionsList = {
    en: [
      { name: 'Berlin', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac71', onBoard: '\u20ac79' },
      { name: 'Potsdam & Sanssouci Palace Gardens', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac73', onBoard: '\u20ac81' },
      { name: 'Guided tour of Magdeburg', duration: '5h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac71', onBoard: '\u20ac79' },
      { name: 'Guided tour of Wittenberg', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac74', onBoard: '\u20ac82' },
      { name: 'Dresden', duration: '3h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac60', onBoard: '\u20ac67' },
      { name: 'Guided tour of Meissen', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac82', onBoard: '\u20ac91' },
      { name: 'Elbsandsteingebirge & K\u00f6nigstein Fortress', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac94', onBoard: '\u20ac104' },
      { name: 'Guided tour of Litom\u011b\u0159ice', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac92', onBoard: '\u20ac102' },
      { name: 'Guided tour of Prague & Castle Quarter', duration: '3h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac78', onBoard: '\u20ac87' },
      { name: 'Guided tour of Prague -- Old Town', duration: '3h', type: 'Classic', time: 'Morning', preBook: '\u20ac60', onBoard: '\u20ac67' }
    ],
    es: [
      { name: 'Berl\u00edn', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac71', onBoard: '\u20ac79' },
      { name: 'Potsdam y jardines del palacio de Sanssouci', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac73', onBoard: '\u20ac81' },
      { name: 'Visita guiada de Magdeburgo', duration: '5h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac71', onBoard: '\u20ac79' },
      { name: 'Visita guiada de Wittenberg', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac74', onBoard: '\u20ac82' },
      { name: 'Dresde', duration: '3h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac60', onBoard: '\u20ac67' },
      { name: 'Visita guiada de Meissen', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac82', onBoard: '\u20ac91' },
      { name: 'Elbsandsteingebirge y fortaleza Koenigstein', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac94', onBoard: '\u20ac104' },
      { name: 'Visita guiada de Litom\u011b\u0159ice', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac92', onBoard: '\u20ac102' },
      { name: 'Visita guiada de Praga y del Barrio del castillo', duration: '3h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac78', onBoard: '\u20ac87' },
      { name: 'Visita guiada de Praga - casco antiguo', duration: '3h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac60', onBoard: '\u20ac67' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons without this being grounds for a claim.',
      'Navigation schedules are approximate and may vary without this being grounds for a claim.',
      'As the Elbe is a wild river, water level variations are anticipated. Depending on navigation conditions, you may continue your cruise onboard a second vessel to ensure the planned visits are maintained.',
      'In the event navigation conditions require it, CroisiEurope may organize hotel nights in the Berlin and/or Prague region. Every effort will be made to select comfortable, carefully chosen establishments while maintaining the visit program.',
      'If Luther\'s House is unavailable, it will be replaced by a visit to the Wittenberg Castle Church.',
      'All excursions listed are optional.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.'
    ],
    es: [
      'En caso de crecidas o decrecidas del r\u00edo o cualquier evento de fuerza mayor, el comandante puede verse obligado a modificar el programa por motivos de seguridad sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Los horarios de navegaci\u00f3n son orientativos y pueden sufrir variaciones sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Siendo el Elba un r\u00edo salvaje, se anticipan variaciones en el nivel del agua. Seg\u00fan las condiciones de navegaci\u00f3n, podr\u00e1 continuar su crucero a bordo de un segundo barco para garantizar las visitas previstas en el programa.',
      'En caso de que las condiciones de navegaci\u00f3n lo requieran, CroisiEurope organizar\u00e1 noches de hotel en la regi\u00f3n de Berl\u00edn y/o Praga, seleccionando establecimientos c\u00f3modos y cuidadosamente elegidos para mantener el programa de visitas.',
      'Si la Casa de Lutero no est\u00e1 disponible, se sustituir\u00e1 por una visita a la Iglesia del Castillo de Wittenberg.',
      'Todas las excursiones indicadas son opcionales.',
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

  const ports = language === 'es'
    ? ['Berl\u00edn', 'Wusterwitz', 'Magdeburgo', 'Wittenberg', 'Meissen', 'Dresde', '\u00dasti', 'Litom\u011b\u0159ice', 'Praga']
    : ['Berlin', 'Wusterwitz', 'Magdeburg', 'Wittenberg', 'Meissen', 'Dresden', '\u00dcsti', 'Litom\u011b\u0159ice', 'Prague'];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c3d2e 0%, #2d5a3d 40%, #1a3a2a 100%)' }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-emerald-300/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-400/10 blur-3xl"></div>
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
            <p className="text-2xl md:text-3xl text-emerald-200 mb-6 font-light">
              {t.titleSub}
            </p>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-emerald-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-emerald-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-emerald-300 mr-2" />
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
            {ports.map((port, i, arr) => (
              <div key={i} className="flex items-center">
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#2d5a3d] text-white' : 'bg-white text-[#2d5a3d] border border-[#2d5a3d]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#2d5a3d]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2d5a3d] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="rounded-2xl p-8 md:p-10 text-white text-center shadow-xl" style={{ background: 'linear-gradient(135deg, #1c3d2e 0%, #2d5a3d 100%)' }}>
            <Ship className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
            <p className="text-4xl md:text-5xl font-bold mb-3">{t.priceFrom}</p>
            <p className="text-emerald-200 text-sm mb-4">{t.cabinTitle} &middot; {t.cabinDesc}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-green-100 text-lg max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#2d5a3d] px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#2d5a3d] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#2d5a3d] mt-1.5 mr-4"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2d5a3d] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Music, en: 'Gala & Dance Nights', es: 'Noches de Gala y Baile' },
              { icon: Users, en: 'Onboard Staff', es: 'Personal a Bordo' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#2d5a3d] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2d5a3d] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#2d5a3d]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl text-white flex flex-col items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #1c3d2e, #2d5a3d)' }}>
                      <span className="text-[10px] leading-none font-medium text-emerald-200">{language === 'en' ? 'Day' : 'D\u00eda'}</span>
                      <span className="font-bold text-sm leading-tight">{day.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#2d5a3d] text-white' : 'bg-gray-100 text-gray-400'}`}>
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
          <h2 className="text-3xl font-bold text-[#2d5a3d] mb-3 text-center">
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
                    <span className="text-lg font-bold text-[#2d5a3d]">{exc.preBook}</span>
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
                className="text-[#2d5a3d] font-semibold hover:underline transition-colors"
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
              <h2 className="text-2xl font-bold text-[#2d5a3d] mb-6 flex items-center">
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
              <h2 className="text-2xl font-bold text-[#2d5a3d] mb-6 flex items-center">
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
          <h2 className="text-2xl font-bold text-[#2d5a3d] mb-6 text-center">
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
      <section className="py-16 text-white" style={{ background: 'linear-gradient(135deg, #1c3d2e 0%, #2d5a3d 50%, #1a3a2a 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Ship className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#2d5a3d] px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
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
          <h2 className="text-3xl font-bold text-[#2d5a3d] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="berlin_prague_cruise" />
        </div>
      </section>
    </div>
  );
}
