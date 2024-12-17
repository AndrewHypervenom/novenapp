import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useFontSize } from '../../context/FontSizeContext';
import { Maximize2, Minimize2 } from 'lucide-react';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { increaseFontSize, decreaseFontSize } = useFontSize();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((e) => {
        console.error(e);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((e) => {
        console.error(e);
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B1121]/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <h1 className="text-2xl font-semibold text-[#FFD700] mr-4">
            Novena de Aguinaldos
          </h1>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-gray-100/80 dark:bg-[#1A2234]/80 rounded-lg hover:bg-gray-200/50 dark:hover:bg-[#2A3654]/50 transition-colors"
              aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Maximize2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <div className="flex bg-gray-100/80 dark:bg-[#1A2234]/80 rounded-lg backdrop-blur">
              <button
                onClick={decreaseFontSize}
                className="px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-[#2A3654]/50 rounded-l-lg transition-colors"
              >
                A-
              </button>
              <button
                onClick={increaseFontSize}
                className="px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-[#2A3654]/50 rounded-r-lg transition-colors"
              >
                A+
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-100/80 dark:bg-[#1A2234]/80 rounded-lg hover:bg-gray-200/50 dark:hover:bg-[#2A3654]/50 transition-colors"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;