import React from 'react';
import { Home, Calendar, Music } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full bg-white/80 dark:bg-[#1A2234]/80 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-lg mx-auto px-8">
        <div className="flex justify-between py-4">
          <Link 
            to="/" 
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/') ? 'text-[#FFD700]' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Inicio</span>
          </Link>

          <Link 
            to="/days" 
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/days') ? 'text-[#FFD700]' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Días</span>
          </Link>

          <Link 
            to="/gozos" 
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/gozos') ? 'text-[#FFD700]' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Music className="w-6 h-6" />
            <span className="text-xs">Gozos</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};