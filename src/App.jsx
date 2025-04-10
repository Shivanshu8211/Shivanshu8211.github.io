// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="font-sans text-gray-900 bg-white min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default App;
