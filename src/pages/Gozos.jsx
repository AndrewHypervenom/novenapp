import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const GozosView = () => {
  // Scroll al inicio cuando el componente se monte
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const estribillo = `Dulce Jesús mío, mi niño adorado
¡Ven a nuestras almas! ¡Ven no tardes tanto!`;

  const gozosText = [
    {
      text: `¡Oh, Sapiencia suma del Dios soberano,
que a nivel de un niño te hayas rebajado!
¡Oh, Divino Niño, ven para enseñarnos
la prudencia que hace verdaderos sabios!`
    },
    {
      text: `¡Oh, Adonaí potente que, a Moisés hablando,
de Israel al pueblo fuiste prometiendo!
¡Ah, ven prontamente para rescatarnos,
y que un niño débil muestre fuerte brazo!`
    },
    {
      text: `¡Oh, raíz sagrada de José, que en lo alto
presenta al orbe tu fragante nardo!
Dulcísimo Niño que has sido llamado
Lirio de los valles, Bella flor del campo.`
    },
    {
      text: `¡Oh, Llave de David que abre al desterrado
las cerradas puertas del regio palacio!
¡Sácanos, Oh Niño, con tu blanca mano,
de la cárcel triste que labró el pecado!`
    },
    {
      text: `¡Oh, lumbre de Oriente, sol de eternos rayos,
que entre las tinieblas tu esplendor veamos!
Niño tan precioso, dicha del cristiano,
luzca la sonrisa de tus dulces labios.`
    },
    {
      text: `¡Espejo sin mancha, santo de los santos,
sin igual imagen del Dios soberano!
¡Borra nuestras culpas, salva al desterrado
y en forma de niño, da al mísero amparo!`
    },
    {
      text: `¡Rey de las naciones, Emmanuel preclaro,
De Israel anhelo, Pastor del rebaño!
¡Niño que apacientas con suave cayado
ya la oveja arisca, ya el cordero manso!`
    },
    {
      text: `¡Ábranse los cielos y llueva de lo alto
bienhechor rocío como riego santo!
¡Ven hermoso Niño, ven Dios humanado!
¡Luce, Dios estrella! ¡Brota, flor del campo!`
    },
    {
      text: `¡Ven, que ya María previene sus brazos,
do su niño vean, en tiempo cercano!
¡Ven, que ya José, con anhelo sacro,
se dispone a hacerse de tu amor sagrario!`
    },
    {
      text: `¡Del débil auxilio, del doliente amparo,
consuelo del triste, luz del desterrado!
¡Vida de mi vida, mi dueño adorado,
mi constante amigo, mi divino hermano!`
    },
    {
      text: `¡Ven ante mis ojos, de ti enamorados!
¡Bese ya tus plantas! ¡Bese ya tus manos!
¡Prosternado en tierra, te tiendo los brazos,
y aún más que mis frases, te dice mi llanto!`
    },
    {
      text: `¡Ven, Salvador nuestro, por quien suspiramos
Ven a nuestras almas, Ven, no tardes tanto!`
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-6 pb-24 max-w-2xl"
    >
      <div className="rounded-2xl bg-[#1A2234] p-6 shadow-lg overflow-hidden relative">
        <h1 className="text-3xl font-bold text-[#FFD700] mb-8 text-center">
          Gozos de la Novena
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="text-[#FFD700] text-xl italic font-medium leading-relaxed whitespace-pre-line">
            {estribillo}
          </p>
        </motion.div>

        <div className="space-y-12">
          {gozosText.map((gozo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-[#FFD700]/20 group hover:border-[#FFD700]/50 transition-colors"
            >
              <div className="absolute -left-4 top-0 w-8 h-8 bg-[#1A2234] border border-[#FFD700]/20 rounded-full flex items-center justify-center text-[#FFD700] text-sm">
                {index + 1}
              </div>
              
              <div className="text-[#B4C6EF] text-center leading-relaxed">
                <p className="whitespace-pre-line mb-6">{gozo.text}</p>
                
                <p className="text-[#FFD700] italic text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                  {estribillo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-4 right-4 w-24 h-24 bg-[#FFD700]/5 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-2xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default GozosView;