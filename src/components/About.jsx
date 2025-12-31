import React from 'react';

export default function About() {
  const services = [
    {
      title: "Custom Development",
      desc: "Bespoke themes and plugins built from scratch to match your exact vision",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "WooCommerce Pro",
      desc: "Advanced e-commerce solutions with custom checkout flows and payment integrations",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Performance Wizard",
      desc: "Lightning-fast sites with optimized code, caching strategies, and CDN integration",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "API Integration",
      desc: "Seamless connections with third-party services, CRMs, and headless architectures",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Site Architecture",
      desc: "Scalable multisite networks and enterprise-level WordPress infrastructure",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Problem Solver",
      desc: "Debug complex issues, optimize existing sites, and rescue troubled projects",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="work" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What I Do Best
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I specialize in building blazing-fast, custom WordPress solutions that look incredible 
            and perform flawlessly. From e-commerce platforms to complex multisite networks, 
            I turn challenging requirements into elegant code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}