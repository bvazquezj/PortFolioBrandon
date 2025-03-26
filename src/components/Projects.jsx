import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import projects from '../data/projects';

const Projects = () => {
  const [viewProject, setViewProject] = useState(false);
  const [project, setProject] = useState(projects[0]);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleViewProject = (event, project) => {
    const { clientX, clientY } = event; // Captura la posición del clic
    setClickPosition({ x: clientX, y: clientY });
    setProject(project);
    setViewProject(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseProject = () => {
    setViewProject(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Mis proyectos
        </motion.h2>
        <div className="flex flex-wrap flex-row justify-center items-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex flex-col justify-around w-[30%] aspect-square bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 aspect-video object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 overflow-hidden">{project.description}</p>
                <motion.button
                  whileTap={{ scale: 0.50 }}
                  className="mt-4 bg-red-800 text-white px-4 py-2 rounded hover:bg-red-950 transition duration-300"
                  onClick={(e) => handleViewProject(e, project)}
                >
                  Ver proyecto
                </motion.button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {viewProject && <ProjectDetails project={project} closeProject={() => handleCloseProject()} clickPosition={clickPosition} />}
    </section>

  );
};

export default Projects;