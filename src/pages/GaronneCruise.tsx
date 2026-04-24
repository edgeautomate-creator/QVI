import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function GaronneCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'The Garonne & Dordogne',
      titleSub: 'from Bordeaux',
      subtitle: 'Grand crus, UNESCO heritage, and oysters in the heart of wine country',
      duration: '6 Days / 5 Nights',
      route: 'Bordeaux (Round Trip)',
      ref: 'Ref. BOS_PPES',
      intro: 'This cruise along the Garonne and Dordogne navigates through the heart of Bordeaux and its surroundings -- a city whose monuments are partly classified as UNESCO World Heritage. You will also visit the citadel of Blaye, standing at the edge of the Gironde estuary, and the medieval village of Saint-\u00c9milion, one of the finest wine appellations in the world.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Some excursions must be booked before departure -- onboard booking not available.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      onBoardNA: 'N/A',
      importantInfo: 'Important Information',
      cta: 'Ready to Discover Bordeaux by River?',
      ctaText: 'Contact us today to reserve your cabin on this 6-day cruise through the vineyards and medieval villages of southwest France.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 1,115 \u20ac',
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
      title: 'El Garona y el Dorda\u00f1a',
      titleSub: 'desde Burdeos',
      subtitle: 'Grands crus, patrimonio UNESCO y ostras en el coraz\u00f3n de la tierra del vino',
      duration: '6 D\u00edas / 5 Noches',
      route: 'Burdeos (Ida y Vuelta)',
      ref: 'R\u00e9f. BOS_PPES',
      intro: 'Este crucero por el Garona y el Dorda\u00f1a navega por el coraz\u00f3n de Burdeos y alrededores, una ciudad en la que una parte de sus monumentos est\u00e1 clasificada como Patrimonio Mundial por la UNESCO. Se visitar\u00e1 adem\u00e1s la ciudadela de Blaye, situada al borde del estuario de la Gironda, y el pueblo medieval de Saint-\u00c9milion, una de las mejores denominaciones vineras del mundo.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Algunas excursiones deben reservarse antes de la salida -- no disponibles a bordo.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      onBoardNA: 'N/D',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: '\u00bfListo para Descubrir Burdeos desde el R\u00edo?',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este crucero de 6 d\u00edas por los vi\u00f1edos y pueblos medievales del suroeste de Francia.',
      callNow: 'Cont\u00e1ctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n',
      pricing: 'Precios',
      priceFrom: 'Desde 1.115 \u20ac',
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
      'Bordeaux, UNESCO World Heritage -- one of the most beautiful cities in France',
      'The M\u00e9doc vineyards -- home to some of the world\'s most prestigious grand crus',
      'Blaye and its Vauban citadel, part of the UNESCO "Vauban Fortifications" World Heritage Site',
      'Château Marquis de Vauban -- wine tasting with regional products',
      'Saint-\u00c9milion, a medieval village and world-renowned wine appellation',
      'Bassins des Lumi\u00e8res -- an immersive audiovisual art experience in a former submarine base',
      'Chartrons quarter, the Wine and Trade Museum, and wine tasting in Bordeaux',
      'Onboard oyster tasting paired with a glass of white wine',
      'Navigation through the Gironde estuary -- a magnificent natural spectacle',
      'All meals and beverages included onboard'
    ],
    es: [
      'Burdeos, Patrimonio de la Humanidad -- una de las ciudades m\u00e1s hermosas de Francia',
      'Los vi\u00f1edos del M\u00e9doc -- hogar de algunos de los grands crus m\u00e1s prestigiosos del mundo',
      'Blaye y su ciudadela Vauban, parte del Patrimonio Mundial UNESCO "Fortificaciones de Vauban"',
      'Château Marquis de Vauban -- degustaci\u00f3n de vinos con productos regionales',
      'Saint-\u00c9milion, pueblo medieval y denominaci\u00f3n vinera de fama mundial',
      'Bassins des Lumi\u00e8res -- experiencia art\u00edstica audiovisual inmersiva en una antigua base submarina',
      'Barrio de Chartrons, el Museo del Vino y el Comercio y degustaci\u00f3n de vinos en Burdeos',
      'Degustaci\u00f3n de ostras a bordo maridadas con una copa de vino blanco',
      'Navegaci\u00f3n por el estuario de la Gironda -- un espect\u00e1culo natural magn\u00edfico',
      'Todas las comidas y bebidas incluidas a bordo'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'BORDEAUX - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail, welcome evening',
        details: 'Embarkation at 6:00 PM. Welcome cocktail and crew presentation. Dinner onboard followed by a welcome evening.'
      },
      {
        day: 2,
        title: 'BORDEAUX - CUSSAC-FORT-M\u00c9DOC - The M\u00e9doc',
        summary: 'Garonne navigation, M\u00e9doc grand crus excursion, entertainment night',
        details: 'Navigation along the Garonne toward the Gironde, skirting \u00cele Cazeau before arriving at Cussac-Fort-M\u00e9doc. In the afternoon, optional Classic/Active excursion: discovery of the M\u00e9doc (pre-booking required before departure). This exceptional terroir is home to some of the most prestigious wines on the planet -- an unforgettable sensory experience in the world\'s most celebrated wine region. Entertainment night onboard.'
      },
      {
        day: 3,
        title: 'CUSSAC-FORT-M\u00c9DOC - Gironde Estuary - BLAYE - Vauban Citadel',
        summary: 'Blaye citadel by tourist train, wine tasting, dance night',
        details: 'The ship departs early morning and arrives in Blaye. Optional "Classic" excursion: by tourist train discover Blaye and its citadel, followed by a wine and regional product tasting. Erected by Vauban at the request of Louis XIV to protect Bordeaux from invasions, the citadel together with Fort P\u00e2t\u00e9 and Fort M\u00e9doc formed the "Vauban Lock" -- a unique defensive triptych in France and a UNESCO World Heritage Site. The tour continues with a visit to Ch\u00e2teau Marquis de Vauban for a wine tasting paired with regional products. Optional "Active" excursion (pre-booking required, not available onboard): underground tour of the Blaye citadel followed by tasting of local products with a glass of wine. Navigation through the Gironde to the estuary. Dance night onboard.'
      },
      {
        day: 4,
        title: 'BLAYE - LIBOURNE - SAINT-\u00c9MILION - Medieval Village',
        summary: 'Saint-\u00c9milion excursion, Libourne cycling option, gala night',
        details: 'Departure toward Libourne. In the afternoon, optional "Active" excursion (pre-booking required, not available onboard): Libourne by bicycle and wine tasting. Optional "Classic" excursion: Saint-\u00c9milion -- discover this extraordinary medieval village perched on a limestone plateau, surrounded by some of the world\'s finest vineyards. Visit the monolithic church, the catacombs, and the charming cobblestone streets of this UNESCO World Heritage wine appellation. Return to Libourne. Gala night onboard.'
      },
      {
        day: 5,
        title: 'LIBOURNE - BORDEAUX - City of Light',
        summary: 'Chartrons quarter & Wine Museum, Bassins des Lumi\u00e8res, oyster tasting',
        details: 'Navigation toward Bordeaux, arriving in the morning. Optional "Classic" excursion: the Chartrons quarter, the Wine and Trade Museum, and wine tasting. Discover the elegant Chartrons neighborhood, historic heart of the Bordeaux wine trade, and the fascinating museum dedicated to the history of wine commerce. Optional "Active" excursion (pre-booking required, not available onboard): Bassins des Lumi\u00e8res -- a spectacular immersive audiovisual art experience inside a former WWII submarine base. Onboard oyster tasting.'
      },
      {
        day: 6,
        title: 'BORDEAUX - Farewell',
        summary: 'Breakfast, disembarkation',
        details: 'Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'BURDEOS - Bienvenida a Bordo',
        summary: 'Embarque, c\u00f3ctel de bienvenida, velada de bienvenida',
        details: 'Embarque a las 18:00h. C\u00f3ctel de bienvenida y presentaci\u00f3n de la tripulaci\u00f3n. Cena a bordo seguida de una velada de bienvenida.'
      },
      {
        day: 2,
        title: 'BURDEOS - CUSSAC-FORT-M\u00c9DOC - El M\u00e9doc',
        summary: 'Navegaci\u00f3n por el Garona, excursi\u00f3n grands crus del M\u00e9doc, noche de animaci\u00f3n',
        details: 'Se navegar\u00e1 por el Garona para llegar hasta la Gironda, bordeando la isla Cazeau antes de llegar a Cussac-Fort-M\u00e9doc. Por la tarde, excursi\u00f3n opcional CL\u00c1SICA / ACTIVA: visita del M\u00e9doc (s\u00f3lo con reserva previa antes de la salida). Este terroir excepcional alberga algunos de los vinos m\u00e1s prestigiosos del planeta -- una experiencia sensorial inolvidable en la regi\u00f3n vinera m\u00e1s celebrada del mundo. Noche de animaci\u00f3n a bordo.'
      },
      {
        day: 3,
        title: 'CUSSAC-FORT-M\u00c9DOC - Estuario de Gironda - BLAYE - Ciudadela Vauban',
        summary: 'Ciudadela de Blaye en tren tur\u00edstico, degustaci\u00f3n de vinos, noche de baile',
        details: 'Salida del barco a primera hora de la ma\u00f1ana y llegada a Blaye. Excursi\u00f3n opcional "cl\u00e1sica": paseando en tren tur\u00edstico descubrir\u00e1 Blaye y su ciudadela, adem\u00e1s de disfrutar despu\u00e9s de una degustaci\u00f3n de vinos y productos regionales. Erigida por Vauban a petici\u00f3n de Luis XIV, estaba destinada a proteger Burdeos de las invasiones, y junto con el Fuerte P\u00e2t\u00e9 y el Fuerte M\u00e9doc, frente a Blaye, formaba el "cerrojo de Vauban", un tr\u00edptico defensivo \u00fanico en Francia y Patrimonio Mundial de la UNESCO. El recorrido continuar\u00e1 con la visita al Ch\u00e2teau Marquis de Vauban donde disfrutar\u00e1 de una degustaci\u00f3n de vinos acompa\u00f1ada de productos regionales. Excursi\u00f3n opcional "activa" (reserva obligatoria en la agencia de viajes, no se puede contratar a bordo): visita a pie de los subterr\u00e1neos de la ciudadela de Blaye, despu\u00e9s degustaci\u00f3n de productos locales acompa\u00f1ados de una copa de vino. Navegaci\u00f3n por la Gironda hasta el estuario. Noche de baile a bordo.'
      },
      {
        day: 4,
        title: 'BLAYE - LIBORNA - SAINT-\u00c9MILION - Pueblo Medieval',
        summary: 'Excursi\u00f3n de Saint-\u00c9milion, opci\u00f3n en bicicleta por Liborna, noche de gala',
        details: 'Salida en crucero hacia Liborna. Por la tarde, excursi\u00f3n opcional "activa" (reserva obligatoria en la agencia de viajes, no se puede contratar a bordo): Libourne en bicicleta y degustaci\u00f3n de vino. Excursi\u00f3n opcional "cl\u00e1sica": Saint-\u00c9milion -- descubra este extraordinario pueblo medieval encaramado en una meseta calciza, rodeado de algunos de los mejores vi\u00f1edos del mundo. Visite la iglesia monol\u00edtica, las catacumbas y las encantadoras calles adoquinadas de esta denominaci\u00f3n vinera Patrimonio de la Humanidad. Regreso a Liborna. Noche de gala a bordo.'
      },
      {
        day: 5,
        title: 'LIBORNA - BURDEOS - Ciudad de la Luz',
        summary: 'Barrio Chartrons y Museo del Vino, Bassins des Lumi\u00e8res, degustaci\u00f3n de ostras',
        details: 'Navegaci\u00f3n hacia Burdeos para llegar durante la ma\u00f1ana. Excursi\u00f3n opcional "cl\u00e1sica": el barrio de Chartrons, el museo del vino y el comercio y degustaci\u00f3n de vino. Descubra el elegante barrio de Chartrons, coraz\u00f3n hist\u00f3rico del comercio vinicola bordelense, y el fascinante museo dedicado a la historia del vino. Excursi\u00f3n opcional "activa" (reserva obligatoria en la agencia de viajes, no se puede contratar a bordo): Bassins des Lumi\u00e8res -- una espectacular experiencia de arte audiovisual inmersiva en el interior de una antigua base de submarinos de la Segunda Guerra Mundial. Degustaci\u00f3n de ostras a bordo.'
      },
      {
        day: 6,
        title: 'BURDEOS - Despedida',
        summary: 'Desayuno, desembarque',
        details: 'Desayuno a bordo. Desembarque a las 9:00h. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Full board from dinner on day 1 to breakfast on day 6',
      'Beverages included onboard (except special wine/drink lists)',
      'Double exterior cabin with full private bathroom',
      'Onboard entertainment and activities',
      'Onboard assistance throughout the cruise',
      'Welcome cocktail and welcome evening',
      'Gala dinner evening',
      'Dance night',
      'Onboard oyster tasting with white wine',
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
      'C\u00f3ctel de bienvenida y velada de bienvenida',
      'Cena y noche de gala',
      'Noche de baile',
      'Degustaci\u00f3n de ostras a bordo con vino blanco',
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
      { name: 'Discovery of the M\u00e9doc Grand Crus', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac78', onBoard: null },
      { name: 'Blaye citadel by tourist train & regional tasting', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac44', onBoard: '\u20ac49' },
      { name: 'Underground Blaye (citadel catacombs & tasting)', duration: '4h', type: 'Dynamic', time: 'Afternoon', preBook: null, onBoard: null },
      { name: 'Saint-\u00c9milion', duration: '3h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac78', onBoard: '\u20ac87' },
      { name: 'Libourne by bicycle & wine tasting', duration: '4h', type: 'Dynamic', time: 'Afternoon', preBook: '\u20ac94', onBoard: '\u20ac104' },
      { name: 'Bassins des Lumi\u00e8res', duration: '3h', type: 'Dynamic', time: 'Afternoon', preBook: '\u20ac77', onBoard: '\u20ac86' },
      { name: 'Bordeaux -- Chartrons quarter, Wine & Trade Museum & tasting', duration: '3h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac53', onBoard: '\u20ac59' }
    ],
    es: [
      { name: 'Descubrimiento de los Grands Crus del M\u00e9doc', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac78', onBoard: null },
      { name: 'Blaye y su ciudadela en tren tur\u00edstico y degustaci\u00f3n', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac44', onBoard: '\u20ac49' },
      { name: 'Blaye subterr\u00e1nea (catacumbas de la ciudadela y degustaci\u00f3n)', duration: '4h', type: 'Din\u00e1mica', time: 'Tarde', preBook: null, onBoard: null },
      { name: 'Saint-\u00c9milion', duration: '3h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac78', onBoard: '\u20ac87' },
      { name: 'Libourne en bicicleta y degustaci\u00f3n de vino', duration: '4h', type: 'Din\u00e1mica', time: 'Tarde', preBook: '\u20ac94', onBoard: '\u20ac104' },
      { name: 'Bassins des Lumi\u00e8res', duration: '3h', type: 'Din\u00e1mica', time: 'Tarde', preBook: '\u20ac77', onBoard: '\u20ac86' },
      { name: 'Burdeos -- Barrio Chartrons, Museo del Vino y Comercio y degustaci\u00f3n', duration: '3h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac53', onBoard: '\u20ac59' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons without this being grounds for a claim.',
      'This program is subject to tidal influence -- the itinerary or excursions may be modified accordingly.',
      'Navigation schedules are approximate and may vary without this being grounds for a claim.',
      'The order of visits may be subject to change.',
      'Depending on tidal conditions, the stop at Bourg may be replaced by Libourne and Blaye.',
      'The M\u00e9doc Grand Crus excursion can only be booked before departure -- not available onboard.',
      'The Underground Blaye and Libourne cycling excursions require pre-booking at the travel agency and are not available onboard.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.',
      'Excessive alcohol consumption is harmful to your health; drink in moderation.'
    ],
    es: [
      'En caso de crecidas o decrecidas del r\u00edo o cualquier evento de fuerza mayor, el comandante puede verse obligado a modificar el programa por motivos de seguridad sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Este programa est\u00e1 sometido a la influencia de las mareas, por lo que el itinerario o las excursiones pueden verse modificadas.',
      'Los horarios de navegaci\u00f3n son orientativos y pueden sufrir variaciones sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'El orden de las visitas puede estar sujeto a modificaciones.',
      'En funci\u00f3n de la marea, la escala de Bourg se puede sustituir por Liborna y Blaye.',
      'La excursi\u00f3n de los Grands Crus del M\u00e9doc solo puede reservarse antes de la salida -- no disponible a bordo.',
      'Las excursiones de Blaye subterr\u00e1nea y Libourne en bicicleta requieren reserva previa en la agencia de viajes y no est\u00e1n disponibles a bordo.',
      'Ni\u00f1os de 2 a 9 a\u00f1os cumplidos. El barco no dispone de cunas; el cliente deber\u00e1 llevar la suya.',
      'Documento nacional de identidad o pasaporte en vigor obligatorio. Los residentes fuera de la UE deben consultar con su embajada o consulado.',
      'El consumo excesivo de alcohol es peligroso para la salud; beba con moderaci\u00f3n.'
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
    ? ['Burdeos', 'Cussac-Fort-M\u00e9doc', 'Blaye', 'Liborna', 'Saint-\u00c9milion', 'Burdeos']
    : ['Bordeaux', 'Cussac-Fort-M\u00e9doc', 'Blaye', 'Libourne', 'Saint-\u00c9milion', 'Bordeaux'];

  return (
    <div className="min-h-screen">
      {/* Hero -- rich burgundy wine theme */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #4a1020 0%, #7b2d3e 40%, #3d1a0e 100%)' }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-rose-300/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-400/10 blur-3xl"></div>
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
            <p className="text-2xl md:text-3xl text-rose-200 mb-6 font-light">
              {t.titleSub}
            </p>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-rose-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-rose-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-rose-300 mr-2" />
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
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#7b2d3e] text-white' : 'bg-white text-[#7b2d3e] border border-[#7b2d3e]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#7b2d3e]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#7b2d3e] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="rounded-2xl p-8 md:p-10 text-white text-center shadow-xl" style={{ background: 'linear-gradient(135deg, #4a1020 0%, #7b2d3e 100%)' }}>
            <Ship className="w-12 h-12 mx-auto mb-4 text-rose-300" />
            <p className="text-4xl md:text-5xl font-bold mb-3">{t.priceFrom}</p>
            <p className="text-rose-200 text-sm mb-4">{t.cabinTitle} &middot; {t.cabinDesc}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-red-100 text-lg max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#7b2d3e] px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#7b2d3e] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#7b2d3e] mt-1.5 mr-4"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#7b2d3e] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Music, en: 'Gala & Dance Nights', es: 'Noches de Gala y Baile' },
              { icon: Users, en: 'Oyster Tasting', es: 'Degustaci\u00f3n de Ostras' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#7b2d3e] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#7b2d3e] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#7b2d3e]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl text-white flex flex-col items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #4a1020, #7b2d3e)' }}>
                      <span className="text-[10px] leading-none font-medium text-rose-200">{language === 'en' ? 'Day' : 'D\u00eda'}</span>
                      <span className="font-bold text-sm leading-tight">{day.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#7b2d3e] text-white' : 'bg-gray-100 text-gray-400'}`}>
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
          <h2 className="text-3xl font-bold text-[#7b2d3e] mb-3 text-center">
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
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${exc.type === 'Dynamic' || exc.type === 'Din\u00e1mica' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-white text-gray-600 border-gray-200'}`}>
                      {exc.type}
                    </span>
                    <span>{exc.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs uppercase tracking-wide">{t.preBook}</span>
                    {exc.preBook ? (
                      <span className="text-lg font-bold text-[#7b2d3e]">{exc.preBook}</span>
                    ) : (
                      <span className="text-sm text-gray-400 italic">{language === 'en' ? 'Contact us' : 'Consúltenos'}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs uppercase tracking-wide">{t.onBoard}</span>
                    {exc.onBoard ? (
                      <span className="text-lg font-semibold text-gray-600">{exc.onBoard}</span>
                    ) : (
                      <span className="text-sm font-semibold text-gray-400">{t.onBoardNA}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {excursions.length > 4 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllExcursions(!showAllExcursions)}
                className="text-[#7b2d3e] font-semibold hover:underline transition-colors"
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
              <h2 className="text-2xl font-bold text-[#7b2d3e] mb-6 flex items-center">
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
              <h2 className="text-2xl font-bold text-[#7b2d3e] mb-6 flex items-center">
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
          <h2 className="text-2xl font-bold text-[#7b2d3e] mb-6 text-center">
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
      <section className="py-16 text-white" style={{ background: 'linear-gradient(135deg, #4a1020 0%, #7b2d3e 50%, #3d1a0e 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Ship className="w-16 h-16 mx-auto mb-6 text-rose-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#7b2d3e] px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors shadow-lg"
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
          <h2 className="text-3xl font-bold text-[#7b2d3e] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="garonne_cruise" />
        </div>
      </section>
    </div>
  );
}
