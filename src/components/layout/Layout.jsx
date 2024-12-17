import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Header from './Header';
import { BottomNav } from '../navigation/BottomNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { isDarkMode } = useTheme();
  const snowflakes = Array(40).fill('❄');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-[#0B1121] relative overflow-hidden">
        {/* Efectos de nieve mejorados */}
        <div className="fixed inset-0 pointer-events-none">
          {snowflakes.map((_, index) => (
            <motion.div
              key={index}
              className="absolute text-white/20 dark:text-white/25"
              initial={{
                top: -20,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.8 + 0.4,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                top: '100vh',
                left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
                left: {
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'mirror',
                }
              }}
            >
              ❄
            </motion.div>
          ))}
        </div>

        <Header />
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;