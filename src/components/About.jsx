import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import * as Bi from 'react-icons/bi';
import * as Si from 'react-icons/si';
import skill from '../data/skills';
import BranImage from '../images/BranImage.jpg';

const About = () => {
  
  return (
    <section id="acerca de" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Sobre mi
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img src={BranImage} alt="Profile" className="rounded-full mx-auto size-96" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6">
              Estudiante multidisciplinario de ultimo semestre de Ingeniería en Informática con sólida experiencia en proyectos académicos y personales. Especializado en desarrollo backend con tecnologías como Spring Boot y APIs RESTful, y frontend con ReactJS. Busco aplicar mis habilidades técnicas en un entorno profesional para seguir creciendo como desarrollador de software.
            </p>
            <h3 className="text-xl font-semibold mb-4">Mis habilidades:</h3>
            <div className="flex flex-wrap">
              {skill.map((skill, id) => {
                const IconComponent = skill.icon.includes('Fa') ? Icons[skill.icon] : skill.icon.includes('Bi') ? Bi[skill.icon] : Si[skill.icon];
                
                return (
                  <motion.div
                    key={`${skill.name}-${id}-${Math.random()}`} // Clave única para forzar la reanimación
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }} // Permite reactivar la animación en scroll
                    transition={{ duration: 0.3, delay: id * 0.2 }}
                    className={`${skill.color} flex text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                  >
                    {IconComponent && <IconComponent size={20} className="mr-2" />}
                    <span>{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;