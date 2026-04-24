import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp, Ship, Anchor, Clock, Utensils, Wine, Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function DanubeChristmasCruise() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'River Cruise',
      title: 'Christmas Markets on the Danube',
      titleSub: 'Vienna \u2022 Budapest \u2022 Bratislava',
      subtitle: 'Discover the most magical Christmas markets of Europe along the Danube',
      duration: '5 Days / 4 Nights',
      route: 'Vienna (Round Trip)',
      ref: 'R\u00e9f. MVI_PPES',
      portToPort: 'Port-to-Port Formula',
      intro: 'Embark on a magical Christmas cruise through the heart of the great Danube capitals. Stroll through Vienna\u2019s most beautiful squares and its enchanting Christmas markets, where the pleasant smell of Christmas cookies and warm punch will immerse you in a festive and friendly atmosphere. Explore the Christmas markets of Bratislava and Budapest, where the magic of local craftsmanship and culinary delights will leave no one indifferent.',
      highlights: 'Cruise Highlights',
      itinerary: 'Day-by-Day Itinerary',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      excursions: 'Optional Excursions',
      excursionsNote: 'Prices per person. Pre-booking before the cruise is recommended for best rates.',
      preBook: 'Pre-book',
      onBoard: 'Onboard',
      importantInfo: 'Important Information',
      cta: 'Reserve Your Christmas Cruise',
      ctaText: 'Contact us today to reserve your cabin on this magical 5-day Christmas market river cruise through Vienna, Budapest, and Bratislava.',
      callNow: 'Contact Us',
      pricing: 'Pricing',
      priceFrom: 'From 990 \u20ac',
      pricingContact: 'Contact Us for Cabin Pricing',
      pricingNote: 'Price per person based on double occupancy exterior cabin. Contact us for availability, group rates, and departure dates.',
      cabinTitle: 'Double Exterior Cabin',
      cabinDesc: 'All cabins are exterior with full private bathroom and river views.',
      croisiHighlights: 'CroisiEurope Highlights',
      formTitle: 'Request More Information'
    },
    es: {
      featured: 'Crucero Fluvial',
      title: 'Mercados de Navidad en el Danubio',
      titleSub: 'Viena \u2022 Budapest \u2022 Bratislava',
      subtitle: 'Descubra los mercados navide\u00f1os m\u00e1s m\u00e1gicos de Europa a lo largo del Danubio',
      duration: '5 D\u00edas / 4 Noches',
      route: 'Viena (Ida y Vuelta)',
      ref: 'R\u00e9f. MVI_PPES',
      portToPort: 'F\u00f3rmula Puerto/Puerto',
      intro: 'Emb\u00e1rquese en un crucero navide\u00f1o por el coraz\u00f3n de las grandes capitales del Danubio. Pasee por las plazas m\u00e1s bellas de Viena y por sus encantadores mercados navide\u00f1os, donde el agradable olor a galletitas navide\u00f1as y a ponche caliente le sumergir\u00e1 en un ambiente festivo y amistoso. Visite los mercados navide\u00f1os de Bratislava y Budapest, donde la magia de la artesan\u00eda local y las delicias culinarias no dejar\u00e1n indiferente a nadie.',
      highlights: 'Destacados del Crucero',
      itinerary: 'Itinerario D\u00eda a D\u00eda',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      excursions: 'Excursiones Opcionales',
      excursionsNote: 'Precios por persona. Se recomienda reservar antes del crucero para mejores tarifas.',
      preBook: 'Pre-reserva',
      onBoard: 'A bordo',
      importantInfo: 'Informaci\u00f3n Importante',
      cta: 'Reserve su Crucero Navide\u00f1o',
      ctaText: 'Cont\u00e1ctenos hoy para reservar su cabina en este m\u00e1gico crucero navide\u00f1o de 5 d\u00edas por Viena, Budapest y Bratislava.',
      callNow: 'Cont\u00e1ctanos',
      pricing: 'Precios',
      priceFrom: 'Desde 990 \u20ac',
      pricingContact: 'Cont\u00e1ctenos para Precios de Cabinas',
      pricingNote: 'Precio por persona en cabina doble exterior. Cont\u00e1ctenos para disponibilidad, tarifas de grupo y fechas de salida.',
      cabinTitle: 'Cabina Doble Exterior',
      cabinDesc: 'Todas las cabinas son exteriores con ba\u00f1o completo privado y vistas al r\u00edo.',
      croisiHighlights: 'Destacados CroisiEurope',
      formTitle: 'Solicitar M\u00e1s Informaci\u00f3n'
    }
  };

  const highlightsList = {
    en: [
      'Vienna\u2019s Christmas Market at City Hall -- internationally renowned for its magical atmosphere',
      'Budapest Christmas Market, one of the largest in Europe',
      'Bratislava Christmas Market with local crafts and Slovak culinary delights',
      'Themed Austrian dinner on the first night',
      'Gala dinner and gala night onboard',
      'Welcome cocktail and crew presentation',
      'Full board -- all meals and beverages included onboard',
      'Free Wi-Fi throughout the cruise'
    ],
    es: [
      'Mercado Navide\u00f1o de Viena frente al Ayuntamiento, de reputaci\u00f3n internacional',
      'Mercado de Navidad de Budapest, uno de los m\u00e1s grandes de Europa',
      'Mercado navide\u00f1o de Bratislava con artesan\u00eda local y delicias eslovacas',
      'Cena tem\u00e1tica austriaca la primera noche',
      'Cena y noche de gala a bordo',
      'C\u00f3ctel de bienvenida y presentaci\u00f3n de la tripulaci\u00f3n',
      'Pensi\u00f3n completa - todas las comidas y bebidas incluidas a bordo',
      'Wi-Fi gratuito durante todo el crucero'
    ]
  };

  const days = {
    en: [
      {
        day: 1,
        title: 'VIENNA -- Welcome Aboard',
        summary: 'Embarkation at 6:00 PM, welcome cocktail, Austrian-themed dinner',
        details: 'Embarkation at 6:00 PM. Crew presentation and welcome cocktail. Austrian-themed dinner onboard.'
      },
      {
        day: 2,
        title: 'VIENNA -- Budapest',
        summary: 'Optional guided tour of Vienna, Christmas Market visit, afternoon navigation to Budapest',
        details: 'Morning dedicated to the optional guided tour of Vienna. Visit the Christmas Market in front of City Hall, with its wonderful decorations and great international reputation. Afternoon navigation toward Budapest.'
      },
      {
        day: 3,
        title: 'BUDAPEST',
        summary: 'Optional guided tour of Budapest, UNESCO World Heritage city, Christmas Market visit, entertainment night',
        details: 'Morning dedicated to the optional guided tour of Budapest. This surprising city, separated by the Danube into two parts -- Buda with its hills and valleys, and Pest with its plain offering a wonderful panoramic view of the Danube -- is classified as a UNESCO World Cultural Heritage site. Visit the Budapest Christmas Market, one of the largest in Europe. Free afternoon to explore the city. Entertainment night onboard.'
      },
      {
        day: 4,
        title: 'BRATISLAVA',
        summary: 'Morning navigation, optional guided tour, Christmas Market, gala dinner and night',
        details: 'Morning navigation. Optional guided tour of Bratislava and its Christmas Market, featuring a wide variety of crafts and examples of Slovak art. Gala dinner and gala night onboard. Departure overnight toward Vienna.'
      },
      {
        day: 5,
        title: 'VIENNA -- Farewell',
        summary: 'Early morning arrival, breakfast onboard, disembarkation at 9:00 AM',
        details: 'Arrival in Vienna early in the morning. Breakfast onboard. Disembarkation at 9:00 AM. End of our services.'
      }
    ],
    es: [
      {
        day: 1,
        title: 'VIENA -- Bienvenida a Bordo',
        summary: 'Embarque a las 18:00h, c\u00f3ctel de bienvenida, cena tem\u00e1tica austriaca',
        details: 'Embarque a las 18:00h. Presentaci\u00f3n de la tripulaci\u00f3n y c\u00f3ctel de bienvenida. Cena tem\u00e1tica inspirada en Austria.'
      },
      {
        day: 2,
        title: 'VIENA -- BUDAPEST',
        summary: 'Excursi\u00f3n opcional a Viena, visita al Mercado de Navidad, tarde de navegaci\u00f3n hacia Budapest',
        details: 'Ma\u00f1ana dedicada a la excursi\u00f3n guiada opcional de Viena. Visita del Mercado de Navidad situado frente al edificio del Ayuntamiento, con una decoraci\u00f3n maravillosa y con una gran reputaci\u00f3n internacional. Tarde de navegaci\u00f3n hacia Budapest.'
      },
      {
        day: 3,
        title: 'BUDAPEST',
        summary: 'Excursi\u00f3n opcional, ciudad Patrimonio UNESCO, mercado navide\u00f1o, noche de animaci\u00f3n',
        details: 'Ma\u00f1ana dedicada a la excursi\u00f3n guiada opcional de Budapest. Esta sorprendente ciudad, separada por el Danubio en dos partes: Buda con sus colinas y valles; y Pest, con su planicie desde donde se ofrece una maravillosa vista panor\u00e1mica del Danubio, est\u00e1 clasificada patrimonio cultural mundial por la UNESCO. Se visitar\u00e1 el Mercado de Navidad de Budapest, uno de los m\u00e1s grandes de Europa. Tarde libre para visitar la ciudad. Noche con animaci\u00f3n.'
      },
      {
        day: 4,
        title: 'BRATISLAVA',
        summary: 'Ma\u00f1ana de navegaci\u00f3n, excursi\u00f3n opcional, mercado navide\u00f1o, cena y noche de gala',
        details: 'Ma\u00f1ana de navegaci\u00f3n. Excursi\u00f3n guiada opcional de Bratislava y de su Mercado de Navidad con gran variedad de artesan\u00eda y muestras de arte eslovaco. Cena y noche de gala. Salida por la noche en direcci\u00f3n a Viena.'
      },
      {
        day: 5,
        title: 'VIENA -- Despedida',
        summary: 'Llegada a primera hora, desayuno a bordo, desembarque a las 9:00h',
        details: 'Llegada a Viena a primera hora de la ma\u00f1ana. Desayuno a bordo. Desembarque a las 9:00h. Fin de nuestros servicios.'
      }
    ]
  };

  const includedItems = {
    en: [
      'Full board from dinner on day 1 to breakfast on day 5',
      'Beverages included onboard (except special wine/drink lists)',
      'Beverage package for meals outside the ship (1/4 wine or 1 mineral water + 1 coffee per person per meal)',
      'Double exterior cabin with window and full private bathroom',
      'Onboard entertainment and activities',
      'Welcome cocktail',
      'Gala dinner evening',
      'Assistance and repatriation insurance',
      'Port taxes included',
      'Free Wi-Fi onboard',
      'Individual headsets during excursions'
    ],
    es: [
      'Pensi\u00f3n completa desde la cena del primer d\u00eda al desayuno del \u00faltimo',
      'Bebidas incluidas a bordo (excepto cartas especiales)',
      'Paquete de bebidas para comidas realizadas fuera del barco (1/4 de vino o 1 agua mineral y 1 caf\u00e9 por persona y comida)',
      'Cabina doble exterior con ventana y ba\u00f1o completo privado',
      'Animaci\u00f3n a bordo',
      'C\u00f3ctel de bienvenida',
      'Cena y noche de gala',
      'Seguro de asistencia/repatriaci\u00f3n',
      'Tasas portuarias incluidas',
      'Wi-Fi gratuito a bordo',
      'Auriculares individuales durante las excursiones'
    ]
  };

  const notIncludedItems = {
    en: [
      'Cancellation and luggage insurance',
      'Optional excursions (book and pay onboard or at your travel agency)',
      'Transfers',
      'Beverages from special menus, during excursions or transfers'
    ],
    es: [
      'Seguro de anulaci\u00f3n/equipajes',
      'Excursiones opcionales o facultativas (reserva y pago a bordo o en su agencia de viaje)',
      'Traslados',
      'Bebidas en men\u00fas especiales, tomadas durante excursiones o traslados'
    ]
  };

  const excursionsList = {
    en: [
      { name: 'Guided tour of Vienna', day: 2, duration: '-', type: 'Classic', preBook: '\u20ac49', onBoard: '\u20ac54' },
      { name: 'Guided tour of Budapest', day: 3, duration: '4h', type: 'Classic', preBook: '\u20ac40', onBoard: '\u20ac44' },
      { name: 'Guided tour of Bratislava', day: 4, duration: '3h', type: 'Classic', preBook: '\u20ac41', onBoard: '\u20ac46' }
    ],
    es: [
      { name: 'Visita guiada de Viena', day: 2, duration: '-', type: 'Cl\u00e1sica', preBook: '\u20ac49', onBoard: '\u20ac54' },
      { name: 'Visita guiada de Budapest', day: 3, duration: '4h', type: 'Cl\u00e1sica', preBook: '\u20ac40', onBoard: '\u20ac44' },
      { name: 'Visita guiada de Bratislava', day: 4, duration: '3h', type: 'Cl\u00e1sica', preBook: '\u20ac41', onBoard: '\u20ac46' }
    ]
  };

  const importantInfoList = {
    en: [
      'In the event of flooding, low water, or any force majeure, the captain may modify the program for safety reasons without this being grounds for a claim.',
      'Navigation schedules are approximate and may vary without this being grounds for a claim.',
      'Children ages 2 to 9 years. The ship does not have cribs; guests must bring their own.',
      'Valid national ID or passport required. Non-EU residents should consult their embassy or consulate.',
      'Private transfers available on request. Please consult us.'
    ],
    es: [
      'En caso de crecidas o decrecidas del r\u00edo o cualquier evento de fuerza mayor, el comandante puede verse obligado a modificar el programa por motivos de seguridad sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'Los horarios de navegaci\u00f3n son orientativos y pueden sufrir variaciones sin que esto pueda tomarse como motivo de reclamaci\u00f3n.',
      'La edad de los ni\u00f1os es de 2 a 9 a\u00f1os cumplidos. El barco no dispone de cunas; el cliente deber\u00e1 llevar la suya.',
      'Documento nacional de identidad o pasaporte en vigor obligatorio. Los residentes fuera de la UE deben consultar con su embajada o consulado.',
      'Posibilidad de traslados privados a la demanda. Consulte con nosotros.'
    ]
  };

  const t = content[language];
  const highlights = highlightsList[language];
  const itineraryDays = days[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const excursions = excursionsList[language];
  const importantInfo = importantInfoList[language];

  const whatsappSvg = (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#7b1c1c] via-[#1a3a5c] to-[#0f2a45] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-red-300/20 blur-3xl"></div>
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
            <p className="text-2xl md:text-3xl text-red-200 mb-6 font-light">
              {t.titleSub}
            </p>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-red-300 mr-2" />
                <span>{t.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-red-300 mr-2" />
                <span>{t.route}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Anchor className="w-5 h-5 text-red-300 mr-2" />
                <span>CroisiEurope</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-red-300 mr-2" />
                <span>{t.ref}</span>
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
              language === 'es' ? 'Viena' : 'Vienna',
              'Budapest',
              'Bratislava',
              language === 'es' ? 'Viena' : 'Vienna'
            ].map((port, i, arr) => (
              <div key={i} className="flex items-center">
                <span className={`px-3 py-1.5 rounded-full font-medium ${i === 0 || i === arr.length - 1 ? 'bg-[#7b1c1c] text-white' : 'bg-white text-[#7b1c1c] border border-[#7b1c1c]/30'}`}>
                  {port}
                </span>
                {i < arr.length - 1 && (
                  <Ship className="w-4 h-4 text-[#7b1c1c]/40 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-gradient-to-br from-[#7b1c1c] via-[#1a3a5c] to-[#0f2a45] rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <Ship className="w-12 h-12 mx-auto mb-4 text-red-200" />
            <p className="text-4xl md:text-5xl font-bold mb-3">{t.priceFrom}</p>
            <p className="text-red-200 text-sm mb-6">{t.cabinTitle} &middot; {t.cabinDesc}</p>
            <h3 className="text-xl font-bold mb-3">{t.pricingContact}</h3>
            <p className="text-blue-100 text-base max-w-xl mx-auto mb-6">
              {t.pricingNote}
            </p>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#7b1c1c] px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-10 text-center">
            {t.highlights}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#7b1c1c] mt-1.5 mr-4"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CroisiEurope Feature Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#1a3a5c] mb-8 text-center">{t.croisiHighlights}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Utensils, en: 'Full Board', es: 'Pensi\u00f3n Completa' },
              { icon: Wine, en: 'Beverages Included', es: 'Bebidas Incluidas' },
              { icon: Star, en: 'Gala Dinner Night', es: 'Noche de Gala' },
              { icon: Ship, en: 'Onboard Staff', es: 'Personal a Bordo' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-[#7b1c1c] mb-3" />
                <span className="font-semibold text-gray-800 text-sm">{language === 'en' ? item.en : item.es}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-10 text-center">
            {t.itinerary}
          </h2>
          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#7b1c1c]/20 transition-colors">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#7b1c1c] to-[#1a3a5c] text-white flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] leading-none font-medium text-red-200">{language === 'en' ? 'Day' : 'D\u00eda'}</span>
                      <span className="font-bold text-sm leading-tight">{day.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900">{day.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedDay === day.day ? 'bg-[#7b1c1c] text-white' : 'bg-gray-100 text-gray-400'}`}>
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
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-3 text-center">
            {t.excursions}
          </h2>
          <p className="text-gray-500 text-center mb-10">{t.excursionsNote}</p>
          <div className="space-y-3">
            {excursions.map((exc, index) => (
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
                    <span>{language === 'en' ? `Day ${exc.day}` : `D\u00eda ${exc.day}`}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs uppercase tracking-wide">{t.preBook}</span>
                    <span className="text-lg font-bold text-[#7b1c1c]">{exc.preBook}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs uppercase tracking-wide">{t.onBoard}</span>
                    <span className="text-lg font-semibold text-gray-600">{exc.onBoard}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / Not Included */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-6">{t.included}</h3>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-6">{t.notIncluded}</h3>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-8 text-center">{t.importantInfo}</h2>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
            <ul className="space-y-4">
              {importantInfo.map((item, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-4">{t.cta}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.ctaText}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
