import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Type } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useFontSize } from '../../context/FontSizeContext';

export const AccessibilityControls = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();

  return (
    <div className="flex items-center gap-2">
      <motion.div className="flex bg-[#1A2233] dark:bg-gray-800 rounded-full p-1 gap-1">
        <motion.button
          onClick={decreaseFontSize}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <Type size={16} className="text-gray-400 hover:text-white" />
        </motion.button>
        <span className="flex items-center text-sm text-gray-400 px-1">
          {fontSize}
        </span>
        <motion.button
          onClick={increaseFontSize}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <Type size={20} className="text-gray-400 hover:text-white" />
        </motion.button>
      </motion.div>

      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 bg-[#1A2233] dark:bg-gray-800 rounded-full hover:bg-white/10 transition-colors"
      >
        <motion.div
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-400" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};