"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "@/utils/animations";

// Daftar tools dan logo
const tools = [
  { name: "HTML", logo: "/tools/html.png" },
  { name: "CSS", logo: "/tools/css.png" },
  { name: "JavaScript", logo: "/tools/js.png" },
  { name: "React", logo: "/tools/react.png" },
  { name: "Unity", logo: "/tools/unity.png" },
  { name: "Firebase", logo: "/tools/firebase.png" },
  { name: "Tailwind", logo: "/tools/tailwind.png" },
  { name: "Laravel", logo: "/tools/laravel.png" },
  { name: "Flask", logo: "/tools/flask.png" },
  { name: "Python", logo: "/tools/python.jpg" },
  { name: "C++", logo: "/tools/c++.png" },
  { name: "C#", logo: "/tools/csharps.png" },
  { name: "Java", logo: "/tools/java.png" },
  { name: "MySQL", logo: "/tools/mysql.png" },
  { name: "Android", logo: "/tools/android.png" },
  { name: "Kotlin", logo: "/tools/kotlin.png" },
  { name: "Google Cloud", logo: "/tools/gcloud.png" },
  { name: "Figma", logo: "/tools/figma.png" },
  { name: "Adobe Photoshop", logo: "/tools/photoshop.png" },
  { name: "Adobe Illustrator", logo: "/tools/illustrator.png" },

  { name: "Bootstrap", logo: "/tools/bootstrap.png" },
  { name: "Postman", logo: "/tools/postman.webp" },
  { name: "PHP", logo: "/tools/php.png" },
  { name: "Github", logo: "/tools/github.png" },
];

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile */}
          <motion.div
            className="flex justify-center items-center mb-4"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/my3.jpeg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mb-4 w-55 h-55 object-cover ring-2 ring-primary"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Rezki Andika
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            As a passionate technology student at Politeknik Negeri Ujung
            Pandang, I am driven by a fascination for building complete digital
            experiences from concept to reality. My curiosity spans across
            Mobile and Web Development for creating platforms, UI/UX for
            crafting intuitive interfaces, and the integration of Machine
            Learning and Game Development principles to build engaging,
            intelligent products. I thrive in dynamic environments, leveraging
            my adaptability and quick learning ability to master new
            technologies. My goal is to channel this full-spectrum passion into
            creating innovative products that not only push technological
            boundaries but also deliver tangible value and positive impact.
          </motion.p>

          {/* Socials */}
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/dikaenwo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rezki-andika/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block w-full bg-gray-500 md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Tech Stack Title */}
          <motion.div
            className="mb-6 mt-12"
            {...fadeInUp}
            transition={{ delay: 0.55 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Tech Stack
            </h3>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 mb-10"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="flex flex-col items-center pb-4"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.02,
                }}
              >
                <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center p-2 shadow-sm">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm mt-1 text-gray-600 dark:text-gray-300 text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
