import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center">
        <motion.img
          src="https://placehold.co/300x300?text=Your+Photo"
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I am a passionate developer experienced in building web & mobile
            applications. Skilled in Java, Spring Boot, React, Tailwind, and
            cloud technologies.
          </p>
          <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
            <li>React </li>
            <li>Spring Boot</li>
            <li>Microservices</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
