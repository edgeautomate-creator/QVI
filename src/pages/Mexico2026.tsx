import { Phone, MessageCircle, Calendar, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function Mexico2026() {
  const { language } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const content = {
    en: {
      featured: 'Guadalupe Pilgrimage Mexico 2026 - Basilica Virgin of Guadalupe',
      title: 'Gran Peregrinación "Guadalupana" México 2026',
      subtitle: 'With the spiritual guidance of Fr. Inocencio Llamas',
      dates: 'From May 23 to 30, 2026',
      guide: 'Spiritual Guide: Fr. Inocencio Llamas',
      intro: 'Join us on a profound spiritual journey through Mexico, visiting the most sacred sites of our Catholic faith including the Basilica of Our Lady of Guadalupe, the Cristo Rey monument, and many other holy places that have shaped Mexican Catholicism.',
      pricing: 'Pricing & Payment Plan',
      deposit: 'Deposit to Reserve',
      depositAmount: '$1,105',
      priceNote: 'Reserve your spot with a deposit. Payment plan available with 2 additional monthly payments. Contact us for complete pricing details.',
      included: 'Price Includes',
      notIncluded: 'Price Does Not Include',
      itinerary: 'Daily Itinerary',
      cta: 'Ready to Join This Pilgrimage?',
      ctaText: 'Contact us today to reserve your spot on this transformative spiritual journey.',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
      formTitle: 'Request More Information'
    },
    es: {
      featured: 'Peregrinación Guadalupana México 2026 - Basílica Virgen Guadalupe',
      title: 'Gran Peregrinación "Guadalupana" México 2026',
      subtitle: 'Con la guía Espiritual del P. Inocencio Llamas',
      dates: 'Del 23 al 30 de Mayo, 2026',
      guide: 'Guía Espiritual: P. Inocencio Llamas',
      intro: 'Únete a nosotros en un profundo viaje espiritual a través de México, visitando los sitios más sagrados de nuestra fe católica incluyendo la Basílica de Nuestra Señora de Guadalupe, el monumento de Cristo Rey, y muchos otros lugares santos que han formado el catolicismo mexicano.',
      pricing: 'Precios y Plan de Pagos',
      deposit: 'Depósito para Reservar',
      depositAmount: '$1,105',
      priceNote: 'Reserve su lugar con un depósito. Plan de pagos disponible con 2 pagos mensuales adicionales. Contáctenos para detalles completos de precios.',
      included: 'El Precio Incluye',
      notIncluded: 'El Precio No Incluye',
      itinerary: 'Itinerario Diario',
      cta: 'Reserva Tu Lugar Ya!',
      ctaText: 'Contáctanos hoy para reservar tu lugar en este viaje espiritual transformador.',
      callNow: 'Llamar Ahora',
      whatsapp: 'WhatsApp',
      formTitle: 'Solicitar Más Información'
    }
  };

  const includedItems = {
    en: [
      'Round-trip airfare Miami-Mexico City-Miami on American Airlines or similar',
      'Airport transfers and assistance',
      'Accommodation in 4-star hotels with taxes and breakfast included',
      'Professional authorized guide throughout the tour',
      'Exclusive bus for the group',
      'Luggage handling: 1 suitcase of 50 lbs and 1 carry-on of 10 lbs',
      'Hotel porters',
      'Visits and entrance fees to places indicated in the itinerary',
      'Travel documents, information and travel kit',
      'Daily private Mass reservations'
    ],
    es: [
      'Porción aérea ida y vuelta Miami-México-Miami en American Airlines o similar',
      'Traslados y asistencia en aeropuertos',
      'Alojamiento en hoteles categoría Primera (4*) con impuestos y desayunos incluidos',
      'Guía profesional autorizado acompañando al grupo en todo el recorrido',
      'Autobús exclusivo para el grupo',
      'Manejo de equipaje: 1 maleta de 50 lbs y un maletín de mano de 10 lbs',
      'Maleteros en los hoteles',
      'Visitas y entradas a los lugares indicados en el itinerario',
      'Documentos, información y maletín de viaje',
      'Reservas para Misas privadas diarias'
    ]
  };

  const notIncludedItems = {
    en: [
      'Lunches and dinners',
      'Travel insurance (highly recommended)',
      'Tips for drivers, guides, porters and hotel staff',
      'Airport luggage handling',
      'Drinks with meals, except: water, milk, coffee and juice at breakfast',
      'Passport or visa expenses',
      'Airline charges for name changes, excess baggage, seat purchases, etc.',
      'Any personal expenses not clearly specified in the itinerary',
      'Credit card payment fees (3.95%)'
    ],
    es: [
      'Almuerzos ni cenas',
      'Seguro de Viaje (muy recomendable)',
      'Propinas a choferes, guías, maleteros y camareros',
      'Manejo de equipaje en los aeropuertos',
      'Bebidas con las comidas, excepto: agua, leche, café y jugos en el desayuno',
      'Gastos de pasaporte o de visas',
      'Cargos de la línea aérea por cambio de nombre, exceso de equipaje, compra de asiento, etc.',
      'Ningún gasto de índole personal que no esté claramente especificado en el itinerario',
      'Cargos por pagos con tarjeta de crédito (3.95%)'
    ]
  };

  const days = {
    en: [
      {
        title: 'Day 1 (Sat, May 23): Miami - Mexico City',
        description: 'Departure from Miami International Airport on American Airlines or similar flight to Mexico City. Arrival, reception at the airport and transfer to hotel. Rest of the day free to start exploring this beautiful city.'
      },
      {
        title: 'Day 2 (Sun, May 24): Mexico City',
        description: 'Breakfast. Morning visit with our guide to the Sanctuary of Our Lady of Guadalupe, Patroness of the Americas. Upon arrival, we will celebrate Holy Mass at the Chapel of Indians or Capuchinas. After Mass, we will tour the Basilica to admire the Tilma with the image of Our Lady of Guadalupe, then visit Tepeyac Hill where the Virgin made her first appearance, the Chapel of the Well, and the Chapel of Indians where San Juan Diego cared for the original mantle. After, we continue to San Juan Teotihuacan, a UNESCO World Heritage Site, where we will visit the pyramids of the Sun and Moon, the Temple of Shells and Butterflies, and walk along the Avenue of the Dead.'
      },
      {
        title: 'Day 3 (Mon, May 25): Mexico City - Querétaro - San Miguel de Allende',
        description: 'Breakfast. Departure to Querétaro. Arrival and visit to the Temple of the Cross where we will celebrate Holy Mass, then a brief visit to the Franciscan Monastery where Father Junipero Sierra began his evangelization. We will also learn about Father Antonio Margil de Jesús and see the miraculous tree that still produces thorns in the shape of crosses. Continue to San Miguel de Allende (65 km from Querétaro) for a walking tour of its historic center, including the Parish of San Miguel Arcángel, Casa de Allende, and the Convent of the Immaculate Conception.'
      },
      {
        title: 'Day 4 (Tue, May 26): San Miguel de Allende - Guanajuato - San Miguel de Allende',
        description: 'Breakfast. Early departure to Cerro del Cubilete where we will celebrate Holy Mass (subject to availability). This emblematic site is special for the Cristeros, bombed in 1928 by the Mexican government, which gave rise to the famous refrain "Viva Cristo Rey". The Christ the King monument weighs 80 tons and is 120 feet high. At the base is the Sanctuary of Santa María de los Mártires with relics of three cristeros. After, continue to Guanajuato for a walking tour of its narrow, colorful streets, seeing the Juárez Theater, Baratillo Plaza, University of Guanajuato, Temple of the Company of Jesus, and the Basilica of Our Lady of Guanajuato.'
      },
      {
        title: 'Day 5 (Wed, May 27): San Miguel de Allende - Mexico City',
        description: 'Breakfast. Early departure to the Sanctuary of Atotonilco, known as the "Sanctuary of the Nation", considered by UNESCO as Cultural Heritage of Humanity and by many others as the Sistine Chapel of America due to its cultural importance and architectural contribution to Mexican baroque. After the visit, we return to Mexico City, making a small stop in Tepotzotlán to visit the Temple of San Francisco Javier and the Parish of San Pedro Apóstol. Arrival and transfer to hotel.'
      },
      {
        title: 'Day 6 (Thu, May 28): Mexico City',
        description: 'Breakfast. Morning departure to the Church of the Holy Family for the celebration of Holy Mass, then visit the tomb of the Jesuit martyr, Blessed Miguel Agustín Pro. During the Mexican Revolution, Father Pro was exiled from Mexico due to religious persecution. However, he bravely returned and was helped by an underground group. He helped many people with their spiritual and temporal needs during persecution. Although he helped many, he was eventually arrested and killed. His last words before the firing squad were "Viva Cristo Rey!". Visit the small but inspiring museum dedicated to Father Pro\'s life, mission and sacrifice. Continue to the Central Zócalo of Mexico City to visit the Metropolitan Cathedral, then walk to the Church of Santo Domingo. Continue to the Church of San José del Altillo to see the crypt where Blessed Conchita Cabrera is buried. Time for personal prayers and devotions.'
      },
      {
        title: 'Day 7 (Fri, May 29): Mexico City - Puebla - Mexico City',
        description: 'Breakfast. Morning departure to Puebla, visiting Tlaxcala along the way where we will visit the Sanctuary of San Miguel Arcángel (San Miguel del Milagro) where we will celebrate Mass. This is where Saint Michael the Archangel appeared to Diego Lázaro in 1631, directing him to the Grotto and a well of miraculous healing waters. Continue to Ocotlán to visit the beautiful church and see the miraculous image of Our Lady burned into a tree trunk after she appeared to Juan Diego Bernardino in 1541. Continue to Puebla to visit the Cathedral of the Immaculate Conception, built during the 16th century and topped by a tiled dome and two domed bell towers. Visit the Church of Santo Domingo with its magnificent Chapel of the Rosary, whose gold-carved altar is a true work of art. Visit the Church of San Francisco to learn about Blessed Sebastián de la Aparicio and contemplate his incorrupt body. Return to Mexico City.'
      },
      {
        title: 'Day 8 (Sat, May 30): Mexico City - Miami',
        description: 'Breakfast. At the indicated time, transfer to the airport to take American Airlines or similar flight to Miami. Arrival and end of services.'
      }
    ],
    es: [
      {
        title: 'Día 1 (Sáb, 23 Mayo): Miami - Ciudad de México',
        description: 'Salida del aeropuerto Internacional de Miami en vuelo de American Airlines o similar con destino a la Ciudad de México. Llegada, recepción en el aeropuerto y traslado al hotel. Resto del día libre para empezar a conocer su bella ciudad.'
      },
      {
        title: 'Día 2 (Dom, 24 Mayo): Ciudad de México',
        description: 'Desayuno. Por la mañana haremos nuestra visita con nuestro guía al Santuario de Nuestra Señora de Guadalupe, la Patrona de las Américas. A nuestra llegada celebraremos la Santa Misa en la Capilla de Indios o de las Capuchinas. Después de la Misa haremos el recorrido de la Basílica para admirar la Tilma con la imagen de Nuestra Señora de Guadalupe, luego visitaremos el Cerro del Tepeyac donde hizo su primera aparición la Virgen, la Capilla del Pozo y la Capilla de los Indios. Al finalizar continuamos hacia San Juan Teotihuacán, Patrimonio de la Humanidad por la UNESCO, donde visitaremos las pirámides del Sol y la Luna, el Templo de los Caracoles y las Mariposas, y caminaremos por la Avenida de los Muertos.'
      },
      {
        title: 'Día 3 (Lun, 25 Mayo): Ciudad de México - Querétaro - San Miguel de Allende',
        description: 'Desayuno. Salida hacia Querétaro. Llegada y visita del Templo de la Cruz donde celebraremos la Santa Misa, luego una breve visita al Monasterio Franciscano donde el Padre Junípero Sierra inició su evangelización. También aprenderemos sobre el Padre Antonio Margil de Jesús y veremos el árbol milagroso que produce espinas en forma de cruz. Continuaremos hacia San Miguel de Allende (65 km de Querétaro) para un recorrido a pie por su centro histórico, admirando la Parroquia de San Miguel Arcángel, la Casa de Allende, y el Convento de la Concepción.'
      },
      {
        title: 'Día 4 (Mar, 26 Mayo): San Miguel de Allende - Guanajuato - San Miguel de Allende',
        description: 'Desayuno. Salida temprano hacia el Cerro del Cubilete donde celebraremos la Santa Misa (sujeto a disponibilidad). Este sitio emblemático es especial para los Cristeros, bombardeado en 1928 por el gobierno mexicano, lo que dio lugar al famoso estribillo "Viva Cristo Rey". El monumento de Cristo Rey pesa 80 toneladas y tiene 120 pies de altura. En la base se encuentra el Santuario de Santa María de los Mártires con reliquias de tres cristeros. Después continuaremos hacia Guanajuato, donde nos sumergiremos en su atmósfera única, caminando por sus calles estrechas y coloridas, admirando el Teatro Juárez, Plaza Baratillo, Universidad de Guanajuato, el Templo de la Compañía de Jesús, y la Basílica de Nuestra Señora de Guanajuato.'
      },
      {
        title: 'Día 5 (Mié, 27 Mayo): San Miguel de Allende - Ciudad de México',
        description: 'Desayuno. Temprano salida hacia el Santuario de Atotonilco, conocido como "Santuario de la Patria", considerado por la UNESCO Patrimonio Cultural de la Humanidad y por muchos otros como la Capilla Sixtina de América debido a su importancia cultural y aporte arquitectónico al barroco mexicano. Después emprenderemos nuestro camino de regreso a la Ciudad de México, haciendo una pequeña parada en Tepotzotlán para visitar el Templo de San Francisco Javier y la Parroquia de San Pedro Apóstol. Llegada y traslado al hotel.'
      },
      {
        title: 'Día 6 (Jue, 28 Mayo): Ciudad de México',
        description: 'Desayuno. Por la mañana saldremos hacia la Iglesia de la Sagrada Familia para la celebración de la Santa Misa y luego visitar la tumba del mártir jesuita, el Beato Miguel Agustín Pro. Durante la Revolución Mexicana, el Padre Pro fue exiliado de México debido a la persecución religiosa. Sin embargo, regresó valientemente y ayudó a muchas personas con sus necesidades espirituales y temporales. Finalmente fue arrestado y asesinado. Sus últimas palabras fueron "¡Viva Cristo Rey!". Visitaremos el pequeño pero inspirador museo dedicado a su vida. Continuaremos hacia el Zócalo Central para visitar la Catedral Metropolitana, la Iglesia de Santo Domingo, y la Iglesia de San José del Altillo para ver la cripta donde está enterrada la Beata Conchita Cabrera. Tiempo para oraciones y devociones personales.'
      },
      {
        title: 'Día 7 (Vie, 29 Mayo): Ciudad de México - Puebla - Ciudad de México',
        description: 'Desayuno. Por la mañana salida hacia Puebla, visitando en el camino Tlaxcala donde visitaremos el Santuario de San Miguel Arcángel (San Miguel del Milagro) donde celebraremos Misa. Aquí es donde San Miguel Arcángel se le apareció a Diego Lázaro en 1631, dirigiéndolo a la Gruta y a un pozo de aguas curativas milagrosas. Continuaremos hacia Ocotlán para visitar la hermosa iglesia y ver la imagen milagrosa de Nuestra Señora quemada en el tronco de un árbol después de que se le apareció a Juan Diego Bernardino en 1541. Continuaremos hacia Puebla para visitar la Catedral de la Inmaculada Concepción, construida durante el siglo XVI. Visitaremos la Iglesia de Santo Domingo con su magnífica Capilla del Rosario, y la Iglesia de San Francisco donde conoceremos la historia del Beato Sebastián de la Aparicio y contemplaremos su cuerpo incorrupto. Regreso a la Ciudad de México.'
      },
      {
        title: 'Día 8 (Sáb, 30 Mayo): Ciudad de México - Miami',
        description: 'Desayuno. A la hora indicada traslado al aeropuerto para tomar vuelo de American Airlines o similar con destino a Miami. Llegada y fin de los servicios.'
      }
    ]
  };

  const t = content[language];
  const included = includedItems[language];
  const notIncluded = notIncludedItems[language];
  const itineraryDays = days[language];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#8B4513] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
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
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">
            {t.pricing}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#8B4513]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">
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
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">
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
                    <h3 className="text-lg font-semibold text-[#8B4513]">
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
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center">
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
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center">
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

      <section className="py-16 bg-[#8B4513] text-white">
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
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">
            {t.formTitle}
          </h2>
          <ContactForm source="mexico_2026" />
        </div>
      </section>
    </div>
  );
}
