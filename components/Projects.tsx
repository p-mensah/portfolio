import React from 'react';
import { PROJECTS_DATA, CodeIcon, ExternalLinkIcon } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS_DATA.map((project) => (
          <div key={project.title} className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-slate-600 hover:shadow-2xl hover:shadow-sky-500/10">
            <div className="relative overflow-hidden h-48">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="font-bold text-white text-lg mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <CodeIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <ExternalLinkIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;