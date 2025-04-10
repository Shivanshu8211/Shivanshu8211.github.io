// src/components/Footer.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto">
          {/* Top footer with info */}
          <div className="py-16 px-6 grid md:grid-cols-4 gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold mb-6">
                <span className="text-indigo-400">My.</span>
                <span className="text-gray-300">Portfolio</span>
              </div>
              <p className="text-gray-400 mb-6">
                Creating digital experiences that blend form and function.
              </p>
              <p className="text-gray-400">
                Based in Hyderabad, India
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Projects</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Experience</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Skills</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  shivanshu8211@gmail.com
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +91 (630) 788-8236
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-sm font-bold">G</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-sm font-bold">L</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-sm font-bold">T</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-sm font-bold">I</span>
                </motion.a>
              </div>
            </div>
          </div>
          
          {/* Bottom footer with copyright */}
          <div className="py-6 px-6 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {year} Shivanshu. All rights reserved.
              </p>
              
              <div className="mt-4 md:mt-0">
                <motion.button
                  className="inline-flex items-center text-indigo-400 hover:text-white transition-colors duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">Back to Top</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;