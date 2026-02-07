import profilePhoto from "/assets/images/WhatsApp Image 2024-11-21 at 15.37.50.jpeg";

import { motion } from "framer-motion";

// ----------------- motion framer--------------
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const buttonVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
// ----------------- motion framer--------------

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="lg:flex place-items-center items-center">
        <div className="w-[600px] lg:w-1/2">
          <div className="flex justify-center lg:ml-[40px] md:items-center">
            <motion.img
              className="w-[500px] border border-stone-900 rounded-3xl"
              src={profilePhoto}
              alt="Joseph Peniel"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 lg:pl-7">
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl lg:text-5xl lg:mb-2 leading-[20px] tracking-[0.4px]">
              Joseph Peniel
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600  bg-clip-text text-xl  text-transparent text-center tracking-[0.4px]">
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className=" my-8 text-lg leading-relaxed tracking-tighter text-center lg:text-left tracking-[0.9px]">
              Hello! I’m Joseph Peniel, a dedicated Frontend Developer with
              experience building production-ready web applications using React,
              TypeScript, JavaScript, HTML, and modern CSS frameworks (Tailwind,
              SCSS). Skilled in component-driven architecture, state management
              (Zustand, UseContext), API integration, and form validation
              (Formik, Yup). Proficient in performance optimization, reusable UI
              systems, animations (GSAP, Framer Motion), accessibility best
              practices, and cross-browser compatibility. Focused on delivering
              scalable, user-friendly frontend solutions through effective
              collaboration and clean, maintainable code.
            </motion.p>
            <motion.a
              initial="intial"
              animate="animate"
              variants={buttonVariants(1)}
              href="/Joseph_Peniel - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Joseph_Peniel - Resume.pdf"
              className="bg-white text-center rounded py-3  w-[170px] h-[50px] text-md text-stone-800 mt-7">
              {" "}
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
