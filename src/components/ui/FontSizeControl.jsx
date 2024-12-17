import React from 'react';
import { Type } from 'lucide-react';
import { useFontSize } from '../../context/FontSizeContext';

export const FontSizeControl = () => {
  const { increaseFontSize, decreaseFontSize } = useFontSize();
  
  return (
    <div className="flex gap-2">
      <button 
        onClick={decreaseFontSize}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Type size={18} />
      </button>
      <button 
        onClick={increaseFontSize}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Type size={22} />
      </button>
    </div>
  );
};