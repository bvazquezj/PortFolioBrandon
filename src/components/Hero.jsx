import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";
// import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="inicio" className="h-screen bg-hero-pattern flex items-center justify-evenly bg-gray-100">
      <div className="max-w-[1440px]  w-full flex items-center justify-end m-20">
        <div className="w-3/4 flex flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-5xl font-extrabold mb-4"
          >
            Brandon Vázquez
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-600 text-base mb-4"
          >
            Estudiante de ultimo año de Ingeniería en Informática, <br></br>
            Desarrollador Ful-Stack | Ingeniero de Software.
          </motion.p>
          <motion.button
            to="proyectos"
            initial={{ opacity: 0, y: 0, delay: 0.7 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className=" bg-red-800 text-lg text-white w-32 px-5 py-3 rounded-3xl hover:bg-red-950 transition duration-300"
            onClick={() => { document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' }) }}
          >
            Proyectos
          </motion.button>
        </div>
        {/* <div className='min-w-96 aspect-square'>
          <Spline
            scene="https://prod.spline.design/C2Tr5gktAx0-YPW5/scene.splinecode"
          />
        </div> */}
        <div className='flex flex-col gap-5 items-center justify-center'>
          <a href="https://github.com/bvazquezj" target='_blank' className="rounded-3xl hover:text-red-800 hover:bg-black p-2 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/bvazquezj/" target='_blank' className="rounded-3xl hover:text-red-800 hover:bg-black p-2 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/bvazquezj" target='_blank' className="rounded-3xl hover:text-red-800 hover:bg-black p-2 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:bvazquezj@gmail.com" target='_blank' className="rounded-3xl hover:text-red-800 hover:bg-black p-2 transition duration-300">
            <MdOutlineAlternateEmail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
