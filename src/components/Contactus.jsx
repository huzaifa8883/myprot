import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API or Firebase)
    console.log(formData);

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Show the success message
    setSubmitted(true);

    // Hide success message after a few seconds (optional)
    setTimeout(() => {
      setSubmitted(false);
    }, 5000); // Hide after 5 seconds
  };

  return (
    <div className="min-h-screen font-raleway bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f] text-white">
      {/* Header */}
      <header className="text-center py-8">
        <motion.h1
          className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="mt-4 text-lg opacity-80 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Have a question or want to work together? Feel free to connect via the options below. I look forward to hearing from you!
        </motion.p>
      </header>

      {/* Contact Information */}
      <main className="max-w-7xl mx-auto px-6">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {/* WhatsApp */}
            <motion.div
              className="bg-gradient-to-r from-[#3b3d4c] to-[#2a2c39] rounded-xl p-10 shadow-xl hover:scale-110 transform transition-all duration-300 hover:rotate-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-[#222437] flex items-center justify-center shadow-lg">
                <FaWhatsapp className="text-4xl text-green-400" />
                <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse"></div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-blue-400">WhatsApp</h3>
              <p className="opacity-80 text-lg mt-2">+923278363169</p>
              <a
                href="https://wa.me/923278363169"
                className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-400 transition"
              >
                Chat Now
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="bg-gradient-to-r from-[#3b3d4c] to-[#2a2c39] rounded-xl p-10 shadow-xl hover:scale-110 transform transition-all duration-300 hover:rotate-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-[#222437] flex items-center justify-center shadow-lg">
                <FaPhoneAlt className="text-4xl text-yellow-400" />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-pulse"></div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-blue-400">Phone</h3>
              <p className="opacity-80 text-lg mt-2">+923278363169</p>
              <a
                href="tel:+923278363169"
                className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 transition"
              >
                Call Now
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-gradient-to-r from-[#3b3d4c] to-[#2a2c39] rounded-xl p-10 shadow-xl hover:scale-110 transform transition-all duration-300 hover:rotate-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-[#222437] flex items-center justify-center shadow-lg">
                <FaEnvelope className="text-4xl text-red-400" />
                <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-pulse"></div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-blue-400">Email</h3>
              <p className="opacity-80 text-lg mt-2">qhuzaifa675@gmail.com</p>
              <a
                href="mailto:qhuzaifa675@gmail.com"
                className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-400 transition"
              >
                Send Email
              </a>
            </motion.div>
          </div>
        </section>

        {/* Request Form */}
        <section className="">
          <motion.h2
            className="text-3xl font-semibold text-blue-400 text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Request Form
          </motion.h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#2a2c39] p-8 rounded-xl shadow-xl">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-blue-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-[#222437] text-white rounded-lg border-2 border-transparent focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-blue-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-[#222437] text-white rounded-lg border-2 border-transparent focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-blue-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 bg-[#222437] text-white rounded-lg border-2 border-transparent focus:border-blue-400 focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
            >
              Submit Request
            </button>
          </form>

          {/* Success message */}
          {submitted && (
            <div className="mt-6 text-center text-lg font-semibold text-green-500">
              Request has been submitted
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default ContactUs;
