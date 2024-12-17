import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { commonPrayers, daysContent } from './prayerContent';

const DayView = () => {
  const { dayNumber } = useParams();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: commonPrayers.daily.title, content: commonPrayers.daily.content },
    { title: commonPrayers.virgin.title, content: commonPrayers.virgin.content },
    { title: commonPrayers.joseph.title, content: commonPrayers.joseph.content },
    { title: commonPrayers.jesus.title, content: commonPrayers.jesus.content },
    { title: `Oración para el día ${dayNumber}`, content: daysContent[dayNumber]?.prayer }
  ];

  // Scroll al inicio cuando cambie el paso
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="container mx-auto px-4 py-6 pb-24 max-w-2xl">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-[#0B1121]/80 backdrop-blur-lg mb-6 -mx-4 px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Paso {currentStep + 1} de {steps.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {steps[currentStep].title}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="rounded-2xl bg-gray-50 dark:bg-[#1A2234] p-6 shadow-sm"
        >
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-[#FFD700] mb-4">
              {steps[currentStep].title}
            </h2>
            <div className="text-gray-600 dark:text-[#B4C6EF] whitespace-pre-line mb-8">
              {steps[currentStep].content}
            </div>

            <div className="flex justify-between gap-2 mt-6 flex-wrap">
              <motion.button
                onClick={prevStep}
                disabled={currentStep === 0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center whitespace-normal px-4 py-2 rounded-lg min-w-[100px]
                  ${currentStep === 0 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-[#2A3654]/20'
                  } transition-all duration-200`}
              >
                <ChevronLeft className="w-4 h-4 mr-1 flex-shrink-0 text-[#B4C6EF]" strokeWidth={2.5} />
                <span className="text-sm text-[#B4C6EF]">Anterior</span>
              </motion.button>

              {isLastStep ? (
                <Link 
                  to="/gozos" 
                  className="flex-shrink-0"
                  onClick={() => {
                    // Scroll al inicio antes de la navegación
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center whitespace-normal px-4 py-2 rounded-lg min-w-[100px]
                      bg-[#FFD700]/20 hover:bg-[#FFD700]/30 transition-all duration-200"
                  >
                    <span className="text-sm text-[#FFD700]">Ir a Gozos</span>
                    <ChevronRight className="w-4 h-4 ml-1 flex-shrink-0 text-[#FFD700]" strokeWidth={2.5} />
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-[#FFD700]/20 hover:bg-[#FFD700]/30 transition-all duration-200"
                >
                  <span className="text-[#FFD700]">Siguiente</span>
                  <ChevronRight className="w-5 h-5 text-[#FFD700]" strokeWidth={2.5} />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DayView;