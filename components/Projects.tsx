
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-[#D2B48C]"></span>
          Featured Projects
          <span className="w-12 h-px bg-[#D2B48C]"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="group relative h-80 overflow-hidden rounded-2xl cursor-pointer beige-glow transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#8B7E66]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 text-white">
                <h3 className="text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-sm opacity-90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/20 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80">
                  View Repo/Demo <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
