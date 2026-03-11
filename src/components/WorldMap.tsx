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
      <div className="relative">
        <img
          src="/world-map.png"
          alt="World Map"
          useMap="#worldmap"
          className="w-full h-auto"
          style={{ maxHeight: '500px', objectFit: 'contain' }}
        />

        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute" style={{ top: '20%', left: '12%' }}>
            <div className="text-[#1a2b5c] font-bold text-sm md:text-base lg:text-lg opacity-80 text-center whitespace-nowrap">
              NORTH AMERICA
            </div>
          </div>
          <div className="absolute" style={{ top: '58%', left: '18%' }}>
            <div className="text-[#1a2b5c] font-bold text-sm md:text-base lg:text-lg opacity-80 text-center whitespace-nowrap">
              SOUTH AMERICA
            </div>
          </div>
          <div className="absolute" style={{ top: '22%', left: '44%' }}>
            <div className="text-[#1a2b5c] font-bold text-sm md:text-base lg:text-lg opacity-80 text-center">
              EUROPE
            </div>
          </div>
          <div className="absolute" style={{ top: '42%', left: '48%' }}>
            <div className="text-[#1a2b5c] font-bold text-sm md:text-base lg:text-lg opacity-80 text-center">
              AFRICA
            </div>
          </div>
          <div className="absolute" style={{ top: '28%', left: '72%' }}>
            <div className="text-[#1a2b5c] font-bold text-sm md:text-base lg:text-lg opacity-80 text-center">
              ASIA
            </div>
          </div>
          <div className="absolute" style={{ top: '62%', left: '84%' }}>
            <div className="text-[#1a2b5c] font-bold text-sm md:text-base lg:text-lg opacity-80 text-center">
              OCEANIA
            </div>
          </div>
        </div>

        <map name="worldmap">
          <area
            shape="poly"
            coords="15,20, 95,15, 155,25, 175,35, 180,50, 175,70, 165,85, 150,95, 130,100, 110,102, 95,100, 80,95, 65,88, 50,80, 35,70, 25,55, 18,40"
            alt="North America"
            onClick={() => handleAreaClick('america')}
            onMouseEnter={() => setHoveredContinent('america')}
            onMouseLeave={() => setHoveredContinent(null)}
            className="cursor-pointer"
          />

          <area
            shape="poly"
            coords="105,118, 120,115, 135,118, 145,125, 152,138, 155,155, 155,175, 150,192, 142,205, 130,212, 118,215, 105,213, 95,207, 88,195, 85,180, 85,165, 88,148, 95,130"
            alt="South America"
            onClick={() => handleAreaClick('latinamerica')}
            onMouseEnter={() => setHoveredContinent('latinamerica')}
            onMouseLeave={() => setHoveredContinent(null)}
            className="cursor-pointer"
          />

          <area
            shape="poly"
            coords="230,25, 260,20, 280,22, 295,28, 302,38, 305,50, 300,60, 290,68, 275,72, 260,72, 245,68, 235,58, 228,45, 227,35"
            alt="Europe"
            onClick={() => handleAreaClick('europe')}
            onMouseEnter={() => setHoveredContinent('europe')}
            onMouseLeave={() => setHoveredContinent(null)}
            className="cursor-pointer"
          />

          <area
            shape="poly"
            coords="218,82, 238,78, 260,80, 278,88, 288,100, 293,118, 295,140, 295,165, 292,185, 285,202, 273,215, 258,222, 240,222, 225,217, 215,205, 210,188, 208,168, 210,145, 213,120, 216,100"
            alt="Africa"
            onClick={() => handleAreaClick('africa')}
            onMouseEnter={() => setHoveredContinent('africa')}
            onMouseLeave={() => setHoveredContinent(null)}
            className="cursor-pointer"
          />

          <area
            shape="poly"
            coords="310,25, 340,18, 375,15, 410,18, 445,28, 472,42, 490,60, 500,80, 505,100, 505,120, 502,140, 495,158, 485,172, 470,182, 450,188, 425,190, 400,188, 375,182, 355,170, 340,155, 328,135, 320,112, 315,88, 312,65, 310,45"
            alt="Asia"
            onClick={() => handleAreaClick('asia')}
            onMouseEnter={() => setHoveredContinent('asia')}
            onMouseLeave={() => setHoveredContinent(null)}
            className="cursor-pointer"
          />

          <area
            shape="poly"
            coords="420,168, 445,165, 470,168, 490,175, 502,188, 508,202, 508,215, 502,225, 490,230, 472,232, 452,230, 435,222, 425,210, 420,195, 418,180"
            alt="Australia/Oceania"
            onClick={() => handleAreaClick('oceania')}
            onMouseEnter={() => setHoveredContinent('oceania')}
            onMouseLeave={() => setHoveredContinent(null)}
            className="cursor-pointer"
          />
        </map>
      </div>

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
