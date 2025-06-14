import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosHome } from "react-icons/io";


const LandingPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-[url('/estate.webp')] bg-center bg-cover sm:h-screen h-[70vh] relative text-white sm:bg-cover sm:bg-center min-h-screen bg-gradient-to-br from-white to-blue-100 flex flex-col">
      <div className="absolute inset-1 bg-black opacity-10 z-[1] sm:opacity-10"></div>
       <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-[0]"></div>
       <div className="p-9 relative z-[2]">
      <motion.section
        className="flex flex-col items-center gap-6 justify-center text-center px-6 py-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ><IoIosHome size={60}  color='white'/>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-300">
          Find Your Dream Apartment
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-2  mt-10 max-w-2xl">
          Explore our mini real estate selector to choose your perfect tower, floor, and layout.
        </p>

        <motion.button
          onClick={() => navigate('/selector')} 
          className="px-6 py-3 bg-blue-600 mt-20 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.section>
      </div>
    </div>
  );
};

export default LandingPage;
