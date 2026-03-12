import { Phone, MessageCircle, Calendar, Check, X, ChevronDown, ChevronUp, Ship } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function Egypt2026() {
  const { t } = useLanguage();
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const days = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t('egypt.intro')}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b5c] mb-8 text-center">
            {t('egypt.pricing')}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-[#1a2b5c]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1a2b5c] mb-4">
                {t('egypt.deposit')}
              </h3>
              <p className="text-6xl font-bold text-[#ff6b6b] mb-4">{t('egypt.depositAmount')}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {t('egypt.priceNote')}
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#ff6b6b] to-[#ff8787] text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <Ship className="w-8 h-8 mr-3" />
              <h4 className="text-2xl font-bold">Incluye Crucero por el Nilo</h4>
            </div>
            <p className="text-center text-lg">4 noches navegando por el majestuoso Río Nilo con todas las comidas incluidas</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b5c] mb-8 text-center">
            {t('egypt.itinerary')}
          </h2>
          <div className="space-y-3">
            {days.map((day) => {
              const isCruiseDay = day >= 7 && day <= 10;
              return (
                <div key={day} className={`bg-white rounded-lg shadow-md overflow-hidden ${isCruiseDay ? 'border-2 border-[#ff6b6b]' : ''}`}>
                  <button
                    onClick={() => toggleDay(day)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center text-left flex-1">
                      {isCruiseDay && <Ship className="w-5 h-5 text-[#ff6b6b] mr-2 flex-shrink-0" />}
                      <h3 className="text-lg font-semibold text-[#1a2b5c]">
                        {t(`egypt.days.day${day}.title`)}
                      </h3>
                    </div>
                    {expandedDay === day ? (
                      <ChevronUp className="w-5 h-5 text-[#ff6b6b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#ff6b6b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedDay === day && (
                    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">
                        {t(`egypt.days.day${day}.description`)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1a2b5c] mb-6 flex items-center">
                <Check className="w-6 h-6 text-[#ff6b6b] mr-2" />
                {t('egypt.included')}
              </h3>
              <ul className="space-y-3">
                {Array.from({ length: 11 }, (_, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#ff6b6b] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t(`egypt.includedItems.item${i + 1}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a2b5c] mb-6 flex items-center">
                <X className="w-6 h-6 text-red-600 mr-2" />
                {t('egypt.notIncluded')}
              </h3>
              <ul className="space-y-3">
                {Array.from({ length: 6 }, (_, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t(`egypt.notIncludedItems.item${i + 1}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a2b5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('egypt.cta')}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('egypt.ctaText')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13052740453"
              className="flex items-center space-x-2 bg-[#ff6b6b] text-white px-8 py-4 rounded-lg hover:bg-[#ff5252] transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>{t('hero.callNow')}</span>
            </a>
            <a
              href="https://wa.me/13052740453"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('hero.whatsapp')}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b5c] mb-8 text-center">
            {t('contact.formTitle')}
          </h2>
          <ContactForm source="egypt_2026" />
        </div>
      </section>
    </div>
  );
}
