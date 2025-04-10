// src/components/About.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const educationData = [
  {
    id: 1,
    degree: "Bechlore of Technology",
    institution: "IIT Hyderabad",
    duration: "2021 - 2025",
    description: "Specialized in Artificial Intelligence and Machine Learning. Worked on Neural Networks for Computer Vision applications.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education (12ᵗʰ)",
    institution: "Kendriya Vidyalaya RRC Fatehgarh",
    duration: "2018 - 2020",
    description: "Computer Science and PCM track.",
  },
  {
    id: 3,
    degree: "Secondary Education (10ᵗʰ)",
    institution: "Kendriya Vidyalaya RRC Fatehgarh",
    duration: "2016 - 2018",
    description: "Science and Mathematics track.",
  },
];

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      console.log("About section in view, starting animation..."); // Optional: Add logging
      controls.start('visible');
    } else {
      console.log("About section not in view."); // Optional: Add logging
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }, // Adjusted stagger/delay slightly
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Slightly increased y for more noticeable effect
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }, // Simplified transition, parent stagger handles delay
    },
  };

  // Variant specific for the timeline line itself
  const timelineLineVariant = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { delay: 0.5, duration: 1.5 } // Delay slightly after container appears
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden"> {/* Added overflow-hidden just in case */}
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* --- Top Section --- */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-6"
          >
            About <span className="text-indigo-600">Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-indigo-600 mx-auto mb-16"
          ></motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24"> {/* Added mb-24 for spacing */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-100 rounded-xl transform rotate-6 z-0"></div>
                <img
                  src="/logo-pic.jpg" // Make sure this image path is correct in your public folder
                  alt="Shivanshu"
                  className="w-full h-auto rounded-xl relative z-10 shadow-xl"
                />
                <motion.div // Also animate the badge if desired
                  variants={itemVariants}
                  className="absolute -right-10 -bottom-10 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm text-center p-2 z-20 shadow-lg"> {/* Adjusted text size/padding */}
                  IIT Graduate
                </motion.div>
              </div>
            </motion.div>

            <div>
              {/* These children correctly inherit animation via parent's staggerChildren */}
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-4 text-gray-800"
              >
                {/* Hello, I'm Shivanshu, a Full-Stack Developer based in India */}
                Hello! I'm Shivanshu, a final-year AI Scholar from India
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-6 leading-relaxed"
              >
                I specialize in building fully functional AI Softwares and problem solving.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-6 leading-relaxed"
              >
                My passion lies in solving complex problems with my deep understanding of AI concepts and Python programming. 
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {/* ... name, email, location, availability ... */}
                <div><h4 className="font-bold text-gray-800">Name:</h4><p className="text-gray-600">Shivanshu</p></div>
                <div><h4 className="font-bold text-gray-800">Email:</h4><p className="text-gray-600">shivanshu8211@gmail.com</p></div>
                <div><h4 className="font-bold text-gray-800">Location:</h4><p className="text-gray-600">Uttar Pradesh, India</p></div>
                <div><h4 className="font-bold text-gray-800">Availability:</h4><p className="text-gray-600">Open to opportunities</p></div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </div>

          {/* --- Education Section --- */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mt-24 mb-16"
          >
            Education <span className="text-indigo-600">Timeline</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line - Animate independently or as part of stagger */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 origin-top" // Added origin-top
              variants={timelineLineVariant} // Use its own variant if animating independently of stagger
              initial="hidden" // Explicit initial/animate if not using parent stagger for this
              animate={controls}
            // Or variants={itemVariants} if you want it staggered like other items
            ></motion.div>

            {/* Education items */}
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative z-10 flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'justify-start' : 'justify-end' // Adjusted justify-* for clarity
                  }`}
                // Use itemVariants, inherit trigger from parent container
                variants={itemVariants}
              // REMOVED: initial={{ opacity: 0, y: 50 }}
              // REMOVED: animate={controls}
              // REMOVED: transition={{ delay: 0.8 + index * 0.3, duration: 0.8 }}
              >
                {/* Timeline Dot - can be inside or outside the animated div */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 z-20 shadow-md ${index % 2 === 0 ? '-ml-0' : '-ml-0'}`}></div> {/* Centered dot */}


                {/* Content Box */}
                <div className={`w-5/12 px-4 py-6 bg-gray-50 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-[calc(50%+1.5rem)]' : 'mr-[calc(50%+1.5rem)]'}`}> {/* Position relative to center line */}
                  <h4 className="text-xl font-bold text-indigo-600 mb-1">{item.degree}</h4>
                  <h5 className="text-lg font-medium text-gray-800 mb-1">{item.institution}</h5>
                  <p className="text-gray-500 text-sm mb-2">{item.duration}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>


              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;