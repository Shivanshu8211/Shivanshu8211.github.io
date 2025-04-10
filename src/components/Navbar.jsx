// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

// Navigation items
const navItems = [
{ name: 'Home', to: 'hero', offset: 0 },
{ name: 'About', to: 'about', offset: -70 },
{ name: 'Projects', to: 'projects', offset: -70 },
{ name: 'Experience', to: 'experience', offset: -70 },
{ name: 'Skills', to: 'skills', offset: -70 },
{ name: 'Contact', to: 'contact', offset: -70 },
];

const handleResumeClick = () => {
  // Perform any JavaScript actions here (e.g., logging, analytics)
  window.open("https://drive.google.com/file/d/18uHst5egryXTTy4U0o_yhIIkOM7A5mkO/view?usp=sharing", "_blank"); // Programmatically open the link
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold"
                >
                  <span className={scrolled ? 'text-indigo-600' : 'text-white'}>
                    My
                  </span>
                  <span className={scrolled ? 'text-gray-800' : 'text-gray-200'}>
                  Portfolio
                  </span>
                </motion.div>
      
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        activeClass="active"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={item.offset}
                        duration={800}
                        className={`
                          cursor-pointer font-medium relative 
                          ${scrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-200 hover:text-white'}
                          transition-colors duration-300
                          after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                          after:bg-indigo-500 after:transition-all after:duration-300
                          hover:after:w-full
                        `}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className={`
                      px-5 py-2 rounded-full font-medium
                      ${scrolled 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'}
                      transition-all duration-300
                    `}
                    onClick={handleResumeClick}
                  >
                    Resume
                  </motion.button>
                </nav>
      
                {/* Mobile Menu Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="block md:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <div className={`w-6 flex flex-col items-end justify-center ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                    <span className={`block h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'} mb-1 ${menuOpen ? 'w-6 transform rotate-45 translate-y-1.5' : 'w-6'} transition-all duration-300`}></span>
                    <span className={`block h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : 'w-4 opacity-100'} transition-all duration-300`}></span>
                    <span className={`block h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'} mt-1 ${menuOpen ? 'w-6 transform -rotate-45 -translate-y-1.5' : 'w-5'} transition-all duration-300`}></span>
                  </div>
                </motion.button>
              </div>
      
              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white shadow-lg"
                  >
                    <div className="container mx-auto px-6 py-4">
                      <div className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.name}
                            activeClass="text-indigo-600"
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={item.offset}
                            duration={800}
                            className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 py-2"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 py-3 px-4 rounded-full font-medium mt-2">
                          Resume
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
    </header>
  );
};

export default Navbar;
