import { motion } from "framer-motion";
import React from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.606-2.665-.304-5.467-1.335-5.467-5.933 0-1.31.468-2.382 1.236-3.222-.123-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.138 3.003.403 2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.872.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.48 5.921.43.372.814 1.102.814 2.222v3.293c0 .322.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.983 3.5C3.34 3.5 2 4.82 2 6.43c0 1.56 1.27 2.83 2.983 2.83 1.714 0 2.982-1.27 2.982-2.83 0-1.61-1.267-2.93-2.982-2.93zM2.4 21.5h5.163v-12h-5.163v12zM8.497 9.098h4.825v1.62h.068c.672-1.2 2.315-2.463 4.763-2.463 5.09 0 6.028 3.35 6.028 7.7v8.04h-5.157v-7.07c0-1.69-.03-3.86-2.355-3.86-2.36 0-2.72 1.84-2.72 3.74v7.19h-5.162v-12z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48c-.9.54-1.9.94-2.96 1.16A4.52 4.52 0 0016.63 2c-2.5 0-4.5 2.03-4.5 4.53 0 .36.04.7.12 1.04-3.75-.2-7.08-1.98-9.3-4.71a4.48 4.48 0 00-.6 2.28c0 1.57.8 2.95 2.02 3.76a4.5 4.5 0 01-2.04-.57v.06c0 2.2 1.55 4.03 3.61 4.45-.38.1-.78.15-1.2.15-.29 0-.58-.03-.85-.07.58 1.82 2.26 3.15 4.25 3.19A9 9 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.9 12.85-12.87 0-.2 0-.4-.02-.6A9.28 9.28 0 0023 3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-blue-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Interested in collaborating? Feel free to reach out!
        </motion.p>

        {/* Resume Download Button */}
        <motion.a
          href="/resume.pdf" // <- place resume in public/resume.pdf
          download
          className="inline-block px-6 py-3 mb-6 bg-green-600 text-white rounded-full hover:bg-green-700 transition mr-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Download Resume
        </motion.a>

        <motion.a
          href="mailto:you@example.com"
          className="inline-block px-6 py-3 mb-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Send an Email
        </motion.a>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
