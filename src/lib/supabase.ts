import { createClient } from '@supabase/supabase-js';
import { logger } from './logger';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  logger.error('Missing Supabase environment variables', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey
  }, 'Supabase');
  throw new Error('Missing Supabase environment variables');
}

logger.info('Initializing Supabase client', {
  url: supabaseUrl
}, 'Supabase');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

logger.debug('Supabase client created successfully', undefined, 'Supabase');
