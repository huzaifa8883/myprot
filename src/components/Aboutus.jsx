import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="h-full bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f] text-white font-sans">
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
          Showcasing my journey as a Full Stack Developer and Creative Problem Solver.
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
            className="opacity-90 leading-relaxed font-raleway text-center text-lg max-w-3xl mx-auto mb-4"
          >
            Hi, I’m Muhammad Huzaifa, a passionate Full Stack Developer with an insatiable curiosity for technology. My journey began with a fascination for coding, which has now blossomed into a career where I specialize in crafting intuitive and efficient web solutions. I thrive on transforming complex problems into elegant digital experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="opacity-90 leading-relaxed font-raleway text-center text-lg max-w-3xl mx-auto"
          >
            With expertise in modern technologies like React, Tailwind CSS, and Next.js, I am driven by a desire to build platforms that make a difference. Whether it’s developing robust backends or designing captivating frontends, my goal is to leave a meaningful impact in the tech world.
          </motion.p>
        </section>

        {/* Skills & Tools */}
        <section className="mb-16">
  <motion.h2
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-semibold mb-6 text-center border-b-4 border-gray-400 inline-block mx-auto pb-2 text-gray-200"
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
      'GraphQL',
  
    ].map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform duration-300"
      >
        <span className="block text-xl font-medium text-gray-300 hover:text-gray-100">
          {skill}
        </span>
      </motion.div>
    ))}
  </motion.div>
</section>

        {/* Hobbies & Interests */}
        <section className="">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold mb-6 text-center border-b-4 border-green-500 inline-block mx-auto pb-2"
          >
            Hobbies & Interests
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="opacity-90 leading-relaxed font-raleway text-center text-lg max-w-3xl mx-auto"
          >
            When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and enhancing my skills through continuous learning. I also love reading about AI advancements, experimenting with creative UI designs, and engaging with developer communities to share knowledge and ideas.
          </motion.p>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Portfolio;
