import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Users, Wine, Music, Utensils } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function CroatiaMontenegroCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Ocean Cruise',
      title: 'Croatia & Montenegro',
      titleSub: 'Port-to-Port Formula',
      subtitle: 'Discover the stunning Dalmatian Coast and the splendor of the Bay of Kotor',
      duration: '8 Days / 7 Nights',
      route: 'Dubrovnik (Round Trip)',
      dates: '2026 Season',
      ref: 'Ref. DHD_PPES',
      intro: 'Enjoy a unique journey through Croatia and Montenegro, situated at the heart of the Dalmatian coast, a place of unmatched beauty. Dubrovnik, known as the "Pearl of the Adriatic", Trogir, Hvar, Korcula, and Kotor are must-visit cities, along with the national parks of Mljet and Krka, true masterworks of nature.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Ready to Explore the Adriatic?',
      ctaText: 'Contact us today to reserve your cabin on this spectacular cruise through Croatia and Montenegro.',
      callNow: 'Contact Us',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information',
      pricing: 'Pricing',
      priceFrom: 'From 1,995 \u20ac',
      pricingContact: 'Contact Us for Cabin Pricing',
      pricingNote: 'Multiple cabin categories available. Contact us for detailed pricing, availability, and group rates.',
      showMore: 'Show all excursions',
      showLess: 'Show fewer excursions',
      croisiHighlights: 'CroisiEurope Highlights',
      portToPort: 'Port-to-Port Formula'
    },
    es: {
      featured: 'Crucero Oce\u00e1nico',
      title: 'Croacia y Montenegro',
      titleSub: 'F\u00f3rmula Puerto/Puerto',
      subtitle: 'Descubra la impresionante costa D\u00e1lmata y el esplendor de las Bocas de Kotor',
      duration: '8 D\u00edas / 7 Noches',
      route: 'Dubrovnik (Ida y Vuelta)',
      dates: 'Temporada 2026',
      ref: 'R\u00e9f. DHD_PPES',
      intro: 'Disfrute de un viaje \u00fanico en Croacia y Montenegro, situados en el coraz\u00f3n de la costa D\u00e1lmata, un lugar de belleza inigualable. Dubrovnik, conocida como la "perla del Adri\u00e1tico", Trogir, Hvar, Korcula y Kotor son ciudades de visita obligada, adem\u00e1s de los parques nacionales de Mljet y Krka, verdaderas obras de la naturaleza.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: '\u00bfListo para Explorar el Adri\u00e1tico?',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este espectacular crucero por Croacia y Montenegro.',
      callNow: 'Cont\u00e1ctanos',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n',
      pricing: 'Precios',
      priceFrom: 'Desde 1.995 \u20ac',
      pricingContact: 'Cont\u00e1ctenos para Precios de Cabinas',
      pricingNote: 'M\u00faltiples categor\u00edas de cabinas disponibles. Cont\u00e1ctenos para precios detallados, disponibilidad y tarifas de grupo.',
      showMore: 'Ver todas las excursiones',
      showLess: 'Ver menos excursiones',
      croisiHighlights: 'Destacados CroisiEurope',
      portToPort: 'F\u00f3rmula Puerto/Puerto'
    }
  };

  const highlightsList = {
    en: [
      'Architectural diversity in the pure Venetian-Byzantine tradition',
      'The splendor of the Bay of Kotor, a UNESCO World Heritage Site',
      'Paradise-like beauty of the islands of Mljet, Korcula, and Hvar',
      'The most beautiful fortified cities of Dalmatia',
      'Krka National Park with its stunning cascading waterfalls',
      'Explore Split and Diocletian\'s Palace, a Roman masterpiece',
      'Folklore evening and gala night onboard',
      'All meals and beverages included onboard',
      'Exterior cabins with full private bathroom',
      'Free Wi-Fi and individual headsets for excursions'
    ],
    es: [
      'Diversidad arquitect\u00f3nica en la pura tradici\u00f3n v\u00e9neto-bizantina',
      'El esplendor de las Bocas de Kotor, Patrimonio de la Humanidad por la UNESCO',
      'Belleza paradis\u00edaca de las islas Mljet, Korcula y Hvar',
      'Las ciudades fortificadas m\u00e1s bellas de toda Dalmacia',
      'Parque Nacional de Krka con sus impresionantes cascadas',
      'Explore Split y el Palacio de Diocleciano, una obra maestra romana',
      'Noche folcl\u00f3rica y noche de gala a bordo',
      'Todas las comidas y bebidas incluidas a bordo',
      'Cabinas exteriores con ba\u00f1o completo privado',
      'Wi-Fi gratuito y auriculares individuales para excursiones'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        date: 'Day 1',
        title: 'DUBROVNIK - Welcome Aboard',
        summary: 'Embarkation, welcome cocktail, dinner',
        details: 'Embarkation at 6:00 PM. Cabin accommodation and crew presentation followed by a welcome cocktail. Dinner onboard. Free evening.'
      },
      {
        day: 2,
        date: 'Day 2',
        title: 'DUBROVNIK - MLJET - Pearl of the Adriatic',
        summary: 'Optional guided tour of Dubrovnik, afternoon free time',
        details: 'Optional excursion: guided tour of Dubrovnik. Free afternoon in Dubrovnik. We suggest a walk along the city walls for a wonderful panoramic view of the old town. Note: Wall entrance approximately \u20ac35.'
      },
      {
        day: 3,
        date: 'Day 3',
        title: 'MLJET - KORCULA - Island Treasures',
        summary: 'Mljet island visit, Korcula buggy or guided tour, folklore night',
        details: 'Optional excursion: guided tour of Mljet, one of the most beautiful islands in the Adriatic. Navigation to Korcula. In the afternoon, choose between an "active" buggy adventure exploring olive groves and vineyards, or a "classic" guided tour of Korcula. Folklore evening.'
      },
      {
        day: 4,
        date: 'Day 4',
        title: 'KORCULA - SIBENIK - Waterfalls of Krka',
        summary: 'Morning navigation, Krka National Park or Sibenik tour, entertainment night',
        details: 'Morning navigation. Choose between an "active" hiking route through Krka National Park along the waterfalls, descending the course of the Krka to Skradin, or a "classic" guided tour of Sibenik and the Krka river waterfalls where water cascades in succession over a short distance. Entertainment night.'
      },
      {
        day: 5,
        date: 'Day 5',
        title: 'SIBENIK - TROGIR - SPLIT - Heart of Dalmatia',
        summary: 'Trogir guided tour, navigation to Split, Diocletian\'s Palace',
        details: 'Arrival in Trogir. Optional excursion: guided tour of Trogir, built on an island, a small jewel with narrow streets full of staircases and vaulted passages. Navigation to Split, the second largest city in Croatia and the heart of Dalmatia. In the afternoon: optional guided tour of Diocletian\'s Palace, the historic jewel of Split.'
      },
      {
        day: 6,
        date: 'Day 6',
        title: 'SPLIT - HVAR - VIS - Adriatic Gems',
        summary: 'Hvar fortress walk or guided tour, Vis cycling, gala night',
        details: 'Arrival in Hvar. Choose between an "active" walk through the city to the fortress with spectacular views of Hvar Bay, or a "classic" guided tour of Hvar, one of the oldest places in Dalmatia. In the afternoon: optional "active" cycling excursion on the island of Vis through typical villages, discovering idyllic landscapes between sea and mountain. Gala night.'
      },
      {
        day: 7,
        date: 'Day 7',
        title: 'KOTOR - DUBROVNIK - Bay of Kotor',
        summary: 'Morning navigation, guided tour of Kotor',
        details: 'Morning navigation. Optional excursion: guided tour of Kotor, nestled at the foot of dramatic mountains along the spectacular Bay of Kotor.'
      },
      {
        day: 8,
        date: 'Day 8',
        title: 'DUBROVNIK - Farewell',
        summary: 'Breakfast, disembarkation',
        details: 'Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        date: 'D\u00eda 1',
        title: 'DUBROVNIK - Bienvenida a Bordo',
        summary: 'Embarque, c\u00f3ctel de bienvenida, cena',
        details: 'Embarque a las 18:00h. Acomodaci\u00f3n en los camarotes y presentaci\u00f3n de la tripulaci\u00f3n seguida de un c\u00f3ctel de bienvenida. Cena a bordo. Noche libre.'
      },
      {
        day: 2,
        date: 'D\u00eda 2',
        title: 'DUBROVNIK - MLJET - Perla del Adri\u00e1tico',
        summary: 'Visita guiada opcional de Dubrovnik, tarde libre',
        details: 'Excursi\u00f3n opcional: visita guiada de Dubrovnik. Tarde libre en Dubrovnik. Les sugerimos un paseo por las murallas desde donde tendr\u00e1n una maravillosa vista panor\u00e1mica del casco antiguo. Nota: Entrada a las murallas, aproximadamente 35\u20ac.'
      },
      {
        day: 3,
        date: 'D\u00eda 3',
        title: 'MLJET - KORCULA - Tesoros Insulares',
        summary: 'Visita de Mljet, tour en buggy o visita guiada de Korcula, noche folcl\u00f3rica',
        details: 'Excursi\u00f3n opcional: visita guiada de Mljet, una de las islas m\u00e1s bellas del Adri\u00e1tico. Navegaci\u00f3n hacia Korcula. Por la tarde, elija entre una aventura "activa" en buggy descubriendo olivos y vi\u00f1edos, o una visita guiada "cl\u00e1sica" de Korcula. Noche folcl\u00f3rica.'
      },
      {
        day: 4,
        date: 'D\u00eda 4',
        title: 'KORCULA - SIBENIK - Cascadas del Krka',
        summary: 'Navegaci\u00f3n matutina, Parque Nacional del Krka o visita a Sibenik, noche de animaci\u00f3n',
        details: 'Ma\u00f1ana de navegaci\u00f3n. Elija entre una ruta de senderismo "activa" por el Parque Nacional del Krka a lo largo de las cascadas, descendiendo el curso del Krka hacia Skradin, o una visita guiada "cl\u00e1sica" de Sibenik y de los saltos de agua del r\u00edo Krka. El agua resurge en cascadas que se suceden en una corta distancia. Noche de animaci\u00f3n.'
      },
      {
        day: 5,
        date: 'D\u00eda 5',
        title: 'SIBENIK - TROGIR - SPLIT - Coraz\u00f3n de Dalmacia',
        summary: 'Visita guiada de Trogir, navegaci\u00f3n a Split, Palacio de Diocleciano',
        details: 'Llegada a Trogir. Excursi\u00f3n opcional: visita guiada de Trogir. Edificada sobre una isla, esta villa es una peque\u00f1a joya con callejuelas llenas de escaleras y de pasadizos abovedados. Navegaci\u00f3n hacia Split, segunda ciudad de Croacia en tama\u00f1o y coraz\u00f3n de Dalmacia. Por la tarde: excursi\u00f3n opcional: visita guiada del palacio de Diocleciano, joya hist\u00f3rica de Split.'
      },
      {
        day: 6,
        date: 'D\u00eda 6',
        title: 'SPLIT - HVAR - VIS - Joyas del Adri\u00e1tico',
        summary: 'Paseo a la fortaleza de Hvar o visita guiada, Vis en bicicleta, noche de gala',
        details: 'Llegada a Hvar. Elija entre un paseo "activo" por la ciudad hasta la fortaleza con vistas espectaculares sobre la bah\u00eda de Hvar, o una visita guiada "cl\u00e1sica" de la ciudad de Hvar, uno de los lugares m\u00e1s antiguos de Dalmacia. Por la tarde: excursi\u00f3n "activa" opcional en bicicleta en la isla de Vis. Ruta por los pueblos t\u00edpicos de la isla descubriendo paisajes id\u00edlicos entre el mar y la monta\u00f1a. Noche de gala.'
      },
      {
        day: 7,
        date: 'D\u00eda 7',
        title: 'KOTOR - DUBROVNIK - Bocas de Kotor',
        summary: 'Navegaci\u00f3n matutina, visita guiada de Kotor',
        details: 'Ma\u00f1ana de navegaci\u00f3n. Excursi\u00f3n opcional: visita guiada de Kotor, enclavada al pie de dram\u00e1ticas monta\u00f1as a lo largo de la espectacular Bah\u00eda de Kotor.'
      },
      {
        day: 8,
        date: 'D\u00eda 8',
        title: 'DUBROVNIK - Despedida',
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
      'Folklore evening',
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
      'Noche folcl\u00f3rica',
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
      { name: 'Guided tour of Dubrovnik', duration: '3h 45min', type: 'Classic', time: 'Morning', preBook: '\u20ac64', onBoard: '\u20ac71' },
      { name: 'Guided tour of Mljet', duration: '3h 20min', type: 'Classic', time: 'Morning', preBook: '\u20ac67', onBoard: '\u20ac74' },
      { name: 'Korcula by buggy', duration: '5h', type: 'Active', time: 'Afternoon', preBook: '\u20ac127', onBoard: '\u20ac141' },
      { name: 'Guided tour of Korcula', duration: '2h 30min', type: 'Classic', time: 'Afternoon', preBook: '\u20ac37', onBoard: '\u20ac41' },
      { name: 'Hiking in Krka National Park', duration: '4h 30min', type: 'Active', time: 'Afternoon', preBook: '\u20ac100', onBoard: '\u20ac111' },
      { name: 'Sibenik & Krka Waterfalls', duration: '4h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac106', onBoard: '\u20ac118' },
      { name: 'Guided tour of Trogir', duration: '3h 20min', type: 'Classic', time: 'Morning', preBook: '\u20ac24', onBoard: '\u20ac27' },
      { name: 'Guided tour of Split', duration: '2h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac28', onBoard: '\u20ac29' },
      { name: 'Guided tour of Hvar', duration: '2h', type: 'Classic', time: 'Morning', preBook: '\u20ac28', onBoard: '\u20ac31' },
      { name: 'Walk to Hvar Fortress', duration: '2h', type: 'Active', time: 'Morning', preBook: '\u20ac30', onBoard: '\u20ac31' },
      { name: 'Vis by bicycle', duration: '2h 30min', type: 'Active', time: 'Afternoon', preBook: '\u20ac77', onBoard: '\u20ac86' },
      { name: 'Guided tour of Kotor', duration: '2h', type: 'Classic', time: 'Afternoon', preBook: '\u20ac23', onBoard: '\u20ac26' }
    ],
    es: [
      { name: 'Visita guiada de Dubrovnik', duration: '3h 45min', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac64', onBoard: '\u20ac71' },
      { name: 'Visita guiada de Mljet', duration: '3h 20min', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac67', onBoard: '\u20ac74' },
      { name: 'Korcula en buggy', duration: '5h', type: 'Din\u00e1mica', time: 'Tarde', preBook: '\u20ac127', onBoard: '\u20ac141' },
      { name: 'Visita guiada de Korcula', duration: '2h 30min', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac37', onBoard: '\u20ac41' },
      { name: 'Senderismo en el Parque Nacional del Krka', duration: '4h 30min', type: 'Din\u00e1mica', time: 'Tarde', preBook: '\u20ac100', onBoard: '\u20ac111' },
      { name: 'Sibenik y Saltos del Krka', duration: '4h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac106', onBoard: '\u20ac118' },
      { name: 'Visita guiada de Trogir', duration: '3h 20min', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac24', onBoard: '\u20ac27' },
      { name: 'Visita guiada de Split', duration: '2h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac28', onBoard: '\u20ac29' },
      { name: 'Visita guiada de Hvar', duration: '2h', type: 'Cl\u00e1sica', time: 'Ma\u00f1ana', preBook: '\u20ac28', onBoard: '\u20ac31' },
      { name: 'Paseo por la ciudad de Hvar hasta la fortaleza', duration: '2h', type: 'Din\u00e1mica', time: 'Ma\u00f1ana', preBook: '\u20ac30', onBoard: '\u20ac31' },
      { name: 'Vis en bicicleta', duration: '2h 30min', type: 'Din\u00e1mica', time: 'Tarde', preBook: '\u20ac77', onBoard: '\u20ac86' },
      { name: 'Visita guiada de Kotor', duration: '2h', type: 'Cl\u00e1sica', time: 'Tarde', preBook: '\u20ac23', onBoard: '\u20ac26' }
    ]
  };

  const importantInfoList = {
    en: [
      'Navigation is subject to weather conditions that may disrupt itineraries. In some cases, intermediate stops may be cancelled. CroisiEurope will do everything possible to ensure passenger safety.',
      'For safety reasons, the captain may be required to modify the program without this being grounds for a claim.',
      'Navigation schedules are approximate and may vary without this being grounds for a claim.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.',
      'Dubrovnik wall entrance approximately \u20ac35 (2025 rate).',
      'Private transfers available upon request. Please inquire.'
    ],
    es: [
      'La navegaci\u00f3n est\u00e1 ligada a las condiciones meteorol\u00f3gicas que puedan perturbar los itinerarios y en algunos casos las escalas intermedias pueden ser suprimidas. CroisiEurope har\u00e1 todo lo posible para garantizar la seguridad de los pasajeros.',
      'Por motivos de seguridad, el comandante puede verse obligado a modificar el programa sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Los horarios de navegaci\u00f3n son orientativos y pueden sufrir variaciones sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Ni\u00f1os de 2 a 9 a\u00f1os cumplidos. El barco no dispone de cunas; el cliente deber\u00e1 llevar la suya.',
      'Documento nacional de identidad o pasaporte en vigor obligatorio. Los residentes fuera de la UE deben consultar con su embajada o consulado.',
      'Entrada a las murallas de Dubrovnik, aproximadamente 35\u20ac (tarifa 2025).',
      'Posibilidad de traslados privados a la demanda. Rogamos consulten.'
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
      <section className="relative bg-gradient-to-br from-[#164e63] via-[#0e7490] to-[#1a2b5c] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl"></div>
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
            <p className="text-2xl md:text-3xl text-cyan-200 mb-6 font-light">
              {t.titleSub}
            </p>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-cyan-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-cyan-300 mr-2" />
                <span>{t.dates}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-cyan-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Ship className="w-5 h-5 text-cyan-300 mr-2" />
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
            {['Dubrovnik', 'Mljet', 'Korcula', 'Sibenik', 'Trogir', 'Split', 'Hvar', 'Vis', 'Kotor', 'Dubrovnik'].map((port, i, arr) => (
              <div key={i} className="flex items-center">
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#0e7490] text-white' : 'bg-white text-[#0e7490] border border-[#0e7490]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#0e7490]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0e7490] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-gradient-to-br from-[#164e63] to-[#0e7490] rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <Anchor className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
            <p className="text-4xl md:text-5xl font-bold mb-4">{t.priceFrom}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-cyan-100 text-lg max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#0e7490] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#0e7490] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#0e7490] mt-1.5 mr-4"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#0e7490] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Music, en: 'Folklore & Gala Nights', es: 'Noches Folcl\u00f3ricas y de Gala' },
              { icon: Users, en: 'Onboard Staff', es: 'Personal a Bordo' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#0e7490] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0e7490] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#0e7490]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#164e63] to-[#0e7490] text-white flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] leading-none font-medium text-cyan-200">{day.date}</span>
                      <span className="font-bold text-sm leading-tight">{day.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#0e7490] text-white' : 'bg-gray-100 text-gray-400'}`}>
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
          <h2 className="text-3xl font-bold text-[#0e7490] mb-3 text-center">
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
                    <span className="text-lg font-bold text-[#0e7490]">{exc.preBook}</span>
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
                className="text-[#0e7490] font-semibold hover:underline transition-colors"
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
              <h2 className="text-2xl font-bold text-[#0e7490] mb-6 flex items-center">
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
              <h2 className="text-2xl font-bold text-[#0e7490] mb-6 flex items-center">
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
          <h2 className="text-2xl font-bold text-[#0e7490] mb-6 text-center">
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
      <section className="py-16 bg-gradient-to-br from-[#164e63] via-[#0e7490] to-[#1a2b5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Anchor className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta}</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#0e7490] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
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
          <h2 className="text-3xl font-bold text-[#0e7490] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="croatia_montenegro_cruise" />
        </div>
      </section>
    </div>
  );
}