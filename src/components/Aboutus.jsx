import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f] text-white font-sans">
      {/* Header */}
      <header className="text-center py-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text drop-shadow-lg"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg opacity-80 font-raleway max-w-md mx-auto"
        >
          Showcasing my journey as a Web Developer
        </motion.p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        {/* About Me */}
        <section className="mb-16">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold mb-6 text-center border-b-4 border-purple-600 inline-block mx-auto pb-2"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="opacity-90 leading-relaxed font-raleway text-center text-lg max-w-3xl mx-auto"
          >
            Hi, My name is Huzaifa, I am a passionate web developer with a knack for creating stunning and efficient websites. My expertise lies in React, Tailwind CSS, and modern web technologies. I love solving problems and building user-friendly interfaces that leave a lasting impression.
          </motion.p>
        </section>

        {/* Skills & Tools */}
        <section className="mb-16">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold mb-6 text-center border-b-4 border-blue-500 inline-block mx-auto pb-2"
          >
            Skills & Tools
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
          >
            {[
              'React.js',
              'JavaScript',
              'HTML5',
              'CSS3',
              'Tailwind CSS',
              'Firebase',
              'Git/GitHub',
              'Node.js',
              'TypeScript',
              'Next.js',
              'MongoDB',
              'PostgreSQL',
              'API Development',
              'REST/GraphQL',
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gradient-to-r from-[#3b3d4c] to-[#2a2c39] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform duration-300"
              >
                <span className="block text-xl font-medium text-blue-400">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center opacity-80 border-t border-[#6a6a8c]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} <span className="text-blue-400">Your Name</span>. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default Portfolio;
