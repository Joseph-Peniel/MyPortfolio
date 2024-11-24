import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Experience
      </motion.h2>
      <div>
        {/* {Experience.map((experience, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              {Experience.technology.map((tech, index) => (
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone 300" key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))} */}
        <div>
          {/* <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2022 - 2023</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                Software Developer
                <span className="text-sm text-stone-500"> at TechCorp</span>
              </h3>
              <p className="mb-4 text-stone-400">
                Worked on building scalable web applications, enhancing user
                interfaces, and improving performance across the company's core
                products.
              </p>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                ReactJS
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Node.js
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                TailwindCSS
              </span>
            </motion.div>
          </div>

          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              i
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2021 - 2022</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                Frontend Engineer
                <span className="text-sm text-stone-500">
                  {" "}
                  at WebSolutions Inc.
                </span>
              </h3>
              <p className="mb-4 text-stone-400">
                Designed and implemented intuitive UI components for various
                client projects while maintaining code quality and
                responsiveness.
              </p>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Angular
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                TypeScript
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                SCSS
              </span>
            </motion.div>
          </div>

          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2020 - 2021</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                UI/UX Designer
                <span className="text-sm text-stone-500">
                  {" "}
                  at Creative Studios
                </span>
              </h3>
              <p className="mb-4 text-stone-400">
                Focused on creating seamless user experiences, wireframes, and
                prototypes while collaborating with development teams to ensure
                design consistency.
              </p>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Figma
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Adobe XD
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                HTML/CSS
              </span>
            </motion.div>
          </div>
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2022 - 2023</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                Software Developer
                <span className="text-sm text-stone-500"> at TechCorp</span>
              </h3>
              <p className="mb-4 text-stone-400">
                Worked on building scalable web applications, enhancing user
                interfaces, and improving performance across the company's core
                products.
              </p>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                ReactJS
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Node.js
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                TailwindCSS
              </span>
            </motion.div>
          </div>

          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2021 - 2022</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                Frontend Engineer
                <span className="text-sm text-stone-500">
                  {" "}
                  at WebSolutions Inc.
                </span>
              </h3>
              <p className="mb-4 text-stone-400">
                Designed and implemented intuitive UI components for various
                client projects while maintaining code quality and
                responsiveness.
              </p>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Angular
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                TypeScript
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                SCSS
              </span>
            </motion.div>
          </div> */}

          {/* <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2020 - 2021</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                UI/UX Designer
                <span className="text-sm text-stone-500">
                  {" "}
                  at Creative Studios
                </span>
              </h3>
              <p className="mb-4 text-stone-400">
                Focused on creating seamless user experiences, wireframes, and
                prototypes while collaborating with development teams to ensure
                design consistency.
              </p>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Figma
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                Adobe XD
              </span>
              <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                HTML/CSS
              </span>
            </motion.div>
          </div> */}
        </div>
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2024</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h2 className="mb-2 text-lg font-semibold text-slate-200">
                ReactJS & JavaScript Projects
              </h2>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  E-Commerce Website: Designed and developed a fully functional
                </h3>{" "}
                Designed and developed a fully functional e-commerce website,
                integrating features like product listings, shopping carts, and
                responsive layouts to provide a seamless user experience. Movie
                App Development:
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Movie App Development:
                </h3>
                Built a dynamic movie app with functionality for fetching and
                displaying movie data from APIs, showcasing interactive features
                like search and filtering.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  AXA Mansard Website Clone:{" "}
                </h3>
                Replicated the AXA Mansard website to strengthen frontend
                development skills and understand corporate website structures.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">Netflix Clone:</h3>
                Replicated the Netflix website as a personal project, focusing
                on UI/UX and dynamic data integration to refine frontend
                development skills.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">Netflix Clone:</h3>
                Replicated the Netflix website as a personal project, focusing
                on UI/UX and dynamic data integration to refine frontend
                development skills.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Styling & Frameworks:
                </h3>
                Mastered SCSS for modular, reusable stylesheets and Tailwind CSS
                for rapid, utility-first design. Focused on crafting engaging
                user experiences using Framer, and interactive animations with
                GSAP.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">Version Control:</h3>
                Leveraged Git and GitHub for efficient code management and
                collaboration.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Leveraged Git and GitHub for efficient Web Deployment:
                </h3>
                Deployed applications on platforms like Vercel, ensuring
                production-readiness and troubleshooting build issues.
              </p>
            </motion.div>
          </div>

          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">2023</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 text-lg font-semibold text-slate-200">
                UI/UX Design & Development:
              </h3>
              <p className="mb-4 text-stone-400">
                Designed intuitive user interfaces and developed responsive web
                applications, ensuring accessibility and optimal performance
                across devices.
              </p>

              

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                E-Learning Website:
                </h3>{" "}
                Designed and developed a comprehensive e-learning platform,
                integrating responsive layouts and engaging animations.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Real Estate Website Design:{" "}
                </h3>
                Designed a real estate website, prioritizing clean layouts and
                user-friendly features like property listings, search filters,
                and virtual tours. Focused on delivering a sleek, professional
                look to meet industry standards while ensuring responsiveness.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Craft Village Mobile App:{" "}
                </h3>
                Conceptualized and designed a mobile app for Craft Village,
                inspired by personal experience working in the organization.
                Created intuitive user flows and visually engaging interfaces to
                connect artisans with potential customers and showcase their
                crafts effectively.
              </p>

              <p className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  NGO Website Design:
                </h3>
                Designed a fully responsive website for a non-profit NGO,
                focusing on accessibility and user-friendly navigation to
                enhance engagement with the organization's mission. Ensured the
                design was adaptable across devices, emphasizing clarity and
                functionality for diverse audiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
