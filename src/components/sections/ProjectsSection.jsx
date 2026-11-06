import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';

export const ProjectsSection = () => {
  const { t, selectedTech, setSelectedTech } = usePortfolio();
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedTech
    ? PROJECTS.filter(p => p.techs.includes(selectedTech))
    : PROJECTS;

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{t.projects.title}</h2>
          {selectedTech && (
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.projects.filterTechLabel} <span className="text-indigo-400 font-mono font-bold">{selectedTech}</span>
            </p>
          )}
        </div>

        {selectedTech && (
          <button
            onClick={() => setSelectedTech(null)}
            className="self-start text-xs px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 transition-colors cursor-pointer"
          >
            ✕ {t.projects.resetFilter}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} onSelect={setActiveModalProject} />
        ))}
      </div>

      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </section>
  );
};