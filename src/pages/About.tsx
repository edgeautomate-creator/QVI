import { Award, Heart, Users, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1a2b5c] via-[#243a75] to-[#1a2b5c] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-200">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/image.png"
                alt="Antonio and Lilliam Morales"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-[#1a2b5c]">Antonio y Lilliam Morales</h3>
                <p className="text-[#ff6b6b] font-semibold">{t('about.founderTitle')}</p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <div className="inline-block bg-[#ff6b6b] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t('trust.experience')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b5c] mb-6">
                  QVI Travel Group, Inc.
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  {t('about.story').split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2b5c] mb-12">
            {t('about.values')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Award className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b5c] mb-3">
                {t('trust.experience')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.value1')}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Heart className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b5c] mb-3">
                {t('trust.personalized')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.value2')}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Globe className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b5c] mb-3">
                {t('trust.spiritual')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.value3')}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#1a2b5c] rounded-full mb-4">
                <Users className="w-8 h-8 text-[#ff6b6b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b5c] mb-3">
                {t('about.subtitle')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.value4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a2b5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/QVILogo-new.png"
            alt="QVI Travel Group"
            className="h-32 w-auto mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">
            QVI Travel Group, Inc.
          </h2>
          <p className="text-xl text-gray-200 mb-2">
            {t('trust.experience')}
          </p>
          <p className="text-lg text-gray-300">
            {t('footer.aboutText')}
          </p>
        </div>
      </section>
    </div>
  );
}
