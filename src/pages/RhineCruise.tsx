import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function RhineCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'Treasures of the Rhine',
      titleSub: 'Amsterdam to Basel',
      subtitle: 'A rich journey through history from the Netherlands to Switzerland',
      duration: '8 Days / 7 Nights',
      route: 'Amsterdam \u2192 Basel',
      intro: 'From Amsterdam to Basel, embark on a cruise rich in history. Discover iconic monuments marked by the past through cities such as Haarlem, the historic center of the tulip region, or Colmar and the Unterlinden Museum. You will stroll through the open-air museum of Arnhem, which reveals a centuries-old way of life. Sail the most beautiful stretch of the Rhine through Koblenz and Mainz, and explore Strasbourg\'s exceptional architectural heritage.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Ready to Cruise the Rhine?',
      ctaText: 'Contact us today to reserve your cabin on this unforgettable 8-day river cruise from Amsterdam to Basel.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 1,655 \u20ac',
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
      title: 'Los Tesoros del Rin',
      titleSub: 'De \u00c1msterdam a Basilea',
      subtitle: 'Un viaje rico en historia desde Holanda hasta Suiza',
      duration: '8 D\u00edas / 7 Noches',
      route: '\u00c1msterdam \u2192 Basilea',
      intro: 'De \u00c1msterdam a Basilea, embarque en un crucero rico en historia. Descubra monumentos emblem\u00e1ticos marcados por el pasado a trav\u00e9s de ciudades como Haarlem, centro hist\u00f3rico de la regi\u00f3n de los tulipanes, o Colmar y el museo de Unterlinden. Podr\u00e1 pasear hasta el museo al aire libre de Arnhem, que revela una forma de vida centenaria. Navegue por el tramo m\u00e1s bello del Rin a trav\u00e9s de Coblenza y Maguncia, y explore el excepcional patrimonio arquitect\u00f3nico de Estrasburgo.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: '\u00bfListo para Navegar el Rin?',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este inolvidable crucero fluvial de 8 d\u00edas de \u00c1msterdam a Basilea.',
      callNow: 'Cont\u00e1ctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n',
      pricing: 'Precios',
      priceFrom: 'Desde 1.655 \u20ac',
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
      'From Holland to the three-country region -- a unique blend of nature and culture',
      'Amsterdam and its unique atmosphere, canals, and UNESCO World Heritage center',
      'Keukenhof floral park with its delicate fragrances and spring colors',
      'Haarlem, the golden age of the 17th century',
      'Open-air museum of Arnhem revealing centuries-old Dutch life',
      'Cologne and its magnificent Gothic cathedral',
      'The most beautiful stretch of the Rhine from Koblenz to Mainz',
      'Strasbourg, a subtle blend of tradition and modernity',
      'Colmar and the Unterlinden Museum -- 7,000 years of history',
      'All meals and beverages included onboard'
    ],
    es: [
      'De Holanda a la regi\u00f3n de los tres pa\u00edses -- mezcla \u00fanica de naturaleza y cultura',
      '\u00c1msterdam y su atm\u00f3sfera \u00fanica, canales y centro Patrimonio de la Humanidad',
      'Parque floral del Keukenhof con sus fragancias delicadas y colores primaverales',
      'Haarlem, la \u00e9poca dorada del siglo XVII',
      'Museo al aire libre de Arnhem que revela la vida holandesa centenaria',
      'Colonia y su magn\u00edfica catedral g\u00f3tica',
      'El tramo m\u00e1s bello del Rin de Coblenza a Maguncia',
      'Estrasburgo, una mezcla sutil de tradici\u00f3n y modernidad',
      'Colmar y el Museo Unterlinden -- 7.000 a\u00f1os de historia',
      'Todas las comidas y bebidas incluidas a bordo'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: '\u00c1MSTERDAM - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail, dinner',
        details: 'Embarkation at 6:00 PM. Presentation of the crew and welcome cocktail. Dinner onboard. Overnight stop.'
      },
      {
        day: 2,
        title: '\u00c1MSTERDAM - The City of Canals',
        summary: 'Amsterdam tour or bike ride, Keukenhof or Haarlem, navigation to Nijmegen',
        details: 'Morning optional excursions. "Classic" excursion: Amsterdam guided tour by canal boat through the UNESCO-listed canals, admiring the narrow gabled houses, 17th-century palaces, and extraordinary bridges. "Dynamic" excursion: guided bicycle tour discovering secret and unusual places known only to Amsterdam locals, passing the Dam Square, Royal Palace, Anne Frank House, Nieuwmarkt, and Rembrandt House. Afternoon optional excursion: Keukenhof floral park (pre-booking required) -- stroll at your own pace through 32 hectares of tulips, daffodils, and other bulb flowers, with the orchid pavilion, Japanese-inspired garden, and an 1892 windmill with stunning views of the tulip fields. Outside Keukenhof opening dates, visit to Haarlem. Return onboard and departure toward Nijmegen.'
      },
      {
        day: 3,
        title: 'NIJMEGEN - XANTEN - D\u00dcSSELDORF - Open-Air Museum',
        summary: 'Arnhem open-air museum, afternoon navigation, entertainment night',
        details: 'Arrival in Nijmegen overnight. Morning optional excursion: the Dutch Open-Air Museum of Arnhem. Some 80 authentic farms, windmills, workshops, houses, a school, barns, and a church evoke the architecture and life of bygone days in the provinces of the Netherlands. Inside each building, typical furniture and craft demonstrations make the visit especially fascinating. Discover the beautiful half-timbered buildings of Limburg, the farms of Gelderland, and the charming Zaan region with its gracefully decorated green wooden houses. Return onboard at Xanten. Afternoon navigation to D\u00fcsseldorf. Evening entertainment onboard. Night navigation to Cologne.'
      },
      {
        day: 4,
        title: 'COLOGNE - KOBLENZ - Gothic Splendor',
        summary: 'Guided tour of Cologne, Rhine navigation to Koblenz',
        details: 'Optional excursion: guided tour of Cologne, an ancient Roman city of great importance. Admire the exterior of the cathedral, whose construction took over five centuries. This Gothic masterpiece is a true testament to the strength and persistence of the Christian faith in Europe. Visit the old town and pass by the famous Eau de Cologne house (exterior). Free time to stroll through the streets of Cologne. Return onboard at Koenigswinter. Continue navigation ascending the Rhine to Koblenz. Walk to the "Deutsches Eck" (German Corner), where the Moselle meets the Rhine.'
      },
      {
        day: 5,
        title: 'KOBLENZ - MAINZ - The Most Beautiful Rhine',
        summary: 'Navigation through the finest stretch of the Rhine, Mainz and Gutenberg Museum',
        details: 'Early morning navigation toward Mainz through the most beautiful section of the Rhine. Optional excursion: guided tour of Mainz and the Gutenberg Museum. Visit the city of Mainz on foot and enter its magnificent cathedral. Stroll through the picturesque streets of the old town. Visit the Gutenberg Museum, the museum of printing. Dance evening. Night navigation toward Strasbourg.'
      },
      {
        day: 6,
        title: 'STRASBOURG - BREISACH - European Capital',
        summary: 'Strasbourg by excursion boat and cathedral, gala night',
        details: 'Arrival in Strasbourg in the morning. Optional excursion: Strasbourg by excursion boat and its cathedral (pre-booking required). Strasbourg, marked by a turbulent history, enjoys exceptional architectural heritage. A subtle blend of tradition and modernity, historic monuments coexist with the most modern structures. Return onboard. Navigation toward Breisach am Rhein. Gala night.'
      },
      {
        day: 7,
        title: 'BREISACH - BASEL - Alsatian Wine Country',
        summary: 'Free time in Vieux-Brisach, Colmar and Unterlinden Museum, entertainment night',
        details: 'Morning free time in Vieux-Brisach. Return onboard. Afternoon optional excursion: visit of Colmar and the Unterlinden Museum. The capital of Alsatian wines will enchant travelers with its authenticity and typical Alsatian architecture -- colorful half-timbered houses dating from the Middle Ages. Discover the picturesque Petite Venise quarter, then visit the Unterlinden Museum. It offers a journey spanning nearly 7,000 years of history, from prehistory to 20th-century art. The masterpiece is the Isenheim Altarpiece (1512-1516) by Matthias Gr\u00fcnewald. Navigation toward Basel. Entertainment night.'
      },
      {
        day: 8,
        title: 'BASEL - Farewell',
        summary: 'Breakfast, disembarkation',
        details: 'Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: '\u00c1MSTERDAM - Bienvenida a Bordo',
        summary: 'Embarque, c\u00f3ctel de bienvenida, cena',
        details: 'Embarque a las 18:00h. Presentaci\u00f3n de la tripulaci\u00f3n y c\u00f3ctel de bienvenida. Cena a bordo. Escala nocturna.'
      },
      {
        day: 2,
        title: '\u00c1MSTERDAM - La Ciudad de los Canales',
        summary: 'Tour de \u00c1msterdam o en bicicleta, Keukenhof o Haarlem, navegaci\u00f3n a Nimega',
        details: 'Por la ma\u00f1ana, excursiones opcionales. Excursi\u00f3n "cl\u00e1sica": \u00c1msterdam. Recorrido en barco por los pintorescos canales declarados Patrimonio de la Humanidad por la UNESCO, admirando las casas estrechas a pi\u00f1ones, los palacios del siglo XVII y los magn\u00edficos puentes que ofrecen un paisaje urbano extraordinario. Excursi\u00f3n "din\u00e1mica": visita guiada en bicicleta por \u00c1msterdam descubriendo lugares secretos e ins\u00f3litos. Paso por la Plaza Dam, el Palacio Real, la casa de Ana Frank, el Nieuwmarkt y la casa de Rembrandt. Por la tarde, excursi\u00f3n opcional: visita del parque floral de Keukenhof (s\u00f3lo con reserva previa). Paseo por 32 hect\u00e1reas entre parterres de tulipanes, narcisos y flores de bulbo, con el pabell\u00f3n de orqu\u00eddeas, el jard\u00edn de inspiraci\u00f3n japonesa y un molino de 1892 con vistas impresionantes. Fuera de las fechas de apertura, visita de Haarlem. Regreso a bordo y salida hacia Nimega.'
      },
      {
        day: 3,
        title: 'NIMEGA - XANTEN - D\u00dcSSELDORF - Museo al Aire Libre',
        summary: 'Museo al aire libre de Arnhem, navegaci\u00f3n por la tarde, noche de animaci\u00f3n',
        details: 'Llegada a Nimega durante la noche. Por la ma\u00f1ana, excursi\u00f3n opcional: el Museo Holand\u00e9s al Aire Libre de Arnhem. Unas 80 granjas aut\u00e9nticas, molinos, talleres, casas, una escuela, graneros y una iglesia evocan la arquitectura y la vida de anta\u00f1o en las provincias de los Pa\u00edses Bajos. En el interior de cada edificio, el mobiliario t\u00edpico y las demostraciones de diversos oficios hacen que la visita sea especialmente interesante. Descubrir\u00e1 los bellos edificios con entramado de madera de Limburgo, las granjas de Gelderland y el encantador rinc\u00f3n de la regi\u00f3n de Zaan con sus casas de madera pintadas de verde. Regreso a bordo en Xanten. Por la tarde navegaci\u00f3n hacia D\u00fcsseldorf. Noche de entretenimiento a bordo. Navegaci\u00f3n hacia Colonia.'
      },
      {
        day: 4,
        title: 'COLONIA - COBLENZA - Esplendor G\u00f3tico',
        summary: 'Visita guiada de Colonia, navegaci\u00f3n por el Rin hasta Coblenza',
        details: 'Excursi\u00f3n opcional: visita guiada a Colonia, antigua ciudad romana de gran importancia. Se podr\u00e1 admirar el exterior de la catedral, cuya construcci\u00f3n dur\u00f3 m\u00e1s de cinco siglos. Esta obra maestra del arte g\u00f3tico es un verdadero testimonio de la fuerza y la persistencia de la fe cristiana en Europa. A continuaci\u00f3n, visita del casco antiguo y paso por delante de la famosa casa de Eau de Cologne (exterior). Tiempo libre para pasear por las calles de Colonia. Regreso a bordo en Koenigswinter. Continuaci\u00f3n de la navegaci\u00f3n y ascenso del Rin hasta Coblenza. Paseo hasta el "Deutsches Eck" (Esquina Alemana), donde el Mosela se encuentra con el Rin.'
      },
      {
        day: 5,
        title: 'COBLENZA - MAGUNCIA - El Rin m\u00e1s Bello',
        summary: 'Navegaci\u00f3n por el tramo m\u00e1s bello del Rin, Maguncia y museo Gutenberg',
        details: 'Por la ma\u00f1ana temprano, navegaci\u00f3n hacia Maguncia. Subida por la parte m\u00e1s bella del Rin. Excursi\u00f3n opcional: visita guiada de Maguncia y del museo Gutenberg. Se visitar\u00e1 la ciudad de Maguncia a pie y se entrar\u00e1 a su magn\u00edfica catedral. Se pasear\u00e1 por las pintorescas calles del casco antiguo. Por \u00faltimo, visita del museo Gutenberg, el museo de la imprenta. Noche de baile. Navegaci\u00f3n de noche hacia Estrasburgo.'
      },
      {
        day: 6,
        title: 'ESTRASBURGO - BREISACH - Capital Europea',
        summary: 'Estrasburgo en barco y catedral, noche de gala',
        details: 'Llegada a Estrasburgo por la ma\u00f1ana. Excursi\u00f3n opcional: Estrasburgo en barco de excursi\u00f3n y su catedral (s\u00f3lo con reserva previa). Estrasburgo, marcada por una historia agitada, goza de un patrimonio arquitect\u00f3nico excepcional. Una sutil mezcla de tradici\u00f3n y modernidad, los monumentos hist\u00f3ricos conviven con las estructuras m\u00e1s modernas. Regreso a bordo. Navegaci\u00f3n hacia Breisach am Rhein. Noche de gala.'
      },
      {
        day: 7,
        title: 'BREISACH - BASILEA - Tierra de Vinos Alsacianos',
        summary: 'Tiempo libre en Vieux-Brisach, Colmar y museo Unterlinden, noche de animaci\u00f3n',
        details: 'Por la ma\u00f1ana, tiempo libre en Vieux-Brisach. Regreso a bordo. Por la tarde, excursi\u00f3n opcional: visita de Colmar y del museo Unterlinden. La capital de los vinos de Alsacia encantar\u00e1 a los viajeros por su autenticidad y su arquitectura t\u00edpica alsaciana, compuesta por coloridas casas con entramado de madera que datan de la Edad Media. Descubrir\u00e1n el pintoresco barrio de la Peque\u00f1a Venecia y luego visitar\u00e1n el museo Unterlinden. Ofrece un recorrido que abarca casi 7.000 a\u00f1os de historia, desde la prehistoria hasta el arte del siglo XX. La obra maestra es el Retablo de Isenheim (1512-1516) de Matthias Gr\u00fcnewald. Navegaci\u00f3n hacia Basilea. Noche de animaci\u00f3n.'
      },
      {
        day: 8,
        title: 'BASILEA - Despedida',
        summary: 'Desayuno, desembarque',
        details: 'Desayuno a bordo. Desembarque a las 9:00h. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Full board from dinner on day 1 to breakfast on day 8',
      'Beverages included onboard (except special wine/drink lists)',
      'Double exterior cabin with full private bathroom',
      'Onboard entertainment and activities',
      'Onboard assistance throughout the cruise',
      'Welcome cocktail',
      'Gala dinner evening',
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
      { name: 'Amsterdam by bicycle', duration: '2h 30min', type: 'Dynamic', time: 'Morning', preBook: '\u20ac73', onBoard: '\u20ac81' },
      { name: 'Amsterdam canal boat tour', duration: '2h', type: 'Classic', time: 'Morning', preBook: '\u20ac56', onBoard: '\u20ac62' },
      { name: 'Keukenhof floral park', duration: '4h 30min', type: 'Classic', time: 'Afternoon', preBook: '\u20ac79', onBoard: '\u20ac88' },
      { name: 'Arnhem Open-Air Museum', duration: '4h 30min', type: 'Classic', time: 'Morning', preBook: '\u20ac84', onBoard: '\u20ac93' },
      { name: 'Guided tour of Cologne', duration: '3h', type: 'Classic', time: 'Morning', preBook: '\u20ac65', onBoard: '\u20ac72' },
      { name: 'Mainz & Gutenberg Museum (with transport)', duration: '3h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac72', onBoard: '\u20ac80' },
      { name: 'Strasbourg by excursion boat & cathedral', duration: '3h', type: 'Classic', time: 'Morning', preBook: '\u20ac79', onBoard: '\u20ac88' },
      { name: 'Colmar & Unterlinden Museum', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac72', onBoard: '\u20ac80' }
    ],
    es: [
      { name: '\u00c1msterdam en bicicleta', duration: '2h 30min', type: 'Din\u00e1mica', time: 'Ma\u00f1ana', preBook: '\u20ac73', onBoard: '\u20ac81' },
      { name: 'Tour por \u00c1msterdam en barco fluvial', duration: '2h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac56', onBoard: '\u20ac62' },
      { name: 'Parque floral del Keukenhof', duration: '4h 30min', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac79', onBoard: '\u20ac88' },
      { name: 'Museo al aire libre de Arnhem', duration: '4h 30min', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac84', onBoard: '\u20ac93' },
      { name: 'Visita guiada de Colonia', duration: '3h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac65', onBoard: '\u20ac72' },
      { name: 'Maguncia y museo Gutenberg (con transporte)', duration: '3h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac72', onBoard: '\u20ac80' },
      { name: 'Estrasburgo en barco de excursi\u00f3n y su catedral', duration: '3h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac79', onBoard: '\u20ac88' },
      { name: 'Colmar y el museo Unterlinden', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac72', onBoard: '\u20ac80' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons without this being grounds for a claim.',
      'Navigation schedules are approximate and may vary without this being grounds for a claim.',
      'The Keukenhof floral park will be open March 20 to May 11, 2025. Subject to change in opening dates for 2026.',
      'The Unterlinden Museum is closed on Tuesdays and will be replaced by a visit to the Hansi Museum.',
      'The port of Amsterdam may unexpectedly change mooring locations. An alternative as close as possible to the city center will be provided.',
      'Breisach transfer available: \u20ac25/person, booked and paid onboard. Only available when the ship is not moored near Vieux-Brisach.',
      'The interior visit of Strasbourg Cathedral is not permitted on Sundays or during religious services. In that case, commentary will be given from the exterior.',
      'The Gutenberg Museum is closed on Sunday mornings and all day on Mondays.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.'
    ],
    es: [
      'En caso de crecidas o decrecidas del r\u00edo o cualquier evento de fuerza mayor, el comandante puede verse obligado a modificar el programa por motivos de seguridad sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Los horarios de navegaci\u00f3n son orientativos y pueden sufrir variaciones sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'El parque de las flores Keukenhof estar\u00e1 abierto del 20 de marzo al 11 de mayo 2025. Sujeto a modificaci\u00f3n de las fechas de apertura para 2026.',
      'El museo Unterlinden est\u00e1 cerrado los martes y ser\u00e1 reemplazado por una visita al museo Hansi.',
      'El Puerto de \u00c1msterdam puede decidir inesperadamente cambiar los lugares de amarre. Se habilitar\u00e1 una alternativa lo m\u00e1s cerca posible de la ciudad.',
      'Traslado disponible en Breisach: 25\u20ac/persona, reserva y pago a bordo. El traslado s\u00f3lo est\u00e1 disponible cuando el barco no est\u00e1 amarrado cerca de Vieux-Brisach.',
      'La visita interior de la catedral de Estrasburgo no est\u00e1 permitida los domingos ni durante los oficios religiosos. En ese caso, los comentarios se dar\u00e1n en el exterior.',
      'El Museo Gutenberg est\u00e1 cerrado los domingos por la ma\u00f1ana y todo el d\u00eda los lunes.',
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

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#78350f] via-[#92400e] to-[#1a2b5c] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-300/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"></div>
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
            <p className="text-2xl md:text-3xl text-amber-200 mb-6 font-light">
              {t.titleSub}
            </p>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-amber-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-amber-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-amber-300 mr-2" />
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
            {[
              language === 'es' ? '\u00c1msterdam' : 'Amsterdam',
              language === 'es' ? 'Nimega' : 'Nijmegen',
              language === 'es' ? 'Colonia' : 'Cologne',
              language === 'es' ? 'Coblenza' : 'Koblenz',
              language === 'es' ? 'Maguncia' : 'Mainz',
              language === 'es' ? 'Estrasburgo' : 'Strasbourg',
              'Breisach',
              language === 'es' ? 'Basilea' : 'Basel'
            ].map((port, i, arr) => (
              <div key={i} className="flex items-center">
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#92400e] text-white' : 'bg-white text-[#92400e] border border-[#92400e]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#92400e]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#92400e] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-gradient-to-br from-[#78350f] to-[#92400e] rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <Ship className="w-12 h-12 mx-auto mb-4 text-amber-300" />
            <p className="text-4xl md:text-5xl font-bold mb-3">{t.priceFrom}</p>
            <p className="text-amber-200 text-sm mb-4">{t.cabinTitle} &middot; {t.cabinDesc}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-amber-100 text-lg max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#92400e] px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#92400e] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#92400e] mt-1.5 mr-4"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#92400e] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Music, en: 'Gala & Dance Nights', es: 'Noches de Gala y Baile' },
              { icon: Users, en: 'Onboard Staff', es: 'Personal a Bordo' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#92400e] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#92400e] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#92400e]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#78350f] to-[#92400e] text-white flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] leading-none font-medium text-amber-200">{language === 'en' ? 'Day' : 'D\u00eda'}</span>
                      <span className="font-bold text-sm leading-tight">{day.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#92400e] text-white' : 'bg-gray-100 text-gray-400'}`}>
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
          <h2 className="text-3xl font-bold text-[#92400e] mb-3 text-center">
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
                    <span className="text-lg font-bold text-[#92400e]">{exc.preBook}</span>
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
                className="text-[#92400e] font-semibold hover:underline transition-colors"
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
              <h2 className="text-2xl font-bold text-[#92400e] mb-6 flex items-center">
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
              <h2 className="text-2xl font-bold text-[#92400e] mb-6 flex items-center">
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
          <h2 className="text-2xl font-bold text-[#92400e] mb-6 text-center">
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
      <section className="py-16 bg-gradient-to-br from-[#78350f] via-[#92400e] to-[#1a2b5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Ship className="w-16 h-16 mx-auto mb-6 text-amber-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#92400e] px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg"
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
          <h2 className="text-3xl font-bold text-[#92400e] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="rhine_cruise" />
        </div>
      </section>
    </div>
  );
}
