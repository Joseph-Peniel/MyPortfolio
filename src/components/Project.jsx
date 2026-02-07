import { motion } from "framer-motion";
import jobsProject from "/assets/images/Screenshot 2024-11-22 191536.png";

import iphoneApp from "../../public/assets/images/IphoneApp.png";

import ResistorImg from "/assets/images/Screenshot 2024-11-22 1915361.png";
import LoremSprint from "/assets/images/ux-LoremSprint.png";

import MonsterApp from "/assets/images/monster-CAR-APP.jpg";

import workSession from "/assets/images/work-session.jpg";
import NGO from "/assets/images/ngo.jpg";
import DarkLight from "/assets/images/darkWhite.png";
import BankDashboard from "/assets/images/dashboard.png";
import ShoppingWeb from "/assets/images/shopping-web.png";
import Lorem from "./Carousel/Lorem";
import Craftsvillage from "./Carousel/Craftsvillage";

const Project = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center text-4xl">
        Projects
      </motion.h2>
      <div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-3xl  text-stone-400">
          Frontend
        </motion.div>
        {/* {Projects.map((project, index) => (
          <div key="index" className="mb-8 lg:flex items-center lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span className="mr-2 rounded bg-stone-900 p2 text-sm font-medium text-stone-300" key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))} */}
      </div>

      <div>
        <div className="w-full mb-12 lg:flex items-center justify-start  lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="https://closebuy3.vercel.app/">
              <img
                src="/closebuy.jpg"
                // width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover h-full lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">CloseBuy</h3>
            <p className="mb-4 text-stone-400">
              Built a full-featured e-commerce platform (Closebuy) with product
              discovery, detailed product views, cart and checkout flows,
              dynamic quantity management, and real-time subtotal and pricing
              calculations. Implemented robust global state management using
              Zustand to manage cart items, selected products, quantities,
              discounts, persistence across pages and reloads, and synchronized
              UI updates. Developed reusable, accessible UI components (product
              cards, carousels, file uploads, modals, quantity controls) with
              smooth interactions using Framer Motion for a seamless user
              experience.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              ReactJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Typscript
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              TailwindCSS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Framer Motion
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              2024-present
            </span>
          </motion.div>
        </div>
        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="https://apple-app-clone-khaki.vercel.app/">
              <img
                src={iphoneApp}
                // width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">
              Interactive 3D iPhone 15 Pro
            </h3>
            <p className="mb-4 text-stone-400">
              This project demonstrates an engaging user experience using React,
              React Three Fiber, and GSAP to create an interactive and dynamic
              showcase of the iPhone 15 Pro. Users can explore a 3D model of the
              iPhone, with customizable colors and detailed lighting effects.
              The Hero section adapts to different screen sizes, swapping
              between high-definition and mobile-friendly videos, while the
              call-to-action (CTA) buttons are animated with smooth GSAP
              transitions. The scene is enhanced with various spotlights and
              lightformers for realistic lighting, contributing to a visually
              captivating experience.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              ReactJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              TailwindCSS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              GSAP
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Threejs
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="https://work-sesson-gsap.vercel.app/">
              <img
                src={workSession}
                // width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">
              Work Section Using GSAP
            </h3>
            <p className="mb-4 text-stone-400">
              Interactive project showcasing our work through smooth scroll
              animations using GSAP and ScrollTrigger, featuring dynamic image
              transitions, pinning effects, and a {"Book a demo"} call-to-action
              for an engaging user experience.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              ReactJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              CSS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              GSAP
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="https://shopping-website-bex6oe2np-joseph-peniels-projects.vercel.app/">
              <img
                src={ShoppingWeb}
                width={250}
                height={250}
                alt="Project 1"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">
              E-Commerce Shopping Website
            </h3>
            <p className="mb-4 text-stone-400">
              A dynamic, fully functional e-commerce website built with a focus
              on intuitive user experience. Features include a responsive
              design, interactive product page, and a smooth, mobile-friendly
              hamburger menu for easy navigation. JavaScript was used to handle
              menu interactions, enhancing the overall shopping experience.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              JavaScript
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              CSS
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="https://dashboard-a6bfduc90-joseph-peniels-projects.vercel.app/">
              <img
                src={BankDashboard}
                width={250}
                height={250}
                alt="Project 1"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Banking DashBoard</h3>
            <p className="mb-4 text-stone-400">
              A responsive financial dashboard built with React, featuring a
              context-driven sidebar for intuitive navigation. The project
              includes modular components like cards, transactions, reports,
              budgets, savings, loans, and subscriptions, offering a
              comprehensive view of financial activities. Designed with clean
              architecture and a focus on state management using React Context
              and Reducer for toggling the sidebar.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              ReactJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              CSS
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            {" "}
            <a href="https://dark-light-screen-akvq8gn4l-joseph-peniels-projects.vercel.app/">
              <img
                src={DarkLight}
                // width={250}
                // height={250}
                alt="Project "
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Dark & Light Screen</h3>
            <p className="mb-4 text-stone-400">
              A responsive Navbar with seamless light and dark mode toggling,
              featuring dynamic logo and search bar updates, smooth transitions,
              and a clean navigation menu built using ReactJS, CSS, and
              PropTypes for type safety.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              HTML
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              JavaScript
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              CSS
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="https://job-ou4d3u4f9-joseph-peniels-projects.vercel.app/">
              <img
                src={jobsProject}
                width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Jobs Website</h3>
            <p className="mb-4 text-stone-400">
              A job management platform built with React, featuring a JSON API
              for data handling. It allows users to browse, add, edit, and
              delete job listings with seamless navigation using React Router.
              The project emphasizes efficient data fetching, dynamic UI
              updates, and responsive design.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              ReactJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              TailwindCSS
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="#">
              <img
                src={LoremSprint}
                // width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Lorem Sprint</h3>
            <p className="mb-4 text-stone-400">
              Conceptualized and designed a mobile app for Craft Village,
              inspired by personal experience working in the organization.
              Created intuitive user flows and visually engaging interfaces to
              connect artisans with potential customers and showcase their
              crafts effectively.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              ReactJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              TailwindCSS
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="">
            <a href="https://resistor-calculator-p8ktrbtzj-joseph-peniels-projects.vercel.app/">
              <img
                src={ResistorImg}
                alt="Project 1"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Resistor Calculator</h3>
            <p className="mb-4 text-stone-400">
              A dynamic resistor calculator built using HTML, CSS, and
              JavaScript, allowing users to select up to 5 color bands and
              calculate resistance values with precision, including tolerance
              for enhanced accuracy and educational insights.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              JavaScript
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              CSS
            </span>
          </motion.div>
        </div>
      </div>

      {/* _____________ui/ux_________________________ */}
      <div>
        <div className="">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="mt-16 mb-10 text-center text-3xl  text-stone-400 lg:ml-14">
            UI/UX Design
          </motion.div>
        </div>
        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-20 lg:mb-6 rounded">
            <Lorem />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">E-Learning Website</h3>
            <p className="mb-4 text-stone-400">
              I designed and developed an e-learning website where students can
              seamlessly search for and study a wide range of technology and art
              courses. The platform features an intuitive user interface crafted
              using Figma, ensuring an engaging and user-friendly learning
              experience.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Figma
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className=" ">
            <a href="#">
              <img
                src={NGO}
                // width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">BlueSpace</h3>
            <p className="mb-4 text-stone-400">
              Designed a fully responsive website for a non-profit NGO, focusing
              on accessibility and user-friendly navigation to enhance
              engagement with the {"organization's"} mission. Ensured the design
              was adaptable across devices, emphasizing clarity and
              functionality for diverse audiences.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Figma
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-20 lg:mb-6 rounded">
            <Craftsvillage />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">
              Craftsvillage Mobile App
            </h3>
            <p className="mb-4 text-stone-400">
              This is a description for Project 1. It highlights the main
              features and purpose of the project.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Figma
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-12 lg:flex items-center lg:px-[100px] lg:justify-between lg:ml-[25px] lg:gap-14">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className=" ">
            <a href="">
              <img
                src={MonsterApp}
                // width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square object-cover lg:h-[300px] lg:w-[500px] mb-6 rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Monster App Design</h3>
            <p className="mb-4 text-stone-400">
              A sleek car app designed in Figma that allows clients to explore
              and purchase cars seamlessly. Features an interactive color switch
              test, enabling users to preview and customize car colors in-app
              for a personalized shopping experience.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Figma
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
