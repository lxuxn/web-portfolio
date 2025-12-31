import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: "Luxe Fashion Store",
      type: "WooCommerce • E-Commerce",
      description: "High-end fashion retail platform with custom product configurator and inventory management.",
      tags: ["Custom Theme", "WooCommerce", "REST API"],
      gradient: "from-pink-500 via-rose-500 to-purple-500"
    },
    {
      name: "TechStart Conference",
      type: "Events • Ticketing",
      description: "Event management system with live streaming and automated attendee workflows.",
      tags: ["Custom Plugin", "Stripe", "WebRTC"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      name: "GreenLeaf Wellness",
      type: "Health • Membership",
      description: "Subscription wellness platform with personalized content and progress tracking.",
      tags: ["Membership", "User Portal", "ACF Pro"],
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      name: "Global Enterprises",
      type: "Corporate • Multisite",
      description: "Multisite network managing 30+ regional websites with multilingual support.",
      tags: ["Multisite", "WPML", "SSO"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      name: "LearnPro Academy",
      type: "Education • LMS",
      description: "Learning management system with course builder and certificate generation.",
      tags: ["LearnDash", "Custom Blocks", "Gamification"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    {
      name: "FoodHub Delivery",
      type: "Marketplace • On-Demand",
      description: "Food ordering platform with real-time tracking and driver management system.",
      tags: ["Custom Plugin", "Maps API", "Payment"],
      gradient: "from-red-500 via-orange-500 to-pink-500"
    }
  ];

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Recent Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          A glimpse into the WordPress solutions I've crafted for clients across different industries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative h-56 overflow-hidden bg-gray-800">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] group-hover:animate-pulse" />
                </div>

                <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:translate-y-[-8px] transition-transform duration-500">
                  <div className="flex items-center space-x-2 p-3 border-b border-white/20">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-2 bg-white/30 rounded w-3/4 animate-pulse" />
                    <div className="h-2 bg-white/20 rounded w-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                    <div className="h-2 bg-white/20 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-white/20 text-4xl font-mono group-hover:text-white/40 group-hover:rotate-12 transition-all duration-500">
                  {'</>'}
                </div>
              </div>

              <div className="p-6">
                <p className="text-blue-400 text-sm font-semibold mb-2">{project.type}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}