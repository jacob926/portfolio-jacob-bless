import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { EXPERIENCES } from '../../data/experiences';

export const ExperienceSection = () => {
  const { lang, theme, t } = usePortfolio();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.experience.title}</h2>
        <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Mon parcours académique et mes réalisations
        </p>
      </div>

      {/* Ajustement de la marge gauche pour mobile (ml-2 au lieu de ml-4) */}
      <div className={`relative border-l-2 ml-2 sm:ml-6 md:ml-32 space-y-8 sm:space-y-12 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-8 group">
            {/* Puce lumineuse */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              isDark ? 'bg-slate-950 border-indigo-500 group-hover:bg-indigo-500' : 'bg-white border-indigo-600 group-hover:bg-indigo-600'
            }`} />

            {/* Période */}
            <div className="md:absolute md:-left-36 md:top-1 text-xs sm:text-sm font-mono text-indigo-500 font-semibold mb-2 md:mb-0 md:w-28 md:text-right">
              {exp.period}
            </div>

            {/* Carte */}
            <div className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 transition-all duration-200 ${
              isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-white shadow-sm'
            }`}>
              <h3 className="text-lg sm:text-xl font-bold">{exp.title[lang]}</h3>
              <p className="text-xs sm:text-sm text-indigo-500 font-medium mt-1 mb-3">{exp.institution}</p>
              <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{exp.desc[lang]}</p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-md font-mono ${
                    isDark ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};