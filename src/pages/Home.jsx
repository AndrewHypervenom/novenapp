import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  // Obtener fecha actual (Bogotá)
  const bogotaDate = new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota',
    month: 'long',
    day: 'numeric',
  });

  // Obtener el día actual de diciembre
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const isDecember = currentMonth === 12;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20 px-4"
    >
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-[#B4C6EF] mt-4 mb-8"
      >
        {bogotaDate} • Bogotá, Colombia
      </motion.p>

      {isDecember && currentDay >= 16 && currentDay <= 24 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20"
        >
          <h2 className="text-[#FFD700] font-medium">Hoy es el día {currentDay}</h2>
          <p className="text-[#B4C6EF] text-sm mt-1">
            ¡Es momento de hacer las oraciones del día!
          </p>
          <Link to={`/day/${currentDay}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 w-full py-2 px-4 rounded-lg bg-[#FFD700] text-[#0B1121] font-medium"
            >
              Comenzar oraciones de hoy
            </motion.button>
          </Link>
        </motion.div>
      )}

      <div className="space-y-3">
        {[...Array(9)].map((_, index) => {
          const dayNumber = index + 16;
          const isToday = isDecember && currentDay === dayNumber;
          const isPast = isDecember && currentDay > dayNumber;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/day/${dayNumber}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-xl 
                    bg-gray-50 dark:bg-[#1A2234] hover:bg-gray-100 dark:hover:bg-[#1E2943] 
                    border border-gray-200 dark:border-[#2A3654] p-4 
                    transition-all duration-200
                    ${isToday ? 'ring-2 ring-amber-500 dark:ring-[#FFD700]' : ''}`}
                >
                <div className="flex items-center gap-3">
                    <span className="text-amber-500 dark:text-[#FFD700]">
                    {isPast ? '✓' : isToday ? '★' : '⭐'}
                    </span>
                    <div className="flex-1">
                    <h3 className="text-gray-900 dark:text-white text-lg">
                        Día {dayNumber} de Diciembre
                        {isToday && (
                        <span className="ml-2 text-xs text-amber-500 dark:text-[#FFD700]">
                            (Hoy)
                        </span>
                        )}
                    </h3>
                    <p className="text-gray-600 dark:text-[#B4C6EF] text-sm">
                        {isPast ? 'Oraciones completadas' : isToday ? 'Hacer oraciones de hoy' : 'Ver oraciones del día'}
                    </p>
                    </div>
                    <ChevronRight 
                    className="w-5 h-5 text-gray-400 dark:text-[#B4C6EF] 
                        group-hover:transform group-hover:translate-x-1 transition-transform" 
                    />
                </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Home;