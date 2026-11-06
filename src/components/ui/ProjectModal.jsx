import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const ProjectModal = ({ project, onClose }) => {
  const { lang } = usePortfolio();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
        >
          ✕
        </button>

        {/* Categorie & Titre */}
        <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-slate-100 mt-1 mb-4">
          {project.title[lang]}
        </h3>

        {/* Description détaillée */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.desc[lang]}
        </p>

        {/* Technologies utilisées */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Liens d'action */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-medium transition-colors flex items-center gap-2"
            >
              💻 Code Source (GitHub)
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors flex items-center gap-2"
            >
              🚀 Démo en direct
            </a>
          )}
        </div>
      </div>
    </div>
  );
};