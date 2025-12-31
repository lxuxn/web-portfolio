import React from 'react';

export default function TechStack() {
  const technologies = [
    "WordPress", "PHP", "JavaScript", "React",
    "WooCommerce", "MySQL", "REST API", "Git",
    "HTML5", "CSS3", "jQuery", "Node.js",
    "Elementor", "ACF", "WPML", "Redis"
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Arsenal
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="group relative bg-gray-900 rounded-xl p-6 text-center border border-gray-800 hover:border-blue-500 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative z-10 text-lg font-semibold text-gray-300 group-hover:text-white transition">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}