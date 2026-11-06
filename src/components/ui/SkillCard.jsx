import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const SkillCard = ({ skill }) => {
  const { theme, setSelectedTech } = usePortfolio();
  const isDark = theme === 'dark';

  const handleClick = () => {
    setSelectedTech(skill.id);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center gap-2 group cursor-pointer ${
        isDark 
          ? 'border-slate-700/40 bg-slate-900/50 hover:bg-indigo-600/20 hover:border-indigo-500 text-slate-100' 
          : 'border-slate-200 bg-white shadow-sm hover:bg-indigo-50 hover:border-indigo-400 text-slate-800'
      }`}
    >
      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
        <span className="font-bold text-xs">{skill.name.substring(0, 3)}</span>
      </div>
      <span className="text-sm font-semibold">{skill.name}</span>
    </button>
  );
};