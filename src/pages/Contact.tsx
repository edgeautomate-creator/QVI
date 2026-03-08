import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1a2b5c] via-[#243a75] to-[#1a2b5c] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-200">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1a2b5c] mb-8">
                {t('footer.contact')}
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#1a2b5c] p-4 rounded-full">
                      <Phone className="w-6 h-6 text-[#ff6b6b]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact.phone')}</h3>
                      <a
                        href="tel:+13052740453"
                        className="text-lg text-[#1a2b5c] hover:text-[#ff6b6b] font-semibold transition-colors"
                      >
                        (305) 274-0453
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#1a2b5c] p-4 rounded-full">
                      <MessageCircle className="w-6 h-6 text-[#ff6b6b]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/13052740453"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-[#1a2b5c] hover:text-[#ff6b6b] font-semibold transition-colors"
                      >
                        (305) 274-0453
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#1a2b5c] p-4 rounded-full">
                      <Mail className="w-6 h-6 text-[#ff6b6b]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact.email')}</h3>
                      <a
                        href="mailto:Reservations@qvitravel.miami"
                        className="text-lg text-[#1a2b5c] hover:text-[#ff6b6b] font-semibold transition-colors break-all"
                      >
                        Reservations@qvitravel.miami
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#1a2b5c] p-4 rounded-full">
                      <Clock className="w-6 h-6 text-[#ff6b6b]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact.hours')}</h3>
                      <p className="text-gray-700">{t('contact.hoursText')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13052740453"
                  className="flex items-center justify-center space-x-2 bg-[#1a2b5c] text-white px-6 py-3 rounded-lg hover:bg-[#243a75] transition-all font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('hero.callNow')}</span>
                </a>
                <a
                  href="https://wa.me/13052740453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-all font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('hero.whatsapp')}</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#1a2b5c] mb-6">
                {t('contact.formTitle')}
              </h2>
              <ContactForm source="contact_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
