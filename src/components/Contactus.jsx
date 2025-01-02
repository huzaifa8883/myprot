import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="min-h-screen font-raleway bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f] text-white">
      {/* Header */}
      <header className="text-center py-12">
        <motion.h1
          className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="mt-4 text-lg opacity-80 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I'm here to help! Reach out to me through any of the following channels.
        </motion.p>
      </header>

      {/* Contact Information */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* WhatsApp */}
            <motion.div
              className="bg-gradient-to-r from-[#3b3d4c] to-[#2a2c39] rounded-lg p-8 shadow-lg hover:scale-110 transform transition-all duration-300 hover:rotate-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-[#222437] flex items-center justify-center shadow-md">
                <FaWhatsapp className="text-4xl text-green-400" />
                <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse"></div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-blue-400">WhatsApp</h3>
              <p className="opacity-80 text-lg mt-2">+923278363169</p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="bg-gradient-to-r from-[#3b3d4c] to-[#2a2c39] rounded-lg p-8 shadow-lg hover:scale-110 transform transition-all duration-300 hover:rotate-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-[#222437] flex items-center justify-center shadow-md">
                <FaPhoneAlt className="text-4xl text-yellow-400" />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-pulse"></div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-blue-400">Phone</h3>
              <p className="opacity-80 text-lg mt-2">+923278363169</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-gradient-to-r from-[#3b3d4c] to-[#2a2c39] rounded-lg p-8 shadow-lg hover:scale-110 transform transition-all duration-300 hover:rotate-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-[#222437] flex items-center justify-center shadow-md">
                <FaEnvelope className="text-4xl text-red-400" />
                <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-pulse"></div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-blue-400">Email</h3>
              <p className="opacity-80 text-lg mt-2">qhuzaifa675@gmail.com</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center opacity-80 border-t border-gradient-to-r from-blue-400 via-purple-600 to-blue-400">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">Your Name</span>.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
