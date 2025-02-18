import { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <nav className="flex justify-between p-5 shadow-md transition-all duration-300">
        <h1 className="text-xl font-bold">Jeevan Srinivas Ketha</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded transition-all duration-300"
          aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <header className="text-center py-20 transition-all duration-300">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Hi, I'm Jeevan Srinivas Ketha 
        </motion.h2>
        <p className="mt-4 text-lg">Specialized in Python, HTML, CSS, JavaScript, and Cloud Technologies.</p>
      </header>

      <section className="p-10 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <ul>
            <li>Programming: Python, HTML, CSS, JavaScript</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Developer Tools: Git, GitHub, AWS (EC2, S3, RDS, IAM)</li>
          </ul>
        </motion.div>
      </section>

      <section className="p-10 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4">Experience</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ul>
            <li> SQE Intern at Prospect InfoSystem (oct,2024 - Present)</li>
          </ul>
        </motion.div>
      </section>

      <section className="p-10 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <ul>
            <li> Master Of Computer Application, ANDHRA LOYOLA COLLEGE, VIJAYWADA (2022-2024)</li>
            <li> BSC (COMPUTER SCIENCE) Sri Nagarjuna Degree College ,ONGOLE 2019 – 2022 | PERCENTAGE:75% </li>
            <li> 11&12 (BIEAP) Narayana Junior College ,ONGOLE 2017 – 2019 | PERCENTAGE:71%</li>
            <li> 10 (CBSE) Sai baba Central School ,ONGOLE 2016-2017 | PERCENTAGE:82%</li>
          </ul>
        </motion.div>
      </section>

      <section className="p-10 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-gray-100 dark:bg-gray-800 rounded shadow-lg transition-all duration-300"
          >
            <h4 className="text-xl font-bold">File-Sharing App</h4>
            <p className="mt-2">Optimized file-sharing using QR-based ports, reducing setup time by 40%.</p>
            <a
              href="https://github.com/JeevanKetha/File-Sharing-Using-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Project
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-gray-100 dark:bg-gray-800 rounded shadow-lg transition-all duration-300"
          >
            <h4 className="text-xl font-bold">College Management System</h4>
            <p className="mt-2">Built a system reducing manual work by 30%, increasing satisfaction by 25%.</p>
            <a
              href="https://github.com/JeevanKetha/College-Management-System-Using-Django"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Project
            </a>
          </motion.div>
        </div>
      </section>

      <section className="p-10 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <ul>
            <li>TCS ION Young Professional Career Edge</li>
            <li>Software Testing Fundamentals - Infosys Springboard</li>
            <li>Cloud Computing & Python Programming - NPTEL</li>
          </ul>
        </motion.div>
      </section>

      <footer className="text-center p-5 mt-10 border-t">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Contact:{" "}
          <a href="mailto:kethajeevan@gmail.com" className="text-blue-500">
            kethajeevan@gmail.com
          </a>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <a
            href="http://linkedin.com/in/ketha-jeevan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/JeevanKetha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            GitHub
          </a>
        </motion.p>
      </footer>
    </div>
  );
}
