import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";
// import Spline from '@splinetool/react-spline';

function handleDownloadcv() {
  window.open('https://drive.usercontent.google.com/u/0/uc?id=1J5jkjEdDZTXXaMAv6qig1UT7T9EumE5d&export=download',
    '_blank');
}

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
            Estudiante de ultimo semestre de Ingeniería en Informática, <br></br>
            Desarrollador Ful-Stack | Ingeniero de Software.
          </motion.p>
          <div className='flex gap-5 items-center justify-center'>
            <motion.button
              onClick={handleDownloadcv}
              initial={{ opacity: 0, y: 0, delay: 0.7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center gap-1 bg-red-800 text-sm text-white px-4 py-2 rounded-3xl hover:bg-red-950 hover:text-white transition duration-300"
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Descargar CV
            </motion.button>
          </div>
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
