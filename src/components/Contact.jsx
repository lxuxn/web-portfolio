import React from 'react';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Epic
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Got a project in mind? Whether it's a startup MVP or enterprise solution, 
          I'm ready to bring your WordPress vision to life.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: <Mail />, label: "Email", href: "mailto:hello@example.com" },
            { icon: <Github />, label: "GitHub", href: "#" },
            { icon: <Linkedin />, label: "LinkedIn", href: "#" }
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 transition group"
            >
              <span className="text-blue-400 group-hover:scale-110 transition">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <button className="group px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-xl hover:scale-105 transform transition shadow-lg hover:shadow-blue-500/50">
          <span className="flex items-center space-x-2">
            <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
            <span>Start a Project</span>
          </span>
        </button>
      </div>
    </section>
  );
}