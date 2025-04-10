// src/components/Experience.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experienceData = [
  {
    id: 1,
    position: "AI-ML Intern",
    company: " Lastmile Robotics Pvt. Ltd.",
    duration: " May 2024– July 2024",
    // description: "Leading a team of 5 developers to build enterprise-scale applications. Architected microservices infrastructure, reduced deployment time by 40%, and implemented CI/CD pipelines.",
    responsibilities: [
      " Developed and deployed object detection, depth estimation, lane, and speed breaker detection from scratch using OpenCV and TensorFlow Lite on Raspberry Pi-4 for real-time obstacle avoidance and navigation.",
      "Achieved up to 8x increase in FPS by applying Quantization, Multithreading, TensorFlow Lite, and utilizing Google  Coral EdgeTPU to transform low-computation hardware into a robust platform for real-time deep learning tasks.",
      "Calibrated wide-angle cameras to eliminate fisheye distortion and merged inputs from multiple cameras for a 180° field of view, enabling precise, zone-based obstacle detection and decision-making, critical for autonomous operation in dynamic environments.",
      "Collaborated with managers to resolve the technical issues and to find a optimal solution of them."
    ]
  },
  {
    id: 2,
    position: "Research Intern",
    company: "TiHAN IIT Hyderabad",
    duration: "Jan 2024– June 2024",
    // description: "Developed responsive web applications with focus on performance optimization and accessibility. Collaborated with UX designers to implement pixel-perfect interfaces.",
    responsibilities: [
      "Awarded prestigious Entrepreneur in Residence (EIR) Fellowship at TiHAN-IITH, IIT Hyderabad, securing funding for advancements in autonomous navigation technology, endorsed by India’s Ministry of Science and Technology.",
      " Designed a real-time traffic signal detection system for harsh weather, leveraging AWS GPU instances and fine-tuned YOLO-v9 using Ultralytics.",
      " Developed preprocessing pipelines and deployed solutions for robust scene understanding in complex real-world conditions.",
    ]
  },
];

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true }); // Slightly adjusted threshold maybe

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    // Optional: If you want it to reset when scrolling out (remove triggerOnce)
    // else {
    //   controls.start('hidden');
    // }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variant for the timeline line
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
        height: '100%',
        transition: { duration: 1, ease: "easeOut", delay: 0.3 } // Adjust delay/duration as needed
    }
  };


  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* These elements correctly use itemVariants and will be staggered */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-6"
          >
            Work <span className="text-indigo-600">Experience</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-indigo-600 mx-auto mb-16"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-16"
          >
            My professional journey includes working with innovative companies on challenging projects.
          </motion.p>

          {/* This div now acts as a container for the timeline itself */}
          {/* Applying itemVariants here means the *entire* timeline fades/slides in as one block */}
          {/* If you want each item staggered individually, apply itemVariants to the inner motion.div in the map */}
          <motion.div
             className="relative pl-8"
             variants={itemVariants} // Apply itemVariants here if you want the whole timeline block to animate in together
             // Or remove variants here and apply inside the map below for individual item stagger
          >
            {/* Vertical timeline line - now controlled by variants */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-200" // Use top-0 bottom-0 for full height
              variants={lineVariants}
              initial="hidden"
              animate={controls}
            ></motion.div>

            {/* Experience items */}
            {experienceData.map((item) => (
              <motion.div
                key={item.id}
                className="relative mb-16 last:mb-0"
                // Apply itemVariants HERE for individual item staggering
                variants={itemVariants}
                // Remove the conflicting initial/animate/transition props below
                // initial={{ opacity: 0, x: -50 }} // REMOVED
                // animate={controls} // REMOVED (handled by parent stagger)
                // transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }} // REMOVED (handled by parent stagger)
              >
                {/* Timeline dot - Let it appear with the card */}
                {/* You could add a small scale animation here if desired, triggered similarly */}
                <motion.div
                  className="absolute left-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-lg"
                  // Optional: Add a simple scale animation variant
                  // variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.1 } } }} // Example
                ></motion.div>

                {/* Content */}
                {/* Added overflow-hidden to the card container in case content slightly overflows during transform */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-6 overflow-hidden group">
                    {/* Optional: Add group-hover effect for hover:translate-y-1 */}
                   <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                        {item.duration}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{item.position}</h3>
                        <h4 className="text-lg font-medium text-indigo-600 mb-4">{item.company}</h4>
                        <p className="text-gray-600 mb-4">{item.description}</p>

                        <h5 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h5>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {item.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                        ))}
                        </ul>
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Download button container also uses itemVariants */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=18uHst5egryXTTy4U0o_yhIIkOM7A5mkO&usp=sharing&export=download" // Replace with actual resume link
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
              download = "Shivanshu's_resume.pdf" // Add download attribute if linking directly to a file
            >
              <span>Download Full Resume</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
