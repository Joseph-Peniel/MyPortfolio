import { motion } from "framer-motion";
import jobsProject from "/assets/images/Screenshot 2024-11-22 191536.png";

import ResistorImg from "/assets/images/Screenshot 2024-11-22 1915361.png";
import LoremSprint from "/assets/images/ux-LoremSprint.png";
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
        className="my-20 text-center text-4xl">
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
          <div key="index" className="mb-8 flex flex-wrap lg:justify-center">
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
        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            <a href="https://shopping-website-bex6oe2np-joseph-peniels-projects.vercel.app/">
              <img
                src={ShoppingWeb}
                width={250}
                height={250}
                alt="Project 1"
                className="w-full h-auto md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
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
        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            <a href="https://dashboard-a6bfduc90-joseph-peniels-projects.vercel.app/">
              <img
                src={BankDashboard}
                width={250}
                height={250}
                alt="Project 1"
                className="w-full h-auto md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
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
        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            {" "}
            <a href="https://dark-light-screen-akvq8gn4l-joseph-peniels-projects.vercel.app/">
              <img
                src={DarkLight}
                // width={250}
                // height={250}
                alt="Project "
                className="w-full h-auto md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
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

        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            <a href="https://job-ou4d3u4f9-joseph-peniels-projects.vercel.app/">
              <img
                src={jobsProject}
                width={250}
                // height={250}
                alt="Project"
                className="w-full h-auto md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
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

        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            <a href="#">
              <img
                src={LoremSprint}
                // width={250}
                // height={250}
                alt="Project"
                className="w-full h-[220px] md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
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



        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            <a href="https://resistor-calculator-p8ktrbtzj-joseph-peniels-projects.vercel.app/">
              <img
                src={ResistorImg}
                alt="Project 1"
                className="w-full h-auto md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
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
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-3xl  text-stone-400">
          UI/UX Design
        </motion.div>

        <div className="w-full mb-16 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
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

        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full h-auto lg:w-2/6">
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

        <div className="w-full mb-12 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6 ">
            <a href="#">
              <img
                src={NGO}
                // width={250}
                // height={250}
                alt="Project"
                className="w-full md:w-full md:aspect-square lg:h-[220px] lg:w-[800px] mb-6 h-[200px] rounded"
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
              engagement with the organization's mission. Ensured the design was
              adaptable across devices, emphasizing clarity and functionality
              for diverse audiences.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Figma
            </span>
          </motion.div>
        </div>

        {/* <div className="w-full mb-8 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            <img
              src={jobsProject}
              width={250}
              // height={250}
              alt="Project"
              className="w-full h-auto md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Jobs Website</h3>
            <p className="mb-4 text-stone-400">
              This is a description for Project 1. It highlights the main
              features and purpose of the project.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              ReactJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              TailwindCSS
            </span>
          </motion.div>
        </div>

        <div className="w-full mb-8 flex flex-wrap lg:px-[100px] lg:justify-between lg:ml-[67px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/6">
            <img
              src={ResistorImg}
              alt="Project 1"
              className="w-full h-auto md:w-full md:aspect-square lg:h-[200px] lg:w-[800px] mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl">Resistor Calculator</h3>
            <p className="mb-4 text-stone-400">
              This is a description for Project 1. It highlights the main
              features and purpose of the project.
            </p>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              JavaScript
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              CSS
            </span>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
