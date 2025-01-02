import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope,FaServer, FaLaptopCode, FaPencilRuler } from 'react-icons/fa';
import bunty from "../assets/kkkkk.png"
import {Link} from "react-router-dom"
import { motion } from 'framer-motion';
import myres from "../assets/myres.pdf"

const Home = () => {
 

  return (
    <>
<div className="h-full w-full bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f] overflow-hidden ">
  {/* Hero Section */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
      {/* Image Section */}
      <div className="relative w-full h-[680px] md:h-[670px] my-20 flex justify-center items-center">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex space-x-6 md:space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl md:text-4xl hover:text-blue-600 transition duration-300 transform hover:scale-125"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl md:text-4xl hover:text-blue-600 transition duration-300 transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl md:text-4xl hover:text-green-500 transition duration-300 transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="text-white text-3xl md:text-4xl hover:text-red-500 transition duration-300 transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
        </motion.div>
        <motion.img
          src={bunty}
          alt="Mirta Akins"
          className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">
        <motion.h1
          className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4 leading-tight hover:text-blue-600 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Hello! I’m <span className="text-blue-500">Muhammad Huzaifa</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-sans text-white mb-8 max-w-full md:max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
I specialize in crafting responsive websites and mobile apps using modern technologies like React, Next.js, and React Native. My focus is on delivering seamless user experiences, ensuring both functionality and performance across all devices.        </motion.p>
<motion.a
  href={myres} // Replace with the actual file path or URL
  className="h-16 w-56 text-white font-helveticaLight bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 text-center flex items-center justify-center mx-auto md:mx-0"
  download="Muhammad_Huzaifa_Resume.pdf" // Optional: sets the download filename
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  transition={{ delay: 2, duration: 0.5 }}
>
  Get Resume
</motion.a>

      </div>
    </section>

  {/* Services Section */}
  <section className=" py-20 bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f]">
      <div className="container mx-auto text-center">
      <motion.h1
  className="md:text-6xl text-4xl text-center text-white font-extrabold   mb-6 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, scale: 1.1 }}
  // transition={{ duration: 1 }}
  whileHover={{ scale: 1.2 }}
>
Services Offered
  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-30 blur-lg"></span>
  
  {/* Distressed Text Effect */}
  <span className="absolute inset-0 text-shadow-xl opacity-50 filter blur-sm contrast-150 saturate-200"></span>

  {/* Glitch Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-40 blur-md animate-glitch"></span>
</motion.h1>


        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Backend Service Card */}
          <motion.div
            className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="flex justify-center mb-4 text-4xl text-cyan-400">
              <FaServer />
            </div>
            <h3 className="text-xl font-semibold text-white font-raleway mb-4">Backend Development</h3>
            <p className="text-gray-300 font-roboto">Build scalable systems with modern technologies like Node.js, Express, and MongoDB.</p>
          </motion.div>

          {/* UI/UX Design Card */}
          <motion.div
            className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <div className="flex justify-center mb-4 text-4xl text-cyan-400">
              <FaPencilRuler />
            </div>
            <h3 className="text-xl font-semibold text-white font-raleway mb-4">UI/UX Design</h3>
            <p className="text-gray-300 font-roboto">Craft intuitive and accessible interfaces for web and mobile platforms.</p>
          </motion.div>

          {/* Frontend Service Card */}
          <motion.div
            className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5 }}
          >
            <div className="flex justify-center mb-4 text-4xl text-cyan-400">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-white font-raleway mb-4">Frontend Development</h3>
            <p className="text-gray-300 font-roboto">Create responsive and interactive user experiences using React and Next.js.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  {/* Portfolio Section */}


  <section className="bg-[#1f2029] py-10">
  <div className="container mx-auto text-center">
  <motion.h1
  className="md:text-6xl text-4xl text-center text-white font-extrabold   mb-6 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, scale: 1.1 }}
  // transition={{ duration: 1 }}
  whileHover={{ scale: 1.2 }}
>
Recent Projects
  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-30 blur-lg"></span>
  
  {/* Distressed Text Effect */}
  <span className="absolute inset-0 text-shadow-xl opacity-50 filter blur-sm contrast-150 saturate-200"></span>

  {/* Glitch Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-40 blur-md animate-glitch"></span>
</motion.h1>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90">
          <img
            src="https://mediamodifier.com/blog/wp-content/uploads/2019/08/3d-ecommerce-website-mockup-with-cart-and-shopping-bags-free-online-mockup-generator-psd-template.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-white font-raleway mb-4 transition-all duration-300 ease-in-out">Mohagni.com</h3>
          <p className="text-gray-300 font-roboto mb-4 transition-all duration-300 ease-in-out">
            This is an e-commerce website designed specifically for ladies' clothing. The platform offers a variety of stylish and trendy apparel, making it easy for women to shop online. The site features a smooth shopping experience with a cart and secure payment gateway.
          </p>
          <Link
            to={`/projectdetail/project1`}
            className="text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            View Project
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90">
          <img
            src="https://themewagon.com/wp-content/uploads/2020/05/jobboard-1.jpg"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-white font-raleway mb-4 transition-all duration-300 ease-in-out">jobsalert.pk</h3>
          <p className="text-gray-300 font-roboto mb-4 transition-all duration-300 ease-in-out">
            This is a job portal website that connects employers with job seekers. The platform allows users to browse job listings, submit applications, and create profiles. Employers can post job vacancies, review resumes, and connect with candidates through the website.
          </p>
          <Link
            to={`/projectdetail/project2`}
            className="text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            View Project
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90">
          <img
            src="https://www.mockupworld.co/wp-content/uploads/2017/03/free-art-mockup-equipment-scene-generator-psd-3.jpg"
            alt="Project 3"
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-white font-raleway mb-4 transition-all duration-300 ease-in-out">thestationerycompany.pk</h3>
          <p className="text-gray-300 font-roboto mb-4 transition-all duration-300 ease-in-out">
            This is an e-commerce website for an art supply shop offering a wide range of art materials, including paints, brushes, and stationery for artists. The site features an easy-to-navigate product catalog, secure checkout, and multiple payment options.
          </p>
          <Link
            to={`/projectdetail/project4`}
            className="text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            View Project
          </Link>
        </div>

        {/* Project 4 */}
       
      </div>
      </div>
</section>

  {/* Footer Section */}
 
</div>



  </>
  );
}

export default Home;
