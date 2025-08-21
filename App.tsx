import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } 
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#010b1e] via-[#04183d] to-[#010614] text-slate-300 font-sans leading-relaxed">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
            <div className="py-6 space-y-10 md:space-y-12">
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;