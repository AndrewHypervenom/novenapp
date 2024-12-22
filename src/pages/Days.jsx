import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const DaysView = () => {
  const getOrdinalDay = (index) => {
    const ordinals = {
      0: 'Primer',
      1: 'Segundo',
      2: 'Tercer',
      3: 'Cuarto',
      4: 'Quinto',
      5: 'Sexto',
      6: 'Séptimo',
      7: 'Octavo',
      8: 'Noveno'
    };
    return ordinals[index];
  };

  const days = [
    {
      number: 16,
      title: "La Profecía",
      description: "La historia de la Navidad comienza mucho antes del nacimiento de Jesús, en las antiguas profecías que anunciaban su venida. Durante siglos, Dios fue preparando a su pueblo para este momento extraordinario.",
      prayer: `La historia de la Navidad comienza mucho antes del nacimiento de Jesús, en las antiguas profecías que anunciaban su venida. Durante siglos, Dios fue preparando a su pueblo para este momento extraordinario. Los profetas, inspirados por el Espíritu Santo, hablaron de un Salvador que vendría a redimir a la humanidad.
  
  Isaías, uno de los mayores profetas, anunció con asombrosa precisión: "He aquí que la virgen concebirá y dará a luz un hijo, y le pondrá por nombre Emmanuel" (Dios con nosotros). Esta profecía no solo anunciaba el nacimiento virginal, sino también la naturaleza divina del niño que había de nacer.
  
  El profeta Miqueas señaló el lugar exacto donde nacería el Salvador: "Pero tú, Belén Efrata, aunque eres pequeña entre las familias de Judá, de ti me saldrá el que será Señor en Israel". Esta profecía mostraba cómo Dios elegiría un lugar humilde para un acontecimiento tan grandioso.
  
  Daniel, por su parte, habló del tiempo en que esto ocurriría, proporcionando señales que permitirían reconocer la época del nacimiento del Mesías. Los salmos también describieron con detalle aspectos de su vida y misión, creando un retrato profético del Salvador prometido.
  
  Estas profecías eran como piezas de un gran mosaico que, al unirse, revelaban el plan divino de salvación. Cada profeta aportaba una parte de la imagen, y juntos pintaban el cuadro completo del Mesías que había de venir.`
    },
    {
      number: 17,
      title: "La Alianza",
      description: "La historia de la salvación está marcada por las alianzas que Dios estableció con su pueblo. Cada alianza era un paso más hacia el momento culminante.",
      prayer: `La historia de la salvación está marcada por las alianzas que Dios estableció con su pueblo. Cada una de estas alianzas era un paso más hacia el momento culminante: el nacimiento del Salvador. Desde la primera promesa hecha a Adán y Eva después de la caída, Dios nunca dejó de mostrar su fidelidad.
  
  Con Noé, Dios estableció una alianza universal, prometiendo no volver a destruir la tierra con un diluvio. El arco iris quedó como señal perpetua de esta promesa, recordándonos la fidelidad de Dios. Con Abraham, la alianza se hizo más personal: Dios prometió hacer de él el padre de una gran nación, a través de la cual vendría la bendición para todos los pueblos.
  
  A través de Moisés, Dios estableció una alianza con todo el pueblo de Israel, dándoles la Ley como guía y luz para su camino. Esta alianza preparaba el terreno para la venida del Mesías, quien establecería una nueva y eterna alianza.
  
  Los profetas hablaron de esta nueva alianza que Dios establecería, no ya escrita en tablas de piedra, sino en los corazones de los hombres. Esta alianza sería sellada no con la sangre de animales, sino con la presencia misma del Hijo de Dios entre nosotros.
  
  María y José, en su camino hacia Belén, representaban la fidelidad a esta alianza. A pesar de las dificultades y la incomprensión, mantuvieron su confianza en las promesas divinas.`
    },
    {
      number: 18,
      title: "La Preparación",
      description: "El tiempo de preparación para la llegada del Salvador fue anunciado por Juan el Bautista, quien preparaba el camino del Señor llamando a la conversión.",
      prayer: `El tiempo de preparación para la llegada del Salvador fue anunciado por Juan el Bautista, quien preparó el camino del Señor. Como la voz que clama en el desierto, Juan llamaba a la conversión y al cambio de vida, preparando los corazones para recibir al Mesías.
  
  Mientras tanto, en Nazaret, María y José se preparaban para el nacimiento del niño. El decreto del emperador Augusto, que ordenaba un censo en todo el imperio, los obligó a emprender el viaje hacia Belén. Este viaje, aparentemente un inconveniente, era en realidad parte del plan divino para cumplir la profecía sobre el lugar de nacimiento del Salvador.
  
  Al llegar a Belén, María y José buscaron posada, pero todas las puertas se cerraban ante ellos. La ciudad estaba llena de viajeros que habían llegado para el censo, y nadie tenía espacio para la Sagrada Familia. Las posadas estaban ocupadas, y los habitantes de Belén, absortos en sus propias preocupaciones, no pudieron ver que estaban rechazando al mismo Hijo de Dios.
  
  Esta búsqueda de posada nos recuerda nuestra propia preparación para recibir a Jesús. ¿Cuántas veces nuestro corazón está tan lleno de preocupaciones mundanas que no hay espacio para Él? ¿Cuántas veces estamos tan ocupados que no tenemos tiempo para lo verdaderamente importante?
  
  La preparación para la venida del Señor requiere un corazón dispuesto y abierto, capaz de reconocer su presencia en medio de las circunstancias ordinarias de la vida.`
    },
    {
      number: 19,
      title: "La Anunciación",
      description: "El momento crucial en la historia de la salvación llegó cuando el ángel Gabriel fue enviado a una joven virgen llamada María en Nazaret.",
      prayer: `El momento crucial en la historia de la salvación llegó cuando el ángel Gabriel fue enviado por Dios a una ciudad de Galilea llamada Nazaret. Allí vivía una joven virgen llamada María, prometida en matrimonio a José, de la casa de David.
  
  El ángel se presentó ante María con un saludo extraordinario: "Alégrate, llena de gracia, el Señor está contigo". Estas palabras marcaban el inicio de una nueva era en la historia de la humanidad. María, aunque turbada por el saludo, escuchó con atención el mensaje divino.
  
  Gabriel le anunció que concebiría y daría a luz un hijo, al que pondría por nombre Jesús. Este niño sería grande, sería llamado Hijo del Altísimo, y Dios le daría el trono de David su padre. Su reino no tendría fin.
  
  La respuesta de María revela su profunda humildad y fe. Aunque no entendía completamente cómo podría suceder esto, pues era virgen, su confianza en Dios era absoluta. El ángel le explicó que el Espíritu Santo vendría sobre ella y que el poder del Altísimo la cubriría con su sombra.
  
  El "sí" de María, su "hágase en mí según tu palabra", abrió la puerta para la encarnación del Verbo Divino. En ese momento, el Hijo de Dios comenzó su vida humana en el vientre de María, uniendo para siempre lo divino con lo humano.`
    },
    {
      number: 20,
      title: "La Estrella",
      description: "En el Oriente, unos sabios observaron una estrella extraordinaria que anunciaba el nacimiento del Rey de los judíos.",
      prayer: `En el Oriente, unos sabios observaron una estrella extraordinaria en el cielo. Esta señal celestial, profetizada siglos antes, anunciaba el nacimiento del Rey de los judíos. Los magos, versados en la sabiduría antigua y conocedores de las profecías, comprendieron su significado y se pusieron en camino.
  
  La estrella que vieron los guió en su largo viaje desde tierras lejanas. Su luz misteriosa era diferente a todas las demás, pues se movía de una manera especial, conduciéndolos hacia su destino. Estos sabios no dudaron en emprender un viaje largo y peligroso, llevando consigos regalos dignos de un rey: oro, incienso y mirra.
  
  Al llegar a Jerusalén, la estrella los llevó hasta Belén, donde se detuvo sobre el lugar donde estaba el niño. Su luz iluminó el humilde pesebre donde yacía el Rey de reyes, revelando la paradoja divina: el Creador del universo había elegido nacer en la más absoluta sencillez.
  
  Los magos, al ver al niño con María su madre, se postraron y lo adoraron. Sus regalos tenían un profundo significado: el oro reconocía su realeza, el incienso su divinidad, y la mirra prefiguraba su futura pasión y muerte por nuestra salvación.
  
  Esta estrella sigue brillando hoy para nosotros, invitándonos a buscar a Jesús con la misma determinación y fe que mostraron los magos. Su luz nos guía a través de las oscuridades de la vida hacia el encuentro con el Salvador.`
    },
    {
      number: 21,
      title: "La Humildad",
      description: "El misterio de la Navidad nos revela la asombrosa humildad de Dios, que eligió nacer en la más absoluta pobreza y sencillez.",
      prayer: `El misterio de la Navidad nos revela la asombrosa humildad de Dios. El Creador del universo, el Rey de reyes, eligió nacer en la más absoluta pobreza y sencillez. No buscó un palacio real ni las comodidades que cualquiera consideraría necesarias para un recién nacido.
  
  Jesús, siendo de condición divina, no consideró como algo a qué aferrarse el ser igual a Dios, sino que se despojó de sí mismo tomando condición de siervo. El que sostiene todo el universo con su poder se hizo tan pequeño que necesitaba ser sostenido en brazos de su madre.
  
  María y José aceptaron con humildad las circunstancias del nacimiento. Aunque descendientes de la casa real de David, vivieron en la sencillez y la pobreza. El pesebre donde acostaron al niño era un humilde comedero de animales, y sus primeras vestiduras fueron pobres pañales.
  
  Los primeros en recibir la noticia del nacimiento fueron los pastores, gente sencilla que velaba en los campos. Dios no escogió a los poderosos ni a los sabios según el mundo, sino a los humildes para ser los primeros testigos de este acontecimiento extraordinario.
  
  Esta elección de la humildad nos enseña que Dios no mira las apariencias exteriores sino el corazón. La verdadera grandeza no está en el poder ni en las riquezas, sino en la humildad que nos abre a la acción de Dios.`
    },
    {
      number: 22,
      title: "Belén",
      description: "Belén, pequeña ciudad de Judá, fue elegida por Dios para ser el lugar del nacimiento del Salvador, cumpliendo las antiguas profecías.",
      prayer: `Belén, pequeña ciudad de Judá, fue elegida por Dios para ser el lugar del nacimiento del Salvador. Su nombre, que significa "casa del pan", encerraba un profundo significado profético: allí nacería Jesús, el Pan de Vida que alimentaría espiritualmente a toda la humanidad.
  
  Esta ciudad, aunque pequeña entre las familias de Judá, tenía una rica historia en el plan de salvación. Allí había sido ungido David como rey de Israel, y de su linaje vendría el Mesías prometido. Los campos que rodeaban Belén, donde los pastores cuidaban sus rebaños, eran los mismos donde el joven David había pastoreado las ovejas de su padre.
  
  Cuando José y María llegaron a Belén, la ciudad estaba llena de viajeros que habían venido para el censo. Las posadas estaban ocupadas, y solo encontraron refugio en una cueva que servía de establo. En este humilde lugar, rodeado de animales, nació el Salvador del mundo.
  
  La elección de Belén nos muestra cómo Dios actúa de manera sorprendente, eligiendo lo pequeño y lo humilde para realizar sus grandes obras. La ciudad que parecía insignificante a los ojos del mundo se convirtió en el centro de la historia de la salvación.
  
  Los habitantes de Belén, ocupados en sus quehaceres diarios, no pudieron reconocer el gran acontecimiento que estaba ocurriendo en medio de ellos. Hoy, esta ciudad nos recuerda que debemos estar atentos para no dejar pasar las visitas de Dios en nuestra vida cotidiana.`
    },
    {
      number: 23,
      title: "La Espera",
      description: "Durante siglos, el pueblo de Israel esperó la venida del Mesías prometido, una espera sostenida por la fidelidad de Dios a sus promesas.",
      prayer: `Durante siglos, el pueblo de Israel esperó la venida del Mesías prometido. Esta espera, a veces en medio de grandes dificultades y pruebas, fue sostenida por la fidelidad de Dios a sus promesas y por la predicación de los profetas que mantenían viva la esperanza.
  
  En los días previos al nacimiento de Jesús, esta espera se hacía más intensa. María, en su avanzado embarazo, vivía estos momentos con especial recogimiento y preparación interior. José, por su parte, velaba por su esposa con amorosa solicitud, preparando todo lo necesario para el nacimiento del niño.
  
  Los pastores, en los campos de Belén, continuaban con su vigilancia nocturna, sin saber que serían los primeros en recibir la noticia del nacimiento del Salvador. Su espera, aunque inconsciente, representaba la vigilia de toda la humanidad que aguardaba la llegada del Redentor.
  
  En Oriente, los magos observaban los cielos, estudiando los signos que anunciaban el nacimiento del Rey de los judíos. Su espera estaba llena de atención y disponibilidad para emprender el viaje cuando apareciera la señal prometida.
  
  Esta espera milenaria nos enseña la importancia de la perseverancia en la fe y la confianza en las promesas divinas. Como aquellos que esperaron la primera venida de Cristo, nosotros también debemos vivir en actitud de espera vigilante.`
    },
    {
      number: 24,
      title: "La Noche Santa",
      description: "En esta noche santa, el cielo y la tierra se unen en la celebración del nacimiento del Salvador, cumpliendo las antiguas promesas.",
      prayer: `En esta noche santa, el cielo y la tierra se unen en la celebración del nacimiento del Salvador. Es la noche en que se cumple la antigua promesa, la noche en que Dios se hace presente en nuestra historia de una manera nueva y definitiva.
  
  María y José, después de su largo viaje, se encuentran en el humilde establo de Belén. En medio del silencio de la noche, María da a luz a su hijo primogénito, lo envuelve en pañales y lo recuesta en un pesebre. El Verbo eterno de Dios se hace carne y comienza a habitar entre nosotros.
  
  En los campos cercanos, los pastores velan su rebaño cuando de repente una luz celestial los envuelve. Un ángel les anuncia la buena nueva: "No temáis, pues os anuncio una gran alegría, que será para todo el pueblo: hoy os ha nacido, en la ciudad de David, un Salvador, que es el Cristo Señor".
  
  El cielo se llena de ángeles que alaban a Dios diciendo: "Gloria a Dios en las alturas y paz en la tierra a los hombres de buena voluntad". Este canto celestial marca el inicio de una nueva era en la historia de la humanidad.
  
  Los pastores, sin dudarlo, se dirigen a Belén para ver el acontecimiento que el Señor les ha manifestado. Encuentran a María, a José y al niño acostado en el pesebre, y al verlo, cuentan lo que les había sido anunciado acerca del niño.`
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
        {days.map((day, index) => (
          <motion.div
            key={day.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-[#1A2234] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 relative"
          >
            {/* Estrella decorativa superior */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#FFD700]/10 w-12 h-12 rotate-45">
              <Star className="w-full h-full" />
            </div>

            {/* Marco decorativo con motivos navideños */}
            <div className="absolute inset-0">
              {/* Esquinas superiores con destellos */}
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#FFD700]/20 rounded-full" />
                <div className="absolute top-8 left-8 w-1 h-1 bg-[#FFD700]/30 rounded-full" />
              </div>
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FFD700]/20 rounded-full" />
                <div className="absolute top-8 right-8 w-1 h-1 bg-[#FFD700]/30 rounded-full" />
              </div>

              {/* Borde decorativo superior e inferior */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />

              {/* Patrón de estrellas lateral */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 h-32 flex flex-col justify-between opacity-10">
                <Star className="w-3 h-3 text-[#FFD700]" />
                <Star className="w-2 h-2 text-[#FFD700]" />
                <Star className="w-3 h-3 text-[#FFD700]" />
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 h-32 flex flex-col justify-between opacity-10">
                <Star className="w-3 h-3 text-[#FFD700]" />
                <Star className="w-2 h-2 text-[#FFD700]" />
                <Star className="w-3 h-3 text-[#FFD700]" />
              </div>
            </div>

            {/* Efecto de resplandor en hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#FFD700]/5 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#FFD700]/5 blur-3xl" />
            </div>

            <div className="relative p-6 border-b border-[#FFD700]/10">
              <div className="mb-2">
                <h2 className="text-[#FFD700] text-2xl font-bold mb-1 flex items-center gap-2">
                  Día {day.number} - {day.title}
                  <Star className="w-4 h-4 text-[#FFD700]/30" />
                </h2>
                <span className="text-[#FFD700]/60 text-sm italic block">
                  ({getOrdinalDay(index)} día)
                </span>
              </div>
              <p className="text-[#B4C6EF]/80 text-sm mt-3">
                {day.description}
              </p>
            </div>

            <div className="relative p-6">
              <div className="prose prose-invert max-w-none">
                <div className="text-[#B4C6EF] whitespace-pre-line leading-relaxed">
                  {day.prayer}
                </div>
              </div>
            </div>

            {/* Decoración inferior */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 flex justify-center gap-1 opacity-10">
              <Star className="w-2 h-2 text-[#FFD700]" />
              <Star className="w-3 h-3 text-[#FFD700]" />
              <Star className="w-2 h-2 text-[#FFD700]" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DaysView;