import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="px-6 md:px-12 py-20 bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f]">
 <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  whileHover={{
    scale: 1.1,
    color: "#38bdf8", // Hover color
    textShadow: "0px 0px 8px rgba(56, 189, 248, 0.7)", // Text shadow on hover
  }} 
  className="md:text-5xl text-4xl font-extrabold text-white mb-6 mt-2 text-center tracking-wide"
>
  My Projects
</motion.h1>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90"
        >
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
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90"
        >
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
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90"
        >
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
        </motion.div>

        {/* Project 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90"
        >
          <img
            src="https://img.freepik.com/premium-psd/banner-advertising-sale-shirt-mockup_181945-1057.jpg"
            alt="Project 4"
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-white font-raleway mb-4 transition-all duration-300 ease-in-out">focusclothing.pk</h3>
          <p className="text-gray-300 font-roboto mb-4 transition-all duration-300 ease-in-out">
            This is an e-commerce website that sells a variety of shirts for all occasions, from casual wear to formal attire. The website offers an easy-to-use shopping experience with product categories, detailed descriptions, and multiple sizes for every shirt style.
          </p>
          <Link
            to={`/projectdetail/project3`}
            className="text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            View Project
          </Link>
        </motion.div>

        {/* Project 5 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#2c3644] to-[#1d252f] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:from-[#19222b] hover:to-[#151a22] hover:shadow-2xl hover:opacity-90"
        >
          <img
            src="https://s3.envato.com/files/486857792/Screen/00_777.__large_preview.jpg"
            alt="Project 5"
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-white font-raleway mb-4 transition-all duration-300 ease-in-out">most-bet.com.pk</h3>
          <p className="text-gray-300 font-roboto mb-4 transition-all duration-300 ease-in-out">
            most-bet.com.pk is an online betting platform offering a wide range of sports betting opportunities, from soccer to cricket and more. The website features live betting odds, event tracking, and easy-to-navigate sections for placing bets.
          </p>
          <Link
            to={`/projectdetail/project5`}
            className="text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            View Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
