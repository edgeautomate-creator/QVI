import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function DanubeCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'Budapest, Pearl of the Danube',
      titleSub: 'and the Iron Gates',
      subtitle: 'Witness Europe\'s greatest river spectacle from Hungary to Serbia',
      duration: '8 Days / 7 Nights',
      route: 'Budapest (Round Trip)',
      ref: 'Ref. BTU_PPES',
      intro: 'Witness the greatest river spectacle in Europe: the Iron Gates, on the border between Romania and Serbia. Here, the beautiful Blue Danube, the most cosmopolitan and serene river on the continent, offers its most spectacular landscapes. Discover cities such as Belgrade, a capital with a young and modern atmosphere shaped by Oriental, Slavic, and Austrian influences. Admire the ruins of the Baths of Hercules, one of Romania\'s oldest and most famous spas. Your journey concludes with P\u00e9cs and Budapest, cities boasting over 2,000 years of history.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Ready to Sail the Danube?',
      ctaText: 'Contact us today to reserve your cabin on this unforgettable 8-day river cruise through Hungary, Croatia, Serbia, and Romania.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 1,589 \u20ac',
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
      title: 'Budapest, la Perla del Danubio',
      titleSub: 'y las Puertas de Hierro',
      subtitle: 'Asista al mayor desfile fluvial de Europa desde Hungr\u00eda hasta Serbia',
      duration: '8 D\u00edas / 7 Noches',
      route: 'Budapest (Ida y Vuelta)',
      ref: 'R\u00e9f. BTU_PPES',
      intro: 'Asista al mayor desfile fluvial de Europa: las Puertas de Hierro, en la frontera entre Ruman\u00eda y Serbia. Aqu\u00ed es donde el precioso Danubio azul, el r\u00edo m\u00e1s cosmopolita y tranquilo del continente, ofrece sus paisajes m\u00e1s espectaculares. Descubra ciudades como Belgrado, capital de ambiente joven y moderno con influencias orientales, eslavas y austriacas. Se podr\u00e1n admirar las ruinas de los ba\u00f1os de H\u00e9rcules, uno de los balnearios m\u00e1s antiguos y famosos de Ruman\u00eda. Su estancia concluir\u00e1 con P\u00e9cs y Budapest, que cuentan con m\u00e1s de 2.000 a\u00f1os de historia.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: '\u00bfListo para Navegar el Danubio?',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este inolvidable crucero fluvial de 8 d\u00edas por Hungr\u00eda, Croacia, Serbia y Ruman\u00eda.',
      callNow: 'Cont\u00e1ctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n',
      pricing: 'Precios',
      priceFrom: 'Desde 1.589 \u20ac',
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
      'The Iron Gates -- Europe\'s greatest river spectacle on the Romania-Serbia border',
      'Budapest, "Pearl of the Danube", with 2,000 years of history',
      'Belgrade and its unique blend of Ottoman, Austro-Hungarian, and Slavic cultures',
      'Osijek and its magnificent Co-Cathedral of Saints Peter and Paul',
      'Golubac Fortress, one of Serbia\'s most important monuments',
      'P\u00e9cs, the charming city of southern Hungary founded over 2,000 years ago',
      'Novi Sad, cultural capital of Vojvodina',
      'Kalocsa and the famous Hungarian Puszta',
      'Serbian folkloric evening onboard',
      'All meals and beverages included onboard'
    ],
    es: [
      'Las Puertas de Hierro -- el mayor espect\u00e1culo fluvial de Europa en la frontera Ruman\u00eda-Serbia',
      'Budapest, "Perla del Danubio", con 2.000 a\u00f1os de historia',
      'Belgrado y su \u00fanica mezcla de culturas otomana, austroh\u00fangara y eslava',
      'Osijek y su magn\u00edfica Concatedral de San Pedro y San Pablo',
      'La fortaleza de Golubac, uno de los monumentos m\u00e1s importantes de Serbia',
      'P\u00e9cs, la encantadora ciudad del sur de H\u00fangara fundada hace m\u00e1s de 2.000 a\u00f1os',
      'Novi Sad, capital cultural de Voivodina',
      'Kalocsa y la famosa Puszta h\u00fangara',
      'Noche folcl\u00f3rica serbia a bordo',
      'Todas las comidas y bebidas incluidas a bordo'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'BUDAPEST - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail, entertainment night',
        details: 'Embarkation at 6:00 PM. Welcome cocktail and crew presentation. Departure toward Mohacs. Dinner and entertainment night onboard. Night navigation.'
      },
      {
        day: 2,
        title: 'MOHACS - OSIJEK - BELGRADE - Cultural Encounters',
        summary: 'Customs formalities, optional excursion of Osijek, navigation to Belgrade',
        details: 'Arrival in Mohacs in the early morning for customs formalities, then continuation of navigation toward Osijek. Optional excursion of Osijek, a modern Central European city with a rich tradition and the magnificent Co-Cathedral of Saints Peter and Paul. Navigation toward Belgrade. Entertainment night onboard.'
      },
      {
        day: 3,
        title: 'BELGRADE - Pearl of the Balkans',
        summary: 'Guided tour of Belgrade, free afternoon, Serbian folkloric evening',
        details: 'Arrival in Belgrade. Optional excursion of Belgrade, a city whose identity has been shaped by the encounter of Austro-Hungarian, Ottoman, and Slavic cultures. Free afternoon in the Serbian capital. An optional coach transfer (booked and paid onboard) will be organized to reach the city center. Serbian folkloric evening onboard. Night navigation toward Golubac.'
      },
      {
        day: 4,
        title: 'IRON GATES - GOLUBAC - NOVI SAD - Europe\'s Greatest Spectacle',
        summary: 'Navigation through the Iron Gates gorge, Golubac Fortress excursion',
        details: 'Navigation toward the Iron Gates gorge between the Carpathians and the Balkans -- a spectacular natural sight where the Danube carves through dramatic cliffs. In the afternoon, optional excursion to Golubac Fortress, one of the most important medieval monuments in Serbia. Night navigation toward Novi Sad.'
      },
      {
        day: 5,
        title: 'NOVI SAD - ILOK - MOHACS - Riverside Cities',
        summary: 'Novi Sad excursion, Ilok medieval city, animation night',
        details: 'Early morning arrival at Novi Sad. Optional excursion of Novi Sad, capital of the autonomous region of Vojvodina. Navigation toward Ilok. Optional excursion of the medieval city of Ilok. Navigation toward Mohacs. Entertainment night onboard. Night navigation.'
      },
      {
        day: 6,
        title: 'MOHACS - KALOCSA - Southern Hungary',
        summary: 'P\u00e9cs excursion, Puszta half-day, gala night',
        details: 'Early morning arrival at Mohacs for customs formalities and optional excursion of P\u00e9cs, a city founded over 2,000 years ago at the foot of the Mecsek mountains. P\u00e9cs enjoys a Mediterranean climate and atmosphere and has been an episcopal seat since 1009. Navigation toward Kalocsa. Optional half-day excursion to the Puszta, the vast Hungarian plains landscape famous for its horses and riders. Return onboard. Navigation toward Budapest. Gala night. Night navigation.'
      },
      {
        day: 7,
        title: 'BUDAPEST - The Pearl of the Danube',
        summary: 'Budapest guided tour, G\u00f6d\u00f6ll\u0151 Palace option, illuminated Budapest evening',
        details: 'Early morning arrival in Budapest. Optional excursion of Budapest: with its baroque buildings and neoclassical constructions, Budapest is one of the jewels of Central Europe. In the afternoon, free time or optional excursion to G\u00f6d\u00f6ll\u0151 Palace, the summer residence of Empress Sissi. In the evening, optional excursion of illuminated Budapest.'
      },
      {
        day: 8,
        title: 'BUDAPEST - Farewell',
        summary: 'Breakfast, disembarkation',
        details: 'Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'BUDAPEST - Bienvenida a Bordo',
        summary: 'Embarque, c\u00f3ctel de bienvenida, noche de animaci\u00f3n',
        details: 'Embarque a las 18:00h. C\u00f3ctel de bienvenida y presentaci\u00f3n de la tripulaci\u00f3n. Salida en navegaci\u00f3n hacia Mohacs. Cena y noche de animaci\u00f3n a bordo. Navegaci\u00f3n nocturna.'
      },
      {
        day: 2,
        title: 'MOHACS - OSIJEK - BELGRADO - Encuentros Culturales',
        summary: 'Tr\u00e1mites aduaneros, excursi\u00f3n opcional de Osijek, navegaci\u00f3n a Belgrado',
        details: 'Llegada a Mohacs a primera hora de la ma\u00f1ana para las formalidades aduaneras y continuaci\u00f3n de la navegaci\u00f3n hacia Osijek. Excursi\u00f3n opcional de Osijek, moderna ciudad de Europa central dotada de una rica tradici\u00f3n y la magn\u00edfica Concatedral de San Pedro y San Pablo. Navegaci\u00f3n hacia Belgrado. Noche de animaci\u00f3n a bordo.'
      },
      {
        day: 3,
        title: 'BELGRADO - Perla de los Balcanes',
        summary: 'Visita guiada de Belgrado, tarde libre, noche folcl\u00f3rica serbia',
        details: 'Llegada a Belgrado. Excursi\u00f3n opcional de Belgrado, ciudad cuya identidad ha sido forjada gracias al encuentro de las culturas austro-h\u00fangaras, otomanas y eslavas. Tarde libre en la capital serbia. Un traslado opcional en autocar (reserva y pago a bordo) se organizar\u00e1 para llegar al centro de la ciudad. Noche folcl\u00f3rica serbia a bordo. Navegaci\u00f3n hacia Golubac.'
      },
      {
        day: 4,
        title: 'LAS PUERTAS DE HIERRO - GOLUBAC - NOVI SAD - El Gran Espect\u00e1culo',
        summary: 'Navegaci\u00f3n por el desfiladero de las Puertas de Hierro, fortaleza de Golubac',
        details: 'Navegaci\u00f3n hacia el desfiladero de las Puertas de Hierro entre los C\u00e1rpatos y los Balcanes, un lugar espectacular donde el Danubio atraviesa acantilados dram\u00e1ticos. Por la tarde, excursi\u00f3n opcional de la fortaleza de Golubac, uno de los monumentos medievales m\u00e1s importantes de Serbia. Navegaci\u00f3n nocturna hacia Novi Sad.'
      },
      {
        day: 5,
        title: 'NOVI SAD - ILOK - MOHACS - Ciudades Ribere\u00f1as',
        summary: 'Excursi\u00f3n de Novi Sad, ciudad medieval de Ilok, noche de animaci\u00f3n',
        details: 'A primera hora de la ma\u00f1ana, llegada a Novi Sad. Excursi\u00f3n opcional de Novi Sad, capital de la regi\u00f3n aut\u00f3noma de Voivodina. Navegaci\u00f3n hacia Ilok. Excursi\u00f3n opcional de la ciudad medieval de Ilok. Navegaci\u00f3n hacia Mohacs. Noche de animaci\u00f3n a bordo. Navegaci\u00f3n nocturna.'
      },
      {
        day: 6,
        title: 'MOHACS - KALOCSA - Hungr\u00eda del Sur',
        summary: 'Excursi\u00f3n a P\u00e9cs, media jornada en la Puszta, noche de gala',
        details: 'A primera hora de la ma\u00f1ana, llegada a Mohacs para las formalidades aduaneras y excursi\u00f3n opcional de P\u00e9cs, ciudad situada al pie de los montes Mecsek que fue fundada hace m\u00e1s de 2.000 a\u00f1os. Con un clima y un ambiente mediterr\u00e1neo, es sede episcopal desde 1009. Navegaci\u00f3n hacia Kalocsa. Excursi\u00f3n opcional de la Puszta (media jornada), paisaje de grandes llanuras y lagos, pero sobre todo paisaje de caballos y jinetes. Regreso a bordo. Navegaci\u00f3n hacia Budapest. Noche de gala. Navegaci\u00f3n nocturna.'
      },
      {
        day: 7,
        title: 'BUDAPEST - La Perla del Danubio',
        summary: 'Visita guiada de Budapest, Palacio de G\u00f6d\u00f6ll\u0151, Budapest iluminada',
        details: 'A primera hora de la ma\u00f1ana, llegada a la ciudad. Excursi\u00f3n opcional de Budapest: con edificios barrocos y construcciones neocl\u00e1sicas, Budapest es una de las perlas de Europa central. Por la tarde, tiempo libre o excursi\u00f3n opcional al Palacio de G\u00f6d\u00f6ll\u0151, residencia de verano de la emperatriz Sissi. Por la noche, excursi\u00f3n opcional de Budapest iluminada.'
      },
      {
        day: 8,
        title: 'BUDAPEST - Despedida',
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
      'Serbian folkloric evening',
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
      'Noche folcl\u00f3rica serbia',
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
      { name: 'Osijek', duration: '2h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac42', onBoard: '\u20ac47' },
      { name: 'Belgrade', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac43', onBoard: '\u20ac48' },
      { name: 'Golubac Fortress', duration: '-', type: 'Classic', time: 'Afternoon', preBook: '\u20ac30', onBoard: '\u20ac33' },
      { name: 'Novi Sad', duration: '-', type: 'Classic', time: 'Morning', preBook: '\u20ac38', onBoard: '\u20ac42' },
      { name: 'Ilok', duration: '-', type: 'Classic', time: 'Afternoon', preBook: '\u20ac85', onBoard: '\u20ac94' },
      { name: 'Guided tour of P\u00e9cs', duration: '4h 30min', type: 'Classic', time: 'Morning', preBook: '\u20ac61', onBoard: '\u20ac68' },
      { name: 'Puszta (half-day)', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac76', onBoard: '\u20ac84' },
      { name: 'Budapest', duration: '4h', type: 'Classic', time: 'Morning', preBook: '\u20ac37', onBoard: '\u20ac41' },
      { name: 'Illuminated Budapest', duration: '2h', type: 'Classic', time: 'Evening', preBook: '\u20ac34', onBoard: '\u20ac38' },
      { name: 'G\u00f6d\u00f6ll\u0151 Palace -- Empress Sissi\'s Summer Residence', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac58', onBoard: '\u20ac64' }
    ],
    es: [
      { name: 'Osijek', duration: '2h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac42', onBoard: '\u20ac47' },
      { name: 'Belgrado', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac43', onBoard: '\u20ac48' },
      { name: 'La fortaleza de Golubac', duration: '-', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac30', onBoard: '\u20ac33' },
      { name: 'Novi Sad', duration: '-', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac38', onBoard: '\u20ac42' },
      { name: 'Ilok', duration: '-', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac85', onBoard: '\u20ac94' },
      { name: 'Visita guiada de P\u00e9cs', duration: '4h 30min', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac61', onBoard: '\u20ac68' },
      { name: 'Puszta (media jornada)', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac76', onBoard: '\u20ac84' },
      { name: 'Budapest', duration: '4h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac37', onBoard: '\u20ac41' },
      { name: 'Budapest iluminada', duration: '2h', type: 'Cl\u00e1sica', time: 'Noche', preBook: '\u20ac34', onBoard: '\u20ac38' },
      { name: 'Palacio de G\u00f6d\u00f6ll\u0151, residencia de verano de la emperatriz Sissi', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac58', onBoard: '\u20ac64' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons without this being grounds for a claim.',
      'Navigation schedules are approximate and may vary without this being grounds for a claim.',
      'All excursions listed are optional.',
      'An optional coach transfer to Belgrade city center is available (booked and paid onboard).',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.'
    ],
    es: [
      'En caso de crecidas o decrecidas del r\u00edo o cualquier evento de fuerza mayor, el comandante puede verse obligado a modificar el programa por motivos de seguridad sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Los horarios de navegaci\u00f3n son orientativos y pueden sufrir variaciones sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Todas las excursiones indicadas son opcionales.',
      'Se organizar\u00e1 un traslado opcional en autocar al centro de Belgrado (reserva y pago a bordo).',
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
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#1a4e7a] to-[#0f3460] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl"></div>
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
            <p className="text-2xl md:text-3xl text-sky-200 mb-6 font-light">
              {t.titleSub}
            </p>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-sky-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-sky-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-sky-300 mr-2" />
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
              'Budapest',
              language === 'es' ? 'Mohacs' : 'Mohacs',
              'Osijek',
              language === 'es' ? 'Belgrado' : 'Belgrade',
              'Golubac',
              'Novi Sad',
              'Ilok',
              'Kalocsa',
              'Budapest'
            ].map((port, i, arr) => (
              <div key={i} className="flex items-center">
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#1a4e7a] text-white' : 'bg-white text-[#1a4e7a] border border-[#1a4e7a]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#1a4e7a]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a4e7a] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#1a4e7a] rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <Ship className="w-12 h-12 mx-auto mb-4 text-sky-300" />
            <p className="text-4xl md:text-5xl font-bold mb-3">{t.priceFrom}</p>
            <p className="text-sky-200 text-sm mb-4">{t.cabinTitle} &middot; {t.cabinDesc}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#1a4e7a] px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#1a4e7a] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#1a4e7a] mt-1.5 mr-4"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#1a4e7a] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Music, en: 'Folkloric & Gala Nights', es: 'Noches Folcl\u00f3ricas y de Gala' },
              { icon: Users, en: 'Onboard Staff', es: 'Personal a Bordo' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#1a4e7a] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a4e7a] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#1a4e7a]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#1a4e7a] text-white flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] leading-none font-medium text-sky-200">{language === 'en' ? 'Day' : 'D\u00eda'}</span>
                      <span className="font-bold text-sm leading-tight">{day.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#1a4e7a] text-white' : 'bg-gray-100 text-gray-400'}`}>
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
          <h2 className="text-3xl font-bold text-[#1a4e7a] mb-3 text-center">
            {t.excursions}
          </h2>
          <p className="text-gray-500 text-center mb-10">{t.excursionsNote}</p>
          <div className="space-y-3">
            {visibleExcursions.map((exc, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-gray-100/80 transition-colors">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{exc.name}</h4>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                    {exc.duration !== '-' && (
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {exc.duration}
                      </span>
                    )}
                    <span className="px-2 py-0.5 bg-white rounded-full text-xs font-medium border border-gray-200">{exc.type}</span>
                    <span>{exc.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs uppercase tracking-wide">{t.preBook}</span>
                    <span className="text-lg font-bold text-[#1a4e7a]">{exc.preBook}</span>
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
                className="text-[#1a4e7a] font-semibold hover:underline transition-colors"
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
              <h2 className="text-2xl font-bold text-[#1a4e7a] mb-6 flex items-center">
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
              <h2 className="text-2xl font-bold text-[#1a4e7a] mb-6 flex items-center">
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
          <h2 className="text-2xl font-bold text-[#1a4e7a] mb-6 text-center">
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
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] via-[#1a4e7a] to-[#0f3460] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Ship className="w-16 h-16 mx-auto mb-6 text-sky-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#1a4e7a] px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors shadow-lg"
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
          <h2 className="text-3xl font-bold text-[#1a4e7a] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="danube_cruise" />
        </div>
      </section>
    </div>
  );
}
