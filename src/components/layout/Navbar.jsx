import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const Navbar = () => {
  const { theme, toggleTheme, lang, toggleLang } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md px-6 py-4 transition-colors duration-200 ${
      isDark ? 'border-slate-800/80 bg-slate-950/80 text-slate-100' : 'border-slate-200 bg-white/80 text-slate-900'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-bold text-lg tracking-wider text-indigo-600 dark:text-indigo-400">PORTFOLIO</span>
        
        {/* Navigation Bureau */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-500 transition-colors">À propos</a>
          <a href="#skills" className="hover:text-indigo-500 transition-colors">Compétences</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projets</a>
          <a href="#experience" className="hover:text-indigo-500 transition-colors">Parcours</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
        </nav>

        {/* Boutons actions et Hamburger mobile */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLang} 
            className={`px-3 py-1 text-xs font-bold rounded-lg border transition-colors ${
              isDark ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-100' : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
          >
            {lang.toUpperCase()}
          </button>
          <button 
            onClick={toggleTheme} 
            className={`p-2 text-xs rounded-lg border transition-colors ${
              isDark ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-100' : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Bouton Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg border transition-colors ${
              isDark ? 'border-slate-700 bg-slate-900 text-slate-100' : 'border-slate-300 bg-slate-100 text-slate-800'
            }`}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      {isOpen && (
        <nav className={`md:hidden absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 shadow-xl transition-colors ${
          isDark ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-base font-medium hover:text-indigo-500">À propos</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-base font-medium hover:text-indigo-500">Compétences</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-base font-medium hover:text-indigo-500">Projets</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-base font-medium hover:text-indigo-500">Parcours</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-base font-medium hover:text-indigo-500">Contact</a>
        </nav>
      )}
    </header>
  );
};