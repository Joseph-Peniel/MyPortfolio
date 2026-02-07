import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-2">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4">
          25, Aderibigbe , Ikate Surulere LG- 100281
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4">
          +234 80 7701 2338, +234 90 6396 0366
        </motion.p>
        <a
          href="#"
          className="border-b py-1 mb-6">
          {" "}
          lioneleagle6@gmail.com
        </a> 
      </div>
  <span className="text-sm text-center text-stone-700 block mt-16">
        All Right Reserved @Copyright © 2025. Peniel All rights reserved.
      </span>
   
    </div>
  );
};

export default Contact;
