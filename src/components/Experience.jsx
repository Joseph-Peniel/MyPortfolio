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
        <div>
          <div className="w-full mb-12 flex  lg:px-[100px] lg:justify-center lg:ml-[25px] gap-14">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-md text-center text-stone-400">
                2024-2025
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/4">
              <h2 className="mb-2 text-lg font-semibold text-slate-200">
                E-Commerce Website: Designed and developed a fully functional
              </h2>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300"></h3> Junior Frontend
                Developer — Closebuy (E-commerce Platform) Built a full-featured
                e-commerce platform (Closebuy) with product discovery, detailed
                product views, cart and checkout flows, dynamic quantity
                management, and real-time subtotal and pricing calculations.
                Implemented robust global state management using Zustand to
                manage cart items, selected products, quantities, discounts,
                persistence across pages and reloads, and synchronized UI
                updates. Developed reusable, accessible UI components (product
                cards, carousels, file uploads, modals, quantity controls) with
                smooth interactions using Framer Motion for a seamless user
                experience. Improved application stability and performance by
                resolving TypeScript issues, optimizing component re-renders,
                and enforcing clean, maintainable architecture suitable for
                production environments. Designed and developed a fully
                functional e-commerce website, integrating features like product
                listings, shopping carts, and responsive layouts to provide a
                seamless user experience. Movie App Development:
              </div>
            </motion.div>
          </div>

          <div className="w-full mb-12 flex  lg:px-[100px] lg:justify-center lg:ml-[25px] gap-14">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-md text-center text-stone-400">
                2023-2024
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/4">
              <h2 className="mb-2 text-lg font-semibold text-slate-200">
                3D Product Visualization Platform React Three Fiber
              </h2>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300"></h3>• Drei • GSAP •
                TypeScript Duration: 2023 Developed an interactive 3D product
                viewer enabling users to preview products with dynamic color and
                size variations. Integrated GSAP animations to create smooth
                transitions and a premium user experience. Optimized rendering
                performance and structured components for maintainability in a
                production environment.
              </div>
            </motion.div>
          </div>

          <div className="w-full mb-12 flex  lg:px-[100px] lg:justify-center lg:ml-[25px] gap-14">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-md text-center text-stone-400"></p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/4">
              <h2 className="mb-2 text-lg font-semibold text-slate-200">
                Booking & Service Management System React
              </h2>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300"></h3>Implemented
                booking, service tracking, and summary flows aligned with real
                business processes. Replaced third-party UI libraries with
                custom Tailwind/DaisyUI components while maintaining existing
                logic and design consistency. Built validated forms using Formik
                and Yup to ensure accurate data collection and improved user
                experience.
              </div>
            </motion.div>
          </div>

          <div className="w-full mb-12 flex  lg:px-[100px] lg:justify-center lg:ml-[25px] gap-14">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-md text-center text-stone-400"></p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/4">
              <h3 className="mb-2 text-lg font-semibold text-slate-200">
                UI/UX Design & Development:
              </h3>
              <p className="mb-4 text-stone-400">
                Designed intuitive user interfaces and developed responsive web
                applications, ensuring accessibility and optimal performance
                across devices.
              </p>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  E-Learning Website:
                </h3>{" "}
                Designed and developed a comprehensive e-learning platform,
                integrating responsive layouts and engaging animations.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Real Estate Website Design:{" "}
                </h3>
                Designed a real estate website, prioritizing clean layouts and
                user-friendly features like property listings, search filters,
                and virtual tours. Focused on delivering a sleek, professional
                look to meet industry standards while ensuring responsiveness.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Craft Village Mobile App:{" "}
                </h3>
                Conceptualized and designed a mobile app for Craft Village,
                inspired by personal experience working in the organization.
                Created intuitive user flows and visually engaging interfaces to
                connect artisans with potential customers and showcase their
                crafts effectively.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  NGO Website Design:
                </h3>
                Designed a fully responsive website for a non-profit NGO,
                focusing on accessibility and user-friendly navigation to
                enhance engagement with the {" organization's"} mission. Ensured
                the design was adaptable across devices, emphasizing clarity and
                functionality for diverse audiences.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  AXA Mansard Website Clone:{" "}
                </h3>
                Replicated the AXA Mansard website to strengthen frontend
                development skills and understand corporate website structures.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">Netflix Clone:</h3>
                Replicated the Netflix website as a personal project, focusing
                on UI/UX and dynamic data integration to refine frontend
                development skills.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">Netflix Clone:</h3>
                Replicated the Netflix website as a personal project, focusing
                on UI/UX and dynamic data integration to refine frontend
                development skills.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Styling & Frameworks:
                </h3>
                Mastered SCSS for modular, reusable stylesheets and Tailwind CSS
                for rapid, utility-first design. Focused on crafting engaging
                user experiences using Framer, and interactive animations with
                GSAP.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">Version Control:</h3>
                Leveraged Git and GitHub for efficient code management and
                collaboration.
              </div>

              <div className="mb-4 text-stone-400">
                <h3 className="font-medium text-stone-300">
                  Leveraged Git and GitHub for efficient Web Deployment:
                </h3>
                Deployed applications on platforms like Vercel, ensuring
                production-readiness and troubleshooting build issues.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
