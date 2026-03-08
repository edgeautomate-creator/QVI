import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { logger } from '../lib/logger';

interface ContactFormProps {
  source?: string;
}

export default function ContactForm({ source = 'contact_form' }: ContactFormProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    logger.info('Contact form submission started', {
      source,
      language,
      hasName: !!formData.name,
      hasEmail: !!formData.email,
      hasPhone: !!formData.phone,
      hasMessage: !!formData.message
    }, 'ContactForm');

    try {
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: source,
        language: language
      };

      logger.debug('Inserting lead into database', leadData, 'ContactForm');

      const { error, data } = await supabase
        .from('leads')
        .insert([leadData])
        .select();

      if (error) {
        logger.error('Database error when inserting lead', {
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        }, 'ContactForm');
        throw error;
      }

      logger.info('Lead inserted successfully', {
        leadId: data?.[0]?.id,
        source
      }, 'ContactForm');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      logger.error('Error submitting contact form', error, 'ContactForm');
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.name')} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.emailLabel')} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.phoneLabel')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent resize-none"
        ></textarea>
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {t('contact.success')}
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {t('contact.error')}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center space-x-2 bg-[#1a2b5c] text-white px-8 py-4 rounded-lg hover:bg-[#243a75] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
      >
        <Send className="w-5 h-5" />
        <span>{status === 'sending' ? t('contact.sending') : t('contact.send')}</span>
      </button>
    </form>
  );
}
