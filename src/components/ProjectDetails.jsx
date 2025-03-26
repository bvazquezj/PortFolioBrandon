import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50"
        >
            <div className="py-4 relative flex flex-col justify-start items-center bg-white rounded-2xl shadow-2xl overflow-auto p-8 space-y-6 max-w-4xl w-full max-h-[90vh]">
                <button
                    className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none shadow-md"
                    onClick={closeProject}
                >
                    X
                </button>

                <div className="flex flex-col space-y-4 w-full p-4">
                    <div className="border-b-2 border-gray-300 pb-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{project?.title}</h2>
                        <p className="text-sm text-gray-600">{project?.description}</p>
                    </div>

                    <div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center border">
                                <div className="w-48 h-28 rounded-lg bg-gray-200 mr-4">
                                    <img src={project?.image} alt={project?.title} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Detalles del proyecto</h3>
                                    <p className="text-sm text-gray-600">{project?.empresa}</p>
                                    <p className="text-sm text-gray-600">{project?.fecha}</p>
                                </div>
                            </div>
                            <div className="flex space-x-8">
                                <div className='flex flex-col space-y-4 border-gray-300 border-r-2 pr-4'>
                                    <h3 className="text-lg font-semibold text-gray-800 border-l-4 border-red-900 pl-3">Tecnologias</h3>
                                    <ul className="w-full text-sm leading-6">
                                        {project?.tecnologias && (project?.tecnologias.length > 0)
                                            ? project?.tecnologias.split(',').map((tecnologia, index) => (

                                                <li key={index} className='flex text-right items-center space-x-3 rtl:space-x-reverse'>
                                                    <svg className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    <span>
                                                        {tecnologia}
                                                    </span>
                                                </li>
                                            )) : null}
                                    </ul>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <h3 className="text-lg font-semibold text-gray-800 border-l-4 border-blue-500 pl-3">Descripción</h3>
                                    <p className="text-pretty text-sm text-gray-600">{project?.longdesc}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 border-l-4 border-green-500 pl-3">Link</h3>
                                <Link to={project?.link} className="text-blue-500 hover:underline">
                                    Ver proyecto
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}/* <div className="text-center">
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
</div> */