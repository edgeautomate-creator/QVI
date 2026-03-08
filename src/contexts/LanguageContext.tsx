import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      peregrinaciones: 'Peregrinaciones',
      tours: 'Tours',
      paquetes: 'Paquetes',
      viajes: 'Viajes',
      viajesEspeciales: 'Viajes Especiales',
      cruceros: 'Cruceros',
      services: 'Servicios',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      since: 'Desde 2007'
    },
    hero: {
      title: 'Sé parte de nuestros viajes, crea tu propia historia',
      subtitle: 'Desde 2007 creando experiencias inolvidables',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      viewPilgrimage: 'Ver Peregrinación 2026'
    },
    services: {
      peregrinaciones: 'Peregrinaciones 2026',
      peregrinacionesDesc: 'Experiencias espirituales profundas',
      tours: 'Tours Alrededor del Mundo',
      toursDesc: 'Descubre destinos increíbles',
      paquetes: 'Paquetes Especiales',
      paquetesDesc: 'Experiencias curadas para ti',
      viajes: 'Viajes a tu Medida',
      viajesDesc: 'Personaliza tu aventura',
      viajesEspeciales: 'Viajes Especiales',
      viajesEspecialesDesc: 'Explora el mundo con destinos únicos',
      cruceros: 'Cruceros',
      crucerosDesc: 'Navega hacia paraísos inolvidables'
    },
    trust: {
      title: '¿Por Qué Elegir QVI Travel?',
      experience: 'Desde 2007 creando experiencias inolvidables',
      specialists: 'Especialistas en Peregrinaciones',
      personalized: 'Atención personalizada',
      spiritual: 'Acompañados por un guía espiritual'
    },
    featured: {
      title: 'Peregrinación a Egipto 2026 - Tierra Santa Sagrada Familia',
      subtitle: 'Tras las Huellas de la Sagrada Familia en su Huida a Egipto',
      dates: 'Del 1 al 13 de Noviembre, 2026',
      requestInfo: 'Solicitar Información'
    },
    about: {
      title: '¿Quiénes Somos?',
      subtitle: 'Una Tradición Familiar de Servicio',
      story: 'En QVI Travel Group, Inc. creemos que viajar es mucho más que trasladarse de un lugar a otro: es una oportunidad para transformar el corazón, fortalecer la fe y crear recuerdos que duran toda la vida.\n\nFundada el 7 de abril de 2007 por Antonio y Lilliam Morales, profesionales con más de 45 años de experiencia en la industria turística, nuestra empresa nace de una visión clara: servir a la comunidad hispana con excelencia, organización impecable y un profundo sentido de propósito.\n\nSomos un Tour Operador Mayorista especializado en viajes en grupo y peregrinaciones a los destinos más emblemáticos del mundo cristiano. Durante más de 19 años, Antonio y Lilliam han acompañado a miles de peregrinos en experiencias espirituales y culturales que inspiran, conectan y dejan huella.\n\nNuestra propuesta, sin embargo, va más allá de las peregrinaciones. Diseñamos programas internacionales con salidas garantizadas a múltiples destinos alrededor del mundo, adaptándonos a diferentes intereses, presupuestos y necesidades, siempre con un servicio cercano y personalizado.\n\nEn QVI Travel Group no solo organizamos viajes.\nDiseñamos experiencias que elevan el espíritu, fortalecen la fe y superan expectativas.\n\nNuestro compromiso es caminar junto a cada viajero antes, durante y después de su experiencia, asegurando tranquilidad, confianza y excelencia en cada detalle.',
      values: 'Valores que nos Guían',
      value1: 'Desde 2007 organizando peregrinaciones',
      value2: 'Compromiso con la excelencia y el servicio personalizado',
      value3: 'Acompañamiento espiritual en cada viaje',
      value4: 'Empresa familiar que entiende sus necesidades',
      founder: 'Antonio Morales',
      founderTitle: 'Fundador y Director'
    },
    egypt: {
      title: 'Tras las Huellas de la Sagrada Familia',
      subtitle: 'Peregrinación a Egipto 2026',
      dates: 'Del 1 al 13 de Noviembre, 2026',
      intro: 'Egipto ocupa un lugar único en la historia de la salvación: fue la tierra que acogió y protegió a la Sagrada Familia en su huida, convirtiéndose así en un espacio bendecido por la presencia del Niño Jesús, la Virgen María y San José. Esta peregrinación ofrece a los fieles la oportunidad de adentrarse en los lugares venerados desde los primeros siglos por la tradición Cristiana.',
      guide: 'Con la guía espiritual del P. Inocencio Llamas',
      itinerary: 'Itinerario Detallado',
      pricing: 'Información de Reserva',
      double: 'Habitación Doble o Triple',
      single: 'Habitación Individual',
      perPerson: 'por persona',
      deposit: 'Depósito para reservar desde',
      depositAmount: '$550',
      priceNote: 'Para obtener la cotización completa incluyendo la porción aérea, por favor contáctenos.',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      includedItems: {
        item1: 'Porción aérea Miami-Frankfurt-El Cairo-Munich-Miami con Lufthansa Airlines',
        item2: '4 noches en El Cairo (Hotel Sonesta o similar 4★ superior)',
        item3: '1 noche en Assiut (Hotel AF 4★ o similar)',
        item4: '2 noches en Luxor (Hotel Jolie Ville o similar)',
        item5: '4 noches de crucero por el Río Nilo (Crucero Nile Alma)',
        item6: 'Desayunos y cenas en hoteles, todas las comidas en crucero',
        item7: 'Autobus exclusivo con guía bilingüe cristiano',
        item8: 'Visitas: Barrio Copto, Monasterios, Templos de Karnak y Luxor, Valle de los Reyes, Abu Simbel, Pirámides, Esfinge y Gran Museo Egipcio',
        item9: 'Misa Diaria',
        item10: 'Traslados aeropuerto-hotel-aeropuerto',
        item11: 'Uso de audífonos durante el tour'
      },
      notIncludedItems: {
        item1: 'Almuerzos (excepto 2 incluidos en El Cairo y Assiut)',
        item2: 'Propinas',
        item3: 'Seguro de viaje (muy recomendable)',
        item4: 'Bebidas con comidas (excepto agua, café, leche y jugos en desayuno)',
        item5: 'Visa de entrada a Egipto',
        item6: 'Gastos personales y manejo de equipaje en aeropuertos'
      },
      cta: 'Reserva Tu Lugar Ya!',
      ctaText: 'Los espacios son limitados. Contáctenos hoy para asegurar su lugar en esta peregrinación única.',
      days: {
        day1: {
          title: 'Día 1 (Dom-01): Miami – Frankfurt, Alemania',
          description: 'Salida del aeropuerto Internacional de Miami, FL en vuelo directo de Lufthansa Airlines con destino a la ciudad de Frankfurt, Alemania.'
        },
        day2: {
          title: 'Día 2 (Lun-02): Frankfurt – El Cairo, Egipto',
          description: 'Llegada a la ciudad de Frankfurt para hacer conexión con vuelo de Lufthansa Airlines con destino a El Cairo, capital de Egipto. Llegada, asistencia y traslado al hotel para su registro y entrega de habitaciones. Resto del día libre. Por la noche cena en el hotel.'
        },
        day3: {
          title: 'Día 3 (Mar-03): El Cairo - Barrio Copto',
          description: 'Desayuno. Por la mañana visita al corazón medieval de la ciudad para conocer el "Barrio Copto" donde conoceremos la Iglesia de San Sergio donde la sagrada familia buscó refugio durante su huida, la famosa Iglesia Colgante sobre la puerta de Babilonia, la Iglesia de Santa Bárbara, la Iglesia y convento de San Jorge, el Museo Copto y la Sinagoga de Ben Ezra donde según la tradición fue encontrado el bebe "Moises". Almuerzo en restaurante típico. Por la tarde visitaremos el "monasterio cueva" en la montaña Mokattam, el monasterio más grande de Egipto con capacidad para 20 mil fieles.'
        },
        day4: {
          title: 'Día 4 (Mie-04): El Cairo – Assiut',
          description: 'Desayuno. Salida hacia la ciudad de Assiut de la provincia de El Minya ubicada en el Sur de Egipto, donde visitaremos la Iglesia de la Virgen de "Gabal At Teir" que alberga en su interior la Cueva donde la "Sagrada Familia" encontró refugio. Gabal At Teir es conocido como "Monte del Palmo", porque según la tradición, Jesús extendió la mano e impidió que una roca cayera sobre ellos. Traslado al hotel para cena y alojamiento.'
        },
        day5: {
          title: 'Día 5 (Jue-05): Assiut – Luxor',
          description: 'Desayuno. Salida hacia Luxor. Visita al Monasterio de Al-Muharraq, uno de los monasterios Coptos más antiguos de Egipto, construído donde la Sagrada Familia vivió más de 6 meses. Continuaremos al Monasterio de "La Virgen María" en Doronka, donde según la tradición José recibió el mensaje del Señor de regresar a Palestina. Continuación hacia Luxor. Llegada y traslado a nuestro hotel para cena y alojamiento.'
        },
        day6: {
          title: 'Día 6 (Vie-06): Luxor – Templos de Karnak y Luxor',
          description: 'Desayuno. Comenzaremos visitando el templo de Karnak, el mayor monumento de la cultura faraónica, gran santuario de Amon embellecido durante más de 2 mil años. Tiempo libre para almorzar. Por la tarde visitaremos el templo de Luxor, con la avenida de las esfinges que unía los dos templos más importantes de la Antigua Tebas. Templo dedicado a Amon-Ra y Khonu, iniciado por Amenofis III y completado por Ramses II. Regreso al hotel para cena y alojamiento.'
        },
        day7: {
          title: 'Día 7 (Sab-07): Luxor – Valle de los Reyes – Crucero por el Nilo',
          description: 'Desayuno. Mañana libre con posibilidad de realizar un tour opcional en globo aerostático. Al medio día traslado al muelle para tomar el crucero por el río Nilo (4 noches con todas las comidas incluídas). Por la tarde visita al famosísimo "Valle de Los Reyes", donde Howard Carter descubrió la tumba de Tutankhamón. Regreso al crucero para cena y alojamiento.'
        },
        day8: {
          title: 'Día 8 (Dom-08): Museo de Luxor y Navegación',
          description: 'Todas las comidas abordo. Por la mañana visitaremos el Museo de Luxor que expone artefactos del Reino Antiguo hasta la época de los Mamluk, incluyendo objetos de la tumba de Tutankamón. Traslado al crucero para almorzar abordo. Por la tarde comenzaremos a navegar hacia el sur. Llegada a la esclusa de Esna. Cena y alojamiento abordo.'
        },
        day9: {
          title: 'Día 9 (Lun-09): Edfu – Kom Ombo – Aswan',
          description: 'Todas las comidas abordo. Desembarque en Edfu y visita al templo de Horus, el Segundo más grande después de Karnak y uno de los mejores conservados. Regreso al barco y continuación de la navegación hacia el sur. Llegada a Kom Ombo y visita del templo doble dedicado al dios Haroeris y al dios Sobeck, con un curioso museo dedicado a los cocodrilos. Continuación hacia Aswan. Cena y alojamiento.'
        },
        day10: {
          title: 'Día 10 (Mar-10): Aswan – Abu Simbel',
          description: 'Todas las comidas abordo. Visita en avión de los templos de Abu Simbel tallados en el acantilado por Ramses II. El templo mayor y el dedicado a la reina Nefertari simbolizan el poder del faraón con sus 4 colosos gigantescos. Regreso al crucero para almorzar. Por la tarde paseo en felucca (antiguo velero) para navegar en torno de la isla Elefantina y el jardín botánico. Cena y alojamiento abordo.'
        },
        day11: {
          title: 'Día 11 (Mie-11): Aswan – El Cairo',
          description: 'Desayuno abordo. Traslado al aeropuerto de Aswan para tomar vuelo hacia El Cairo. Llegada y traslado al hotel. Resto del día libre con posibilidad de visitar la mezquita de Alabastro en la ciudadela de Saladino. Alojamiento y cena en el hotel.'
        },
        day12: {
          title: 'Día 12 (Jue-12): El Cairo – Pirámides y Gran Museo Egipcio',
          description: 'Desayuno. Visitaremos las antiguas Pirámides de Giza con su guardián la Esfinge, una de las siete maravillas del mundo. Estas increíbles estructuras son un testimonio de la civilización egipcia hace 4000 años. Tiempo libre para almorzar. Continuación con la visita del Gran Museo Egipcio recientemente inaugurado, que expone más de 50,000 objetos de 7000 años de antigüedad. Este edificio modernista ofrece una impresionante vista panorámica de las Pirámides. Traslado al hotel para alojamiento y cena.'
        },
        day13: {
          title: 'Día 13 (Vie-13): El Cairo – Munich – Miami',
          description: 'A la hora conveniente, traslado del hotel al aeropuerto para tomar vuelo de Lufthansa con destino a Munich, Alemania para hacer conexión con vuelo con destino a Miami, FL. Llegada y fin de los servicios. ¡Les deseamos que tengan un bendecido viaje!'
        }
      }
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Estamos aquí para responder todas sus preguntas',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      hours: 'Horario de Atención',
      hoursText: 'Lunes a Viernes: 9:00 AM - 6:00 PM EST',
      formTitle: 'Envíenos un Mensaje',
      name: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Gracias! Nos pondremos en contacto pronto.',
      error: 'Hubo un error. Por favor intente de nuevo.'
    },
    footer: {
      about: 'Sobre QVI Travel',
      aboutText: 'Desde 2007 organizando peregrinaciones para la comunidad hispana.',
      quick: 'Enlaces Rápidos',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.'
    },
    search: {
      title: '¿A dónde te gustaría viajar?',
      subtitle: 'Busca nuestros viajes por destino',
      placeholder: 'Buscar destinos... Egipto, Japón, México',
      searching: 'Buscando...',
      noResults: 'No se encontraron viajes',
      noResultsDesc: 'Intenta buscar con otros términos como países o ciudades',
      viewAll: 'Ver todos los resultados',
      results: 'resultados',
      days: 'días',
      categories: {
        all: 'Todos los Tipos',
        peregrinacion: 'Peregrinación',
        tour: 'Tour',
        paquete: 'Paquete',
        viaje: 'Viaje'
      }
    },
    continents: {
      selectContinent: 'Selecciona un Continente',
      exploreDest: 'Explora Destinos por Continente',
      tripsAvailable: 'viajes disponibles',
      comingSoon: 'Próximamente',
      comingSoonDesc: 'Estamos trabajando en traerte experiencias increíbles en este destino.',
      interested: '¿Interesado en este destino?',
      contactUs: 'Contáctenos para más información',
      viewTrips: 'Ver Viajes',
      asia: 'Asia',
      europe: 'Europa',
      africa: 'África',
      oceania: 'Oceanía',
      america: 'América',
      latinAmerica: 'Latinoamérica',
      breadcrumb: {
        home: 'Inicio',
        viajesEspeciales: 'Viajes Especiales'
      }
    },
    cruceros: {
      hero: 'Experiencias de lujo navegando por los mares más espectaculares del mundo',
      title: 'Próximamente: Viajes en Crucero',
      subtitle: 'Estamos preparando increíbles experiencias de crucero para usted',
      description: 'Estamos trabajando para traerle las mejores opciones de cruceros por el Caribe, Mediterráneo, Alaska y más destinos fascinantes. Pronto podrá disfrutar de experiencias inolvidables a bordo de los mejores cruceros del mundo.',
      whatToExpect: '¿Qué Puede Esperar?',
      luxury: 'Cruceros de Lujo',
      luxuryDesc: 'Las mejores líneas de cruceros',
      destinations: 'Destinos Increíbles',
      destinationsDesc: 'Explora el mundo desde el mar',
      allInclusive: 'Todo Incluido',
      allInclusiveDesc: 'Paquetes completos sin preocupaciones',
      contactFirst: 'Contáctenos para ser el primero en conocer nuestras ofertas de cruceros',
      sendEmail: 'Enviar Email',
      contactForm: 'Formulario de Contacto',
      backHome: '← Volver al Inicio'
    }
  },
  en: {
    nav: {
      home: 'Home',
      peregrinaciones: 'Pilgrimages',
      tours: 'Tours',
      paquetes: 'Packages',
      viajes: 'Custom Travel',
      viajesEspeciales: 'Special Trips',
      cruceros: 'Cruises',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      since: 'Since 2007'
    },
    hero: {
      title: 'Be part of our journeys, create your own story',
      subtitle: 'Since 2007 creating unforgettable experiences',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      viewPilgrimage: 'View 2026 Pilgrimage'
    },
    services: {
      peregrinaciones: 'Pilgrimages 2026',
      peregrinacionesDesc: 'Deep spiritual experiences',
      tours: 'Tours Around the World',
      toursDesc: 'Discover incredible destinations',
      paquetes: 'Special Packages',
      paquetesDesc: 'Curated experiences for you',
      viajes: 'Custom Travel',
      viajesDesc: 'Personalize your adventure',
      viajesEspeciales: 'Special Trips',
      viajesEspecialesDesc: 'Explore the world with unique destinations',
      cruceros: 'Cruises',
      crucerosDesc: 'Sail to unforgettable paradises'
    },
    trust: {
      title: 'Why Choose QVI Travel?',
      experience: 'Since 2007 creating unforgettable experiences',
      specialists: 'Pilgrimage Specialists',
      personalized: 'Personalized attention',
      spiritual: 'Accompanied by a spiritual guide'
    },
    featured: {
      title: 'Egypt Pilgrimage 2026 - Holy Land Holy Family Tour',
      subtitle: 'Following the Holy Family\'s Flight to Egypt',
      dates: 'From November 1 to 13, 2026',
      requestInfo: 'Request Information'
    },
    about: {
      title: 'Who We Are',
      subtitle: 'A Family Tradition of Service',
      story: 'At QVI Travel Group, Inc., we believe that travel is much more than moving from one place to another — it is an opportunity to transform the heart, strengthen faith, and create memories that last a lifetime.\n\nFounded on April 7, 2007 by Antonio and Lilliam Morales, tourism professionals with over 45 years of industry experience, our company was built on a clear vision: to serve the Hispanic community with excellence, meticulous organization, and a deep sense of purpose.\n\nWe are a Wholesale Tour Operator specializing in group travel and pilgrimages to the most iconic destinations of the Christian world. For more than 19 years, Antonio and Lilliam have accompanied thousands of pilgrims on spiritual and cultural journeys that inspire, connect, and leave a lasting impact.\n\nOur mission, however, goes beyond pilgrimages. We design international programs with guaranteed departures to destinations around the world, tailoring each experience to different interests, budgets, and needs — always delivering attentive, personalized service.\n\nAt QVI Travel Group, we do more than organize trips.\nWe design experiences that uplift the spirit, strengthen faith, and exceed expectations.\n\nOur commitment is to walk alongside every traveler before, during, and after their journey, ensuring peace of mind, trust, and excellence in every detail.',
      values: 'Our Guiding Values',
      value1: 'Since 2007 organizing pilgrimages',
      value2: 'Commitment to excellence and personalized service',
      value3: 'Spiritual accompaniment on every journey',
      value4: 'Family-owned business that understands your needs',
      founder: 'Antonio Morales',
      founderTitle: 'Founder and Director'
    },
    egypt: {
      title: 'Following the Holy Family\'s Footsteps',
      subtitle: 'Pilgrimage to Egypt 2026',
      dates: 'From November 1 to 13, 2026',
      intro: 'Egypt holds a unique place in salvation history: it was the land that welcomed and protected the Holy Family in their flight, thus becoming a space blessed by the presence of the Child Jesus, the Virgin Mary, and Saint Joseph. This pilgrimage offers the faithful the opportunity to enter the places venerated since the first centuries by the Christian tradition.',
      guide: 'With the spiritual guidance of Fr. Inocencio Llamas',
      itinerary: 'Detailed Itinerary',
      pricing: 'Reservation Information',
      double: 'Double or Triple Occupancy',
      single: 'Single Occupancy',
      perPerson: 'per person',
      deposit: 'Deposit to reserve from',
      depositAmount: '$550',
      priceNote: 'For complete pricing including airfare, please contact us.',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      includedItems: {
        item1: 'Airfare Miami-Frankfurt-Cairo-Munich-Miami with Lufthansa Airlines',
        item2: '4 nights in Cairo (Sonesta Hotel or similar 4★ superior)',
        item3: '1 night in Assiut (AF Hotel 4★ or similar)',
        item4: '2 nights in Luxor (Jolie Ville Hotel or similar)',
        item5: '4 nights Nile River Cruise (Nile Alma Cruise)',
        item6: 'Breakfasts and dinners in hotels, all meals on cruise',
        item7: 'Exclusive bus with bilingual Christian guide',
        item8: 'Visits: Coptic Quarter, Monasteries, Karnak and Luxor Temples, Valley of the Kings, Abu Simbel, Pyramids, Sphinx and Grand Egyptian Museum',
        item9: 'Daily Mass',
        item10: 'Airport-hotel-airport transfers',
        item11: 'Use of audio headsets during tour'
      },
      notIncludedItems: {
        item1: 'Lunches (except 2 included in Cairo and Assiut)',
        item2: 'Tips',
        item3: 'Travel insurance (highly recommended)',
        item4: 'Drinks with meals (except water, coffee, milk and juice at breakfast)',
        item5: 'Egypt entry visa',
        item6: 'Personal expenses and luggage handling at airports'
      },
      cta: 'Reserve Your Spot Today',
      ctaText: 'Spaces are limited. Contact us today to secure your place on this unique pilgrimage.',
      days: {
        day1: {
          title: 'Day 1 (Sun-01): Miami – Frankfurt, Germany',
          description: 'Departure from Miami International Airport, FL on direct Lufthansa Airlines flight to Frankfurt, Germany.'
        },
        day2: {
          title: 'Day 2 (Mon-02): Frankfurt – Cairo, Egypt',
          description: 'Arrival in Frankfurt to connect with Lufthansa Airlines flight to Cairo, capital of Egypt. Arrival, assistance and transfer to hotel for check-in and room delivery. Rest of day free. Dinner at hotel in the evening.'
        },
        day3: {
          title: 'Day 3 (Tue-03): Cairo - Coptic Quarter',
          description: 'Breakfast. Morning visit to the medieval heart of the city to see the "Coptic Quarter" where we\'ll visit the Church of St. Sergius where the Holy Family sought refuge during their flight, the famous Hanging Church over the Babylon Gate, the Church of St. Barbara, the Church and convent of St. George, the Coptic Museum and the Ben Ezra Synagogue where according to tradition baby Moses was found. Lunch at typical restaurant. Afternoon visit to the "cave monastery" at Mount Mokattam, Egypt\'s largest monastery with capacity for 20,000 faithful.'
        },
        day4: {
          title: 'Day 4 (Wed-04): Cairo – Assiut',
          description: 'Breakfast. Departure to Assiut city in El Minya province located in southern Egypt, where we\'ll visit the Church of the Virgin of "Gabal At Teir" which houses the Cave where the "Holy Family" found refuge. Gabal At Teir is known as "Mount of the Palm", because according to tradition, Jesus extended his hand and prevented a rock from falling on them. Transfer to hotel for dinner and accommodation.'
        },
        day5: {
          title: 'Day 5 (Thu-05): Assiut – Luxor',
          description: 'Breakfast. Departure to Luxor. Visit to Al-Muharraq Monastery, one of the oldest Coptic monasteries in Egypt, built where the Holy Family lived for more than 6 months. Continue to the Monastery of "The Virgin Mary" in Doronka, where according to tradition Joseph received the Lord\'s message to return to Palestine. Continue to Luxor. Arrival and transfer to our hotel for dinner and accommodation.'
        },
        day6: {
          title: 'Day 6 (Fri-06): Luxor – Karnak and Luxor Temples',
          description: 'Breakfast. Begin visiting the Karnak temple, the greatest monument of pharaonic culture, great sanctuary of Amon embellished for over 2,000 years. Free time for lunch. Afternoon visit to Luxor temple, with the avenue of sphinxes that united the two most important temples of Ancient Thebes. Temple dedicated to Amon-Ra and Khonu, begun by Amenhotep III and completed by Ramses II. Return to hotel for dinner and accommodation.'
        },
        day7: {
          title: 'Day 7 (Sat-07): Luxor – Valley of the Kings – Nile Cruise',
          description: 'Breakfast. Free morning with possibility of optional hot air balloon tour. At midday transfer to dock to board the Nile River cruise (4 nights with all meals included). Afternoon visit to the famous "Valley of the Kings", where Howard Carter discovered Tutankhamun\'s tomb. Return to cruise for dinner and accommodation.'
        },
        day8: {
          title: 'Day 8 (Sun-08): Luxor Museum and Sailing',
          description: 'All meals aboard. Morning visit to Luxor Museum displaying artifacts from the Old Kingdom to the Mamluk era, including objects from Tutankhamun\'s tomb. Transfer to cruise for lunch aboard. Afternoon begin sailing south. Arrival at Esna lock. Dinner and accommodation aboard.'
        },
        day9: {
          title: 'Day 9 (Mon-09): Edfu – Kom Ombo – Aswan',
          description: 'All meals aboard. Disembark at Edfu and visit the temple of Horus, the second largest after Karnak and one of the best preserved. Return to ship and continue sailing south. Arrival at Kom Ombo and visit the double temple dedicated to god Haroeris and god Sobek, with a curious museum dedicated to crocodiles. Continue to Aswan. Dinner and accommodation.'
        },
        day10: {
          title: 'Day 10 (Tue-10): Aswan – Abu Simbel',
          description: 'All meals aboard. Flight visit to Abu Simbel temples carved in the cliff by Ramses II. The main temple and the one dedicated to Queen Nefertari symbolize the pharaoh\'s power with its 4 gigantic colossi. Return to cruise for lunch. Afternoon felucca ride (ancient sailboat) to sail around Elephantine Island and the botanical garden. Dinner and accommodation aboard.'
        },
        day11: {
          title: 'Day 11 (Wed-11): Aswan – Cairo',
          description: 'Breakfast aboard. Transfer to Aswan airport to take flight to Cairo. Arrival and transfer to hotel. Rest of day free with possibility to visit the Alabaster Mosque at Saladin\'s Citadel. Accommodation and dinner at hotel.'
        },
        day12: {
          title: 'Day 12 (Thu-12): Cairo – Pyramids and Grand Egyptian Museum',
          description: 'Breakfast. Visit the ancient Pyramids of Giza with their guardian the Sphinx, one of the seven wonders of the world. These incredible structures are a testament to Egyptian civilization 4000 years ago. Free time for lunch. Continue with visit to the recently inaugurated Grand Egyptian Museum, displaying more than 50,000 objects from 7000 years ago. This modernist building offers an impressive panoramic view of the Pyramids. Transfer to hotel for accommodation and dinner.'
        },
        day13: {
          title: 'Day 13 (Fri-13): Cairo – Munich – Miami',
          description: 'At convenient time, transfer from hotel to airport to take Lufthansa flight to Munich, Germany to connect with flight to Miami, FL. Arrival and end of services. We wish you a blessed journey!'
        }
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to answer all your questions',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      hoursText: 'Monday to Friday: 9:00 AM - 6:00 PM EST',
      formTitle: 'Send Us a Message',
      name: 'Full Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Thank you! We will contact you soon.',
      error: 'There was an error. Please try again.'
    },
    footer: {
      about: 'About QVI Travel',
      aboutText: 'Since 2007 organizing pilgrimages for the Hispanic community.',
      quick: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.'
    },
    search: {
      title: 'Where would you like to travel?',
      subtitle: 'Search our trips by destination',
      placeholder: 'Search destinations... Egypt, Japan, Mexico',
      searching: 'Searching...',
      noResults: 'No trips found',
      noResultsDesc: 'Try searching with other terms like countries or cities',
      viewAll: 'View all results',
      results: 'results',
      days: 'days',
      categories: {
        all: 'All Types',
        peregrinacion: 'Pilgrimage',
        tour: 'Tour',
        paquete: 'Package',
        viaje: 'Custom Travel'
      }
    },
    continents: {
      selectContinent: 'Select a Continent',
      exploreDest: 'Explore Destinations by Continent',
      tripsAvailable: 'trips available',
      comingSoon: 'Coming Soon',
      comingSoonDesc: 'We are working to bring you incredible experiences in this destination.',
      interested: 'Interested in this destination?',
      contactUs: 'Contact us for more information',
      viewTrips: 'View Trips',
      asia: 'Asia',
      europe: 'Europe',
      africa: 'Africa',
      oceania: 'Oceania',
      america: 'America',
      latinAmerica: 'Latin America',
      breadcrumb: {
        home: 'Home',
        viajesEspeciales: 'Special Trips'
      }
    },
    cruceros: {
      hero: 'Luxury experiences sailing the most spectacular seas in the world',
      title: 'Coming Soon: Cruise Trips',
      subtitle: 'We are preparing incredible cruise experiences for you',
      description: 'We are working to bring you the best cruise options through the Caribbean, Mediterranean, Alaska and more fascinating destinations. Soon you will be able to enjoy unforgettable experiences aboard the best cruises in the world.',
      whatToExpect: 'What Can You Expect?',
      luxury: 'Luxury Cruises',
      luxuryDesc: 'The best cruise lines',
      destinations: 'Amazing Destinations',
      destinationsDesc: 'Explore the world from the sea',
      allInclusive: 'All Inclusive',
      allInclusiveDesc: 'Complete worry-free packages',
      contactFirst: 'Contact us to be the first to know about our cruise offers',
      sendEmail: 'Send Email',
      contactForm: 'Contact Form',
      backHome: '← Back to Home'
    }
  }
};
