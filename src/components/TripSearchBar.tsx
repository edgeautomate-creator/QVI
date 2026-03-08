import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { logger } from '../lib/logger';

interface Trip {
  id: string;
  name_en: string;
  name_es: string;
  slug: string;
  category: string;
  destinations: string;
  countries: string[];
  description_en: string;
  description_es: string;
  highlights_en: string[];
  highlights_es: string[];
  price: number;
  currency: string;
  duration_days: number;
  image_url: string;
  route_path: string;
  featured: boolean;
}

export default function TripSearchBar() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Trip[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowResults(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);

    timeoutRef.current = setTimeout(async () => {
      await performSearch(searchQuery);
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchQuery, language]);

  const performSearch = async (query: string) => {
    try {
      const searchTerm = query.toLowerCase().trim();

      logger.debug('Performing trip search', {
        query: searchTerm,
        language,
        queryLength: searchTerm.length
      }, 'TripSearchBar');

      const { data, error } = await supabase
        .from('trips')
        .select('*')
        .or(`destinations.ilike.%${searchTerm}%,description_${language}.ilike.%${searchTerm}%,highlights_${language}.cs.{${searchTerm}},name_${language}.ilike.%${searchTerm}%,countries.cs.{${searchTerm}}`)
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) {
        logger.error('Trip search database error', {
          error: error.message,
          code: error.code,
          details: error.details,
          query: searchTerm
        }, 'TripSearchBar');
        setSearchResults([]);
      } else {
        logger.info('Trip search completed', {
          resultsCount: data?.length || 0,
          query: searchTerm,
          language
        }, 'TripSearchBar');
        setSearchResults(data || []);
        setShowResults(true);
      }
    } catch (error) {
      logger.error('Trip search unexpected error', error, 'TripSearchBar');
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const getCategoryLabel = (category: string) => {
    return t(`search.categories.${category}`) || category;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      peregrinacion: 'bg-[#1a2b5c] text-white',
      tour: 'bg-[#ff6b6b] text-white',
      paquete: 'bg-[#25D366] text-white',
      viaje: 'bg-[#243a75] text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600 text-white';
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase()
        ? <mark key={index} className="bg-yellow-200 text-gray-900">{part}</mark>
        : part
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto" ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchResults.length > 0 && setShowResults(true)}
          placeholder={t('search.placeholder')}
          className="block w-full pl-12 pr-12 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-[#1a2b5c] focus:border-transparent text-lg shadow-lg transition-all"
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center hover:opacity-70 transition-opacity"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        )}
      </div>

      {showResults && searchQuery.trim().length >= 2 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[500px] overflow-y-auto">
          {isSearching ? (
            <div className="px-6 py-8 text-center text-gray-500">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#1a2b5c]"></div>
              <p className="mt-2">{t('search.searching')}</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-gray-500">
                {searchResults.length} {t('search.results')}
              </div>
              {searchResults.map((trip) => (
                <Link
                  key={trip.id}
                  to={trip.route_path}
                  onClick={() => {
                    setShowResults(false);
                    setSearchQuery('');
                  }}
                  className="flex items-start gap-4 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <img
                    src={trip.image_url}
                    alt={language === 'es' ? trip.name_es : trip.name_en}
                    className="w-24 h-16 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-gray-900 text-sm line-clamp-1">
                        {highlightMatch(
                          language === 'es' ? trip.name_es : trip.name_en,
                          searchQuery
                        )}
                      </h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${getCategoryColor(trip.category)}`}>
                        {getCategoryLabel(trip.category)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                      {trip.countries.join(', ')}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>{trip.duration_days} {t('search.days')}</span>
                      {trip.price > 0 && (
                        <span className="font-semibold text-[#1a2b5c]">
                          {trip.currency} ${trip.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-6 py-8 text-center">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">{t('search.noResults')}</p>
              <p className="text-gray-500 text-sm mt-1">{t('search.noResultsDesc')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
