// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const textVariants = { /* ... */ };
  const heroContentVariants = { /* ... */ };
  const scrollHintVariants = { /* ... */ };

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Background overlay with pattern */}
              <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
              
              {/* Optional background image */}
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
                backgroundImage: `url('./hero-bg.webp')`,
                backgroundBlendMode: 'overlay'
              }}></div>
              
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 z-5 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
      
              {/* Hero content */}
              <div className="container mx-auto px-6 z-20">
                <motion.div
                  className="text-center max-w-3xl mx-auto"
                  variants={heroContentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={textVariants} custom={0} className="mb-6">
                    <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 text-sm font-medium border border-white/20 mb-4">
                    AI / ML Engineer
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    variants={textVariants} 
                    custom={1}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                  >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Shivanshu</span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={textVariants} 
                    custom={2}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
                  >
                    AI Scholar | Machine Learning and Computer Vision Enthusiast.
                  </motion.p>
                  
                  <motion.div 
                    variants={textVariants} 
                    custom={3}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                  >
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                    >
                      <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 w-full sm:w-auto">
                        View My Work
                      </button>
                    </Link>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                    >
                      <button className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white/30 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto mt-3 sm:mt-0">
                        Get In Touch
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
      
              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
                variants={scrollHintVariants}
                initial="initial"
                animate="animate"
              >
                <div className="text-gray-200 text-sm font-light mb-2">Scroll Down</div>
                <div className="w-5 h-9 rounded-full border-2 border-gray-200 flex justify-center pt-1">
                  <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>
      
              {/* Floating shapes for visual interest */}
              <div className="hidden md:block">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                    style={{
                      width: Math.random() * 100 + 50 + 'px',
                      height: Math.random() * 100 + 50 + 'px',
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 0.4, 
                      scale: 1,
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                    }}
                    transition={{ 
                      duration: Math.random() * 5 + 15, 
                      repeat: Infinity, 
                      repeatType: 'reverse',
                      delay: i * 0.5
                    }}
                  />
                ))}
              </div>
    </section>
  );
};

export default Hero;
