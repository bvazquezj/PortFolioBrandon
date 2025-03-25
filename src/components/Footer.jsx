
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 md:mb-0 text-center md:text-left"
        >
        <p className="text-sm">&copy; 2025 Mi portafolio.</p>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-2">
          <Link
          to="inicio"
          className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
          Inicio
          </Link>
          <Link
          to="acerca de"
          className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
          Acerca de
          </Link>
          <Link
          to="proyectos"
          className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
          Proyectos
          </Link>
          <Link
          to="contacto"
          className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
          Contacto
          </Link>
        </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex space-x-4"
        >
        <a
          href="https://github.com/bvazquezj"
          className="text-gray-400 hover:text-white transition duration-300"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/bvazquezj/"
          className="text-gray-400 hover:text-white transition duration-300"
          target='_blank'
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/bvazquezj"
          className="text-gray-400 hover:text-white transition duration-300"
          target='_blank'
        >
          <FaTwitter size={24} />
        </a>
        </motion.div>
      </div>
      </div>
    </footer>
    );
};

export default Footer;