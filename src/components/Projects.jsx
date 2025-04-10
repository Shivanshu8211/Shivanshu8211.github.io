import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projectsData = [
  {
    id: 1,
    title: "Healthcare AI Assistant",
    category: "Retrieval-Augmented Generation",
    image: "/rag_img.webp",
    description: "A RAG system using Gemini LLM and embeddings, integrated with medical documents and deployed via Streamlit for real-time symptom-based disease diagnosis and question answering.",
    technologies: ["Streamlit", "Python", "LlamaIndex", "Gemini LLM"],
    link: "#",
  },
  {
    id: 2,
    title: "Anime Face Generator",
    category: "Generative Adversarial Network",
    image: "/gan_img.webp",
    description: "A GAN model in PyTorch generating anime faces from 3,400 images, with hyperparameter tuning and evaluation of output diversity and visual quality..",
    technologies: ["Python", "Generative AI", "PyTorch", "Google Colab", "Hyperparameter Tuning"],
    link: "#",
  },
  {
    id: 3,
    title: "Students' Media Consumption",
    category: "Statistics Project",
    image: "/movie_img.jpg",
    description: "Statistical analysis of college students' media habits using CLT, confidence intervals, and hypothesis testing, supported by visualizations and key insights.",
    technologies: ["PaperForm", "Pandas", "Data Visualization", "Statistical Analysis", "Latex"],
    link: "#",
  },
];

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
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

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-6"
          >
            My <span className="text-indigo-600">Projects</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-indigo-600 mx-auto mb-16"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-16"
          >
            Here are some of my featured projects that showcase my skills and expertise.
            Each project represents unique challenges and solutions.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden h-56">
                    <div className="absolute inset-0 bg-indigo-900 opacity-30 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <a
                        href={project.link}
                        className="bg-white hover:bg-indigo-50 text-indigo-600 font-medium px-6 py-2 rounded-full transition-all duration-300"
                      >
                        View Project
                      </a>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-indigo-600 text-sm font-medium px-3 py-1 rounded-full z-20">
                      {project.category}
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>

                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <a
              href="#"
              className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
