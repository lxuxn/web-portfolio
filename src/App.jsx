import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Background />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}