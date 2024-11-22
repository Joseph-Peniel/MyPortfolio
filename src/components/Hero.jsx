import profilePhoto from "../assets/images/WhatsApp Image 2024-11-21 at 15.37.50.jpeg";

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
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
// ----------------- motion framer--------------

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        <div className="w-[600px] lg:w-1/2">
          <div className="flex justify-center lg:ml-[30px] md:items-center">
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
            className="flex flex-col items-center lg:items-start mt-10 lg:pl-9">
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl lg:mb-2">
              Joseph Peniel
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600  bg-clip-text text-3xl tracking-tight text-transparent text-center ">
              Frontend Developer & UI/UX Designer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter sm:text-left">
              Hello! I’m Joseph Peniel, a dedicated frontend developer with
              expertise in HTML, CSS, and JavaScript, along with practical
              experience in React.js. I specialize in creating responsive,
              user-friendly interfaces that enhance digital experiences. As an
              intern, I am continuously expanding my knowledge of modern web
              technologies, including SCSS and GSAP, while working on
              collaborative projects to transform creative designs into
              functional realities. My ambition is to contribute to meaningful
              projects and evolve into a proficient developer who seamlessly
              combines creativity and functionality. Let’s create something
              extraordinary together!
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
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
