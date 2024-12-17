import React from 'react';
import { motion } from 'framer-motion';

const DaysView = () => {
  const days = [
    {
      number: 16,
      title: "La Profecía",
      description: "En este primer día contemplamos las antiguas profecías sobre la venida del Salvador.",
      prayer: `Oración:
      
Señor Dios todopoderoso, tú ordenaste a Moisés que hiciera una serpiente de bronce y la pusiera como señal, para que todos los que la miraran quedaran curados de la mordedura de las serpientes venenosas.

Te pedimos que así como aquel símbolo anunciaba la cruz salvadora de tu Hijo, nosotros, al contemplar su nacimiento en Belén, quedemos curados del veneno del pecado y alcancemos la vida eterna.

Consideración del día:

La noticia del nacimiento del Mesías fue dada a conocer por ángeles a unos humildes pastores que velaban cuidando su rebaño. Celebremos la humildad y la cercanía de Dios que se revela a los sencillos.`
    },
    {
      number: 17,
      title: "La Alianza",
      description: "Recordamos la alianza de Dios con su pueblo y la promesa de salvación.",
      prayer: `Oración:

Señor, Dios todopoderoso, que pusiste en el cielo el arco iris como señal de alianza con los hombres, concédenos que al contemplar el nacimiento de tu Hijo, veamos en él la señal suprema de tu amor y de tu alianza definitiva con la humanidad.

Consideración del día:

María y José, siguiendo el edicto del emperador, emprendieron el camino hacia Belén. A pesar de las dificultades del viaje y la incomodidad de María en su avanzado embarazo, confiaron en la Divina Providencia.`
    },
    {
      number: 18,
      title: "La Preparación",
      description: "Preparamos nuestros corazones para recibir al Salvador.",
      prayer: `Oración:

Señor Dios, que por medio de Juan el Bautista preparaste el camino para el nacimiento de tu Hijo, ayúdanos a preparar también nosotros el camino para que Jesús nazca en nuestros corazones esta Navidad.

Consideración del día:

Al llegar a Belén, María y José buscaron posada, pero no encontraron lugar. Nadie quiso recibirlos. Reflexionemos sobre las veces que nosotros cerramos las puertas de nuestro corazón a Jesús.`
    },
    {
      number: 19,
      title: "La Anunciación",
      description: "Meditamos sobre el anuncio del ángel a María.",
      prayer: `Oración:

Señor Dios, que enviaste al ángel Gabriel a anunciar a María la buena nueva de la encarnación de tu Hijo, te pedimos que nosotros, al recordar este misterio, nos preparemos con alegría para recibir a Jesús en nuestras vidas.

Consideración del día:

María guardaba todas estas cosas y las meditaba en su corazón. Aprendamos de ella a conservar y meditar los misterios de Dios en nuestro interior.`
    },
    {
      number: 20,
      title: "La Estrella",
      description: "Seguimos la estrella que nos guía hacia Belén.",
      prayer: `Oración:

Señor Dios, que por medio de la estrella guiaste a los magos hasta el pesebre donde estaba tu Hijo, guíanos también a nosotros con tu luz para que encontremos a Jesús y le adoremos como nuestro único Salvador.

Consideración del día:

Los magos de Oriente siguieron la estrella que los condujo hasta Jesús. También nosotros necesitamos buscar las señales que Dios nos da para encontrarlo.`
    },
    {
      number: 21,
      title: "La Humildad",
      description: "Contemplamos la humildad del pesebre.",
      prayer: `Oración:

Señor Dios, que en el nacimiento de tu Hijo nos mostraste el camino de la humildad, concédenos que, siguiendo sus huellas, lleguemos a la gloria que nos has prometido.

Consideración del día:

El Hijo de Dios eligió nacer en la pobreza de un pesebre. Esta elección nos enseña que Dios no mira las apariencias exteriores sino la humildad del corazón.`
    },
    {
      number: 22,
      title: "Belén",
      description: "Nos acercamos a la ciudad de David.",
      prayer: `Oración:

Señor Dios, que quisiste que tu Hijo naciera en la ciudad de Belén, te pedimos que así como aquella ciudad fue privilegiada con su nacimiento, también nuestros corazones sean una digna morada para él.

Consideración del día:

Belén significa "casa del pan". Jesús, el pan de vida, nació en la ciudad del pan para alimentarnos con su palabra y su cuerpo.`
    },
    {
      number: 23,
      title: "La Espera",
      description: "Aguardamos con esperanza la llegada del Salvador.",
      prayer: `Oración:

Señor Dios, que por medio de los profetas anunciaste el nacimiento de tu Hijo, ayúdanos a reconocer los signos de tu presencia en nuestra vida cotidiana.

Consideración del día:

Los profetas anunciaron durante siglos la venida del Mesías. Su esperanza y su fe nos enseñan a mantener viva nuestra esperanza en las promesas de Dios.`
    },
    {
      number: 24,
      title: "La Noche Santa",
      description: "Celebramos el nacimiento del Salvador.",
      prayer: `Oración:

Señor Dios, que esta noche santa nos traes la alegría del nacimiento de tu Hijo, te pedimos que, así como los ángeles anunciaron a los pastores la buena nueva, nosotros seamos también mensajeros de esta alegría para todos los que nos rodean.

Consideración del día:

Ha llegado la noche santa en que el Verbo se hizo carne y habitó entre nosotros. Abramos nuestro corazón para recibir a Jesús que viene a salvarnos.`
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-6 pb-24 max-w-2xl"
    >
      <h1 className="text-3xl font-bold text-[#FFD700] mb-8 text-center">
        Oraciones por Día
      </h1>

      <div className="space-y-6">
        {days.map((day) => (
          <motion.div
            key={day.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-[#1A2234] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
          >
            {/* Encabezado del día */}
            <div className="p-6 border-b border-[#FFD700]/10 flex items-start justify-between">
              <div>
                <h2 className="text-[#FFD700] text-2xl font-bold mb-2">
                  Día {day.number} - {day.title}
                </h2>
                <p className="text-[#B4C6EF]/80 text-sm">
                  {day.description}
                </p>
              </div>
              <div className="bg-[#FFD700]/10 px-4 py-2 rounded-lg">
                <span className="text-[#FFD700] font-bold">{day.number}</span>
                <span className="text-[#FFD700]/60 text-sm"> Dic</span>
              </div>
            </div>

            {/* Contenido de la oración */}
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <div className="text-[#B4C6EF] whitespace-pre-line leading-relaxed">
                  {day.prayer}
                </div>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DaysView;