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

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2022 - 2023</p>
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1}}
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
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}i className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2021 - 2022</p>
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1}} className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              Frontend Engineer
              <span className="text-sm text-stone-500">
                {" "}
                at WebSolutions Inc.
              </span>
            </h3>
            <p className="mb-4 text-stone-400">
              Designed and implemented intuitive UI components for various
              client projects while maintaining code quality and responsiveness.
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
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}} className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2020 - 2021</p>
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1}} className="w-full max-w-xl lg:w-3/4">
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
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}} className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2022 - 2023</p>
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1}} className="w-full max-w-xl lg:w-3/4">
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
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}  className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2021 - 2022</p>
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1}} className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              Frontend Engineer
              <span className="text-sm text-stone-500">
                {" "}
                at WebSolutions Inc.
              </span>
            </h3>
            <p className="mb-4 text-stone-400">
              Designed and implemented intuitive UI components for various
              client projects while maintaining code quality and responsiveness.
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
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}  className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2020 - 2021</p>
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1}} className="w-full max-w-xl lg:w-3/4">
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
      </div>
    </div>
  );
};

export default Experience;
