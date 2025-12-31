import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [currentCode, setCurrentCode] = useState(0);

  const codeSnippets = [
    "<?php the_magic(); ?>",
    "add_action('innovation');",
    "wp_query('awesome');",
    "function create_magic()"
  ];

  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
    }, 2000);
    
    return () => clearInterval(codeInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center z-10">
        <div className="mb-8 inline-block">
          <div className="text-6xl mb-4 animate-bounce">💻</div>
          <div className="h-12 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentCode * 48}px)` }}
            >
              {codeSnippets.map((snippet, i) => (
                <div key={i} className="h-12 flex items-center justify-center">
                  <code className="text-green-400 font-mono text-xl">{snippet}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Hi, I'm Carl
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4">
          Crafting Digital Magic with WordPress
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-blue-400 mb-12">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-lg">5 Years • 100+ Projects • ∞ Creativity</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-lg hover:scale-105 transform transition"
          >
            <span className="flex items-center space-x-2">
              <span>Explore My Work</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition" />
            </span>
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-blue-500 rounded-full font-bold text-lg hover:bg-blue-500/10 transition">
            Let's Connect
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </div>
    </section>
  );
}