import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  // Get the dynamic 'project' parameter from the URL
  const { project } = useParams();

  // You can fetch project details here based on the project name or ID
  const projectData = {
    project1: {
      title: 'Mohagni.com',
      description:
        'Mohagni is an e-commerce website designed specifically for ladies clothing. The platform offers a variety of stylish and trendy apparel, making it easy for women to shop online. The site features a smooth shopping experience with a cart and secure payment gateway',
      image:
        'https://mediamodifier.com/blog/wp-content/uploads/2019/08/3d-ecommerce-website-mockup-with-cart-and-shopping-bags-free-online-mockup-generator-psd-template.jpg',
      tools: 'React, Node.js, MongoDB,Tailwind CSS',
      demoLink: 'https://mohagni.com', // Replace with actual demo link
    },
    project2: {
      title: 'jobsalert.pk',
      description:
        '  This is a job portal website that connects employers with job seekers. The platform allows users to browse job listings, submit applications, and create profiles. Employers can post job vacancies, review resumes, and connect with candidates through the website. The site provides a user-friendly experience with advanced search filters, making it easy for job seekers to find opportunities and for companies to find the right talent.',
      image:
        'https://themewagon.com/wp-content/uploads/2020/05/jobboard-1.jpg',
      tools: 'React, Node.js, TypeScript,Tailwind CSS,Django,MongoDB',
      demoLink: 'https://jobsalert.pk', // Replace with actual demo link
    },
    project3: {
      title: 'Focusclothing.pk',
      description:
        'Focusclothing is an e-commerce website that sells a variety of shirts for all occasions, from casual wear to formal attire. The website offers an easy-to-use shopping experience with product categories, detailed descriptions, and multiple sizes for every shirt style.',
      image:
        'https://img.freepik.com/premium-psd/banner-advertising-sale-shirt-mockup_181945-1057.jpg',
      tools: 'Next Js, Node.js, TypeScript,Tailwind CSS',
      demoLink: 'https://focusclothing.pk/', // Replace with actual demo link
    },
    project4: {
      title: 'thestationerycompany.pk',
      description:
        'thestationerycompany is an e-commerce website for an art supply shop offering a wide range of art materials, including paints, brushes, and stationery for artists. The site features an easy-to-navigate product catalog, secure checkout, and multiple payment options.',
      image:
        'https://www.mockupworld.co/wp-content/uploads/2017/03/free-art-mockup-equipment-scene-generator-psd-3.jpg',
      tools: 'React, Node.js, TypeScript,Tailwind CSS',
      demoLink: 'https://www.thestationerycompany.pk/', // Replace with actual demo link
    },
    project5: {
      title: 'most-bet.com.pk',
      description:
        ' most-bet.com.pk is an online betting platform offering a wide range of sports betting opportunities, from soccer to cricket and more. The website features live betting odds, event tracking, and easy-to-navigate sections for placing bets. Users can also view match previews, statistics, and recent betting trends, ensuring a dynamic and engaging experience for sports enthusiasts.',
      image:
        'https://s3.envato.com/files/486857792/Screen/00_777.__large_preview.jpg',
      tools: 'React, Node.js, TypeScript,Tailwind CSS,WebSockets,MongoDB,SSL/TLS Encryption,Cryptocurrency Integration',
      demoLink: 'https://most-bet.com.pk', // Replace with actual demo link
    },
  };

  const currentProject = projectData[project];

  return (
    <>
    <div className='bg-gradient-to-b from-[#1f2029] via-[#2a2c39] to-[#11151f] h-full w-full'>
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-[#2c3644] to-[#1d252f] rounded-lg shadow-lg">
      {currentProject ? (
        <>
          <h1 className="text-4xl font-semibold text-white mb-6">{currentProject.title}</h1>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-300 font-roboto mb-4">{currentProject.description}</p>
          <p className="text-gray-500 font-roboto mb-6">
            <strong>Tools Used:</strong> {currentProject.tools}
          </p>
          
          {/* Live Demo Button */}
          <a
            href={currentProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-6 bg-green-500 text-white font-semibold text-lg rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Live Demo
          </a>
        </>
      ) : (
        <p className="text-gray-300">Project not found.</p>
      )}
    </div>
    </div>
    </>
  );
};

export default ProjectDetail;
