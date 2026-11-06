import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const ProjectCard = ({ project, onSelect }) => {
  const { lang, theme, t } = usePortfolio();
  const isDark = theme === 'dark';

  return (
    <div className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
      isDark 
        ? 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-100' 
        : 'border-slate-200 bg-white shadow-sm hover:shadow-md text-slate-900'
    }`}>
      <div>
        <span className="text-xs font-mono text-indigo-500 uppercase tracking-wider">{project.category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{project.title[lang]}</h3>
        <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc[lang]}</p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map(tech => (
            <span key={tech} className={`text-xs px-2.5 py-1 rounded-md font-mono ${
              isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}>
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={() => onSelect(project)}
          className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          {t.projects.viewDetails}
        </button>
      </div>
    </div>
  );
};