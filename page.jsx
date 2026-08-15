import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

export default function FilmsynPortfolio() {
  const projects = [
    {
      title: "Commercial Campaign",
      category: "Direction & Post-Production",
      description: "Cinematic narrative with vintage optics and meticulous compositing",
      link: "https://www.behance.net/salmaelfakir2",
      gradient: "from-amber-900 to-slate-900"
    },
    {
      title: "Motion Graphics Suite",
      category: "Motion Design & AI Workflows",
      description: "Advanced ComfyUI workflows with layered sound design integration",
      link: "https://www.behance.net/youssefnaamani",
      gradient: "from-slate-800 to-blue-900"
    },
    {
      title: "Brand Identity Films",
      category: "Full Post-Production",
      description: "Premium aesthetic audiovisual identity for brand campaigns",
      link: "https://vimeo.com/user77136150",
      gradient: "from-slate-900 to-slate-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-widest">FILMSYN</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#work" className="hover:text-amber-400 transition-colors duration-300">WORK</a>
            <a href="#about" className="hover:text-amber-400 transition-colors duration-300">ABOUT</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Showreel */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Tagline */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
              Immersive <span className="text-amber-400">Cinematic</span> Narratives
            </h1>
            <p className="text-slate-400 text-lg tracking-wide max-w-2xl mx-auto">
              Crafted audiovisual experiences designed to set your brand apart
            </p>
          </div>

          {/* Vimeo Showreel */}
          <div className="mb-20">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-slate-800 group">
              <iframe
                src="https://vimeo.com/showcase/9903145/embed"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                title="FILMSYN Showreel"
              />
            </div>
            <p className="text-center text-slate-400 text-sm mt-6 tracking-wide">Watch Our Latest Work</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light tracking-widest mb-12 text-amber-400">ABOUT</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Director */}
            <div className="space-y-4">
              <h3 className="text-xl font-light tracking-wide text-amber-300">Visual Artist & Director</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Crafting immersive, cinematic narratives designed to set your brand apart. Formal training in dramatic arts provides refined, professional talent direction.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Technical workflow blends vintage optics on modern sensors with meticulous multi-layer compositing, guaranteeing a premium, distinctive aesthetic.
              </p>
            </div>

            {/* Designer */}
            <div className="space-y-4">
              <h3 className="text-xl font-light tracking-wide text-amber-300">Audiovisual & Graphic Designer</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Specialized in post-production, motion graphics, and open-source AI workflows (ComfyUI). Expertise in layered sound design ensures captivating audiovisual identity.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Delivers highly polished commercial campaigns with meticulous attention to every detail, from diegetic sound design to final color grading.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Direction', 'Cinematography', 'Color Grading', 'Motion Graphics', 'Sound Design', 'Compositing', 'AI Workflows', 'Brand Identity'].map((skill) => (
              <div 
                key={skill}
                className="p-4 bg-slate-800/50 rounded border border-slate-700 hover:border-amber-400/50 transition-colors duration-300"
              >
                <p className="text-center text-sm tracking-wide">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light tracking-widest mb-16 text-amber-400">FEATURED WORK</h2>
          
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group cursor-pointer"
              >
                {/* Project Card */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-amber-400/50 transition-all duration-500">
                  <div className={`bg-gradient-to-br ${project.gradient} h-48 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-8">
                    <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">{project.category}</p>
                    <h3 className="text-2xl font-light mb-3">{project.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 text-sm tracking-wide hover:gap-3 transition-all duration-300"
                    >
                      VIEW PROJECT
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-widest mb-8 text-amber-400">GET IN TOUCH</h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            Ready to bring your vision to life? Let's create something remarkable together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:filmsyn8@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-slate-950 font-medium tracking-wide rounded transition-colors duration-300"
            >
              <Mail size={20} />
              Send Email
            </a>
            
            <a
              href="https://www.behance.net/salmaelfakir2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400 text-slate-50 font-medium tracking-wide rounded transition-all duration-300"
            >
              Behance
              <ExternalLink size={16} />
            </a>

            <a
              href="https://vimeo.com/user77136150"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400 text-slate-50 font-medium tracking-wide rounded transition-all duration-300"
            >
              Vimeo
              <ExternalLink size={16} />
            </a>
          </div>

          <p className="text-slate-500 text-sm tracking-wide">filmsyn8@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-xs tracking-widest">
          <p>© 2024 FILMSYN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
