import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

interface Continent {
  id: string;
  name: string;
  path: string;
}

export default function WorldMap() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null);

  const continents: Continent[] = [
    {
      id: 'asia',
      name: t('continents.asia'),
      path: '/viajes-especiales/asia'
    },
    {
      id: 'europe',
      name: t('continents.europe'),
      path: '/viajes-especiales/europe'
    },
    {
      id: 'africa',
      name: t('continents.africa'),
      path: '/viajes-especiales/africa'
    },
    {
      id: 'oceania',
      name: t('continents.oceania'),
      path: '/viajes-especiales/oceania'
    },
    {
      id: 'america',
      name: t('continents.america'),
      path: '/viajes-especiales/america'
    },
    {
      id: 'latinamerica',
      name: t('continents.latinAmerica'),
      path: '/viajes-especiales/latin-america'
    }
  ];

  const handleContinentClick = (path: string) => {
    navigate(path);
  };

  const handleAreaClick = (continentId: string) => {
    const continent = continents.find(c => c.id === continentId);
    if (continent) {
      navigate(continent.path);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      

      {hoveredContinent && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1a2b5c] text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">
            {continents.find(c => c.id === hoveredContinent)?.name}
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {continents.map((continent) => (
          <button
            key={continent.id}
            onClick={() => handleContinentClick(continent.path)}
            onMouseEnter={() => setHoveredContinent(continent.id)}
            onMouseLeave={() => setHoveredContinent(null)}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-[#1a2b5c]"
          >
            <span className="text-lg font-semibold text-[#1a2b5c]">{continent.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
