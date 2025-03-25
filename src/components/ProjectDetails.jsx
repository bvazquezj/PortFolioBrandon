import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired,
    closeProject: PropTypes.func.isRequired,
    clickPosition: PropTypes.object.isRequired
};

export default function ProjectDetails({ project, closeProject, clickPosition }) {

    return (
        <motion.section
            initial={{
                top: clickPosition.y,
                left: clickPosition.x,
                width: 0,
                height: 0,
                opacity: 0,
            }}
            animate={{
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                opacity: 1,
            }}
            exit={{
                top: clickPosition.y,
                left: clickPosition.x,
                width: 0,
                height: 0,
                opacity: 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
        >
            <div className="relative w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white rounded-xl shadow-xl overflow-hidden p-6 space-y-4">
                <button
                    className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 focus:outline-none"
                    onClick={closeProject}
                >
                    X
                </button>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">{project?.title}</h2>
                    <p className="text-sm text-gray-600">{project?.description}</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-700">Detalles del Proyecto:</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                        <li>
                            <strong>Tecnologías utilizadas:</strong>
                        </li>
                        <li>
                            <strong>Fecha de finalización:</strong>
                        </li>
                        <li>
                            <strong>Enlace:</strong>{" "}
                            <a
                                href={project?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Ver Proyecto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}