import { motion } from "framer-motion";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center 
                 bg-animated-gradient dark:bg-gray-900 transition-colors text-white"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        James Adedini
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mt-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Software Engineer | Full Stack Developer | Problem Solver | Tech
        Enthusiast
      </motion.p>
      <motion.a
        href="#portfolio"
        className="mt-10 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 shadow-lg transition"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
